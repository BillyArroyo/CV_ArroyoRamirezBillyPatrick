/**
 * TypingEffect — cycles through an array of strings
 * with a typewriter animation on a target element.
 */
export class TypingEffect {
  #el;
  #texts;
  #index     = 0;
  #charIndex = 0;
  #deleting  = false;
  #timer     = null;

  static #TYPING_SPEED  = 110;
  static #DELETING_SPEED = 55;
  static #PAUSE_AFTER   = 2200;
  static #PAUSE_BEFORE  = 400;

  constructor(el, texts) {
    if (!el || !texts?.length) throw new Error('TypingEffect requires a DOM element and non-empty texts array');
    this.#el    = el;
    this.#texts = texts;
  }

  start() {
    this.#tick();
    return this;
  }

  stop() {
    if (this.#timer) clearTimeout(this.#timer);
  }

  #tick() {
    const current = this.#texts[this.#index];

    if (this.#deleting) {
      this.#el.textContent = current.substring(0, this.#charIndex - 1);
      this.#charIndex--;

      if (this.#charIndex === 0) {
        this.#deleting = false;
        this.#index    = (this.#index + 1) % this.#texts.length;
        this.#timer    = setTimeout(() => this.#tick(), TypingEffect.#PAUSE_BEFORE);
        return;
      }
    } else {
      this.#el.textContent = current.substring(0, this.#charIndex + 1);
      this.#charIndex++;

      if (this.#charIndex === current.length) {
        this.#timer = setTimeout(() => {
          this.#deleting = true;
          this.#tick();
        }, TypingEffect.#PAUSE_AFTER);
        return;
      }
    }

    const delay = this.#deleting ? TypingEffect.#DELETING_SPEED : TypingEffect.#TYPING_SPEED;
    this.#timer = setTimeout(() => this.#tick(), delay);
  }
}
