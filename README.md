<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Project Bench</title>
  <meta name="description" content="A collection of my projects.">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23f26b21'/%3E%3Ccircle cx='16' cy='9' r='3' fill='%231f3b35'/%3E%3Crect x='8' y='15' width='16' height='3' rx='1.5' fill='%231b1208'/%3E%3Crect x='8' y='21' width='10' height='3' rx='1.5' fill='%231b1208'/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a class="skip" href="#projects">Skip to projects</a>

  <header class="masthead">
    <h1 class="plate" id="site-title">Project Bench</h1>
    <p class="tagline" id="site-tagline"></p>
    <nav class="links" id="site-links" aria-label="Contact and profile links"></nav>
  </header>

  <main>
    <section class="controls" aria-label="Find a project">
      <div class="field">
        <label for="search">Search</label>
        <input id="search" type="search" placeholder="Name or keyword" autocomplete="off">
      </div>
      <div class="field">
        <label for="status">Status</label>
        <select id="status"></select>
      </div>
      <div class="chips" id="chips" role="group" aria-label="Filter by topic"></div>
    </section>

    <p class="count" id="count" aria-live="polite"></p>

    <section id="projects" class="grid" aria-label="Projects"></section>

    <div class="empty" id="empty" hidden>
      <p>No projects match those filters.</p>
      <button type="button" id="clear">Clear filters</button>
    </div>

    <noscript><p class="empty">This page needs JavaScript turned on to list the projects.</p></noscript>
  </main>

  <footer class="foot">
    <p id="site-footer"></p>
  </footer>

  <script src="projects.js"></script>
  <script src="script.js"></script>
</body>
</html>
