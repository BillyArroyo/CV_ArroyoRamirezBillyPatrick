/**
 * app.js — Bootstrap del portafolio.
 *
 * Arquitectura OOP en capas:
 *   Data → Models → Services → Utils → Components → App
 *
 * Para desarrollo local necesitas un servidor HTTP:
 *   npx serve .    ó    VS Code Live Server
 * (Los ES modules no funcionan en file://)
 */

import { portfolioData }    from './data/portfolio.js';
import { PortfolioService } from './services/PortfolioService.js';
import { ParticleEngine }   from './utils/ParticleEngine.js';
import { TypingEffect }     from './utils/TypingEffect.js';
import { CursorEffect }     from './utils/CursorEffect.js';
import { ScrollObserver }   from './utils/ScrollObserver.js';
import { Navbar }           from './components/Navbar.js';

/**
 * App — singleton that bootstraps and wires all layers.
 * Uses private class fields (#) to enforce encapsulation.
 */
class App {
  static #instance = null;

  #initialized = false;
  #services    = new Map();
  #components  = new Map();
  #effects     = [];

  /** Singleton access */
  static getInstance() {
    if (!App.#instance) App.#instance = new App();
    return App.#instance;
  }

  async init() {
    if (this.#initialized) return;

    this.#initServices();
    this.#initEffects();
    this.#initComponents();
    this.#initialized = true;

    console.info(
      '%c✓ Billy Arroyo — Portfolio loaded',
      'color:#00f5ff;font-weight:bold;',
    );
  }

  // ── Service Layer ──────────────────────────────────────────────
  #initServices() {
    this.#services.set('portfolio', new PortfolioService(portfolioData));
  }

  // ── Effects Layer ──────────────────────────────────────────────
  #initEffects() {
    // Particle background
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
      this.#effects.push(new ParticleEngine(canvas).start());
    }

    // Typing animation
    const typingEl = document.getElementById('typingText');
    if (typingEl) {
      const roles = this.#services.get('portfolio').getTypingRoles();
      this.#effects.push(new TypingEffect(typingEl, roles).start());
    }

    // Custom cursor
    this.#effects.push(new CursorEffect().init());

    // Scroll-based behaviors (reveal, progress, active link, skill bars)
    this.#effects.push(new ScrollObserver().init());
  }

  // ── Component Layer ────────────────────────────────────────────
  #initComponents() {
    const navbar = new Navbar('#navbar').mount();
    this.#components.set('navbar', navbar);
  }

  // ── Public API ─────────────────────────────────────────────────
  getService(name)   { return this.#services.get(name); }
  getComponent(name) { return this.#components.get(name); }
}

// Boot on DOM ready
const app = App.getInstance();
document.addEventListener('DOMContentLoaded', () => app.init());

// Expose for console debugging
window.portfolioApp = app;
