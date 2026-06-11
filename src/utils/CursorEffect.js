/**
 * CursorEffect — custom cursor that follows the mouse
 * and reacts to interactive elements.
 */
export class CursorEffect {
  #cursor;
  #follower;
  #mouseX = 0;
  #mouseY = 0;

  init() {
    this.#cursor   = document.getElementById('cursor');
    this.#follower = document.getElementById('cursorFollower');

    if (!this.#cursor || !this.#follower) return this;

    // Detect touch devices — hide custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      this.#cursor.style.display   = 'none';
      this.#follower.style.display = 'none';
      return this;
    }

    this.#bindMouseMove();
    this.#bindHover();
    return this;
  }

  #bindMouseMove() {
    document.addEventListener('mousemove', (e) => {
      this.#mouseX = e.clientX;
      this.#mouseY = e.clientY;

      this.#cursor.style.left = `${e.clientX}px`;
      this.#cursor.style.top  = `${e.clientY}px`;

      // Follower lags slightly via CSS transition
      this.#follower.style.left = `${e.clientX}px`;
      this.#follower.style.top  = `${e.clientY}px`;
    });
  }

  #bindHover() {
    const interactive = 'a, button, .btn, .tag, .tech-badge, .skill-cat, .project-card, .stat-card, .contact-link, input, textarea';

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactive)) {
        this.#cursor.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactive)) {
        this.#cursor.classList.remove('is-hovering');
      }
    });

    document.addEventListener('mouseleave', () => {
      this.#cursor.style.opacity   = '0';
      this.#follower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      this.#cursor.style.opacity   = '1';
      this.#follower.style.opacity = '1';
    });
  }
}
