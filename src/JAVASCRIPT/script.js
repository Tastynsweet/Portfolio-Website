const projectData = {
  //Games
  "defend": {
    title: "Defend the Depths",
    role: "Solo Developer &nbsp;·&nbsp; Unity / C# &nbsp;·&nbsp; Status: Release Candidate",
    video: 'https://www.youtube.com/embed/your-video-id',
    body: `
      <p>Defend the Depths is a 2.5D tower defense game where you hold the line against endless waves of eldritch sea creatures. The design centers on resource management and spatial decision-making — every placement matters, and the pressure compounds as waves scale in difficulty and enemy composition shifts.</p>
      <ul>
        <li><strong>Three Cannons:</strong> Players switch between three different cannon, each covering a specific area of the map.</li>
        <li><strong>Cycle-Based Arsenal:</strong> Players deploy a set of 5 projectiles at a time. Each unit is assigned a randomized projectile type upon generation, forcing tactical adaptation.</li>
        <li><strong>Active Reload (R):</strong> Once the 5 projectiles are exhausted, players must manually press 'R' to cycle in a fresh randomized batch.</li>
      </ul>

      <img src="./src/images/temp.PNG" class="modal-inline-img">
      <p class="img-caption">Figure 1: The UI feedback system for the randomized cannon queue.</p>

      <p>The entire gameplay loop is custom-built in C#. To ensure precise combat feedback, projectile physics are handled through Unity's engine but augmented with custom collision logic to differentiate hit behavior across various enemy types. All systems communicate through an object-oriented architecture with reusable components, allowing for seamless scaling of enemy and enemy variants without rewriting core logic.</p>
    `,
    links: [
      { label: "Play on itch.io", url: "https://tazty.itch.io/beyond-the-depths" },
    ]
  },

  "leap": {
    title: "Leap of Faith",
    role: "Solo Developer &nbsp;·&nbsp; Unity / C# &nbsp;·&nbsp; Status: Beta",
    video: 'https://www.youtube.com/embed/your-video-id',
    body: `
      <p>Leap of Faith is a narrative-driven incremental game exploring themes of mental health and recovery. The repetitive clicking loop is a deliberate design choice, mirroring the gradual, often exhausting nature of real-world recovery.</p>
      
      <ul>
        <li><strong>Dynamic Shop System:</strong> A modular shop architecture where items independently track unlock thresholds, purchase states, and visual feedback without hard-coded dependencies.</li>
        <li><strong>Scaling Economy:</strong> The Faith accumulation system utilizes a base click value modified by passive multipliers, balanced iteratively to maintain rewarding progression.</li>
      </ul>

      <img src="src/images/temp.PNG" class="modal-inline-img">
      <p class="img-caption">Figure 1: Iteration on the purchase-state UI and multiplier feedback loop.</p>

      <p>Technically, the game is built on a decoupled architecture where the UI listens for events from the data layer. This ensures that adding new "Coping Tool" items to the shop doesn't require touching the core clicking logic.</p>
    `,
    links: [
      { label: "Play on itch.io", url: "https://tazty.itch.io/leap-of-faith" },
    ]
  },

  "death": {
    title: "Death Overtime",
    role: "Technical Artist & Co-Designer &nbsp;·&nbsp; Unity / C# &nbsp;·&nbsp; Team of 2 &nbsp;·&nbsp; Status: Shipped",
    video: 'https://www.youtube.com/embed/your-video-id',
    body: `
      <p>Developed in just 72 hours for a game jam, Death Overtime is a fast-paced arena survival game. The project required rapid systems implementation and a streamlined art pipeline to meet the strict deadline.</p>
      
      <ul>
        <li><strong>Movement & Targeting:</strong> Programmed a responsive character controller and an enemy targeting system that prioritizes the player using distance-based logic.</li>
        <li><strong>Art Pipeline:</strong> Designed all character sprites and rigged animations through Unity’s Animator using state machine transitions for fluid combat visuals.</li>
      </ul>

      <img src="src/images/temp.PNG" class="modal-inline-img">
      <p class="img-caption">Figure 1: Enemy AI swarming behavior and real-time health UI tracking.</p>

      <p>As the Technical Artist, my primary goal was clearing bottlenecks. By owning the full art-to-engine pipeline and major UI systems, I allowed my teammate to focus entirely on core combat mechanics. This collaboration taught me how to identify the "real" bottleneck in a small team and build robust systems under intense time pressure.</p>
    `,
    links: [
      { label: "Play on itch.io", url: "https://tazty.itch.io/death-overtime" },
    ]
  },

  "clown": {
    title: "Clown Chaos",
    role: "System Designer & Co-Designer &nbsp;·&nbsp; Unity / C# &nbsp;·&nbsp; Team of 3 &nbsp;·&nbsp; GGJ 2024 &nbsp;·&nbsp; Status: Shipped",
    video: 'https://www.youtube.com/embed/your-video-id',
    body: `
      <p>Created for Global Game Jam 2024, Clown Chaos is a physics-based arcade game where players use a leafblower to clear waves of ragdoll characters. The project focuses on "juicing" a single core mechanic to maximize player engagement.</p>
      
      <ul>
        <li><strong>Procedural Spawning:</strong> An automated enemy generation system that randomizes horizontal positioning and accelerates intervals over time for natural difficulty scaling.</li>
        <li><strong>Centralized State Machine:</strong> Managed all global game states—menu, gameplay, and game-over transitions—ensuring clean data persistence between rounds.</li>
        <li><strong>Physics-UI Synergy:</strong> Designed the UI and pixel art with a focus on high readability to provide visual clarity amidst the ragdoll physics chaos on screen.</li>
      </ul>

      <img src="src/images/temp.PNG" class="modal-inline-img">
      <p class="img-caption">Figure 1: Interaction between leafblower force vectors and clown ragdoll components.</p>

      <p>My contribution centered on building a scalable system logic that could handle high enemy counts. By programming the spawning and state management through a centralized controller, we avoided "spaghetti code" during the 48-hour jam. This allowed the team to focus on tweaking the physics values to make the leafblower interaction feel tactile and satisfying.</p>
    `,
      links: [
      { label: "Play on itch.io", url: "https://merkel03.itch.io/clown-chaos" },
    ]
  },

  //Software
  "box": {
    title: "Lidar-Based Box Dimensioner",
    role: "ML Research · Python / Open3D · UCR Senior Design",
    video: 'https://www.youtube.com/embed/nAFEdaN0qjg',
    body: `
      <p><strong>Abstract:</strong> This spatial analysis tool extracts precise 3D dimensions from mobile LiDAR scan data to automate warehouse logistics. Developed as part of Team Beatbox, the system achieves a <strong>Mean Absolute Error of ~2.7 cm</strong> and maintains a <strong>5% relative error</strong> across varied box sizes.</p>
      
      <img src="src/images/Lidar Pipeline.PNG" class="modal-document-img">
      <p class="img-caption">Exhibit A: System Pipeline - From iPhone (.ply) acquisition to AABB calculation.</p>

      <h4>Technical Methodology</h4>
      <ul>
        <li><strong>Pre-Processing:</strong> Radius Outlier Removal (ROR) for noise reduction and RANSAC for large plane (ground) removal.</li>
        <li><strong>Clustering:</strong> Implementation of <strong>DBSCAN</strong> to isolate target objects from the remaining point cloud data.</li>
        <li><strong>Dimension Estimation:</strong> Calculation of Width, Length, and Height using <strong>Axis-Aligned Bounding Boxes (AABB)</strong>.</li>
        <li><strong>ML Confidence Model:</strong> A classification layer utilizing <strong>Multilayer Perceptron (MLP)</strong> and Decision Trees to predict measurement accuracy, currently reaching a 92% confidence threshold on standard scans.</li>
      </ul>

      <img src="src/images/Methods.PNG" class="modal-document-img">
      <p class="img-caption">Exhibit B: Visual Representation of Technical Methodology.</p>
    `,
    links: [
      { label: "View Source Code", url: "https://github.com/jliu0411/CS179M_Project" },
    ]
  },

  "food": {
    title: "Food Review Analysis",
    role: "Data Analyst · Python / SciPy",
    body: `
      <p>This computational study analyzed 18,000+ reviews to identify behavioral patterns. The study utilized <strong>Spearman Rank Correlation</strong> to account for the non-normal distribution of user engagement data.</p>
      
      <div class="pdf-preview-container">
        <embed src="src/images/Report.pdf" type="application/pdf" width="100%" height="500px">
      </div>

      <h4>Statistical Insights</h4>
      <ul>
        <li><strong>Reputation vs. Engagement:</strong> Analysis confirmed that veteran reviewers (Reputation 20+) write significantly longer, more nuanced reviews, supporting the hypothesis that platform experience leads to higher-quality content.</li>
        <li><strong>Sentiment Extremity:</strong> Data revealed that 0 and 1-star reviews receive higher "Thumbs Up" averages than mid-range reviews, suggesting that users engage more with extreme negative sentiment.</li>
        <li><strong>Critical Discussion:</strong> 1 and 2-star reviews spark the highest average "Reply Count," whereas 5-star reviews typically receive almost no discussion.</li>
        <li><strong>Review Length:</strong> 5-star reviews were found to be the shortest and most tightly distributed, while 2-3 star reviews showed the highest variance and word count.</li>
      </ul>
    `,
    links: []
  },

  "dnd": {
    title: "Dungeons & Dragons Discord Poll Bot",
    role: "Solo Developer · Python / discord.py",
    body: `
      <p>A scheduling automation tool designed to manage tabletop RPG session availability through event-driven Discord interactions.</p>

      <img src="src/images/dnd bot.PNG" class="modal-document-img">
      <p class="img-caption">Technical Spec: Persistent data structure for vote tracking across restarts.</p>

      <h4>System Architecture</h4>
      <ul>
        <li><strong>Async Loop:</strong> Utilizes Python's asyncio for recurring weekly poll generation.</li>
        <li><strong>State Persistence:</strong> Responses are cached in a persistent structure to ensure data integrity during bot downtime.</li>
      </ul>
    `,
    links: [
      { label: "View Source Code", url: "https://github.com/Tastynsweet/DnD_Discord_Bot" },
    ]
  },
};

const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(container => {
    const slider = container.querySelector('.slider');
    const originalCards = Array.from(slider.children);

    //Clone cards 4 times for seamless looping
    for (let i = 0; i < 3; i++) {
        originalCards.forEach(card => slider.appendChild(card.cloneNode(true)));
    }
    
    let shiftDistance = 0;
    let lastTime = null;
    const slideSpeed = 0.08; // Adjust speed here

    let exactScrollLeft = 0;

    //Identify direction (-1 for reverse, 1 for forward)
    const direction = container.getAttribute('data-direction') === 'reverse' ? -1 : 1;

    function recalibrate() {
        shiftDistance = slider.children[originalCards.length].offsetLeft - slider.children[0].offsetLeft;

        exactScrollLeft = shiftDistance;
        container.scrollLeft = exactScrollLeft;
    }

    function clampScroll() {
        if (shiftDistance === 0) return;

        if (direction === 1 && exactScrollLeft >= shiftDistance * 2) {
            exactScrollLeft -= shiftDistance;
        } 
        else if (direction === -1 && exactScrollLeft <= 0) {
            exactScrollLeft += shiftDistance;
        }
    }

    //Initial setup
    setTimeout(recalibrate, 300);
    window.addEventListener('load', recalibrate);
    window.addEventListener('resize', recalibrate);

    function tick(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const delta = timestamp - lastTime;
        lastTime = timestamp;

        if (shiftDistance > 0) {
            exactScrollLeft += (slideSpeed * delta) * direction;
            container.scrollLeft = exactScrollLeft;
            clampScroll();
        }
        
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
});

const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalLinks = document.getElementById('modal-links');

document.addEventListener('click', (e) => {
  const card = e.target.closest('.featured-card[data-project], .folder-card[data-project]');
  if (!card) return;

  const key = card.getAttribute('data-project');
  const project = projectData[key];
  
  if (project) {
    modalTitle.textContent = project.title;
    
    // 1. Define the Header (The role and the line)
    const headerHTML = `
      <div class="document-header">
        <p class="modal-role">${project.role || ""}</p>
        <hr class="doc-divider">
      </div>`;

    // 2. Define the Video
    const videoHTML = project.video ? 
    `<div class="video-container">
      <iframe src="${project.video}" frameborder="0" allowfullscreen></iframe>
     </div>` 
    : '';

    // 3. Assemble: Header FIRST, then Video, then the rest of the Body
    modalBody.innerHTML = `
      ${headerHTML}
      ${videoHTML}
      <div class="modal-text-content">${project.body}</div>
    `;

    modalLinks.innerHTML = (project.links || []).map(l =>
      `<a href="${l.url}" class="btn" target="_blank">${l.label}</a>`
    ).join('');
    
    overlay.classList.add('active');
  }
});

document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('active'));

const elementsToAnimate = document.querySelectorAll(`
    .hero h1, 
    .tagline, 
    .section-title, 
    .about-photo-wrap, 
    .about-text-content, 
    .slider-container, 
    .social-icon
`);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -150px 0px" 
});

elementsToAnimate.forEach(el => {
    el.classList.add('scroll-fade');
    fadeObserver.observe(el);
});

const blobConfigs = [
  // blob1: slow wide drift
  { scrollSpeed: 0.10, xFreq: 0.00100, yFreq: 0.00060, xAmp: 220, yAmp: 160, phase: 0   },
  // blob2: medium speed
  { scrollSpeed: 0.06, xFreq: 0.00160, yFreq: 0.00100, xAmp: 170, yAmp: 120, phase: 2.1 },
  // blob3: slightly faster
  { scrollSpeed: 0.08, xFreq: 0.00130, yFreq: 0.00120, xAmp: 190, yAmp: 140, phase: 4.4 },
  // blob4: cursor follower, no auto movement, so same as blob3 but scrollSpeed 0
  { scrollSpeed: 0.00, xFreq: 0, yFreq: 0, xAmp: 0, yAmp: 0, phase: 0 },
];
 
const blobs = Array.from(document.querySelectorAll('.blob.blob1, .blob.blob2, .blob.blob3'));
 
// Cursor-following blob (blob4)
const cursorBlob = document.querySelector('.blob4');
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let blobPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const LERP_SPEED = 0.1; // Lower = more lag/smoothness, higher = snappier
 
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animateBlobs(timestamp) {
  const scrollY = window.scrollY;
  blobs.forEach((blob, i) => {
    const c = blobConfigs[i];
    const t = timestamp + c.phase * 1000;
    const x = Math.sin(t * c.xFreq) * c.xAmp;
    const y = Math.cos(t * c.yFreq) * c.yAmp + scrollY * c.scrollSpeed;
    blob.style.transform = `translate(${x}px, ${y}px)`;
  });

  if (cursorBlob) {
    blobPos.x += (mouse.x - blobPos.x) * LERP_SPEED;
    blobPos.y += (mouse.y - blobPos.y) * LERP_SPEED;
    const blobSize = cursorBlob.offsetWidth;
    cursorBlob.style.left = '0px';
    cursorBlob.style.top = '0px';
    cursorBlob.style.transform = `translate(${blobPos.x - blobSize / 2}px, ${blobPos.y - blobSize / 2}px)`;
  }
  
  requestAnimationFrame(animateBlobs);
}
requestAnimationFrame(animateBlobs);