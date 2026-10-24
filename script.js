/* Builds the page from SITE and PROJECTS in projects.js.
   You shouldn't need to edit this file. */
(function () {
  "use strict";

  var site = typeof SITE !== "undefined" ? SITE : {};
  var projects = typeof PROJECTS !== "undefined" ? PROJECTS : [];

  var state = { query: "", status: "", tag: "" };

  function $(id) { return document.getElementById(id); }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function slug(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  // Only allow web links, email links, and relative paths.
  function safeUrl(url) {
    if (!url) return null;
    url = String(url).trim();
    if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return /^(https?:|mailto:)/i.test(url) ? url : null;
    return url;
  }

  function makeLink(label, url, external) {
    var href = safeUrl(url);
    if (!href) return null;
    var a = el("a", null, label || "Link");
    a.href = href;
    if (external !== false && /^https?:/i.test(href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  }

  /* ---- Site header and footer ---------------------------------------- */
  function renderSite() {
    if (site.title) {
      $("site-title").textContent = site.title;
      document.title = site.title;
    }
    if (site.tagline) {
      $("site-tagline").textContent = site.tagline;
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", site.tagline);
    } else {
      $("site-tagline").hidden = true;
    }

    var nav = $("site-links");
    (site.links || []).forEach(function (l) {
      var a = makeLink(l.label, l.url);
      if (a) nav.appendChild(a);
    });
    if (!nav.children.length) nav.hidden = true;

    var year = new Date().getFullYear();
    $("site-footer").textContent = (site.owner ? site.owner + ", " : "") + year;
  }

  /* ---- Filters -------------------------------------------------------- */
  function renderFilters() {
    var select = $("status");
    var statuses = [];
    var tags = [];

    projects.forEach(function (p) {
      if (p.status && statuses.indexOf(p.status) === -1) statuses.push(p.status);
      (p.tags || []).forEach(function (t) {
        if (tags.indexOf(t) === -1) tags.push(t);
      });
    });
    tags.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });

    select.appendChild(new Option("All statuses", ""));
    statuses.forEach(function (s) { select.appendChild(new Option(s, s)); });

    var chips = $("chips");
    tags.forEach(function (t) {
      var b = el("button", "chip", t);
      b.type = "button";
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        state.tag = state.tag === t ? "" : t;
        syncChips();
        render();
      });
      chips.appendChild(b);
    });
    if (!tags.length) chips.hidden = true;

    $("search").addEventListener("input", function (e) {
      state.query = e.target.value.trim().toLowerCase();
      render();
    });
    select.addEventListener("change", function (e) {
      state.status = e.target.value;
      render();
    });
    $("clear").addEventListener("click", function () {
      state = { query: "", status: "", tag: "" };
      $("search").value = "";
      select.value = "";
      syncChips();
      render();
    });
  }

  function syncChips() {
    var buttons = $("chips").querySelectorAll(".chip");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].textContent === state.tag ? "true" : "false");
    }
  }

  /* ---- Cards ---------------------------------------------------------- */
  function pad(n) { return String(n).length >= 3 ? String(n) : ("000" + n).slice(-3); }

  function buildCard(p, number) {
    var card = el("article", "card");

    var top = el("div", "card-top");
    top.appendChild(el("span", "ticket", "Ticket " + pad(number)));
    if (p.status) top.appendChild(el("span", "stamp " + slug(p.status), p.status));
    card.appendChild(top);

    if (p.image) {
      var src = safeUrl(p.image);
      if (src) {
        var img = el("img", "card-image");
        img.src = src;
        img.alt = p.imageAlt || "";
        img.loading = "lazy";
        img.addEventListener("error", function () { img.remove(); });
        card.appendChild(img);
      }
    }

    card.appendChild(el("h2", null, p.name || "Untitled project"));
    if (p.description) card.appendChild(el("p", null, p.description));

    if (p.tags && p.tags.length) {
      var ul = el("ul", "tags");
      p.tags.forEach(function (t) { ul.appendChild(el("li", null, t)); });
      card.appendChild(ul);
    }

    var foot = el("div", "card-foot");
    var made = p.madeWith === "claude" ? "Built with Claude" : p.madeWith === "solo" ? "Built solo" : "";
    if (made) foot.appendChild(el("span", "made", made));

    var linkBox = el("div", "card-links");
    (p.links || []).forEach(function (l) {
      var a = makeLink(l.label, l.url);
      if (a) linkBox.appendChild(a);
    });
    if (linkBox.children.length) foot.appendChild(linkBox);

    if (foot.children.length) card.appendChild(foot);
    return card;
  }

  function matches(p) {
    if (state.status && p.status !== state.status) return false;
    if (state.tag && (p.tags || []).indexOf(state.tag) === -1) return false;
    if (state.query) {
      var hay = [p.name, p.description, p.status].concat(p.tags || []).join(" ").toLowerCase();
      if (hay.indexOf(state.query) === -1) return false;
    }
    return true;
  }

  function render() {
    var grid = $("projects");
    grid.textContent = "";
    var shown = 0;

    projects.forEach(function (p, i) {
      if (!matches(p)) return;
      grid.appendChild(buildCard(p, projects.length - i));
      shown++;
    });

    $("empty").hidden = shown !== 0;
    $("count").textContent =
      shown === projects.length
        ? projects.length + (projects.length === 1 ? " project" : " projects")
        : "Showing " + shown + " of " + projects.length;
  }

  renderSite();
  renderFilters();
  render();
})();
