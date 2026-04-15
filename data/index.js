import indexPageData from './pages/indexpage';
import aboutPageData from './pages/aboutpage';
import portfolioPageData from './pages/portfoliopage';
import processesPageData from './pages/processespage';
import servicesPageData from './pages/servicespage';
import blogPageData from './pages/blogpage';
import contactPageData from './pages/contactpage';
import quotationsPageData from './pages/quotationspage';
import projectsPageData from './pages/projectspage';
import galleryPageData from './pages/gallerypage';

const baseHero = {
    heroShowBreadcrumbs: true
};

const pageData = {
    '/index.html': indexPageData,
    '/about.html': {
        ...aboutPageData,
        isAbout: true,
        ...baseHero
    },
    '/portfolio.html': {
        ...portfolioPageData,
        ...baseHero
    },
    '/processes.html': {
        ...processesPageData,
        isProcesses: true,
        ...baseHero
    },
    '/services.html': {
        ...servicesPageData,
        isServices: true,
        ...baseHero
    },
    '/projects.html': {
        ...projectsPageData,
        isProjects: true,
        ...baseHero
    },
    '/gallery.html': {
        ...galleryPageData,
        isGallery: true,
        ...baseHero
    },
    '/blog.html': {
        ...blogPageData,
        isBlog: true,
        ...baseHero
    },
    '/contact.html': {
        ...contactPageData,
        isContact: true,
        ...baseHero
    },
    '/quotations.html': {
        ...quotationsPageData,
        isQuotations: true,
        heroShowBreadcrumbs: true
    }
};

const getData = (page)=>{
    console.log(`Cargando la data de página ${page}`);
    return pageData[page] ?? {};
};

export default getData;