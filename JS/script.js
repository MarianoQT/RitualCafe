document.addEventListener('DOMContentLoaded', () => {
  const navList = document.querySelector('nav ul');
  const menuBtn = document.getElementById('menu-btn');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', navList.classList.contains('open'));
    });

    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navList.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const THEME_KEY = 'theme-preference';
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = themeBtn?.querySelector('.theme-icon');
  const themeLabel = themeBtn?.querySelector('.theme-label');
  const metaTheme = document.querySelector('meta#meta-theme-color');
  const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');
  const COLORS = { light: '#f4e9dd', dark: '#0e0907' };

  function setVisual(pref) {
    if (!themeBtn || !themeIcon || !themeLabel) return;

    if (pref === 'light') {
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Claro';
      themeBtn.title = 'Tema: claro';
      themeBtn.setAttribute('aria-label', 'Tema: claro');
    } else if (pref === 'dark') {
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Oscuro';
      themeBtn.title = 'Tema: oscuro';
      themeBtn.setAttribute('aria-label', 'Tema: oscuro');
    } else {
      themeIcon.textContent = '🖥️';
      themeLabel.textContent = 'Sistema';
      themeBtn.title = 'Tema: sistema';
      themeBtn.setAttribute('aria-label', 'Tema: sistema');
    }
  }

  function applyTheme(pref) {
    if (pref === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      metaTheme?.setAttribute('content', COLORS.light);
    } else if (pref === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      metaTheme?.setAttribute('content', COLORS.dark);
    } else {
      const sys = mediaDark.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', sys);
      metaTheme?.setAttribute('content', sys === 'dark' ? COLORS.dark : COLORS.light);
    }
    setVisual(pref);
  }

  function getStoredTheme() {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
  }

  function cycleTheme() {
    const current = getStoredTheme();
    const next = current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  applyTheme(getStoredTheme());

  mediaDark.addEventListener?.('change', () => {
    if (getStoredTheme() === 'system') applyTheme('system');
  });

  themeBtn?.addEventListener('click', cycleTheme);
});

(() => {
  const btn = document.getElementById('to-top');
  if (!btn) return;

  let ticking = false;
  const THRESHOLD = 200;

  function onScroll() {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      btn.classList.toggle('is-visible', window.scrollY > THRESHOLD);
      ticking = false;
    });
    ticking = true;
  }

  function scrollTop() {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduce ? 'auto' : 'smooth' });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  btn.addEventListener('click', scrollTop);
  onScroll();
})();
