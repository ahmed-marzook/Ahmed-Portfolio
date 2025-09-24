document.addEventListener('DOMContentLoaded', () => {
  const initRevealAnimations = () => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!revealElements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const showElement = element => {
      element.classList.add('reveal-visible');
    };

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      revealElements.forEach(showElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, entryObserver) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          showElement(entry.target);
          entryObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
      }
    );

    revealElements.forEach(element => observer.observe(element));

    const handleMotionPreferenceChange = event => {
      if (event.matches) {
        revealElements.forEach(showElement);
      }
    };

    if (typeof prefersReducedMotion.addEventListener === 'function') {
      prefersReducedMotion.addEventListener('change', handleMotionPreferenceChange);
    } else if (typeof prefersReducedMotion.addListener === 'function') {
      prefersReducedMotion.addListener(handleMotionPreferenceChange);
    }
  };

  initRevealAnimations();

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
