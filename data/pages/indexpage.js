export default {
	isHome: true,
	homeHeroTitle: 'Despacho especializado en diseño arquitectónico',
	featuredProjects: {
		title: 'Proyectos destacados',
		carouselAriaLabel: 'Paginacion del carrusel',
		slides: [
			{ src: './assets/img/proyecto1.jpg', alt: 'Plaza Serrano' },
			{ src: './assets/img/proyecto2.jpg', alt: 'Proyecto 2' },
			{ src: './assets/img/proyecto3.jpg', alt: 'Cafeteria' },
			{ src: './assets/img/Cabañas The Rubra4.png', alt: 'Cabañas the Rubra' },
			{ src: './assets/img/Complejo Deportivo1.png', alt: 'Complejo Deportivo' },
			{ src: './assets/img/Complejo Habitacional Lipidario2.png', alt: 'Complejo Habitacional Lipidario' },
			{ src: './assets/img/Complejo Turistico Colonial1.png', alt: 'Complejo Turistico Colonial' }
		]
	},
	homeAbout: {
		title: 'Quiénes somos',
		cards: [
			{
				title: 'Nuestra misión',
				text: 'Somos un despacho de arquitectura comprometido con la excelencia en el diseño, la funcionalidad y la sostenibilidad. Nuestro enfoque combina creatividad, técnica y sensibilidad al entorno.'
			},
			{
				title: 'Nuestra experiencia',
				text: 'Con más de una década de experiencia, hemos desarrollado proyectos residenciales, comerciales y urbanos que reflejan nuestra pasión por la arquitectura contemporánea y responsable.'
			},
			{
				title: 'Nuestro compromiso',
				text: 'Nos dedicamos a transformar espacios en experiencias, con soluciones innovadoras que generan valor a nuestros clientes y contribuyen al desarrollo sostenible de las comunidades.'
			}
		]
	},
	homeServices: {
		title: 'Servicios principales',
		links: [
			{ label: 'Servicio de diseño', href: 'services.html' },
			{ label: 'Construcción y remodelación', href: 'services.html' },
			{ label: 'Planeación y gestión de proyectos', href: 'services.html' },
			{ label: 'Desarrollo urbano y paisajismo', href: 'services.html' }
		]
	},
	homeNews: {
		title: 'Noticias y eventos',
		items: [
			{
				date: 'Enero 2025:',
				text: 'Fundación oficial de Taruma Arquitectos.'
			},
			{
				date: 'Marzo 2025:',
				text: 'Taruma finaliza su primer proyecto.'
			},
			{
				date: 'Diciembre 2025:',
				text: 'Se busca la expansion de Taruma.'
			}
		]
	}
};