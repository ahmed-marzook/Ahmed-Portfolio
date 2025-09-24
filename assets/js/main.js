document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav__links');
  const menuToggle = document.querySelector('.nav__toggle');

  if (!nav || !navLinks || !menuToggle) {
    return;
  }

  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  menuToggle.addEventListener('click', event => {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.nav')) {
      closeMenu();
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
