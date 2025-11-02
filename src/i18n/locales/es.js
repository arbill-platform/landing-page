import en from './en.js';

const es = {
  ...en,
  navigationItems: [
    { label: 'Inicio', path: '/' },
    { label: 'Acerca de Arbill', path: '/about' },
    { label: 'Cómo funciona', path: '/how-it-works' },
    { label: 'Contacto', path: '/contact' },
  ],
  navbar: {
    ...en.navbar,
    brand: 'ARBILL',
    drawerTagline: 'Plataforma de inversión de prestigio',
    login: 'Iniciar sesión',
    toggleAriaLabel: 'Abrir o cerrar el menú de navegación',
  },
  footer: {
    ...en.footer,
    tagline: 'Construimos prestigio a través de inversiones responsables.',
    legalNotice: '© {year} Arbill Platform. Todos los derechos reservados.',
    sections: {
      product: {
        ...en.footer.sections.product,
        title: 'Producto',
        links: [
          { label: 'Panorama general de la plataforma', link: '#' },
          { label: 'Aplicación móvil', link: '#' },
          { label: 'Términos y condiciones', link: '/terms' },
          { label: 'Política de privacidad', link: '/privacy' },
        ],
      },
      company: {
        ...en.footer.sections.company,
        title: 'Compañía',
        links: [
          { label: 'Acerca de', link: '#' },
          { label: 'Carreras', link: '#' },
          { label: 'Socios', link: '#' },
          { label: 'Noticias', link: '#' },
        ],
      },
      resources: {
        ...en.footer.sections.resources,
        title: 'Recursos',
        links: [
          { label: 'Guías', link: '#' },
          { label: 'Academia de inversión', link: '#' },
          { label: 'Eventos', link: '#' },
          { label: 'Soporte', link: '#' },
        ],
      },
    },
  },
  homeHero: {
    ...en.homeHero,
    title: 'Plataforma Arbill: conectamos proyectos e inversores globales',
    subtitle:
      'Desde 2020, Arbill ofrece una plataforma de inversión confiable donde los Project Owners consiguen financiación y los inversores descubren oportunidades con transparencia blockchain y contratos seguros.',
    ctas: [
      { label: 'Para Project Owners', linkKey: 'projectOwnerForm' },
      { label: 'Para Inversores', linkKey: 'investorLogin' },
    ],
  },
  whoWeAreContent: {
    heading: 'Quiénes somos',
    tagline: 'El puente confiable entre proyectos e inversores.',
    description:
      'Arbill es una plataforma internacional que conecta a visionarios e inversores. Nos especializamos en contratos de inversión seguros y gestión de flujos de fondos en criptomonedas. Desde abril de 2020 construimos un ecosistema transparente y confiable.',
    bullets: [
      'Evaluación responsable: cada proyecto se revisa minuciosamente para proteger a los inversores y apoyar oportunidades creíbles.',
      'Flujo de fondos transparente: procesos respaldados por blockchain garantizan que cada transacción sea visible, responsable y segura.',
      'Crecimiento sostenible: priorizamos el valor a largo plazo para inversores y project owners, no las ganancias rápidas.',
    ],
  },
  homeHowItWorkSteps: {
    heading: 'Cómo funciona Arbill',
    tagline: 'Pasos claros para conectar ideas con capital.',
    steps: [
      {
        title: 'Presentación de propuesta',
        description:
          'Los project owners envían sus ideas, que son evaluadas por calidad, viabilidad y confianza para el inversor.',
      },
      {
        title: 'Formalización del contrato',
        description:
          'Arbill ayuda a ambas partes a formalizar acuerdos con contratos seguros y transparentes que definen términos y responsabilidades.',
      },
      {
        title: 'Gestión de fondos',
        description:
          'Las inversiones se manejan con desembolsos controlados por hitos, asegurando un uso responsable y transparente del capital.',
      },
    ],
  },
  joinAudienceContent: {
    heading: 'Quién puede unirse',
    tagline: 'Oportunidades para visionarios e inversores en todo el mundo.',
    owner: {
      title: 'Project Owners',
      description: 'Accede a inversores globales y recauda fondos con confianza.',
      highlights: [
        'Alcanza inversores sin fronteras.',
        'Acompañamiento en hitos, reportes y uso responsable de fondos.',
        'Publica en una plataforma que valora la confianza y la transparencia.',
      ],
      cta: { label: 'Envía tu proyecto', linkKey: 'projectOwnerForm' },
    },
    investor: {
      title: 'Inversores',
      description: 'Explora proyectos verificados e invierte con transacciones crypto seguras.',
      highlights: [
        'Invierte solo en proyectos cuidadosamente evaluados.',
        'Monitorea tus inversiones con reportes respaldados por blockchain.',
        'Obtén rendimientos equilibrados con mecanismos de mitigación de riesgos.',
      ],
      cta: { label: 'Empieza a invertir', linkKey: 'investorLogin' },
    },
  },
  commitmentContent: {
    heading: 'Nuestro compromiso',
    tagline: 'Construimos confianza duradera en cada operación.',
    values: [
      {
        title: 'Cinco años en servicio',
        description:
          'Arbill nació en abril de 2020. Pese a la volatilidad del mercado, hemos mantenido el servicio a nuestra comunidad con resiliencia y dedicación.',
      },
      {
        title: 'Seguridad primero',
        description:
          'Cada inversión está respaldada por contratos digitales seguros y gestionada mediante flujos con tecnología blockchain, protegiendo a ambas partes.',
      },
      {
        title: 'Red global',
        description:
          'Arbill conecta a Project Owners e inversores en todo el mundo, abriendo oportunidades a quienes operan con criptomonedas.',
      },
      {
        title: 'Compromiso sostenible',
        description:
          'Construimos un ecosistema transparente, responsable y confiable para el éxito a largo plazo de proyectos e inversores.',
      },
    ],
    narrative: [
      'Desde su creación, Arbill se centra en ofrecer un entorno de inversión seguro y transparente. Sabemos que la confianza es la base de toda relación financiera, por eso cada interacción está diseñada para generar fiabilidad desde el primer momento.',
      'Hemos superado cambios de mercado y desafíos globales, pero Arbill sigue siendo un socio estable. Nuestra consistencia demuestra resiliencia y un enfoque en el servicio a largo plazo, acercando oportunidades más allá de las fronteras.',
      'Nuestra misión va más allá de conectar partes: construimos un ecosistema sostenible donde los proyectos crecen responsablemente y los inversores confían con seguridad. Transparencia, seguridad y responsabilidad son los principios que protegen a cada miembro de Arbill.',
    ],
    quote: {
      text: 'En Arbill la credibilidad no se proclama, se gana con hechos. Hemos enfrentado volatilidad, superado desafíos y construido confianza paso a paso. Hoy transformamos esa base en una plataforma de inversión global y sostenible.',
      author: 'Casey Farming',
      role: 'CEO de Arbill',
    },
  },
  spotlightContent: {
    heading: 'Únete hoy a la red Arbill',
    description:
      'Seas Project Owner o Inversor, Arbill es tu aliado para crear oportunidades sostenibles.',
    primaryCta: {
      label: 'Inicia tu proyecto',
      linkKey: 'projectOwnerForm',
    },
    secondaryCta: {
      label: 'Invierte con confianza',
      linkKey: 'investorLogin',
    },
  },
  metrics: [
    { value: '38%', label: 'Reducción del 38% en incidentes registrados' },
    { value: '4x', label: 'Reportes de compliance 4 veces más rápidos' },
    { value: '24/7', label: 'Asesores certificados disponibles 24/7' },
  ],
  aboutContent: {
    ...en.aboutContent,
    hero: {
      ...en.aboutContent.hero,
      title: 'Arbill: cinco años de conexiones de inversión confiables',
      subtitle: 'Resilientes ante los retos. Transparentes en los procesos. Sostenibles en la visión.',
    },
    highlights: [
      {
        title: 'Fundada en 2020',
        description: 'Resiliencia demostrada en mercados desafiantes',
        icon: 'Flag',
      },
      {
        title: 'Transparencia',
        description: 'Contratos y flujos financieros con respaldo blockchain',
        icon: 'BorderClear',
      },
      {
        title: 'Comunidad global',
        description: 'Project Owners e inversores en todo el mundo',
        icon: 'Global',
      },
      {
        title: 'Prioridad en la sostenibilidad',
        description: 'Crecimiento estable y confianza duradera',
        icon: 'Sustainability',
      },
    ],
    story: {
      heading: 'Nuestra historia',
      paragraphs: [
        'La historia de Arbill comenzó en uno de los segmentos más exigentes y arriesgados del mundo de la inversión. Mientras otras plataformas se derrumbaban por promesas insostenibles, nosotros elegimos otro camino: **cumplir nuestros compromisos**, **entregar retornos consistentes y proteger el capital con disciplina**.',
        'Gracias a esa constancia ganamos reputación en un mercado donde la confianza era escasa. Ese cimiento responsable sigue guiándonos hoy. Lo que empezó como un trayecto de supervivencia se convirtió en una plataforma profesional que conecta Project Owners e inversores globales.',
        'Nuestra misión es construir una plataforma confiable donde los proyectos relevantes consigan los recursos para crecer y los inversores encuentren oportunidades en las que creer. Con criptomonedas y gestión transparente, aportamos claridad y confianza en cada paso para crear valor duradero.',
        'Queremos ser un ecosistema de inversión reconocido mundialmente, impulsado por la compliance y la responsabilidad. Arbill busca potenciar la innovación más allá de las fronteras, proteger a cada inversor y demostrar que el crecimiento financiero y la transparencia pueden ir de la mano.',
      ],
    },
    beliefs: {
      heading: 'Nuestros valores',
      items: [
        {
          title: 'Integridad',
          description: 'Cada proyecto se evalúa con equidad y rigurosidad.',
          icon: 'Integrity',
        },
        {
          title: 'Transparencia',
          description: 'Procesos claros respaldados por tecnología blockchain.',
          icon: 'FactCheck',
        },
        {
          title: 'Sostenibilidad',
          description: 'Priorizamos oportunidades de largo plazo sobre ganancias rápidas.',
          icon: 'Sustainability',
        },
        {
          title: 'Resiliencia',
          description: 'Capacidad demostrada para operar responsablemente en mercados exigentes.',
          icon: 'VolunteerActivism',
        },
      ],
    },
    journey: {
      heading: 'Nuestro recorrido',
      items: [
        { year: '2024 - 2025', milestone: 'Transición a operaciones basadas en compliance para expandirnos globalmente.' },
        { year: '2023', milestone: 'Alianzas con custodios de confianza para garantizar la gestión de fondos.' },
        { year: '2021 - 2022', milestone: 'Reputación construida protegiendo de forma consistente el capital de los inversores.' },
        { year: '2020', milestone: 'Se funda Arbill Platform con foco en responsabilidad y resiliencia.' },
      ],
    },
    quote: {
      heading: 'Nuestra promesa',
      text: 'En Arbill la credibilidad no se proclama, se gana con hechos. Hemos enfrentado volatilidad, superado desafíos y construido confianza paso a paso. Hoy transformamos esa base en una plataforma de inversión global y sostenible.',
      author: 'Casey Farming',
      role: 'CEO de Arbill',
    },
  },
  howItWorksContent: {
    hero: {
      ...en.howItWorksContent.hero,
      title: 'Un camino coordinado del insight a la ejecución',
      subtitle:
        'Procesos claros para Project Owners e inversores que garantizan contratos seguros, flujos transparentes y responsabilidad basada en hitos.',
      backgroundImage: en.howItWorksContent.hero.backgroundImage,
    },
    processes: {
      heading: 'Dos roles, una plataforma confiable',
      subheading:
        'Arbill opera con procesos adaptados para Project Owners e inversores. Cada recorrido es distinto pero se sustenta en seguridad, transparencia y responsabilidad.',
      owner: {
        title: 'Proceso para Project Owners',
        steps: [
          {
            title: '1. Onboarding',
            description:
              'Comparte los detalles de tu proyecto. Verificamos tu identidad, revisamos tu plan y nos aseguramos de que todo esté listo para generar confianza.',
          },
          {
            title: '2. Publicación',
            description:
              'Tras la aprobación, tu proyecto se muestra en Arbill con términos claros (tasa, duración, hitos y otros detalles clave).',
          },
          {
            title: '3. Desembolsos por hitos',
            description:
              'Los fondos se liberan gradualmente a medida que completas hitos pactados, asegurando un uso responsable y elevando la confianza del inversor.',
          },
          {
            title: '4. Reportes de progreso',
            description:
              'Mantén informados a tus inversores con actualizaciones periódicas. Te ayudamos a estructurarlas de forma clara y fácil de seguir.',
          },
          {
            title: '5. Pago de intereses',
            description:
              'Paga intereses desde tu fondo operativo, demostrando consistencia y responsabilidad.',
          },
          {
            title: '6. Cierre',
            description:
              'Al finalizar, se devuelve a los inversores capital e intereses, y recuperas tu garantía. Si el proyecto no prospera, los fondos no desembolsados se reembolsan de forma segura.',
          },
        ],
      },
      investor: {
        title: 'Proceso para inversores',
        steps: [
          {
            title: '1. Crea tu cuenta',
            description:
              'Regístrate, completa una verificación rápida y deposita criptomonedas de forma segura con nuestro custodio de confianza.',
          },
          {
            title: '2. Explora y comprométete',
            description: 'Revisa proyectos evaluados, valora sus términos y elige el monto a invertir.',
          },
          {
            title: '3. Sigue el progreso',
            description:
              'Conoce cómo se asignan tus fondos. Monitorea hitos, actualizaciones y reportes financieros en tiempo real.',
          },
          {
            title: '4. Recibe intereses',
            description:
              'Los pagos de intereses se acreditan directamente en tu cuenta, listos para reinvertir o retirar.',
          },
          {
            title: '5. Cierre del proyecto',
            description:
              'Si el proyecto tiene éxito, recuperas tu capital más intereses. Si falla, los fondos restantes se devuelven y, si corresponde, se activa el fondo de garantía.',
          },
        ],
      },
    },
    highlight: {
      heading: 'Salvaguardas integradas para cada transacción',
      subheading:
        'El capital del inversor y los fondos del proyecto están controlados rigurosamente. Cada desembolso está vinculado a evidencias, aprobaciones y conciliación diaria.',
      pillars: [
        {
          title: 'Frontera de custodia',
          description: 'Solo depósitos y retiros interactúan con el custodio.',
          icon: 'Lan',
        },
        {
          title: 'Disciplina por hitos',
          description: 'Los fondos se liberan únicamente tras verificar cada hito.',
          icon: 'ManageHistory',
        },
        {
          title: 'Sin reutilización cruzada',
          description: 'Los fondos de un proyecto no se desvían a otros.',
          icon: 'Hub',
        },
        {
          title: 'Fondo de garantía',
          description: 'Un fondo de seguridad que compensa a los inversores si el proyecto falla.',
          icon: 'Handshake',
        },
      ],
    },
    quote: {
      text: 'Juntos construimos un futuro de inversiones responsables.',
      author: 'Jokie Downing',
      role: 'Director de Estrategia, Arbill',
      ctas: [
        { label: 'Colabora como Project Owner', linkKey: 'projectOwnerForm' },
        { label: 'Colabora como Inversor', linkKey: 'investorLogin' },
      ],
    },
  },
  contactContent: {
    hero: {
      ...en.contactContent.hero,
      title: 'Ponerse en contacto con Arbill',
      subtitle: 'Estamos para ayudar a Project Owners, inversores y socios en todo el mundo.',
    },
    addressBook: {
      heading: 'Tu directorio de contactos',
      subheading: 'Elige el canal adecuado y nuestro equipo responderá con rapidez.',
      cards: [
        {
          title: 'Consultas generales',
          email: 'contact@arbill.co',
          description: 'Preguntas sobre la plataforma, servicios o alianzas.',
          icon: 'Global',
        },
        {
          title: 'Project Owners',
          email: 'projects@arbill.co',
          description: 'Envía tu propuesta o solicita soporte de onboarding.',
          icon: 'Briefcase',
        },
        {
          title: 'Inversores',
          email: 'investors@arbill.co',
          description: 'Asistencia con cuentas, depósitos o detalles de inversión.',
          icon: 'Team',
        },
      ],
    },
    form: {
      heading: 'Envíanos un mensaje',
      description: '¿Prefieres una comunicación directa? Completa el formulario y te contactaremos.',
      fields: {
        name: 'Nombre y apellidos',
        email: 'Correo electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
      },
      submitLabel: 'Enviar solicitud',
      submittingLabel: 'Enviando...',
      successMessage: '¡Gracias! Tu mensaje se envió correctamente.',
      errorMessage: 'Algo salió mal. Inténtalo de nuevo.',
    },
    community: {
      heading: 'Únete a la comunidad',
      subheading: 'Mantente conectado con Arbill a través de redes profesionales y grupos de inversores.',
      channels: [
        {
          title: 'Unirse al grupo',
          description: 'Actualizaciones en tiempo real y diálogo con estrategas de seguridad.',
          link: 'https://t.me/arbill',
          icon: 'Telegram',
        },
        {
          title: 'Suscribirse al canal',
          description: 'Workshops, demostraciones de la plataforma y testimonios de clientes.',
          link: 'https://youtube.com/@ArbillPlatform',
          icon: 'YouTube',
        },
        {
          title: 'Seguir la fanpage',
          description: 'Destacados de la comunidad, eventos y mejores prácticas.',
          link: 'https://www.facebook.com/arbillfund',
          icon: 'Facebook',
        },
        {
          title: 'Seguir en LinkedIn',
          description: 'Tendencias del sector, ideas de liderazgo y nuevas alianzas.',
          link: 'https://www.linkedin.com/company/arbill-platform',
          icon: 'LinkedIn',
        },
      ],
      newsletter: {
        emailLabel: 'Correo profesional',
        submitLabel: 'Suscribirse al boletín',
        submittingLabel: 'Suscribiendo...',
        successMessage: '¡Te suscribiste correctamente al boletín!',
        errorMessage: 'No fue posible suscribirte. Inténtalo nuevamente.',
        requiredMessage: 'Introduce tu correo electrónico',
      },
    },
  },
  termsContent: en.termsContent,
  privacyContent: en.privacyContent,
  resourcesContent: {
    badge: 'Recursos',
    assuranceFund: {
      title: 'Fondo de garantía',
      keyTakeawaysHeading: 'Puntos clave',
      keyTakeaways: [
        'Protege a los inversores si el proyecto falla.',
        'No es obligatorio, pero aumenta la credibilidad del proyecto.',
        'Fondos segregados, transparentes y distribuidos automáticamente.',
        'Promueve la responsabilidad de los Project Owners.',
      ],
      intro: [
        'El fondo de garantía es una protección financiera diseñada para salvaguardar a los inversores si un proyecto no prospera.',
        'Funciona como una red de seguridad: aunque no es obligatorio, tenerlo demuestra responsabilidad y fiabilidad.',
        'Cuando un Project Owner crea un fondo de garantía, reserva una parte del capital recaudado (o una aportación extra) en un fondo gestionado por Arbill. Esta cuantía es totalmente transparente y aparece indicada en la página del proyecto.',
        'Si el proyecto tiene éxito, el fondo se devuelve al Project Owner como recompensa por su responsabilidad.',
        'Si el proyecto falla, el fondo se distribuye automáticamente entre los inversores de acuerdo con su participación, ayudando a compensar pérdidas.',
      ],
      exampleHeading: 'Ejemplo',
      exampleParagraphs: [
        'Imagina un proyecto que recauda 100.000 USD. El Project Owner destina 5.000 USD (5%) al fondo de garantía.',
      ],
      exampleBullets: [
        'Si el proyecto tiene éxito, los 5.000 USD regresan al Project Owner.',
        'Si falla, Arbill redistribuye los 5.000 USD entre los inversores proporcionalmente.',
      ],
      examplePostListParagraphs: [
        'Por ejemplo, un inversor que aportó 10.000 USD (10%) recibiría 500 USD del fondo de garantía.',
      ],
      closing: [
        'Este mecanismo anima a los Project Owners a ofrecer garantías reales y da a los inversores mayor tranquilidad ante posibles contratiempos.',
        'Por eso el fondo de garantía es más que una función: es una señal de responsabilidad para los proyectos en Arbill.',
      ],
    },
    curePeriod: {
      title: 'Periodo de subsanación (Cure Period)',
      keyTakeawaysHeading: 'Puntos clave',
      keyTakeaways: [
        'Concede a los Project Owners un margen para corregir déficits.',
        'Evita declarar un default inmediato por retrasos en pagos.',
        'Protege a los inversores congelando fondos y ejerciendo control.',
        'Equilibra equidad y responsabilidad estricta.',
      ],
      whatHeading: '¿Qué es el Cure Period?',
      whatParagraphs: [
        'El Cure Period es un periodo de gracia breve que permite a los Project Owners corregir faltantes antes de que el sistema declare el default.',
        'Refleja el compromiso de Arbill con la equidad y la transparencia: se ofrece a los proyectos responsables la oportunidad de ponerse al día, protegiendo al mismo tiempo a los inversores.',
        'Cuando un proyecto retrasa un pago o su saldo cae por debajo del mínimo requerido, Arbill actúa de inmediato:',
      ],
      immediateActions: [
        'Congela cualquier nuevo desembolso, y',
        'Activa el Cure Period (por ejemplo, durante 7 días).',
      ],
      resolutionParagraphs: [
        'En ese periodo, el Project Owner debe aportar el monto faltante.',
        'Si lo hace a tiempo, el proyecto continúa normalmente; si no, se marca como default y se inicia el proceso de recuperación.',
      ],
      exampleHeading: 'Ejemplo',
      exampleIntro: [
        'Supongamos que un proyecto debe pagar 2.000 USD en intereses pero solo dispone de 1.200 USD. Arbill congela los desembolsos y activa un Cure Period de 7 días.',
      ],
      exampleOutcomes: [
        'Si el Project Owner aporta los 800 USD faltantes en los 7 días → el proyecto sigue adelante.',
        'Si no lo hace → el sistema declara el default, devuelve los fondos no desembolsados y activa el fondo de garantía (de ser aplicable).',
      ],
      whyHeading: 'Por qué es importante',
      whyParagraphs: [
        'El Cure Period garantiza que:',
      ],
      whyList: [
        'Los inversores estén protegidos de defaults inesperados,',
        'Los Project Owners tengan una oportunidad justa de resolver problemas temporales,',
        'Arbill mantenga un entorno de inversión transparente y disciplinado.',
      ],
    },
  },
};

export default es;

