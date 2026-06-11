import { BaseComponent } from './BaseComponent.js';

/**
 * Navbar — handles mobile menu toggle and smooth scroll.
 */
export class Navbar extends BaseComponent {
  #hamburger;
  #navLinks;
  #isOpen = false;

  constructor(selector) {
    super(selector);
    this.#hamburger = document.getElementById('hamburger');
    this.#navLinks  = document.getElementById('navLinks');
  }

  render() {
    // HTML is server-rendered; nothing to render here.
  }

  bindEvents() {
    this.#hamburger?.addEventListener('click', () => this.#toggleMenu());

    // Close menu when a nav link is clicked
    this.#navLinks?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => this.#closeMenu());
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.#isOpen) this.#closeMenu();
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  #toggleMenu() {
    this.#isOpen ? this.#closeMenu() : this.#openMenu();
  }

  #openMenu() {
    this.#isOpen = true;
    this.#navLinks?.classList.add('is-open');
    this.#hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  #closeMenu() {
    this.#isOpen = false;
    this.#navLinks?.classList.remove('is-open');
    this.#hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}
