export default {
    isQuotationsPage: true,
    heroTitle: 'Cotizaciones',
    heroSubtitle: 'Solicita una propuesta adaptada a tus necesidades y alcance.',
    heroBreadcrumbLabel: 'Cotizaciones',
    quotationForm: {
        title: 'Solicita tu cotización',
        lead: 'Completa el formulario y recibe una respuesta personalizada.',
        labels: {
            projectType: 'Tipo de proyecto',
            area: 'Superficie aproximada (m²)',
            budget: 'Presupuesto estimado',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            deadline: 'Plazos deseados',
            description: 'Descripción del proyecto',
            files: 'Adjuntar imágenes del terreno / espacio'
        },
        placeholders: {
            area: 'Ej: 120',
            budget: 'Ej: L50,000',
            email: 'nombre@ejemplo.com',
            phone: '+504 9876-5432',
            deadline: 'Ej: 6 meses',
            description: 'Indica el alcance, tipo de espacio y detalles relevantes.'
        },
        projectTypeDefaultLabel: 'Selecciona...',
        projectTypeOptions: [
            { value: 'casa', label: 'Casa' },
            { value: 'edificio', label: 'Edificio' },
            { value: 'remodelacion', label: 'Remodelación' }
        ],
        notes: {
            email: 'Se usará para enviarte la confirmación de recepción y para recibir la cotización por este correo.',
            files: 'Nota: en este demo los archivos NO se adjuntan al correo. Adjúntalos manualmente si los necesitas.'
        },
        submitLabel: 'Enviar Cotización',
        backToHomeLabel: 'Volver al inicio'
    },
    quotationInfoSections: [
        {
            title: 'Proceso posterior al envío',
            paragraphs: [
                'Una vez recibido tu formulario, nuestro equipo revisará la información y se pondrá en contacto contigo en un plazo máximo de 48 horas hábiles.',
                'Se agendará una reunión inicial para definir detalles, requisitos y posibles ajustes del proyecto.'
            ]
        },
        {
            title: 'Tiempos de respuesta',
            list: [
                'Confirmación de recepción: Inmediata',
                'Contacto del arquitecto responsable: Máximo 48 horas hábiles',
                'Entrega de cotización preliminar: 5 días hábiles'
            ]
        },
        {
            title: 'Requisitos previos',
            list: [
                'Medidas aproximadas del terreno / espacio',
                'Documentación de propiedad (si aplica)',
                'Referencias o ideas de diseño (opcional)'
            ]
        }
    ]
};