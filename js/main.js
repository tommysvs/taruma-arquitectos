const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

if (hamburger && nav) {
    const closeNav = () => {
        nav.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menú de navegación");
    };

    const toggleNav = () => {
        const isOpen = nav.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        hamburger.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    };

    hamburger.addEventListener("click", toggleNav);

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Node)) {
            return;
        }

        if (!nav.contains(target) && !hamburger.contains(target)) {
            closeNav();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeNav();
        }
    });
}

const homeCarouselElement = document.querySelector("[data-carousel]");

if (homeCarouselElement) {
    const track = homeCarouselElement.querySelector(".carousel-track");
    const slides = Array.from(homeCarouselElement.querySelectorAll(".carousel-slide"));
    const dotsContainer = homeCarouselElement.querySelector(".carousel-dots");

    if (!track || !dotsContainer || slides.length === 0) {
        throw new Error("Carrusel: estructura incompleta en el home.");
    }

    let currentIndex = 0;
    let autoplayId = null;
    const autoplayDelay = Number(homeCarouselElement.dataset.autoplay || 3400);

    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Ir al slide ${index + 1}`);
        dot.setAttribute("aria-pressed", "false");
        dot.addEventListener("click", () => goTo(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(homeCarouselElement.querySelectorAll(".carousel-dot"));

    function render() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            const isActive = index === currentIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    function goTo(index) {
        currentIndex = (index + slides.length) % slides.length;
        render();
    }

    function next() {
        goTo(currentIndex + 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayId = window.setInterval(next, autoplayDelay);
    }

    function stopAutoplay() {
        if (autoplayId) {
            window.clearInterval(autoplayId);
            autoplayId = null;
        }
    }

    homeCarouselElement.addEventListener("mouseenter", stopAutoplay);
    homeCarouselElement.addEventListener("mouseleave", startAutoplay);
    homeCarouselElement.addEventListener("focusin", stopAutoplay);
    homeCarouselElement.addEventListener("focusout", startAutoplay);

    render();
    startAutoplay();
}