/**
 * gallery.js
 * Lightbox/modal para la página "Galería de Fotos".
 * Lógica totalmente separada del HTML.
 */

class GalleryLightbox {
    constructor() {
        this.modal    = document.getElementById('gallery-modal');
        this.imgEl    = document.getElementById('modal-img');
        this.caption  = document.getElementById('modal-caption');
        this.btnClose = document.getElementById('modal-close');
        this.btnPrev  = document.getElementById('modal-prev');
        this.btnNext  = document.getElementById('modal-next');

        /** @type {HTMLElement[]} */
        this.cards   = [];
        this.current = 0;

        if (!this.modal) {
            console.error('GalleryLightbox: no se encontró #gallery-modal en el DOM.');
            return;
        }

        this._collectCards();
        this._bindEvents();
    }

    // ── Recolección de tarjetas ────────────────────────────────

    _collectCards() {
        this.cards = Array.from(document.querySelectorAll('.img-card[data-src]'));
    }

    // ── Apertura / cierre ─────────────────────────────────────

    /**
     * @param {number} index
     */
    open(index) {
        if (index < 0 || index >= this.cards.length) {
            console.warn('GalleryLightbox: índice fuera de rango:', index);
            return;
        }

        const card = this.cards[index];
        const src  = card.dataset.src?.trim();
        const alt  = card.dataset.alt?.trim() ?? '';

        if (!src) {
            console.warn('GalleryLightbox: tarjeta sin data-src válido.');
            return;
        }

        this.current = index;
        this.imgEl.src = src;
        this.imgEl.alt = alt;
        this.caption.textContent = alt;

        this.modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        this.btnClose.focus();
    }

    close() {
        this.modal.setAttribute('hidden', '');
        this.imgEl.src = '';
        this.imgEl.alt = '';
        document.body.style.overflow = '';

        // Devolver foco a la tarjeta que abrió el modal
        this.cards[this.current]?.focus();
    }

    prev() {
        this.open((this.current - 1 + this.cards.length) % this.cards.length);
    }

    next() {
        this.open((this.current + 1) % this.cards.length);
    }

    // ── Eventos ───────────────────────────────────────────────

    _bindEvents() {
        // Clic en tarjeta
        document.querySelector('.gallery-section')?.addEventListener('click', (e) => {
            const card = e.target.closest('.img-card[data-src]');
            if (!card) return;
            const index = this.cards.indexOf(card);
            if (index !== -1) this.open(index);
        });

        // Teclado sobre tarjeta (Enter / Space)
        document.querySelector('.gallery-section')?.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const card = e.target.closest('.img-card[data-src]');
            if (!card) return;
            e.preventDefault();
            const index = this.cards.indexOf(card);
            if (index !== -1) this.open(index);
        });

        // Controles del modal
        this.btnClose?.addEventListener('click', () => this.close());
        this.btnPrev?.addEventListener('click',  () => this.prev());
        this.btnNext?.addEventListener('click',  () => this.next());

        // Clic en el fondo del modal
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        // Teclado global
        document.addEventListener('keydown', (e) => {
            if (this.modal?.hasAttribute('hidden')) return;
            if (e.key === 'Escape')     this.close();
            if (e.key === 'ArrowLeft')  this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Swipe táctil en el modal
        let startX = 0;
        this.modal?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        this.modal?.addEventListener('touchend', (e) => {
            const delta = startX - e.changedTouches[0].clientX;
            if (Math.abs(delta) < 40) return;
            delta > 0 ? this.next() : this.prev();
        });
    }
}

// ── Inicialización ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    try {
        new GalleryLightbox();
    } catch (err) {
        console.error('Error al inicializar GalleryLightbox:', err);
    }
});
