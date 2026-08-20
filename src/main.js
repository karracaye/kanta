import './style.css';
import gsap from 'gsap';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Kanta home"><img class="brand-logo" src="/kanta-logo.png" alt="Kanta" /></a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a href="#features">Features</a>
      <a href="#integrations">Integrations</a>
      <a href="#use-cases">Use Cases</a>
    </nav>
    <div class="header-actions">
      <a class="button button-small button-red" href="#contact">Contact Us</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
        <span></span><span></span>
      </button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
      <a href="#features">Features <span aria-hidden="true">↗</span></a>
      <a href="#integrations">Integrations <span aria-hidden="true">↗</span></a>
      <a href="#use-cases">Use Cases <span aria-hidden="true">↗</span></a>
      <a href="#contact">Contact Us <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="top">
    <!-- Top Hero Section -->
    <section class="hero page-width hero-intro-active" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">Orchestrate<br />Intelligent Tasks.<br />Build Your <span>AI Agents.</span></h1>
        <p class="hero-lede">Build LLM-powered APIs, automate complex workflows,<br class="desktop-only" /> and deploy data apps - all from a single, unified platform.</p>
        <div class="hero-actions">
          <a class="button button-red" href="#contact"><span class="button-phone" aria-hidden="true">☎</span> Call Us</a>
          <a class="button button-gold" href="#features">Explore Features <span aria-hidden="true">↗</span></a>
        </div>
        
        <!-- Modern Clean Highlights Badges -->
        <div class="hero-proof-modern" aria-label="Platform highlights">
          <div class="proof-pill-modern">
            <span class="proof-pill-icon icon-red">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </span>
            <strong>17+ Workflow Nodes</strong>
          </div>

          <div class="proof-pill-modern">
            <span class="proof-pill-icon icon-emerald">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a4.5 4.5 0 1 1 .9-8.9 6 6 0 0 1 11.6 2.4A4.5 4.5 0 0 1 17.5 19z"/></svg>
            </span>
            <strong>Cloud Hosted</strong>
            <span class="proof-live-dot"></span>
          </div>

          <div class="proof-pill-modern">
            <span class="proof-pill-icon icon-purple">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.1 12a10 10 0 0 0 9.9 10V12z"/><path d="M12 12V2a10 10 0 0 1 10 10H12z"/></svg>
            </span>
            <strong>Multi-LLM Support</strong>
          </div>
        </div>

      </div>

      <div class="hero-visual visual-sequence-pending" aria-label="Kanta AI robot with support assistant preview">
        <div class="visual-intro-mark" aria-hidden="true"><img src="/kanta-mark.png" alt="Kanta logo mark" /></div>
        <div class="assistant-panel" aria-label="AI support assistant preview">
          <div class="assistant-panel-head"><div class="assistant-panel-title"><span class="assistant-panel-icon">▢</span><span><strong>AI Support Assistant</strong><small>Powered by Kanta.AI</small></span></div><span class="assistant-online"><i></i> Online</span></div>
          <div class="assistant-panel-body"><div class="assistant-user-bubble">What's my current order status?</div><div class="assistant-response"><p>Your order <strong>#ORD-2024-1234</strong> is currently <b>in transit.</b></p><div class="assistant-response-meta"><span>Expected delivery:<b>Feb 15, 2024</b></span><span>Carrier:<b>FedEx</b></span></div></div><div class="assistant-typing"><i></i><i></i><i></i><span>AI is generating a chart...</span></div></div>
          <div class="assistant-panel-input"><span>Ask about invoices, analytics...</span><b aria-hidden="true">➤</b></div>
        </div>
        <div class="visual-feature-list" aria-label="Assistant capabilities">
          <div class="visual-feature-card"><span class="visual-feature-icon">▤</span><span><strong>Database Access</strong><small>Query tables with SQL constraints</small></span></div>
          <div class="visual-feature-card"><span class="visual-feature-icon">⇩</span><span><strong>Export</strong><small>Download conversation history</small></span></div>
          <div class="visual-feature-card"><span class="visual-feature-icon">◇</span><span><strong>Row-Level Security</strong><small>User-specific data access</small></span></div>
          <div class="visual-feature-card"><span class="visual-feature-icon">♧</span><span><strong>Voice Input</strong><small>Speech-to-text queries</small></span></div>
        </div>
        <div class="robot-image-stage"><video id="robot-video" muted playsinline preload="auto" aria-label="A friendly Kanta robot assistant waving hello"><source src="/white.mp4" type="video/mp4" /></video></div>
        <div class="bot-chat" aria-hidden="true">
          <div class="bot-chat-title"><img class="brand-logo-mini" src="/kanta-logo.png" alt="" /><strong id="bot-chat-title-text">Hi!</strong></div>
          <p id="bot-chat-msg-text">I can read, understand, and process your documents. What would you like to do today?</p>
        </div>
      </div>
    </section>

    <!-- Modern UI Stats & Headline Section -->
    <section class="proof-strip-modern" aria-label="Kanta platform stats">
      <div class="page-width proof-grid-modern">
        <div class="proof-header-modern">
          <div class="proof-eyebrow-pill">
            <span class="proof-eyebrow-dot"></span>
            <span>Autonomous AI Platform</span>
          </div>
          <h2 class="proof-title-headline">
            Build your app<br />
            <span class="highlight-text-red">in minutes.</span>
          </h2>
        </div>

        <div class="proof-stats-container">
          <div class="stat-card-modern">
            <div class="stat-head-row">
              <span class="stat-number">3x</span>
              <span class="stat-chip chip-red">⚡ Speed</span>
            </div>
            <span class="stat-label">Faster workflow builds</span>
            <small class="stat-sub">From prompt to production DAG</small>
          </div>

          <div class="stat-card-modern">
            <div class="stat-head-row">
              <span class="stat-number">24/7</span>
              <span class="stat-chip chip-emerald"><i class="live-dot-mini"></i> Live</span>
            </div>
            <span class="stat-label">Agents on call</span>
            <small class="stat-sub">Autonomous AI task execution</small>
          </div>

          <div class="stat-card-modern">
            <div class="stat-head-row">
              <span class="stat-number">100%</span>
              <span class="stat-chip chip-purple">🛡️ Secure</span>
            </div>
            <span class="stat-label">Your data, your rules</span>
            <small class="stat-sub">Enterprise privacy & control</small>
          </div>
        </div>
      </div>
    </section>

    <!-- ULTRA-SIMPLE, BEAUTIFUL & CLEAR AI STACK COMPARISON SECTION -->
    <section class="stack-section-modern page-width" id="stack-comparison">
      
      <div class="stack-header-center">
        <div class="stack-badge-pill">
          <span class="stack-badge-dot"></span>
          <span>THE PROBLEM & SOLUTION</span>
        </div>

        <h2 class="stack-title">
          Your AI stack is <span class="text-red-highlight">too fragmented</span>
        </h2>

        <p class="stack-subhead">
          Most teams building AI applications end up juggling 4-5 different tools, each with its own learning curve, billing, and integration challenges.
        </p>

        <!-- Interactive Switcher -->
        <div class="stack-mode-switcher">
          <button id="btn-stack-problem" class="switcher-btn">
            <span class="switcher-icon">❌</span> The Typical Stack (Fragmented)
          </button>
          <button id="btn-stack-solution" class="switcher-btn active-solution">
            <span class="switcher-icon">✅</span> The Kanta Solution (4 → 1 Unified)
          </button>
        </div>
      </div>

      <!-- Main Interactive App Stage & Mascot Grid -->
      <div class="stack-canvas-grid">
        
        <!-- Left: Clear 3D-Glass Workflow Builder App Canvas -->
        <div class="stack-app-window">
          
          <!-- App Window Header Bar -->
          <div class="app-window-header">
            <div class="window-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="window-title">Kanta.AI — Workflow Builder</div>
            <div class="window-status">
              <span class="status-live-dot"></span> Running
            </div>
          </div>

          <!-- App Window Canvas Area -->
          <div class="app-window-body">
            
            <!-- SOLUTION VIEW (Clean 4 -> 1 Unified Workflow Pipeline) -->
            <div id="view-solution" class="pipeline-stage active-stage">
              <div class="pipeline-title-bar">
                <span>Document Processing Pipeline</span>
                <span class="pipeline-badge">Visual DAG</span>
              </div>

              <!-- Animated Pipeline Nodes -->
              <div class="pipeline-nodes-container">
                <div class="node-box node-start">
                  <div class="node-icon-circle green-pulse"></div>
                  <strong>Start</strong>
                  <small>Trigger Event</small>
                </div>

                <div class="node-connector">
                  <div class="connector-line"></div>
                </div>

                <div class="node-box node-ocr">
                  <div class="node-tag">OCR</div>
                  <strong>Extract</strong>
                  <small>Document Parse</small>
                </div>

                <div class="node-connector">
                  <div class="connector-line"></div>
                </div>

                <div class="node-box node-llm">
                  <div class="node-tag">LLM</div>
                  <strong>Process</strong>
                  <small>AI Reasoning</small>
                </div>

                <div class="node-connector">
                  <div class="connector-line"></div>
                </div>

                <div class="node-box node-output">
                  <div class="node-icon-circle gold-pulse"></div>
                  <strong>Output</strong>
                  <small>Structured Data</small>
                </div>
              </div>

              <!-- Analytics KPIs Row -->
              <div class="pipeline-kpi-row">
                <div class="kpi-card">
                  <strong>2.4k</strong>
                  <span>Requests Processed</span>
                </div>
                <div class="kpi-card">
                  <strong class="text-green">99.2%</strong>
                  <span>Success Rate</span>
                </div>
                <div class="kpi-card">
                  <strong>340ms</strong>
                  <span>Avg. Latency</span>
                </div>
              </div>
            </div>

            <!-- PROBLEM VIEW (Fragmented 5-Tool Stack Warning) -->
            <div id="view-problem" class="pipeline-stage">
              <div class="problem-warning-bar">
                ⚠️ 5 Separate Tools & Codebases Required
              </div>

              <div class="problem-stack-list">
                <div class="problem-item">
                  <span class="problem-layer">Frontend UI</span>
                  <span class="problem-tech">React, Vue, Svelte</span>
                  <span class="problem-tag tag-red">More developers needed</span>
                </div>

                <div class="problem-item">
                  <span class="problem-layer">Backend Logic</span>
                  <span class="problem-tech">FastAPI, Express, .NET</span>
                  <span class="problem-tag tag-red">Weeks of boilerplate</span>
                </div>

                <div class="problem-item">
                  <span class="problem-layer">Database</span>
                  <span class="problem-tech">PostgreSQL + ORMs</span>
                  <span class="problem-tag tag-red">Schema overhead</span>
                </div>

                <div class="problem-item">
                  <span class="problem-layer">AI/LLM Integration</span>
                  <span class="problem-tech">OpenAI SDK + Custom Code</span>
                  <span class="problem-tag tag-red">Scattered across layers</span>
                </div>

                <div class="problem-item">
                  <span class="problem-layer">Infrastructure</span>
                  <span class="problem-tech">Separate deployments each</span>
                  <span class="problem-tag tag-red">DevOps nightmare</span>
                </div>
              </div>

              <div class="problem-result-footer">
                <strong>Result:</strong> 5-6 tools, multiple codebases, separate deployments, and a tangled mess impossible to maintain.
              </div>
            </div>

          </div>

          <!-- Floating Badges -->
          <div class="canvas-floating-badge badge-nodes">
            <div class="badge-icon-bg bg-emerald">⚡</div>
            <div>
              <strong>17+ Nodes</strong>
              <small>Ready to use</small>
            </div>
          </div>

          <div class="canvas-floating-badge badge-consolidation">
            <div class="badge-icon-bg bg-orange">📚</div>
            <div>
              <strong>4 → 1</strong>
              <small>Tools consolidated</small>
            </div>
          </div>

        </div>

        <!-- Right: Kanta 3D Mascot & Feature Cards -->
        <div class="stack-mascot-panel">
          <div class="mascot-speech-card">
            <div class="speech-header">
              <span class="speech-avatar">A</span>
              <strong>Kanta AI Assistant</strong>
            </div>
            <p id="mascot-speech-text">
              Say goodbye to 5 separate tools! Kanta unifies your frontend, backend, database, and LLMs into one intuitive workflow builder.
            </p>
          </div>

          <div class="mascot-image-stage">
            <img src="/kanta-robot-3d-waving.png" alt="3D Kanta AI Robot Mascot" class="mascot-3d-img" />
          </div>

          <div class="solution-highlights-grid">
            <div class="solution-check-item">
              <span class="check-icon">✓</span>
              <span>Frontend + Backend + Database in one platform</span>
            </div>
            <div class="solution-check-item">
              <span class="check-icon">✓</span>
              <span>No code required—build visually</span>
            </div>
            <div class="solution-check-item">
              <span class="check-icon">✓</span>
              <span>AI-native from the ground up</span>
            </div>
            <div class="solution-check-item">
              <span class="check-icon">✓</span>
              <span>Self-hosted; your data stays yours</span>
            </div>
          </div>
        </div>

      </div>

      <div class="stack-cta-bar">
        <a href="#contact" class="button button-red button-explore">Explore the unified stack <span aria-hidden="true">↗</span></a>
      </div>

    </section>

    <!-- Features Section -->
    <section class="feature-section page-width" id="features">
      <div class="section-heading">
        <div><p class="eyebrow"><span class="eyebrow-line"></span> Everything in sync</p><h2>From first prompt<br />to <em>real-world result.</em></h2></div>
        <p>Design, connect, and deploy intelligent systems with the clarity your team needs to move quickly.</p>
      </div>
      <div class="feature-grid">
        <article class="feature-card feature-card-red"><span class="card-index">01</span><div class="card-symbol symbol-nodes" aria-hidden="true"><i></i><i></i><i></i></div><h3>Build intelligent APIs</h3><p>Turn your models into reliable endpoints with a visual builder and production-ready controls.</p><a href="#contact" aria-label="Learn about intelligent APIs">Learn more <span aria-hidden="true">↗</span></a></article>
        <article class="feature-card feature-card-gold"><span class="card-index">02</span><div class="card-symbol symbol-flow" aria-hidden="true"><i></i><i></i><i></i></div><h3>Automate the busywork</h3><p>Connect tools and actions into workflows that keep moving even when your team is offline.</p><a href="#contact" aria-label="Learn about workflow automation">Learn more <span aria-hidden="true">↗</span></a></article>
        <article class="feature-card feature-card-ink"><span class="card-index">03</span><div class="card-symbol symbol-grid" aria-hidden="true"><i></i><i></i><i></i><i></i></div><h3>Ship data apps</h3><p>Give every team a focused interface for the data and decisions that matter to them.</p><a href="#contact" aria-label="Learn about data apps">Learn more <span aria-hidden="true">↗</span></a></article>
      </div>
    </section>

    <section class="integration-section" id="integrations">
      <div class="page-width integration-layout">
        <div><p class="eyebrow"><span class="eyebrow-line"></span> Fits your stack</p><h2>Bring your tools.<br /><em>Keep your flow.</em></h2></div>
        <div class="integration-copy"><p>Kanta sits between your models, systems, and people. Connect the tools you already trust and add intelligence where it creates the most leverage.</p><a class="text-arrow" href="#contact">Talk to our team <span aria-hidden="true">↗</span></a></div>
      </div>
      <div class="logo-ribbon page-width" aria-label="Integration examples"><span>OpenAI</span><span>Postgres</span><span>Slack</span><span>HubSpot</span><span>Stripe</span><span>+ more</span></div>
    </section>

    <section class="use-case-section page-width" id="use-cases">
      <div class="section-heading compact"><div><p class="eyebrow"><span class="eyebrow-line"></span> Where Kanta helps</p><h2>Make complex<br /><em>feel simple.</em></h2></div><p>One flexible foundation for the teams building what comes next.</p></div>
      <div class="use-case-list">
        <a href="#contact"><span>01</span><strong>Operations</strong><small>Turn scattered requests into one intelligent system.</small><b aria-hidden="true">↗</b></a>
        <a href="#contact"><span>02</span><strong>Customer experience</strong><small>Give every customer a faster, more thoughtful answer.</small><b aria-hidden="true">↗</b></a>
        <a href="#contact"><span>03</span><strong>Product teams</strong><small>Move from experiment to useful product without the drag.</small><b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <section class="contact-section page-width" id="contact">
      <div class="contact-panel">
        <div><p class="eyebrow light"><span class="eyebrow-line"></span> Ready when you are</p><h2>Let's build<br /><em>what's next.</em></h2></div>
        <form id="contact-form" class="contact-form">
          <label for="contact-email">Work email</label>
          <div class="input-row"><input id="contact-email" name="email" type="email" placeholder="you@company.com" required /><button class="button button-dark" type="submit">Get in touch <span aria-hidden="true">↗</span></button></div>
          <p class="form-note">We will get back to you within one business day.</p>
          <p class="form-success" role="status" hidden>Thanks. Kanta will be in touch soon.</p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer page-width"><a class="brand" href="#top"><img class="brand-logo brand-logo-footer" src="/kanta-logo.png" alt="Kanta" /></a><span>Intelligence, orchestrated.</span><div><a href="#features">Features</a><a href="#contact">Contact</a><span>© 2025 Kanta</span></div></footer>
`;

// Elements references
const heroSection = document.querySelector('.hero');
const heroCopy = document.querySelector('.hero-copy');
const heroCopyElements = document.querySelectorAll('.hero-copy > *');
const heroVisual = document.querySelector('.hero-visual');
const chatPopup = document.querySelector('.bot-chat');
const chatTitleText = document.querySelector('#bot-chat-title-text');
const chatMsgText = document.querySelector('#bot-chat-msg-text');
const robotVideo = document.querySelector('#robot-video');
const robotStage = document.querySelector('.robot-image-stage');
const introMark = document.querySelector('.visual-intro-mark');
const assistantPanel = document.querySelector('.assistant-panel');
const featureList = document.querySelector('.visual-feature-list');
const chatUserBubble = document.querySelector('.assistant-user-bubble');
const chatResponse = document.querySelector('.assistant-response');
const chatTyping = document.querySelector('.assistant-typing');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealableVisuals = [assistantPanel, featureList].filter(Boolean);

// Calculate screen center offset for desktop viewport
const getCenterOffset = () => {
  if (window.innerWidth <= 740) return 0;
  const heroWidth = heroSection?.getBoundingClientRect().width || window.innerWidth;
  return -0.25 * heroWidth;
};

// Initial GSAP setup
gsap.set(heroCopyElements, { autoAlpha: 0, y: 30 });
gsap.set(revealableVisuals, { autoAlpha: 0, y: 20 });
gsap.set(chatPopup, { autoAlpha: 0, scale: 0.8, y: 10, left: '50%' });
gsap.set(robotStage, { autoAlpha: 0, scale: 0.95 });
gsap.set(robotVideo, { autoAlpha: 0, '--robot-x': '0%', '--robot-y': '0%' });
gsap.set(introMark, { autoAlpha: 0, scale: 0.4, rotate: -10 });

// Center heroVisual dead-center during intro
const initialOffset = getCenterOffset();
gsap.set(heroVisual, { x: initialOffset });
heroVisual?.classList.remove('visual-sequence-pending');

// Right-side Assistant panel turns
const assistantChatTurns = [
  {
    question: "What's my current order status?",
    response: '<p>Your order <strong>#ORD-2024-1234</strong> is currently <b>in transit.</b></p><div class="assistant-response-meta"><span>Expected delivery:<b>Feb 15, 2024</b></span><span>Carrier:<b>FedEx</b></span></div>'
  },
  {
    question: 'Can you export our history?',
    response: '<p>Your conversation history is ready to <b>export.</b></p><div class="assistant-response-meta"><span>Format:<b>CSV</b></span><span>Status:<b>Ready</b></span></div>'
  }
];

let assistantTurnIndex = 0;
const applyAssistantTurn = () => {
  const turn = assistantChatTurns[assistantTurnIndex];
  if (!turn || !chatUserBubble || !chatResponse) return;
  chatUserBubble.textContent = turn.question;
  chatResponse.innerHTML = turn.response;
};

const startAssistantChat = () => {
  if (!chatUserBubble || !chatResponse || !chatTyping) return;
  applyAssistantTurn();
  if (prefersReducedMotion) {
    gsap.set([chatUserBubble, chatResponse], { autoAlpha: 1, y: 0 });
    gsap.set(chatTyping, { autoAlpha: 0 });
    return;
  }
  gsap.set([chatUserBubble, chatResponse, chatTyping], { autoAlpha: 0, y: 8 });
  gsap.timeline({
    repeat: -1,
    repeatDelay: 1.1,
    onRepeat: () => {
      assistantTurnIndex = (assistantTurnIndex + 1) % assistantChatTurns.length;
      applyAssistantTurn();
    }
  })
    .to(chatUserBubble, { autoAlpha: 1, y: 0, duration: 0.32, ease: 'power2.out' })
    .to(chatTyping, { autoAlpha: 1, y: 0, duration: 0.2, ease: 'power2.out' }, '+=0.3')
    .to({}, { duration: 1.05 })
    .to(chatTyping, { autoAlpha: 0, y: -3, duration: 0.2 })
    .to(chatResponse, { autoAlpha: 1, y: 0, duration: 0.38, ease: 'power2.out' })
    .to({}, { duration: 2.1 })
    .to([chatResponse, chatUserBubble], { autoAlpha: 0, y: -4, duration: 0.32 });
};

// Sequential Speech Helper
const updateCenterSpeech = (title, msg) => {
  if (chatTitleText) chatTitleText.textContent = title;
  if (chatMsgText) chatMsgText.textContent = msg;
};

// Complete Intro: Move Robot from Center -> Right Side, Move Speech Bubble farther right (76%)
let introCompleted = false;
const completeIntroAndReveal = () => {
  if (introCompleted) return;
  introCompleted = true;

  if (prefersReducedMotion) {
    heroSection?.classList.remove('hero-intro-active');
    gsap.set(heroVisual, { x: 0 });
    gsap.set(robotVideo, { '--robot-x': '12%', '--robot-y': '14%', autoAlpha: 1 });
    gsap.set(heroCopyElements, { autoAlpha: 1, y: 0 });
    gsap.set(chatPopup, { autoAlpha: 1, scale: 1, y: 0, left: '76%' });
    gsap.set(assistantPanel, { autoAlpha: 1, y: 0 });
    gsap.set(featureList, { autoAlpha: 1, y: 0 });
    startAssistantChat();
    return;
  }

  // Update speech bubble to full greeting
  updateCenterSpeech("Hi, I'm Kanta!", "I can read, understand, and process your documents. What would you like to do today?");

  const transitionTL = gsap.timeline();

  // 1. Move entire visual stage from DEAD-CENTER -> RIGHT SIDE
  transitionTL
    .to(heroVisual, { x: 0, duration: 1.15, ease: 'power3.inOut' })
    .to(robotVideo, { '--robot-x': '12%', '--robot-y': '14%', duration: 1.15, ease: 'power3.inOut' }, '<')
    // Move speech bubble farther to the right side (76%)
    .to(chatPopup, { left: window.innerWidth <= 740 ? '50%' : '76%', duration: 1.15, ease: 'power3.inOut' }, '<');

  // 2. Fade in & reveal Left Side Content ("Orchestrate Intelligent Tasks...")
  transitionTL.to(heroCopyElements, {
    autoAlpha: 1,
    y: 0,
    duration: 0.85,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.7');

  // 3. Reveal Right Side Assistant Panel & Capability Badges
  transitionTL.to(assistantPanel, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    ease: 'power3.out',
    onComplete: () => {
      startAssistantChat();
      gsap.to(featureList, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out' });
      heroSection?.classList.remove('hero-intro-active');
    }
  }, '-=0.4');

  // Ambient floating animation for speech bubble
  gsap.to(chatPopup, { y: -5, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.8 });
};

// Handle video end event
robotVideo?.addEventListener('ended', completeIntroAndReveal, { once: true });

// MAIN INTRO SEQUENCE TIMELINE
if (introMark && robotVideo && robotStage) {
  const introTL = gsap.timeline({ delay: 0.2 });

  // 1. Show Logo Icon First in the Dead Center of Screen
  introTL
    .to(introMark, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.65, ease: 'back.out(1.7)' })
    .to(introMark, { scale: 1.08, duration: 0.3, repeat: 1, yoyo: true, ease: 'sine.inOut' }, '+=0.15')
    .to(introMark, { autoAlpha: 0, scale: 0.7, duration: 0.35, ease: 'power2.in' }, '+=0.2');

  // 2. Show Robot Video Walking in the Center
  introTL.call(() => {
    gsap.set(robotStage, { autoAlpha: 1, scale: 1 });
    gsap.set(robotVideo, { autoAlpha: 1, '--robot-x': '0%', '--robot-y': '0%' });
    robotVideo.playbackRate = 1.15;
    robotVideo.play().catch(() => {});
  });

  // 3. Pop up Speech Bubble in Center with Sequential Speeches
  introTL.call(() => {
    updateCenterSpeech("Hi!", "");
    gsap.to(chatPopup, { autoAlpha: 1, scale: 1, y: 0, duration: 0.38, ease: 'back.out(1.6)' });
  }, null, '+=0.3');

  // Speech Step 2: "I'm Kanta!"
  introTL.call(() => {
    updateCenterSpeech("Hi!", "I'm Kanta!");
  }, null, '+=1.2');

  // Speech Step 3: "How may I help you?"
  introTL.call(() => {
    updateCenterSpeech("Hi! I'm Kanta!", "How may I help you?");
  }, null, '+=1.3');

  // When video completes walking (or fallback duration), transition to right side
  introTL.call(() => {
    if (robotVideo.ended || robotVideo.paused) {
      completeIntroAndReveal();
    }
  }, null, '+=2.2');
}

// -------------------------------------------------------------
// INTERACTIVE SWITCHER LOGIC (PROBLEM VS SOLUTION)
// -------------------------------------------------------------
const btnProblem = document.querySelector('#btn-stack-problem');
const btnSolution = document.querySelector('#btn-stack-solution');
const viewSolution = document.querySelector('#view-solution');
const viewProblem = document.querySelector('#view-problem');
const speechText = document.querySelector('#mascot-speech-text');

btnProblem?.addEventListener('click', () => {
  btnProblem.classList.add('active-problem');
  btnSolution?.classList.remove('active-solution');
  viewProblem?.classList.add('active-stage');
  viewSolution?.classList.remove('active-stage');
  if (speechText) {
    speechText.textContent = "Warning! Traditional stacks force you to integrate 5 separate tools—leading to code bloat, high costs, and DevOps nightmares.";
  }
});

btnSolution?.addEventListener('click', () => {
  btnSolution.classList.add('active-solution');
  btnProblem?.classList.remove('active-problem');
  viewSolution?.classList.add('active-stage');
  viewProblem?.classList.remove('active-stage');
  if (speechText) {
    speechText.textContent = "Say goodbye to 5 separate tools! Kanta unifies your frontend, backend, database, and LLMs into one intuitive workflow builder.";
  }
});

// Mobile Menu toggles
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobileMenu?.classList.toggle('is-open', !isOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
    mobileMenu?.classList.remove('is-open');
  });
});

// Contact Form handler
const form = document.querySelector('#contact-form');
const success = document.querySelector('.form-success');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelector('input')?.setAttribute('disabled', 'true');
  form.querySelector('button')?.setAttribute('disabled', 'true');
  success?.removeAttribute('hidden');
});
