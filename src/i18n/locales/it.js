import en from './en.js';

const it = {
  ...en,
  navigationItems: [
    { label: 'Home', path: '/' },
    { label: 'Chi è Arbill', path: '/about' },
    { label: 'Come funziona', path: '/how-it-works' },
    { label: 'Contatti', path: '/contact' },
  ],
  navbar: {
    ...en.navbar,
    brand: 'ARBILL',
    drawerTagline: 'Piattaforma di investimento di prestigio',
    login: 'Accedi',
    toggleAriaLabel: 'Apri o chiudi il menu di navigazione',
  },
  footer: {
    ...en.footer,
    tagline: 'Costruiamo prestigio attraverso investimenti responsabili.',
    legalNotice: '© {year} Arbill Platform. Tutti i diritti riservati.',
    sections: {
      product: {
        ...en.footer.sections.product,
        title: 'Prodotto',
        links: [
          { label: 'Panoramica della piattaforma', link: '#' },
          { label: 'App mobile', link: '#' },
          { label: 'Termini e condizioni', link: '/terms' },
          { label: 'Informativa privacy', link: '/privacy' },
        ],
      },
      company: {
        ...en.footer.sections.company,
        title: 'Azienda',
        links: [
          { label: 'Chi siamo', link: '#' },
          { label: 'Lavora con noi', link: '#' },
          { label: 'Partner', link: '#' },
          { label: 'News', link: '#' },
        ],
      },
      resources: {
        ...en.footer.sections.resources,
        title: 'Risorse',
        links: [
          { label: 'Guide', link: '#' },
          { label: 'Investment Academy', link: '#' },
          { label: 'Eventi', link: '#' },
          { label: 'Supporto', link: '#' },
        ],
      },
    },
  },
  homeHero: {
    ...en.homeHero,
    title: 'Piattaforma Arbill – Connette progetti e investitori in tutto il mondo',
    subtitle:
      'Dal 2020 Arbill offre una piattaforma di investimento affidabile in cui i Project Owner ottengono capitali e gli investitori scoprono opportunità con la trasparenza della blockchain e contratti sicuri.',
    ctas: [
      { label: 'Per i Project Owner', linkKey: 'projectOwnerForm' },
      { label: 'Per gli Investitori', linkKey: 'investorLogin' },
    ],
  },
  whoWeAreContent: {
    heading: 'Chi siamo',
    tagline: 'Un ponte affidabile tra progetti e capitali.',
    description:
      'Arbill è una piattaforma di investimento internazionale che collega visionari e investitori. Siamo specializzati in contratti di investimento sicuri e nella gestione dei flussi di cassa in criptovaluta. Dal 2020 costruiamo un ecosistema trasparente e affidabile.',
    bullets: [
      'Valutazione responsabile: ogni progetto è esaminato con cura per proteggere gli investitori e sostenere solo opportunità credibili.',
      'Flussi di cassa trasparenti: i processi basati su blockchain rendono ogni transazione visibile, tracciabile e sicura.',
      'Crescita sostenibile: privilegiamo il valore di lungo periodo per investitori e project owner invece dei guadagni rapidi.',
    ],
  },
  homeHowItWorkSteps: {
    heading: 'Come lavora Arbill',
    tagline: 'Passi chiari per unire idee e capitali.',
    steps: [
      {
        title: 'Invio della proposta',
        description:
          'I project owner inviano le loro idee, che vengono valutate per qualità, fattibilità e fiducia degli investitori.',
      },
      {
        title: 'Formalizzazione del contratto',
        description:
          'Arbill aiuta le parti a definire accordi sicuri e trasparenti con termini e responsabilità chiari.',
      },
      {
        title: 'Gestione dei fondi',
        description:
          'Gli investimenti sono gestiti con erogazioni controllate per milestone, assicurando uso responsabile e trasparente dei capitali.',
      },
    ],
  },
  joinAudienceContent: {
    heading: 'Chi può unirsi',
    tagline: 'Opportunità per visionari e investitori in tutto il mondo.',
    owner: {
      title: 'Project Owner',
      description: 'Accedi a investitori globali e raccogli fondi con fiducia.',
      highlights: [
        'Raggiungi investitori oltre i confini.',
        'Supporto su milestone, reportistica e uso responsabile dei fondi.',
        'Elenco su una piattaforma che valorizza fiducia e trasparenza.',
      ],
      cta: { label: 'Invia il tuo progetto', linkKey: 'projectOwnerForm' },
    },
    investor: {
      title: 'Investitori',
      description: 'Scopri progetti verificati e investi con transazioni crypto sicure.',
      highlights: [
        'Investi solo in progetti accuratamente esaminati.',
        'Monitora i tuoi investimenti con report basati su blockchain.',
        'Ottieni ritorni equilibrati con meccanismi di tutela del rischio.',
      ],
      cta: { label: 'Inizia a investire', linkKey: 'investorLogin' },
    },
  },
  commitmentContent: {
    heading: 'Il nostro impegno',
    tagline: 'Costruiamo fiducia duratura per ogni operazione.',
    values: [
      {
        title: 'Cinque anni di servizio',
        description:
          'Arbill è nata nell’aprile 2020. Nonostante la volatilità del mercato, continuiamo a servire la comunità con resilienza e dedizione a lungo termine.',
      },
      {
        title: 'La sicurezza prima di tutto',
        description:
          'Ogni investimento è sostenuto da contratti digitali e da flussi di cassa gestiti tramite blockchain per garantire sicurezza e trasparenza.',
      },
      {
        title: 'Rete globale',
        description:
          'Arbill collega project owner e investitori in tutto il mondo, rendendo le opportunità accessibili a chi utilizza criptovalute.',
      },
      {
        title: 'Impegno sostenibile',
        description:
          'Vogliamo costruire un ecosistema trasparente, affidabile e responsabile per il successo a lungo termine di progetti e investitori.',
      },
    ],
    narrative: [
      'Fin dalla nascita, Arbill si impegna a creare un ambiente di investimento sicuro e trasparente. Sappiamo che la fiducia è la base di ogni relazione finanziaria: per questo ogni interazione è progettata per essere affidabile sin dal primo contatto, combinando tecnologia blockchain e contratti strutturati.',
      'Negli anni abbiamo attraversato cambiamenti di mercato e sfide globali, restando un partner stabile per gli investitori. Questa coerenza dimostra la nostra resilienza e la dedizione a un servizio di lungo periodo, rendendo accessibili opportunità cross-border.',
      'La nostra missione supera il semplice incontro fra le parti: costruiamo un ecosistema in cui i progetti crescono responsabilmente e gli investitori possono affidarsi con serenità. Trasparenza, sicurezza e responsabilità sono i principi guida che proteggono ogni membro della community Arbill.',
    ],
    quote: {
      text: 'In Arbill la credibilità non si dichiara: si dimostra con i fatti. Abbiamo affrontato volatilità, superato sfide e costruito fiducia passo dopo passo. Oggi trasformiamo queste fondamenta in una piattaforma di investimento globale e sostenibile per il futuro.',
      author: 'Casey Farming',
      role: 'CEO di Arbill',
    },
  },
  spotlightContent: {
    heading: 'Entra oggi nella rete Arbill',
    description:
      'Che tu sia un Project Owner o un Investitore, Arbill è il partner per creare opportunità sostenibili.',
    primaryCta: {
      label: 'Avvia il tuo progetto',
      linkKey: 'projectOwnerForm',
    },
    secondaryCta: {
      label: 'Investi con fiducia',
      linkKey: 'investorLogin',
    },
  },
  metrics: [
    { value: '38%', label: 'Riduzione del 38% degli incidenti registrati' },
    { value: '4x', label: 'Report di compliance 4 volte più rapidi' },
    { value: '24/7', label: 'Consulenti certificati disponibili 24/7' },
  ],
  aboutContent: {
    ...en.aboutContent,
    hero: {
      ...en.aboutContent.hero,
      title: 'Arbill – cinque anni di connessioni affidabili',
      subtitle: 'Resilienti nelle sfide. Trasparenti nei processi. Sostenibili nella visione.',
    },
    highlights: [
      {
        title: 'Fondata nel 2020',
        description: 'Resilienza comprovata in mercati complessi',
        icon: 'Flag',
      },
      {
        title: 'Trasparenza',
        description: 'Contratti e flussi finanziari supportati dalla blockchain',
        icon: 'BorderClear',
      },
      {
        title: 'Comunità globale',
        description: 'Project owner e investitori da tutto il mondo',
        icon: 'Global',
      },
      {
        title: 'Priorità alla sostenibilità',
        description: 'Crescita stabile, fiducia duratura',
        icon: 'Sustainability',
      },
    ],
    story: {
      heading: 'La nostra storia',
      paragraphs: [
        'Il percorso di Arbill è nato in uno degli ambienti più complessi e rischiosi del mondo degli investimenti. Mentre altre piattaforme crollavano per promesse insostenibili, noi abbiamo scelto un’altra strada: **onorare gli impegni**, **offrire rendimenti coerenti e proteggere il capitale degli investitori** con disciplina.',
        'Questo approccio ci ha permesso di costruire reputazione in un mercato dove la fiducia era rara. Quelle fondamenta guidano ancora oggi la nostra visione. Quello che è iniziato come un percorso di sopravvivenza è ora diventato una piattaforma professionale che connette Project Owner e Investitori in tutto il mondo.',
        'La nostra missione è creare una piattaforma affidabile dove i progetti ottengono le risorse per crescere e gli investitori trovano opportunità di valore. Grazie alla criptovaluta e a una gestione trasparente dei fondi, offriamo chiarezza, responsabilità e fiducia a ogni passo, così entrambe le parti possono concentrarsi sul creare valore duraturo.',
        'Ambiamo a diventare un ecosistema d’investimento riconosciuto a livello globale, guidato dalla compliance e sinonimo di fiducia e responsabilità. Crediamo che crescita finanziaria e trasparenza possano coesistere, e Arbill vuole dimostrarlo supportando l’innovazione oltre confine e proteggendo gli interessi di ogni investitore.',
      ],
    },
    beliefs: {
      heading: 'I nostri valori',
      items: [
        {
          title: 'Integrità',
          description: 'Ogni progetto è valutato con attenzione ed equità.',
          icon: 'Integrity',
        },
        {
          title: 'Trasparenza',
          description: 'Processi chiari supportati dalla tecnologia blockchain.',
          icon: 'FactCheck',
        },
        {
          title: 'Sostenibilità',
          description: 'Opportunità di lungo periodo prima dei guadagni immediati.',
          icon: 'Sustainability',
        },
        {
          title: 'Resilienza',
          description: 'Capacità dimostrata di operare responsabilmente in mercati complessi.',
          icon: 'VolunteerActivism',
        },
      ],
    },
    journey: {
      heading: 'Il nostro percorso',
      items: [
        { year: '2024 - 2025', milestone: 'Transizione verso operazioni guidate dalla compliance per espandersi a livello globale.' },
        { year: '2023', milestone: 'Partnership con custodi affidabili per una gestione sicura dei fondi.' },
        { year: '2021 - 2022', milestone: 'Costruzione di credibilità proteggendo in modo costante il capitale degli investitori.' },
        { year: '2020', milestone: 'Nascita di Arbill Platform con un focus su responsabilità e resilienza.' },
      ],
    },
    quote: {
      heading: 'La nostra promessa',
      text: 'In Arbill la credibilità non si dichiara: si dimostra con i fatti. Abbiamo affrontato volatilità, superato sfide e costruito fiducia passo dopo passo. Oggi trasformiamo queste fondamenta in una piattaforma di investimento globale e sostenibile per il futuro.',
      author: 'Casey Farming',
      role: 'CEO di Arbill',
    },
  },
  howItWorksContent: {
    hero: {
      ...en.howItWorksContent.hero,
      title: 'Un percorso coordinato dall’insight all’esecuzione',
      subtitle:
        'Processi chiari per Project Owner e Investitori, con contratti sicuri, flussi finanziari trasparenti e responsabilità basata sulle milestone.',
      backgroundImage: en.howItWorksContent.hero.backgroundImage,
    },
    processes: {
      heading: 'Due ruoli, un’unica piattaforma affidabile',
      subheading:
        'Arbill offre processi su misura per Project Owner e Investitori. Percorsi diversi ma fondati su sicurezza, trasparenza e responsabilità.',
      owner: {
        title: 'Processo per Project Owner',
        steps: [
          {
            title: '1. Onboarding',
            description:
              'Condividi i dettagli del progetto. Verifichiamo identità, piano e requisiti per guadagnare la fiducia degli investitori.',
          },
          {
            title: '2. Listing',
            description:
              'Una volta approvato, il progetto è visibile sulla piattaforma con condizioni chiare: tasso, durata, milestone e altre informazioni chiave.',
          },
          {
            title: '3. Erogazione a milestone',
            description:
              'I fondi vengono rilasciati gradualmente al raggiungimento delle milestone concordate, garantendo uso responsabile e fiducia.',
          },
          {
            title: '4. Reportistica di avanzamento',
            description:
              'Aggiorna regolarmente gli investitori. Ti supportiamo nel rendere i report chiari e facili da seguire.',
          },
          {
            title: '5. Pagamento degli interessi',
            description:
              'Paga gli interessi dal fondo operativo, dimostrando coerenza e affidabilità.',
          },
          {
            title: '6. Chiusura del progetto',
            description:
              'Alla conclusione, restituisci capitale e rendimenti, e recupera l’eventuale garanzia. Se il progetto fallisce, i fondi non erogati vengono rimborsati in sicurezza.',
          },
        ],
      },
      investor: {
        title: 'Processo per Investitori',
        steps: [
          {
            title: '1. Crea il tuo account',
            description:
              'Registrati, completa una verifica rapida e deposita crypto in modo sicuro tramite il nostro custode di fiducia.',
          },
          {
            title: '2. Esplora e investi',
            description: 'Sfoglia progetti verificati, valuta le condizioni e scegli quanto investire.',
          },
          {
            title: '3. Segui i progressi',
            description:
              'Monitora come vengono allocati i tuoi fondi. Controlla milestone, aggiornamenti e report finanziari in tempo reale.',
          },
          {
            title: '4. Incassa gli interessi',
            description:
              'Gli interessi arrivano direttamente nel tuo account e sono pronti per essere reinvestiti o prelevati.',
          },
          {
            title: '5. Chiusura del progetto',
            description:
              'Quando il progetto ha successo ricevi capitale e interessi; se fallisce, i fondi rimanenti vengono rimborsati e si attiva l’eventuale fondo di garanzia.',
          },
        ],
      },
    },
    highlight: {
      heading: 'Garanzie integrate per ogni transazione',
      subheading: 'Il capitale investito e i fondi del progetto sono rigidamente controllati. Ogni erogazione è legata a evidenze, approvazioni e riconciliazioni giornaliere.',
      pillars: [
        {
          title: 'Perimetro di custodia',
          description: 'Solo depositi e prelievi coinvolgono il custode.',
          icon: 'Lan',
        },
        {
          title: 'Disciplina sulle milestone',
          description: 'I fondi sono rilasciati solo dopo la verifica delle milestone.',
          icon: 'ManageHistory',
        },
        {
          title: 'Nessun uso incrociato',
          description: 'I fondi di progetto non vengono deviati verso altre iniziative.',
          icon: 'Hub',
        },
        {
          title: 'Fondo di garanzia',
          description: 'Un pool di sicurezza che risarcisce gli investitori in caso di fallimento.',
          icon: 'Handshake',
        },
      ],
    },
    quote: {
      text: 'Insieme costruiamo un futuro di investimenti responsabili.',
      author: 'Jokie Downing',
      role: 'Chief Strategy Officer, Arbill',
      ctas: [
        { label: 'Collabora come Project Owner', linkKey: 'projectOwnerForm' },
        { label: 'Collabora come Investitore', linkKey: 'investorLogin' },
      ],
    },
  },
  contactContent: {
    hero: {
      ...en.contactContent.hero,
      title: 'Contatta Arbill',
      subtitle: 'Siamo a disposizione di Project Owner, Investitori e partner in tutto il mondo.',
    },
    addressBook: {
      heading: 'Rubrica contatti',
      subheading: 'Scegli il canale giusto e il nostro team ti risponderà rapidamente.',
      cards: [
        {
          title: 'Richieste generiche',
          email: 'contact@arbill.co',
          description: 'Domande su piattaforma, servizi o partnership.',
          icon: 'Global',
        },
        {
          title: 'Project Owner',
          email: 'projects@arbill.co',
          description: 'Invia la tua proposta o richiedi supporto di onboarding.',
          icon: 'Briefcase',
        },
        {
          title: 'Investitori',
          email: 'investors@arbill.co',
          description: 'Supporto su account, depositi o dettagli di investimento.',
          icon: 'Team',
        },
      ],
    },
    form: {
      heading: 'Scrivici un messaggio',
      description: 'Preferisci un contatto diretto? Compila il modulo e ti ricontatteremo.',
      fields: {
        name: 'Nome e cognome',
        email: 'Email',
        subject: 'Oggetto',
        message: 'Messaggio',
      },
      submitLabel: 'Invia richiesta',
      submittingLabel: 'Invio in corso...',
      successMessage: 'Grazie! Il tuo messaggio è stato inviato con successo.',
      errorMessage: 'Si è verificato un errore. Riprova più tardi.',
    },
    community: {
      heading: 'Unisciti alla community',
      subheading: 'Resta in contatto con Arbill attraverso i nostri canali e network professionali.',
      channels: [
        {
          title: 'Unisciti al gruppo',
          description: 'Aggiornamenti in tempo reale e dialogo con strategist della sicurezza.',
          link: 'https://t.me/arbill',
          icon: 'Telegram',
        },
        {
          title: 'Iscriviti al canale',
          description: 'Workshop, demo della piattaforma e storie dei clienti.',
          link: 'https://youtube.com/@ArbillPlatform',
          icon: 'YouTube',
        },
        {
          title: 'Segui la fanpage',
          description: 'Highlights della community, eventi e best practice.',
          link: 'https://www.facebook.com/arbillfund',
          icon: 'Facebook',
        },
        {
          title: 'Segui su LinkedIn',
          description: 'Trend di settore, insight di leadership e partnership.',
          link: 'https://www.linkedin.com/company/arbill-platform',
          icon: 'LinkedIn',
        },
      ],
      newsletter: {
        emailLabel: 'Email professionale',
        submitLabel: 'Iscriviti alla newsletter',
        submittingLabel: 'Iscrizione in corso...',
        successMessage: 'Iscrizione avvenuta con successo!',
        errorMessage: 'Impossibile completare l’iscrizione. Riprova.',
        requiredMessage: 'Inserisci la tua email',
      },
    },
  },
  termsContent: en.termsContent,
  privacyContent: en.privacyContent,
  resourcesContent: {
    badge: 'Risorse',
    assuranceFund: {
      title: 'Fondo di garanzia',
      keyTakeawaysHeading: 'Punti chiave',
      keyTakeaways: [
        'Protegge gli investitori se il progetto fallisce.',
        'Non è obbligatorio ma aumenta la credibilità del progetto.',
        'Fondi segregati, trasparenti e distribuiti automaticamente.',
        'Incoraggia i Project Owner ad assumersi responsabilità concrete.',
      ],
      intro: [
        'Il fondo di garanzia è un cuscinetto finanziario pensato per tutelare gli investitori se un progetto non va a buon fine.',
        'Funziona come una rete di sicurezza: non tutti i progetti sono obbligati ad averlo, ma chi lo attiva dimostra subito maggiore affidabilità.',
        'Quando il Project Owner crea un fondo di garanzia, una parte del capitale raccolto (o un contributo separato) viene accantonata in un pool gestito da Arbill. L’importo è trasparente e visibile sulla pagina del progetto, così gli investitori conoscono il livello di protezione.',
        'Se il progetto ha successo, il fondo viene restituito al Project Owner come premio per la responsabilità dimostrata.',
        'Se il progetto fallisce, il fondo viene distribuito automaticamente agli investitori in proporzione al loro contributo, riducendo le perdite e mantenendo la fiducia.',
      ],
      exampleHeading: 'Esempio',
      exampleParagraphs: [
        'Immagina un progetto che raccoglie 100.000 USD e il Project Owner destina 5.000 USD (5%) al fondo di garanzia.',
      ],
      exampleBullets: [
        'Se il progetto ha successo, i 5.000 USD tornano al Project Owner.',
        'Se fallisce, Arbill redistribuisce i 5.000 USD tra gli investitori in proporzione al loro investimento.',
      ],
      examplePostListParagraphs: [
        'Per esempio, un investitore che ha contribuito con 10.000 USD (10%) riceverà 500 USD dal fondo.',
      ],
      closing: [
        'Il meccanismo incentiva i Project Owner a mettere in gioco capitale reale e dà agli investitori fiducia che, anche nello scenario peggiore, una parte dei fondi sarà recuperata.',
        'Il fondo di garanzia è quindi molto più di una funzionalità: è un segnale di affidabilità per i progetti sulla piattaforma Arbill.',
      ],
    },
    curePeriod: {
      title: 'Periodo di sanatoria (Cure Period)',
      keyTakeawaysHeading: 'Punti chiave',
      keyTakeaways: [
        'Offre ai Project Owner un breve intervallo per colmare deficit o ritardi.',
        'Evita di dichiarare immediatamente il default in caso di ritardi nei pagamenti.',
        'Protegge gli investitori congelando i fondi e mantenendo il controllo.',
        'Bilancia equità e rigore nella responsabilità.',
      ],
      whatHeading: 'Cos’è il Cure Period?',
      whatParagraphs: [
        'Il Cure Period è un breve periodo di tolleranza che permette al Project Owner di sanare una mancanza prima che il sistema dichiari il default.',
        'Mostra l’impegno di Arbill verso un approccio equo e trasparente: chi agisce responsabilmente ha l’opportunità di recuperare senza mettere a rischio gli investitori.',
        'Quando un progetto ritarda un pagamento o il saldo scende sotto il livello richiesto, Arbill interviene subito:',
      ],
      immediateActions: [
        'Congelamento di tutte le nuove erogazioni, e',
        'Avvio del Cure Period (ad esempio 7 giorni).',
      ],
      resolutionParagraphs: [
        'Durante questo periodo, il Project Owner deve ripristinare il saldo mancante.',
        'Se il problema viene risolto in tempo, il progetto prosegue normalmente; in caso contrario si passa alla modalità di default e di recupero fondi.',
      ],
      exampleHeading: 'Esempio',
      exampleIntro: [
        'Supponiamo che un progetto debba pagare 2.000 USD di interessi ma abbia solo 1.200 USD disponibili. Arbill blocca le erogazioni e avvia un Cure Period di 7 giorni.',
      ],
      exampleOutcomes: [
        'Se il Project Owner versa gli 800 USD mancanti entro 7 giorni → il progetto continua.',
        'Se non lo fa → il sistema dichiara il default, rimborsa i fondi non erogati e attiva il fondo di garanzia (se previsto).',
      ],
      whyHeading: 'Perché è importante',
      whyParagraphs: [
        'Il Cure Period garantisce che:',
      ],
      whyList: [
        'Gli investitori siano protetti da default improvvisi;',
        'I Project Owner abbiano una possibilità strutturata di risolvere problemi temporanei;',
        'Arbill mantenga un ambiente di investimento trasparente e rigoroso.',
      ],
    },
  },
};

export default it;

