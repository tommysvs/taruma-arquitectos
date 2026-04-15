# Taruma Arquitectos - Portal Web

## Descripcion general
Este repositorio contiene la base de desarrollo del portal web de Taruma Arquitectos. Su objetivo es construir una presencia digital clara, profesional y escalable para fortalecer el posicionamiento del estudio, presentar sus servicios y proyectos, y facilitar el contacto con clientes potenciales.

El proyecto nace como una iniciativa estrategica para centralizar la informacion institucional de Taruma Arquitectos, destacando su enfoque en diseno arquitectonico, planificacion urbana y proyectos integrales en Honduras, con una vision que combina funcionalidad, estetica y sostenibilidad.

## Objetivo del portal
- Comunicar la identidad y propuesta de valor de Taruma Arquitectos.
- Presentar servicios, procesos, portafolio y proyectos de forma estructurada.
- Mejorar la visibilidad digital del estudio.
- Habilitar canales de contacto y solicitud de cotizaciones.

## Alcance funcional previsto
El portal esta planteado como un sitio multipagina con secciones principales:

- Inicio
- Nosotros
- Servicios
- Procesos
- Portafolio
- Proyectos
- Galeria
- Blog
- Contacto
- Cotizaciones

## Stack tecnico
- Vite
- Handlebars (partials y contexto por pagina)
- Less
- Node.js y npm para entorno de desarrollo

Dependencias relevantes declaradas en el proyecto:

- vite
- vite-plugin-handlebars
- vite-plugin-purgecss
- less
- glob
- purgecss

## Requisitos previos
- Node.js 18 o superior recomendado.
- npm 9 o superior recomendado.

## Estructura del proyecto

```
├── components/         # Componentes Handlebars reutilizables
├── data/               # Contexto de datos para cada página
│   ├── index.js        # Exporta datos consolidados
│   └── pages/          # Datos específicos por página
├── js/                 # Scripts de JavaScript
├── styles/             # Hojas de estilo (Less)
├── assets/             # Recursos estáticos (imágenes, etc.)
├── *.html              # Páginas HTML del sitio
├── vite.config.js      # Configuración de Vite
```

## Cómo funciona el flujo de datos

1. Cada archivo `.html` en la raíz es una página independiente del sitio multipágina (MPA).
2. Los componentes en `components/` son partials de Handlebars que se reutilizan en las páginas.
3. Los datos contextuales se definen en `data/pages/` y se inyectan en cada página mediante Handlebars.
4. Los estilos se procesan con Less y se optimizan con PurgeCSS en producción.

## Créditos
Este proyecto fue desarrollado para Taruma Arquitectos con el objetivo de fortalecer su presencia digital y generar nuevas oportunidades comerciales en el sector de la arquitectura y el diseno. Ademas, este repositorio corresponde al proyecto final de la clase Desarrollo de Portales Web II.