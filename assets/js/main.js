document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navLinks || !menuToggle) {
    return;
  }

  const toggleMenu = () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  };

  menuToggle.addEventListener('click', toggleMenu);

  document.addEventListener('click', event => {
    if (!event.target.closest('nav')) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
});
