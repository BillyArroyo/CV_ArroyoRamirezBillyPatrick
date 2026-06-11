/**
 * BaseComponent — abstract base class for UI components.
 * Establishes the component lifecycle: mount → render → bindEvents.
 */
export class BaseComponent {
  #selector;
  #mounted = false;

  constructor(selector) {
    if (new.target === BaseComponent) {
      throw new TypeError('BaseComponent cannot be instantiated directly.');
    }
    this.#selector = selector;
    this.root = document.querySelector(selector);

    if (!this.root) {
      console.warn(`[${this.constructor.name}] element "${selector}" not found in DOM.`);
    }
  }

  /** Override to return or update DOM. */
  render() {}

  /** Override to attach event listeners. */
  bindEvents() {}

  /** Calls render() then bindEvents(). Idempotent. */
  mount() {
    if (this.#mounted || !this.root) return this;
    this.render();
    this.bindEvents();
    this.#mounted = true;
    return this;
  }

  /** Remove listeners and clean up. Override in subclass. */
  destroy() {
    this.#mounted = false;
  }

  isMounted() { return this.#mounted; }

  toString() { return `[${this.constructor.name}(${this.#selector})]`; }
}
