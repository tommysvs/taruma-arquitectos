/**
 * projects.js
 * Carruseles de la página "Proyectos Destacados".
 * Lógica totalmente separada del HTML.
 */

class ProjectCarousel {
    /** @param {HTMLElement} el */
    constructor(el) {
        this.el      = el;
        this.track   = el.querySelector('.carousel__track');
        this.slides  = Array.from(el.querySelectorAll('.carousel__slide'));
        this.dots    = Array.from(el.querySelectorAll('.carousel__dot'));
        this.btnPrev = el.querySelector('.carousel__btn--prev');
        this.btnNext = el.querySelector('.carousel__btn--next');
        this.current = 0;
        this.total   = this.slides.length;
        this._timer  = null;

        if (!this.track || this.total === 0) return;

        this._bindEvents();
        this._render();
        this._startAuto();
    }

    // ── Navegación ─────────────────────────────────────────────

    goTo(index) {
        this.current = ((index % this.total) + this.total) % this.total;
        this._render();
    }

    prev() { this.goTo(this.current - 1); }
    next() { this.goTo(this.current + 1); }

    // ── Renderizado ────────────────────────────────────────────

    _render() {
        this.track.style.transform = `translateX(-${this.current * 100}%)`;
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('carousel__dot--active', i === this.current);
        });
    }

    // ── Eventos ────────────────────────────────────────────────

    _bindEvents() {
        this.btnPrev?.addEventListener('click', () => { this.prev(); this._resetAuto(); });
        this.btnNext?.addEventListener('click', () => { this.next(); this._resetAuto(); });

        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { this.goTo(i); this._resetAuto(); });
        });

        // Teclado (cuando el carrusel tiene foco)
        this.el.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft')  { this.prev(); this._resetAuto(); }
            if (e.key === 'ArrowRight') { this.next(); this._resetAuto(); }
        });

        // Swipe táctil
        let startX = 0;
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        this.track.addEventListener('touchend', (e) => {
            const delta = startX - e.changedTouches[0].clientX;
            if (Math.abs(delta) < 40) return;
            delta > 0 ? this.next() : this.prev();
            this._resetAuto();
        });
    }

    // ── Autoplay ───────────────────────────────────────────────

    _startAuto(ms = 5000) {
        this._timer = window.setInterval(() => this.next(), ms);
    }

    _stopAuto() {
        if (this._timer) { window.clearInterval(this._timer); this._timer = null; }
    }

    _resetAuto() {
        this._stopAuto();
        this._startAuto();
    }
}

// ── Inicialización ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('[data-project-carousel]');

    if (carousels.length === 0) return;

    carousels.forEach((el) => {
        try {
            new ProjectCarousel(el);
        } catch (err) {
            console.error('Error al inicializar carrusel de proyecto:', err);
        }
    });
});
