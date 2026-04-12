import indexPageData from './pages/indexpage';

const getData = (page)=>{
    console.log(`Cargando la data de página ${page}`);
    switch (page){
        case "/index.html":
            return indexPageData;
        case "/about.html":
            return {}
        case "/portfolio.html":
            return { }
        case "/processes.html":
            return { }
        case "/services.html":
            return { }
        case "/projects.html":
            return { }
        case "/gallery.html":
            return { }
        case "/blog.html":
            return { }
        case "/contact.html":
            return { }
        case "/quotations.html":
            return { }
    }
    return {};
}

export default getData;