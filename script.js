// ============================================
// CONFIG — edit these to update contact details site-wide
// ============================================
const CONFIG = {
  email: "phiwokuhlelihle9@gmail.com",
  phone: "+27 76 619 2072",
  linkedin: "https://www.linkedin.com/in/phiwokuhle-lihle-nkohla-"
};

// ============================================
// SKILLS DATA
// ============================================
const ICONS = {
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.4"/><rect x="17" y="13" width="4" height="6" rx="1.4"/><path d="M19 19v1a3 3 0 0 1-3 3h-3"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/></svg>',
  keyboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12a8 8 0 1 1-3.3-6.5L21 4l-1 3.6A7.96 7.96 0 0 1 21 12Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 19a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.6"/><path d="M15.8 12.2A5.4 5.4 0 0 1 21.5 19"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4L15 12l-2.3-2.3Z"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4h3a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 0 0 3h4v4a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 0-3 0v3H4v-4a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 0 0-3H4V7a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 0 2-3Z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10a8 8 0 0 1 14-4.9M20 14a8 8 0 0 1-14 4.9"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
  atom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/></svg>',
  mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 6 3 12l5 6M16 6l5 6-5 6"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20l4-1 11-11a2 2 0 0 0-3-3L5 16l-1 4Z"/><path d="M14 6l3 3"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="6" r="3"/><rect x="12" y="3" width="6" height="6" rx="1.5"/><rect x="6" y="12" width="6" height="6" rx="1.5"/><circle cx="15" cy="15" r="3"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 11l2.5-2.5L13 11l3-3"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 3.1l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V2a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>'
};

const SKILL_GROUPS = [
  {
    title: "Technical Skills",
    skills: [
      { label: "React Native", icon: ICONS.atom },
      { label: "Kotlin", icon: ICONS.mobile },
      { label: "JavaScript", icon: ICONS.code },
      { label: "HTML & CSS", icon: ICONS.layout },
      { label: "UI/UX Design", icon: ICONS.pen },
      { label: "Figma", icon: ICONS.grid },
      { label: "Live Media Presentation (ProPresenter)", icon: ICONS.monitor },
      { label: "PastorPro", icon: ICONS.gear },
      { label: "Microsoft Office", icon: ICONS.briefcase }
    ]
  },
  {
    title: "IT Support Skills",
    skills: [
      { label: "IT Support & Troubleshooting", icon: ICONS.tool },
      { label: "Data Capturing", icon: ICONS.keyboard },
      { label: "Customer Service", icon: ICONS.headset }
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      { label: "Problem Solving", icon: ICONS.puzzle },
      { label: "Communication", icon: ICONS.chat },
      { label: "Teamwork", icon: ICONS.people },
      { label: "Time Management", icon: ICONS.clock },
      { label: "Attention to Detail", icon: ICONS.target },
      { label: "Adaptability", icon: ICONS.refresh }
    ]
  }
];

function renderSkills(){
  const wrap = document.getElementById("skillsGroups");
  if (!wrap) return;
  wrap.innerHTML = SKILL_GROUPS.map(group => `
    <div class="skill-group">
      <p class="skill-group-title reveal">${group.title}</p>
      <div class="skills-grid">
        ${group.skills.map((s, i) => `
          <div class="skill-card" style="transition-delay:${(i % 7) * 40}ms">
            <span class="skill-icon">${s.icon}</span>
            <span class="skill-label">${s.label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal(){
  const targets = document.querySelectorAll(".reveal, .skill-card, .skill-group-title");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(t => io.observe(t));
}

// ============================================
// ACTIVE SECTION HIGHLIGHT (index rail + mobile)
// ============================================
function initSectionSpy(){
  const sections = document.querySelectorAll("main .section");
  const railTabs = document.querySelectorAll(".rail-tab");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  const setActive = (id) => {
    railTabs.forEach(t => t.classList.toggle("active", t.dataset.section === id));
    mobileLinks.forEach(l => l.classList.toggle("active", l.dataset.section === id));
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { threshold: 0.4 });

  sections.forEach(s => io.observe(s));
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu(){
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ============================================
// CONTACT FORM (mailto fallback — no backend required)
// ============================================
function initContactForm(){
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Opportunity enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    note.textContent = "Opening your email app to send this message…";
  });
}

// ============================================
// FOOTER YEAR
// ============================================
function initYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  initReveal();
  initSectionSpy();
  initMobileMenu();
  initContactForm();
  initYear();
});