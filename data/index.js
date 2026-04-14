import indexPageData from './pages/indexpage';

const baseHero = {
    heroShowBreadcrumbs: true
};

const pageData = {
    '/index.html': indexPageData,
    '/about.html': {
        isAbout: true,
        heroTitle: 'Quiénes somos',
        heroSubtitle: 'Conoce nuestra historia, visión de diseño y compromiso con cada proyecto.',
        heroBreadcrumbLabel: 'Quiénes somos',
        ...baseHero
    },
    '/portfolio.html': {
        isPortfolio: true,
        heroTitle: 'Portafolio',
        heroSubtitle: 'Explora proyectos que integran funcionalidad, estética y contexto.',
        heroBreadcrumbLabel: 'Portafolio',
        ...baseHero
    },
    '/processes.html': {
        isProcesses: true,
        heroTitle: 'Procesos',
        heroSubtitle: 'Descubre nuestro método de trabajo, desde la idea hasta la ejecución.',
        heroBreadcrumbLabel: 'Procesos',
        ...baseHero
    },
    '/services.html': {
        isServices: true,
        heroTitle: 'Servicios',
        heroSubtitle: 'Soluciones integrales de arquitectura, planificación y desarrollo.',
        heroBreadcrumbLabel: 'Servicios',
        ...baseHero
    },
    '/projects.html': {
        isProjects: true,
        heroTitle: 'Proyectos destacados',
        heroSubtitle: 'Una selección de obras representativas de nuestra práctica.',
        heroBreadcrumbLabel: 'Proyectos Destacados',
        ...baseHero
    },
    '/gallery.html': {
        isGallery: true,
        heroTitle: 'Galería',
        heroSubtitle: 'Imágenes de espacios que reflejan detalle, identidad y calidad.',
        heroBreadcrumbLabel: 'Galería',
        ...baseHero
    },
    '/blog.html': {
        isBlog: true,
        heroTitle: 'Blog y noticias',
        heroSubtitle: 'Novedades, tendencias e ideas sobre arquitectura y ciudad.',
        heroBreadcrumbLabel: 'Blog y Noticias',
        ...baseHero
    },
    '/contact.html': {
        isContact: true,
        heroTitle: 'Contacto',
        heroSubtitle: 'Conversemos sobre tu proyecto y los objetivos que quieres alcanzar.',
        heroBreadcrumbLabel: 'Contacto',
        ...baseHero
    },
    '/quotations.html': {
        isQuotations: true,
        heroTitle: 'Cotizaciones',
        heroSubtitle: 'Solicita una propuesta adaptada a tus necesidades y alcance.',
        heroBreadcrumbLabel: 'Cotizaciones',
        heroShowBreadcrumbs: true
    }
};

const getData = (page)=>{
    console.log(`Cargando la data de página ${page}`);
    return pageData[page] ?? {};
};

export default getData;