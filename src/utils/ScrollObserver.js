/**
 * ScrollObserver — handles all scroll-based behaviors:
 *  1. Reveal animations for .reveal elements
 *  2. Navbar scrolled state
 *  3. Scroll-progress bar
 *  4. Active nav link highlighting
 *  5. Skill bar animation trigger
 */
export class ScrollObserver {
  #observer;
  #skillsObserver;
  #navbar;
  #progressBar;
  #navLinks;
  #sections;

  init() {
    this.#navbar      = document.getElementById('navbar');
    this.#progressBar = document.getElementById('scrollProgress');
    this.#navLinks    = document.querySelectorAll('.navbar__links a');
    this.#sections    = document.querySelectorAll('section[id]');

    this.#initReveal();
    this.#initSkillBars();
    this.#initScrollEvents();
    return this;
  }

  #initReveal() {
    this.#observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          this.#observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => this.#observer.observe(el));
  }

  #initSkillBars() {
    this.#skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll('.skill-bar__fill').forEach((fill) => {
            fill.classList.add('is-animated');
          });
          this.#skillsObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );

    const levelsSection = document.querySelector('.skills-levels');
    if (levelsSection) this.#skillsObserver.observe(levelsSection);
  }

  #initScrollEvents() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Progress bar
      if (this.#progressBar) {
        this.#progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
      }

      // Navbar scrolled class
      if (this.#navbar) {
        this.#navbar.classList.toggle('is-scrolled', scrollTop > 60);
      }

      // Active nav link
      this.#updateActiveLink(scrollTop);
    }, { passive: true });
  }

  #updateActiveLink(scrollTop) {
    let current = '';
    this.#sections.forEach((section) => {
      if (scrollTop >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    this.#navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  }
}
