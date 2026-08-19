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
    <section class="hero page-width" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">Orchestrate<br />Intelligent Tasks.<br />Build Your <span>AI Agents.</span></h1>
        <p class="hero-lede">Build LLM-powered APIs, automate complex workflows,<br class="desktop-only" /> and deploy data apps - all from a single, unified platform.</p>
        <div class="hero-actions">
          <a class="button button-red" href="#contact"><span class="button-phone" aria-hidden="true">☎</span> Call Us</a>
          <a class="button button-gold" href="#features">Explore Features <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-proof" aria-label="Platform highlights">
          <span><i aria-hidden="true"></i>17+ Workflow Nodes</span>
          <span><i aria-hidden="true"></i>Cloud Hosted</span>
          <span><i aria-hidden="true"></i>Multi-LLM Support</span>
        </div>
      </div>

      <div class="hero-visual visual-sequence-pending" aria-label="Kanta AI robot with support assistant preview">
        <div class="visual-intro-mark" aria-hidden="true"><img src="/kanta-mark.png" alt="" /></div>
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
          <div class="bot-chat-title"><img class="brand-logo-mini" src="/kanta-logo.png" alt="" /><strong>Hi, I'm Kanta!</strong></div>
          <p>I can read, understand, and process your documents. What would you like to do today?</p>
        </div>
      </div>
    </section>

    <section class="proof-strip" aria-label="Kanta platform stats">
      <div class="page-width proof-grid">
        <span class="proof-kicker">One platform.<br /><em>Infinite possibilities.</em></span>
        <div><strong>3x</strong><span>faster workflow builds</span></div>
        <div><strong>24/7</strong><span>agents on call</span></div>
        <div><strong>100%</strong><span>your data, your rules</span></div>
      </div>
    </section>

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

gsap.from('.hero-copy > *', { opacity: 0, y: 24, duration: 0.75, stagger: 0.08, ease: 'power3.out', delay: 0.1 });
gsap.from('.hero-visual', { opacity: 0, x: 24, duration: 0.95, ease: 'power3.out', delay: 0.24 });

const chatPopup = document.querySelector('.bot-chat');
const robotVideo = document.querySelector('#robot-video');
const robotStage = document.querySelector('.robot-image-stage');
const introMark = document.querySelector('.visual-intro-mark');
const heroVisual = document.querySelector('.hero-visual');
const assistantPanel = document.querySelector('.assistant-panel');
const featureList = document.querySelector('.visual-feature-list');
const chatUserBubble = document.querySelector('.assistant-user-bubble');
const chatResponse = document.querySelector('.assistant-response');
const chatTyping = document.querySelector('.assistant-typing');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealableVisuals = [assistantPanel, featureList, chatPopup].filter(Boolean);

gsap.set(revealableVisuals, { autoAlpha: 0, y: 14 });
gsap.set(robotStage, { autoAlpha: 0, scale: 0.92 });
gsap.set(robotVideo, { autoAlpha: 0, '--robot-x': '0%', '--robot-y': '0%' });
gsap.set(introMark, { autoAlpha: 0, scale: 0.5, rotate: -14 });
heroVisual?.classList.remove('visual-sequence-pending');

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

const revealChatPopup = (onShown) => {
  if (!chatPopup) return;
  if (prefersReducedMotion) {
    gsap.set(chatPopup, { autoAlpha: 1, scale: 1, y: 0 });
    onShown?.();
    return;
  }
  gsap.timeline()
    .to(chatPopup, { autoAlpha: 1, scale: 1.04, y: 0, duration: 0.44, ease: 'back.out(1.7)' })
    .to(chatPopup, { scale: 1, duration: 0.18, ease: 'power2.out' })
    .call(() => onShown?.())
    .to(chatPopup, { y: -4, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 });
};

const revealAssistantVisuals = () => {
  if (!robotVideo) return;
  if (prefersReducedMotion) {
    gsap.set(robotVideo, { '--robot-x': '12%', '--robot-y': '14%' });
    revealChatPopup(() => {
      gsap.set(assistantPanel, { autoAlpha: 1, y: 0 });
      gsap.set(featureList, { autoAlpha: 1, y: 0 });
      startAssistantChat();
    });
    return;
  }
  gsap.to(robotVideo, { '--robot-x': '12%', '--robot-y': '14%', duration: 0.78, ease: 'power3.inOut' });
  revealChatPopup(() => {
    gsap.to(assistantPanel, {
      autoAlpha: 1,
      y: 0,
      duration: 0.48,
      ease: 'power3.out',
      onComplete: () => {
        startAssistantChat();
        gsap.to(featureList, { autoAlpha: 1, y: 0, duration: 0.48, ease: 'power3.out' });
      }
    });
  });
};

robotVideo?.addEventListener('ended', revealAssistantVisuals, { once: true });
if (robotVideo?.ended) {
  revealAssistantVisuals();
}

if (introMark && robotVideo && robotStage) {
  const intro = gsap.timeline({ delay: 0.18 });
  intro
    .to(introMark, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.62, ease: 'back.out(1.7)' })
    .to(introMark, { scale: 1.06, duration: 0.28, repeat: 1, yoyo: true, ease: 'sine.inOut' }, '+=0.12')
    .to(introMark, { autoAlpha: 0, scale: 0.72, duration: 0.34, ease: 'power2.in' }, '+=0.24')
    .call(() => {
      gsap.set(robotStage, { autoAlpha: 1, scale: 0.92 });
      gsap.set(robotVideo, { autoAlpha: 1 });
      robotVideo.playbackRate = 1.35;
      robotVideo.play().catch(() => {});
    })
    .to(robotStage, { scale: 1, duration: 0.54, ease: 'back.out(1.2)' });
}

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

const form = document.querySelector('#contact-form');
const success = document.querySelector('.form-success');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelector('input')?.setAttribute('disabled', 'true');
  form.querySelector('button')?.setAttribute('disabled', 'true');
  success?.removeAttribute('hidden');
});
