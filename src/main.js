import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin for smooth scroll animations
gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------
// 1. HERO SECTION INTRO & ANIMATIONS
// -------------------------------------------------------------
const heroSection = document.querySelector('.hero');
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

// Complete Intro: Move Robot from Center -> Right Side
let introCompleted = false;
const completeIntroAndReveal = () => {
  if (introCompleted) return;
  introCompleted = true;

  const targetLeft = window.innerWidth <= 740 ? '50%' : '52.5%';

  if (prefersReducedMotion) {
    heroSection?.classList.remove('hero-intro-active');
    gsap.set(heroVisual, { x: 0 });
    gsap.set(robotVideo, { '--robot-x': '12%', '--robot-y': '14%', autoAlpha: 1 });
    gsap.set(heroCopyElements, { autoAlpha: 1, y: 0 });
    gsap.set(chatPopup, { autoAlpha: 1, scale: 1, y: 0, left: targetLeft });
    gsap.set(assistantPanel, { autoAlpha: 1, y: 0 });
    gsap.set(featureList, { autoAlpha: 1, y: 0 });
    startAssistantChat();
    return;
  }

  updateCenterSpeech("Hi, I'm Kanta!", "I can read, understand, and process your documents. What would you like to do today?");

  const transitionTL = gsap.timeline();

  transitionTL
    .to(heroVisual, { x: 0, duration: 1.15, ease: 'power3.inOut' })
    .to(robotVideo, { '--robot-x': '12%', '--robot-y': '14%', duration: 1.15, ease: 'power3.inOut' }, '<')
    .to(chatPopup, { left: targetLeft, duration: 1.15, ease: 'power3.inOut' }, '<');

  transitionTL.to(heroCopyElements, {
    autoAlpha: 1,
    y: 0,
    duration: 0.85,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.7');

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

  gsap.to(chatPopup, { y: -5, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.8 });
};

robotVideo?.addEventListener('ended', completeIntroAndReveal, { once: true });

// MAIN INTRO SEQUENCE TIMELINE (Speech popup at left: 50%)
if (introMark && robotVideo && robotStage) {
  const introTL = gsap.timeline({ delay: 0.2 });

  introTL
    .to(introMark, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.65, ease: 'back.out(1.7)' })
    .to(introMark, { scale: 1.08, duration: 0.3, repeat: 1, yoyo: true, ease: 'sine.inOut' }, '+=0.15')
    .to(introMark, { autoAlpha: 0, scale: 0.7, duration: 0.35, ease: 'power2.in' }, '+=0.2');

  introTL.call(() => {
    gsap.set(robotStage, { autoAlpha: 1, scale: 1 });
    gsap.set(robotVideo, { autoAlpha: 1, '--robot-x': '0%', '--robot-y': '0%' });
    robotVideo.playbackRate = 1.15;
    robotVideo.play().catch(() => {});
  });

  introTL.call(() => {
    updateCenterSpeech("Hi, I'm Kanta!", "How may I help you?");
    gsap.to(chatPopup, { autoAlpha: 1, scale: 1, y: 0, left: '50%', duration: 0.38, ease: 'back.out(1.6)' });
  }, null, '+=0.3');

  introTL.call(() => {
    if (robotVideo.ended || robotVideo.paused) {
      completeIntroAndReveal();
    }
  }, null, '+=2.4');
}

// -------------------------------------------------------------
// 2. SMOOTH SCROLL REVEAL ANIMATIONS FOR EVERY SECTION BELOW HERO
// -------------------------------------------------------------
if (!prefersReducedMotion) {
  const revealSections = document.querySelectorAll('.scroll-reveal');

  revealSections.forEach((section) => {
    gsap.set(section, { autoAlpha: 0, y: 45 });

    gsap.to(section, {
      duration: 0.95,
      autoAlpha: 1,
      y: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });

    const childCards = section.querySelectorAll('.stat-card-modern, .card-3d-wrapper, .gold-glass-card, .even-card, .studio-feature-card, .cap-tile');
    if (childCards.length > 0) {
      gsap.set(childCards, { autoAlpha: 0, y: 25 });
      gsap.to(childCards, {
        duration: 0.75,
        autoAlpha: 1,
        y: 0,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none none'
        }
      });
    }
  });
}

// -------------------------------------------------------------
// 3. INTERACTIVE SWITCHER LOGIC (PROBLEM VS SOLUTION)
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

// -------------------------------------------------------------
// 4. REALISTIC 3D CARD PARALLAX MOUSE TILT EFFECT
// -------------------------------------------------------------
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach((cardWrapper) => {
  const cardInner = cardWrapper.querySelector('.card-3d-inner');
  if (!cardInner) return;

  cardWrapper.addEventListener('mousemove', (e) => {
    const rect = cardWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    cardInner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  cardWrapper.addEventListener('mouseleave', () => {
    cardInner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  });
});

// -------------------------------------------------------------
// 5. EMBEDDED AI CHAT SIMULATION ANIMATION LOOP
// -------------------------------------------------------------
const userChatBubbleText = document.querySelector('#user-chat-bubble-text');
const botChatTurnBox = document.querySelector('#bot-chat-turn-box');
const botBubbleInnerHtml = document.querySelector('#bot-bubble-inner-html');
const botTypingRow = document.querySelector('#bot-typing-row');
const botTypingStatusMsg = document.querySelector('#bot-typing-status-msg');
const dummyChatInput = document.querySelector('#dummy-chat-input');

const chatSimulationTurnsRevised = [
  {
    inputPlaceholder: "What's my current order status?",
    userQuestion: "What's my current order status?",
    typingText: "AI is querying PostgreSQL database...",
    botResponseHtml: `
      <p>Your order <strong>#ORD-2024-1234</strong> is currently <span class="text-emerald-bold">in transit.</span></p>
      <div class="meta-breakdown-card light-meta-card">
        <div><span>Expected delivery:</span><strong>Feb 15, 2024</strong></div>
        <div><span>Carrier:</span><strong>FedEx</strong></div>
      </div>
    `
  },
  {
    inputPlaceholder: "Generate Q1 Sales Analytics...",
    userQuestion: "Can you generate a sales report for Q1?",
    typingText: "AI is generating SQL visualization...",
    botResponseHtml: `
      <p>Q1 Revenue Summary: <strong class="text-emerald-bold">$142,500 (+24% YoY)</strong></p>
      <div class="meta-breakdown-card light-meta-card">
        <div><span>Total Orders:</span><strong>1,420 orders</strong></div>
        <div><span>Avg Latency:</span><strong>340ms</strong></div>
      </div>
    `
  },
  {
    inputPlaceholder: "Export chat history to CSV...",
    userQuestion: "Export our chat history to CSV",
    typingText: "Exporting CSV file...",
    botResponseHtml: `
      <p>Export complete! File <strong class="text-emerald-bold">order_history_q1.csv</strong> is ready for download.</p>
      <div class="meta-breakdown-card light-meta-card">
        <div><span>File format:</span><strong>CSV</strong></div>
        <div><span>Security:</span><strong>Row-Level Secure</strong></div>
      </div>
    `
  }
];

let currentSimIndexRevised = 0;

const runRevisedChatSimulationLoop = () => {
  if (!userChatBubbleText || !botChatTurnBox || !botTypingRow || !dummyChatInput) return;
  const currentTurn = chatSimulationTurnsRevised[currentSimIndexRevised];

  gsap.set(botChatTurnBox, { autoAlpha: 0, y: 12, display: 'none' });
  gsap.set(botTypingRow, { autoAlpha: 0, display: 'none' });
  gsap.set(userChatBubbleText, { autoAlpha: 0, y: 10 });
  dummyChatInput.value = currentTurn.inputPlaceholder;

  const simTL = gsap.timeline({
    repeatDelay: 1.6,
    onComplete: () => {
      currentSimIndexRevised = (currentSimIndexRevised + 1) % chatSimulationTurnsRevised.length;
      runRevisedChatSimulationLoop();
    }
  });

  simTL
    .to(userChatBubbleText, {
      duration: 0.4,
      autoAlpha: 1,
      y: 0,
      ease: 'power2.out',
      onStart: () => {
        userChatBubbleText.textContent = currentTurn.userQuestion;
      }
    })
    .to(botTypingRow, {
      duration: 0.3,
      autoAlpha: 1,
      display: 'flex',
      onStart: () => {
        if (botTypingStatusMsg) botTypingStatusMsg.textContent = currentTurn.typingText;
      }
    }, '+=0.3')
    .to({}, { duration: 1.2 })
    .to(botTypingRow, { duration: 0.2, autoAlpha: 0, display: 'none' })
    .to(botChatTurnBox, {
      duration: 0.5,
      autoAlpha: 1,
      y: 0,
      display: 'flex',
      ease: 'power2.out',
      onStart: () => {
        if (botBubbleInnerHtml) botBubbleInnerHtml.innerHTML = currentTurn.botResponseHtml;
      }
    })
    .to({}, { duration: 2.8 });
};

runRevisedChatSimulationLoop();

// -------------------------------------------------------------
// 6. NAVIGATION & FORM HANDLERS
// -------------------------------------------------------------
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
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Thank you! Kanta team will be in touch with you shortly.");
});
