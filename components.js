/* CEPI FOUNDATION — Shared Components (flat structure) */

const LOGO_MARK = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 8 A17 17 0 1 0 32 32" stroke="#1C1C1C" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M29 12 A12 12 0 1 0 29 28" stroke="#1C1C1C" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.55"/>
  <path d="M26 15 A8 8 0 1 0 26 25" stroke="#1C1C1C" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.3"/>
  <polygon points="32,16 38,20 32,24" fill="#E5231B"/>
</svg>`;

function renderNav(activePage) {
  const navHTML = `
  <nav>
    <a href="index.html" class="nav-logo">
      ${LOGO_MARK}
      <div class="nav-brand">CEPI<span>&#9658;</span></div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li class="nav-dropdown">
        <a href="programs.html" ${activePage==='programs'?'class="active"':''}>Programs</a>
        <div class="dropdown-menu">
          <a href="p-migrant-workers.html">Migrant Workers</a>
          <a href="p-children.html">Children of Migrant Workers</a>
          <a href="p-skills.html">Skills &amp; Employability</a>
          <a href="p-research.html">Research &amp; Innovation</a>
          <a href="p-partnerships.html">Partnerships &amp; Capacity</a>
          <a href="p-anti-trafficking.html">Anti-Trafficking</a>
        </div>
      </li>
      <li><a href="work.html" ${activePage==='work'?'class="active"':''}>Our Work</a></li>
      <li><a href="research.html" ${activePage==='research'?'class="active"':''}>Research</a></li>
      <li><a href="partner.html" ${activePage==='partner'?'class="active"':''}>Partner</a></li>
      <li><a href="contact.html" class="nav-cta ${activePage==='contact'?'active':''}">Contact</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Open menu" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-nav" id="mobileNav">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="programs.html">Programs</a>
    <div class="mobile-sub">
      <a href="p-migrant-workers.html">↳ Migrant Workers</a>
      <a href="p-children.html">↳ Children</a>
      <a href="p-skills.html">↳ Skills &amp; Employability</a>
      <a href="p-research.html">↳ Research &amp; Innovation</a>
      <a href="p-partnerships.html">↳ Partnerships</a>
      <a href="p-anti-trafficking.html">↳ Anti-Trafficking</a>
    </div>
    <a href="work.html">Our Work</a>
    <a href="research.html">Research</a>
    <a href="partner.html">Partner</a>
    <a href="contact.html" class="mobile-cta">Contact</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const btn = document.querySelector('.nav-hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function renderFooter() {
  const footerHTML = `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="nav-brand" style="color:#fff;">CEPI<span style="color:#E5231B">&#9658;</span></div>
        <p>Catalysing innovative solutions for migrant workers and their families across India.</p>
        <p style="margin-top:12px;font-size:0.75rem;color:rgba(255,255,255,0.2);">
          CIN U85499DL2024NPL429997<br>Registered under 12A &amp; 80G
        </p>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <ul>
          <li><a href="p-migrant-workers.html">Migrant Workers</a></li>
          <li><a href="p-children.html">Children</a></li>
          <li><a href="p-skills.html">Skills &amp; Employability</a></li>
          <li><a href="p-research.html">Research &amp; Innovation</a></li>
          <li><a href="p-partnerships.html">Partnerships</a></li>
          <li><a href="p-anti-trafficking.html">Anti-Trafficking</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Organisation</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="work.html">Our Work</a></li>
          <li><a href="research.html">Research</a></li>
          <li><a href="partner.html">Partner with Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:cepifoundation@outlook.in">cepifoundation@outlook.in</a></li>
          <li><a href="contact.html">Get in Touch</a></li>
          <li><a href="http://www.empowerpeople.in" target="_blank" rel="noopener">Empower People</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Catalysing Empower People Initiatives Foundation</p>
      <p><a href="mailto:cepifoundation@outlook.in">cepifoundation@outlook.in</a></p>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function initAnimations() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

function loadBot() {
  const s = document.createElement('script');
  s.src = 'https://cdn.jotfor.ms/agent/embedjs/019b91f2726d7a5a8a92d54689ed76caf9f8/embed.js';
  s.async = true;
  document.body.appendChild(s);
}

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  loadBot();
  document.addEventListener('click', e => {
    const nav = document.getElementById('mobileNav');
    if (nav && nav.classList.contains('open') &&
        !nav.contains(e.target) && !e.target.closest('.nav-hamburger')) {
      nav.classList.remove('open');
      document.querySelector('.nav-hamburger').classList.remove('open');
    }
  });
});
