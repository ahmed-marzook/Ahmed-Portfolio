document.addEventListener('DOMContentLoaded', () => {
    const initRevealAnimations = () => {
        const revealElements = Array.from(document.querySelectorAll('[data-reveal]'));

        if (!revealElements.length) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        const pendingElements = new Set(revealElements);

        const showElement = element => {
            element.classList.add('reveal-visible');
            pendingElements.delete(element);
        };

        let observer;
        let scrollRafId = null;

        const runVisibilityCheck = () => {
            scrollRafId = null;

            if (!pendingElements.size) {
                cleanup();
                return;
            }

            const viewportHeight =
                window.innerHeight || document.documentElement.clientHeight || 0;
            const activationPoint = viewportHeight * 0.85;
            const topBoundary = viewportHeight * 0.05;

            pendingElements.forEach(element => {
                const rect = element.getBoundingClientRect();

                if (rect.top <= activationPoint && rect.bottom >= topBoundary) {
                    showElement(element);
                    if (observer) {
                        observer.unobserve(element);
                    }
                }
            });

            if (!pendingElements.size) {
                cleanup();
            }
        };

        const scheduleVisibilityCheck = () => {
            if (scrollRafId !== null) {
                return;
            }

            scrollRafId = window.requestAnimationFrame(runVisibilityCheck);
        };

        const cleanup = () => {
            if (scrollRafId !== null) {
                window.cancelAnimationFrame(scrollRafId);
                scrollRafId = null;
            }

            window.removeEventListener('scroll', scheduleVisibilityCheck);
            window.removeEventListener('resize', scheduleVisibilityCheck);

            if (observer) {
                observer.disconnect();
            }
        };

        const showAll = () => {
            Array.from(pendingElements).forEach(showElement);
            cleanup();
        };

        if (prefersReducedMotion.matches) {
            showAll();
            return;
        }

        if ('IntersectionObserver' in window) {
            observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            showElement(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });

                    if (!pendingElements.size) {
                        cleanup();
                    }
                },
                {
                    rootMargin: '0px 0px -12% 0px',
                    threshold: 0.2,
                }
            );

            pendingElements.forEach(element => observer.observe(element));
        }

        window.addEventListener('scroll', scheduleVisibilityCheck, {
            passive: true,
        });
        window.addEventListener('resize', scheduleVisibilityCheck);

        scheduleVisibilityCheck();

        const handleMotionPreferenceChange = event => {
            if (event.matches) {
                showAll();
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