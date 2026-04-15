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