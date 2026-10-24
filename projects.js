/* ==========================================================================
   EDIT THIS FILE to change what the site says.
   You never need to touch index.html, style.css or script.js.
   ========================================================================== */

/* ---- Site settings ---------------------------------------------------- */
const SITE = {
  title: "Project Bench",                      // big label at the top of the page
  owner: "Spaced",                          // shown in the footer
  tagline: "Hardware hacks, repair-shop tools and games I'm building, some on my own and some with various agent's help.",
  links: [                                     // buttons under the tagline; delete any you don't want
    { label: "GitHub", url: "https://github.com/Spaced1127" },
    { label: "eBay store", url: "" },           // empty url = hidden
    { label: "Email", url: "mailto:consolefix.nc@gmail.com" }
  ]
};

/* ---- Projects ----------------------------------------------------------
   Newest first. Copy a block, paste it at the TOP of the list, edit it.
   Ticket numbers are added automatically (newest = highest number).

   name         Project name (required)
   description  One to three sentences (required)
   status       "Working", "In progress", "Planning" or "Paused"
                (anything else still works, it just gets a neutral stamp)
   madeWith     "claude" or "solo"  (shows "Built with Claude" / "Built solo")
   tags         Short topics. They become the filter buttons.
   links        Buttons on the card. Leave the list empty [] for none.
   image        Optional. Path to a picture, e.g. "images/my-project.jpg"
   imageAlt     Describe the picture for screen readers
   -------------------------------------------------------------------------- */
const PROJECTS = [
  /* ---- Copy this template to add a project -------------------------------
  {
    name: "My new project",
    description: "What it does and why I built it.",
    status: "In progress",
    madeWith: "solo",
    tags: ["Hardware"],
    links: [
      { label: "Source", url: "INSERT LINK HERE" }
    ]
  },
  ------------------------------------------------------------------------- */

  {
    name: "RepairTracker",
    description: "An open source web app for running a console/electronics repair shop: work-order tickets, customers and devices, intake and before/after photos, parts and costs, invoicing, and customer status updates by email and text.",
    status: "Working",
    madeWith: "Claude's Help",
    tags: ["Web app", "Repair shop", "TypeScript"],
    links: [
      { label: "Source", url: "https://github.com/Spaced1127/RepairTracker" }
    ]
  },
  {
    name: "Custom Switch firmware",
    description: "Design for an open-source Nintendo Switch custom firmware with theme and menu customization built in, a modular layout for community add-ons, and a focus on homebrew.",
    status: "Planning",
    madeWith: "claude",
    tags: ["Nintendo Switch", "C/C++", "Firmware"],
    links: []
  },
  {
    name: "Vanilla Klipper for the Kobra S1",
    description: "A step-by-step plan to run real Klipper on an Anycubic Kobra S1 while keeping the factory macros, ACE multicolor system, stock webcam and stock screen working.",
    status: "Planning",
    madeWith: "solo",
    tags: ["3D printing", "Firmware"],
    links: []
  },
  {
    name: "Rock sorting shop game",
    description: "A first-person shop sim in Unity: mine rocks, sort them by type, and sell them in your own store.",
    status: "In progress",
    madeWith: "claude",
    tags: ["Unity", "C#"],
    links: []
  },
  {
    name: "iRacing AI coach",
    description: "A local app that reads iRacing telemetry and gives lap-by-lap coaching from a language model running on my own PC.",
    status: "Working",
    madeWith: "claude",
    tags: ["Sim racing", "Python", "Local AI"],
    links: [
      { label: "Source", url: "https://github.com/Spaced1127/iRacing-Local-AI-Coach" }
    ]
  }
];
