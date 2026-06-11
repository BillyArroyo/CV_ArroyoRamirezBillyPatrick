/**
 * ParticleEngine — canvas-based particle background.
 * Uses OOP: a Particle class managed by the engine.
 */
class Particle {
  constructor(canvas) {
    this._canvas = canvas;
    this.reset();
  }

  reset() {
    this.x      = Math.random() * this._canvas.width;
    this.y      = Math.random() * this._canvas.height;
    this.size   = Math.random() * 1.8 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.45 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0)                   this.x = this._canvas.width;
    if (this.x > this._canvas.width)  this.x = 0;
    if (this.y < 0)                   this.y = this._canvas.height;
    if (this.y > this._canvas.height) this.y = 0;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(0, 245, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  distanceTo(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

export class ParticleEngine {
  static #MAX_PARTICLES = 90;
  static #CONNECTION_DIST = 110;

  #canvas;
  #ctx;
  #particles = [];
  #animId    = null;
  #running   = false;

  constructor(canvas) {
    this.#canvas = canvas;
    this.#ctx    = canvas.getContext('2d');
    this.#resize();
    this.#listen();
  }

  start() {
    if (this.#running) return this;
    this.#running = true;
    this.#init();
    this.#loop();
    return this;
  }

  stop() {
    this.#running = false;
    if (this.#animId) cancelAnimationFrame(this.#animId);
  }

  #init() {
    this.#particles = Array.from(
      { length: ParticleEngine.#MAX_PARTICLES },
      () => new Particle(this.#canvas),
    );
  }

  #loop() {
    if (!this.#running) return;
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    this.#particles.forEach(p => { p.update(); p.draw(this.#ctx); });
    this.#drawConnections();
    this.#animId = requestAnimationFrame(() => this.#loop());
  }

  #drawConnections() {
    const max = ParticleEngine.#CONNECTION_DIST;
    for (let i = 0; i < this.#particles.length; i++) {
      for (let j = i + 1; j < this.#particles.length; j++) {
        const dist = this.#particles[i].distanceTo(this.#particles[j]);
        if (dist < max) {
          const alpha = (1 - dist / max) * 0.18;
          this.#ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
          this.#ctx.lineWidth   = 0.7;
          this.#ctx.beginPath();
          this.#ctx.moveTo(this.#particles[i].x, this.#particles[i].y);
          this.#ctx.lineTo(this.#particles[j].x, this.#particles[j].y);
          this.#ctx.stroke();
        }
      }
    }
  }

  #resize() {
    this.#canvas.width  = window.innerWidth;
    this.#canvas.height = window.innerHeight;
  }

  #listen() {
    window.addEventListener('resize', () => {
      this.#resize();
      this.#init();
    });
  }
}
