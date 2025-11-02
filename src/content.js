import { heroImage, heroAbout, heroHIW, heroContact, whoAreWe, ourStory } from './assets';
import { getMessages } from './i18n/index.js';

export const links = {
  projectOwnerForm: 'https://forms.gle/vr36TtFpqntvCDrA9',
  investorLogin: 'https://arbill.vv0lll.com/login',
};

const messages = getMessages();

const resolveLink = (linkKeyOrUrl) => {
  if (!linkKeyOrUrl) {
    return '';
  }

  if (links[linkKeyOrUrl]) {
    return links[linkKeyOrUrl];
  }

  return linkKeyOrUrl;
};

const mapCtas = (ctas = []) =>
  ctas.map(({ label, linkKey, to }) => ({
    label,
    to: resolveLink(linkKey ?? to),
  }));

export const navigationItems = messages.navigationItems.map((item) => ({ ...item }));

export const navbarContent = {
  ...messages.navbar,
  loginUrl: links.investorLogin,
};

export const homeHero = {
  title: messages.homeHero.title,
  subtitle: messages.homeHero.subtitle,
  backgroundImage: `linear-gradient(120deg, #42A5F533, #FFB30055), url("${heroImage}")`,
  ctas: mapCtas(messages.homeHero.ctas),
};

export const whoWeAreContent = {
  ...messages.whoWeAreContent,
  image: `url("${whoAreWe}")`,
};

export const homeHowItWorkSteps = {
  heading: messages.homeHowItWorkSteps.heading,
  tagline: messages.homeHowItWorkSteps.tagline,
  steps: messages.homeHowItWorkSteps.steps.map((step) => ({ ...step })),
};

export const joinAudienceContent = {
  heading: messages.joinAudienceContent.heading,
  tagline: messages.joinAudienceContent.tagline,
  owner: {
    title: messages.joinAudienceContent.owner.title,
    description: messages.joinAudienceContent.owner.description,
    highlights: messages.joinAudienceContent.owner.highlights.map((highlight) => highlight),
    cta: {
      label: messages.joinAudienceContent.owner.cta.label,
      to: resolveLink(messages.joinAudienceContent.owner.cta.linkKey),
    },
  },
  investor: {
    title: messages.joinAudienceContent.investor.title,
    description: messages.joinAudienceContent.investor.description,
    highlights: messages.joinAudienceContent.investor.highlights.map((highlight) => highlight),
    cta: {
      label: messages.joinAudienceContent.investor.cta.label,
      to: resolveLink(messages.joinAudienceContent.investor.cta.linkKey),
    },
  },
};

export const commitmentContent = {
  heading: messages.commitmentContent.heading,
  tagline: messages.commitmentContent.tagline,
  values: messages.commitmentContent.values.map((value) => ({ ...value })),
  narrative: messages.commitmentContent.narrative.map((paragraph) => paragraph),
  quote: { ...messages.commitmentContent.quote },
};

export const spotlightContent = {
  heading: messages.spotlightContent.heading,
  description: messages.spotlightContent.description,
  primaryCta: {
    label: messages.spotlightContent.primaryCta.label,
    to: resolveLink(messages.spotlightContent.primaryCta.linkKey),
  },
  secondaryCta: {
    label: messages.spotlightContent.secondaryCta.label,
    to: resolveLink(messages.spotlightContent.secondaryCta.linkKey),
  },
};

export const metrics = messages.metrics.map((metric) => ({ ...metric }));

export const aboutContent = {
  hero: {
    ...messages.aboutContent.hero,
    backgroundImage: `linear-gradient(115deg, #1565C0A3, #06d6a080), url("${heroAbout}")`,
  },
  highlights: messages.aboutContent.highlights.map((highlight) => ({ ...highlight })),
  story: {
    heading: messages.aboutContent.story.heading,
    paragraphs: messages.aboutContent.story.paragraphs.map((paragraph) => paragraph),
    image: `url("${ourStory}")`,
  },
  beliefs: {
    heading: messages.aboutContent.beliefs.heading,
    items: messages.aboutContent.beliefs.items.map((belief) => ({ ...belief })),
  },
  journey: {
    heading: messages.aboutContent.journey.heading,
    items: messages.aboutContent.journey.items.map((item) => ({ ...item })),
  },
  quote: { ...messages.aboutContent.quote },
};

export const howItWorksContent = {
  hero: {
    ...messages.howItWorksContent.hero,
    backgroundImage: `linear-gradient(115deg, #1565C0A3, #21212180), url("${heroHIW}")`,
  },
  processes: {
    heading: messages.howItWorksContent.processes.heading,
    subheading: messages.howItWorksContent.processes.subheading,
    owner: {
      title: messages.howItWorksContent.processes.owner.title,
      steps: messages.howItWorksContent.processes.owner.steps.map((step) => ({ ...step })),
    },
    investor: {
      title: messages.howItWorksContent.processes.investor.title,
      steps: messages.howItWorksContent.processes.investor.steps.map((step) => ({ ...step })),
    },
  },
  highlight: {
    heading: messages.howItWorksContent.highlight.heading,
    subheading: messages.howItWorksContent.highlight.subheading,
    pillars: messages.howItWorksContent.highlight.pillars.map((pillar) => ({ ...pillar })),
  },
  quote: {
    text: messages.howItWorksContent.quote.text,
    author: messages.howItWorksContent.quote.author,
    role: messages.howItWorksContent.quote.role,
    ctas: mapCtas(messages.howItWorksContent.quote.ctas),
  },
};

export const contactContent = {
  hero: {
    ...messages.contactContent.hero,
    backgroundImage: `linear-gradient(115deg, #1565C0A3, #546E7A80), url("${heroContact}")`,
  },
  addressBook: {
    heading: messages.contactContent.addressBook.heading,
    subheading: messages.contactContent.addressBook.subheading,
    cards: messages.contactContent.addressBook.cards.map((card) => ({ ...card })),
  },
  form: { ...messages.contactContent.form },
  community: {
    heading: messages.contactContent.community.heading,
    subheading: messages.contactContent.community.subheading,
    channels: messages.contactContent.community.channels.map((channel) => ({ ...channel })),
    newsletter: { ...messages.contactContent.community.newsletter },
  },
};

export const termsContent = messages.termsContent;

export const privacyContent = messages.privacyContent;

export const resourcesContent = messages.resourcesContent;

export const footerContent = {
  ...messages.footer,
  brand: messages.navbar.brand,
};

export const legalBadge = messages.legalBadge;
