import { heroImage, heroAbout, heroHIW, heroContact, whoAreWe, ourStory } from './assets';

export const links = {
  projectOwnerForm: 'https://forms.gle/vr36TtFpqntvCDrA9',
  investorLogin: 'https://arbill.vv0lll.com/login',
};

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

export function createContent(messages) {
  const navigationItems = messages.navigationItems.map((item) => ({ ...item }));

  const navbar = {
    ...messages.navbar,
    loginUrl: links.investorLogin,
  };

  const footer = {
    ...messages.footer,
    brand: messages.navbar.brand,
  };

  const home = {
    hero: {
      ...messages.homeHero,
      backgroundImage: `linear-gradient(120deg, #42A5F533, #FFB30055), url("${heroImage}")`,
    },
    whoWeAre: {
      ...messages.whoWeAreContent,
      image: `url("${whoAreWe}")`,
    },
    howItWorks: {
      heading: messages.homeHowItWorkSteps.heading,
      tagline: messages.homeHowItWorkSteps.tagline,
      steps: messages.homeHowItWorkSteps.steps.map((step) => ({ ...step })),
    },
    join: {
      heading: messages.joinAudienceContent.heading,
      tagline: messages.joinAudienceContent.tagline,
      owner: {
        ...messages.joinAudienceContent.owner,
        cta: {
          label: messages.joinAudienceContent.owner.cta.label,
          to: resolveLink(messages.joinAudienceContent.owner.cta.linkKey),
        },
      },
      investor: {
        ...messages.joinAudienceContent.investor,
        cta: {
          label: messages.joinAudienceContent.investor.cta.label,
          to: resolveLink(messages.joinAudienceContent.investor.cta.linkKey),
        },
      },
    },
    commitment: {
      ...messages.commitmentContent,
      values: messages.commitmentContent.values.map((value) => ({ ...value })),
      narrative: messages.commitmentContent.narrative.map((paragraph) => paragraph),
    },
    spotlight: {
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
    },
    metrics: messages.metrics.map((metric) => ({ ...metric })),
  };

  const about = {
    hero: {
      ...messages.aboutContent.hero,
      backgroundImage: `linear-gradient(115deg, #1565C0A3, #06d6a080), url("${heroAbout}")`,
    },
    highlights: messages.aboutContent.highlights.map((highlight) => ({ ...highlight })),
    story: {
      ...messages.aboutContent.story,
      paragraphs: messages.aboutContent.story.paragraphs.map((paragraph) => paragraph),
      image: `url("${ourStory}")`,
    },
    beliefs: {
      heading: messages.aboutContent.beliefs.heading,
      items: messages.aboutContent.beliefs.items.map((item) => ({ ...item })),
    },
    journey: {
      heading: messages.aboutContent.journey.heading,
      items: messages.aboutContent.journey.items.map((item) => ({ ...item })),
    },
    quote: { ...messages.aboutContent.quote },
  };

  const howItWorks = {
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

  const contact = {
    hero: {
      ...messages.contactContent.hero,
      backgroundImage: `linear-gradient(115deg, #1565C0A3, #546E7A80), url("${heroContact}")`,
    },
    addressBook: {
      ...messages.contactContent.addressBook,
      cards: messages.contactContent.addressBook.cards.map((card) => ({ ...card })),
    },
    form: {
      ...messages.contactContent.form,
    },
    community: {
      ...messages.contactContent.community,
      channels: messages.contactContent.community.channels.map((channel) => ({ ...channel })),
      newsletter: { ...messages.contactContent.community.newsletter },
    },
  };

  const terms = {
    ...messages.termsContent,
    sections: messages.termsContent.sections.map((section) => ({
      ...section,
      paragraphs: section.paragraphs?.map((paragraph) => paragraph),
      list: section.list?.map((item) => item),
      postListParagraphs: section.postListParagraphs?.map((paragraph) => paragraph),
      subsections: section.subsections?.map((subsection) => ({
        ...subsection,
        paragraphs: subsection.paragraphs?.map((paragraph) => paragraph),
        list: subsection.list?.map((item) => item),
        postListParagraphs: subsection.postListParagraphs?.map((paragraph) => paragraph),
      })),
    })),
    contact: {
      ...messages.termsContent.contact,
      list: messages.termsContent.contact.list?.map((item) => item),
      postListParagraphs: messages.termsContent.contact.postListParagraphs?.map((paragraph) => paragraph),
    },
  };

  const privacy = {
    ...messages.privacyContent,
    sections: messages.privacyContent.sections.map((section) => ({
      ...section,
      paragraphs: section.paragraphs?.map((paragraph) => paragraph),
      list: section.list?.map((item) => item),
      postListParagraphs: section.postListParagraphs?.map((paragraph) => paragraph),
      subsections: section.subsections?.map((subsection) => ({
        ...subsection,
        paragraphs: subsection.paragraphs?.map((paragraph) => paragraph),
        list: subsection.list?.map((item) => item),
        postListParagraphs: subsection.postListParagraphs?.map((paragraph) => paragraph),
      })),
    })),
  };

  const resources = {
    badge: messages.resourcesContent.badge,
    assuranceFund: {
      ...messages.resourcesContent.assuranceFund,
      keyTakeaways: messages.resourcesContent.assuranceFund.keyTakeaways.map((item) => item),
      intro: messages.resourcesContent.assuranceFund.intro.map((paragraph) => paragraph),
      exampleParagraphs: messages.resourcesContent.assuranceFund.exampleParagraphs.map((paragraph) => paragraph),
      exampleBullets: messages.resourcesContent.assuranceFund.exampleBullets.map((item) => item),
      examplePostListParagraphs: messages.resourcesContent.assuranceFund.examplePostListParagraphs.map(
        (paragraph) => paragraph,
      ),
      closing: messages.resourcesContent.assuranceFund.closing.map((paragraph) => paragraph),
    },
    curePeriod: {
      ...messages.resourcesContent.curePeriod,
      keyTakeaways: messages.resourcesContent.curePeriod.keyTakeaways.map((item) => item),
      whatParagraphs: messages.resourcesContent.curePeriod.whatParagraphs.map((paragraph) => paragraph),
      immediateActions: messages.resourcesContent.curePeriod.immediateActions.map((item) => item),
      resolutionParagraphs: messages.resourcesContent.curePeriod.resolutionParagraphs.map((paragraph) => paragraph),
      exampleIntro: messages.resourcesContent.curePeriod.exampleIntro.map((paragraph) => paragraph),
      exampleOutcomes: messages.resourcesContent.curePeriod.exampleOutcomes.map((item) => item),
      whyParagraphs: messages.resourcesContent.curePeriod.whyParagraphs.map((paragraph) => paragraph),
      whyList: messages.resourcesContent.curePeriod.whyList.map((item) => item),
    },
  };

  return {
    navigationItems,
    navbar,
    footer,
    home,
    about,
    howItWorks,
    contact,
    terms,
    privacy,
    resources,
    legalBadge: messages.legalBadge,
  };
}
