import { heroImage, heroAbout, heroHIW, heroContact, whoAreWe, ourStory } from './assets';

export const links = {
  projectOwnerForm: 'https://forms.gle/vr36TtFpqntvCDrA9',
  investorLogin: 'https://arbill.vv0lll.com/login',
}

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Contact', path: '/contact' }  
];

export const homeHero = {
  title: 'Arbill Platform - Connecting Projects and Investors Globally',
  subtitle:
    'Since 2020, Arbill provided a trusted investment platform where Project Owners secure funding and Investors discover opportunities with crypto-powered transparency and secure contracts.',
  backgroundImage:
    `linear-gradient(120deg, #42A5F533, #FFB30055), url("${heroImage}")`,
  ctas: [
    { label: 'For Project Owner', to: links.projectOwnerForm },
    { label: 'For Investor', to: links.investorLogin },
  ],
};

export const whoWeAreContent = {
  heading: 'Who we are',
  tagline: 'A trusted bridge between projects and investors.',
  description:
    'Arbill is an international investment platform that bridges visionaries and investors. We specialize in facilitating secure investment contracts and managing fund flows with cryptocurrency. Since April 2020, we have committed to building a sustainable ecosystem where opportunities are transparent and trustworthy.',
  bullets: [
    'Responsible Screening: Every project is carefully reviewed to protect investors and support only credible opportunities.',
    'Transparent Fund Flow: Blockchain-backed processes ensure every transaction is visible, accountable, and secure.',
    'Sustainable Growth: We prioritize long-term value for both investors and project owners, not short-term gains.',
  ],
  image:
    `url("${whoAreWe}")`,
};

export const homeHowItWorkSteps = {
  tagline: 'Clear steps to connect ideas with capital.',
  steps: [
  {
    title: 'Proposal Submission',
    description:
      'Project owners submit their ideas, which are reviewed to ensure quality, feasibility, and investor confidence.',
  },
  {
    title: 'Contract Facilitation',
    description:
      'Arbill helps both sides formalize agreements with secure, transparent contracts that define terms and responsibilities.',
  },
  {
    title: 'Fund Management',
    description:
      'Investments are handled through controlled, milestone-based disbursements, ensuring funds are used responsibly and transparently.',
  },
]};

export const joinAudienceContent = {
  tagline: 'Opportunities for both visionaries and investors worldwide.',
  owner: {
    title: 'Project Owners',
    description:
      'Gain access to global investors and raise funds with confidence.',
    highlights: [
      'Access investors worldwide without borders.',
      'Guidance on milestones, reporting, and responsible fund use.',
      'Listing on a platform that values trust and transparency.',
    ],
    cta: { label: 'Submit Your Project', to: links.projectOwnerForm },
  },
  investor: {
    title: 'Investors',
    description:
      'Explore vetted projects and invest with secure crypto transactions.',
    highlights: [
      'Invest only in carefully reviewed projects.',
      'Track your investments with blockchain-backed reporting.',
      'Earn reasonable income with safeguards against extreme risks.',
    ],
    cta: { label: 'Start Investing', to: links.investorLogin },
  
  },
  
};

export const commitmentContent = {
  heading: 'Our commitment',
  values: [
    {
      title: 'Half Decade Serving',
      description: 'Arbill was found in April 2020. Despite market fluctuations and challenges, we have maintained continuous service to our community, providing resilience and long-term dedication.',
    },
    {
      title: 'Security First',
      description: 'Every investment is supported by secure digital contracts and managed through blockchain-enabled fund flows. We ensure that investors and project owners operate in a transparent and safe environment.',
    },
    {
      title: 'Global Network',
      description: 'Arbill Platform connects Project Owners and Investors worldwide, making opportunities accessible beyond borders. Our platform is designed for international users who accept cryptocurrency as the medium of exchange.',
    },
    {
      title: 'Sustainable Commitment',
      description: 'Our goal is not high risk - high return growth but building a sustainable ecosystem. We focus on transparency, trust, and responsibility to ensure the long-term success of both projects and investors.',
    },
  ],
  narrative: [
    'Since its establishment in April 2020, Arbill Platform has been dedicated to creating a secure and transparent environment for global investment. We recognize that trust is the foundation of every financial relationship, and therefore, our platform is built to provide reliability from the very first interaction. By combining blockchain technology with carefully structured investment contracts, Arbill ensures that every transaction is traceable, accountable, and fair to both Project Owner and Investors.',
    'Over the years, we have navigated market changes and global challenges, yet Arbill Platform continues to stand as a reliable partner. This consistency demonstrates our resilience and commitment to long-term service rather than short-term gains. With a global network of users, we aim to make investment opportunities accessible across borders, bridging ideas with resources is a seamless manner.',
    'Our mission goes beyond connecting parties - we are building a sustainable ecosystem where projects can grow responsibly and investors can place their trust with confidence. Transparency, security, and accountability remain our guiding principles, ensuring that every participants feels supported and protected when they choose Arbill Platform.'
  ],
};

export const spotlightContent = {
  heading: 'Join the Arbill Network Today',
  description:
    'Whether you are a Project Owner or an Investor, Arbill Platform is your partner in building sustainable opportunities.',
  primaryCta: { label: 'Start your project', to: links.projectOwnerForm },
  secondaryCta: { label: 'Invest with confidence', to: links.investorLogin },
};

export const metrics = [
  { value: '38%', label: 'Reduction in recordable incidents' },
  { value: '4x', label: 'Faster compliance reporting' },
  { value: '24/7', label: 'Support from certified safety advisors' },
];

export const aboutContent = {
  hero: {    
    title: 'Arbill - Half Decade Trusted Investment Connections',
    subtitle:
      'Resilient in challenges. Transparent in process. Sustainable in vision.',
    backgroundImage:
      `linear-gradient(115deg, #1565C0A3, #06d6a080), url("${heroAbout}")`,
  },
  highlights: [
    {
      title: 'Founded In 2020',
      description: 'Proven resilience in challenging markets',
      icon: 'Flag',
    },
    {
      title: 'Transparency',
      description: 'Blockchain-backed contracts and fund flow',
      icon: 'BorderClear',
    },
    {
      title: 'Global Community',
      description: 'Worldwide Project Owners and Investors',
      icon: 'Global',
    },
    {
      title: 'Sustainability First',
      description: 'Steady growth, long-term trust',
      icon: 'Sustainability',
    },
  ],
  story: {    
    paragraphs: [
      'Arbill’s journey began in one of the most demanding and high-risk segments of the investment world. In an environment where many platforms collapsed under unsustainable promises, we choose a different path: **honouring commitments**, **delivering consistent returns, and safeguarding investor capital** with discipline.',
      'Through this commitment, we built a reputation for reliability in a market where trust was rare. This foundation of responsibility continues to guide us today. What started as a survival journey in uncertain times has grown into a professional platform that connect Project Owners and Investor worldwide.',
      'At Arbill, our mission is to create a trusted investment platform where meaningful projects secure the resources they need to grow, and investors discover opportunities they can believe in. By harnessing the power of cryptocurrency and transparent fund management, we bring clarity, accountability, and confidence to every step of the journey — ensuring that both visionaries and backers can focus on building lasting value together.',
      'Our vision is to become a globally recognized, compliance-driven investment ecosystem that stands as a benchmark for trust and responsibility. We aspire to empower innovation across borders while safeguarding the interests of every investor, proving that financial growth and transparency can thrive side by side. In doing so, Arbill seeks to redefine what sustainable investing looks like in the digital era.',    
    ],
    image:
      `url("${ourStory}")`,
  },
  beliefs: [
    {
      title: 'Integrity',
      description: 'Every project is reviewed with care and fairness.',
      icon: 'Integrity',
    },
    {
      title: 'Transparency',
      description: 'Clear processes supported by blockchain technology.',
      icon: 'FactCheck',
    },
    {
      title: 'Sustainability',
      description: 'Long-term opportunities over short-term gains.',
      icon: 'Sustainability',
    },
    {
      title: 'Resilience',
      description: 'Proven ability to operate responsibly in challenging markets.',
      icon: 'VolunteerActivism',
    },
  ],
  journey: [
    { year: '2024 - 2025', milestone: 'Transitioning into compliance-driven operations for global expansion.' },    
    { year: '2023', milestone: 'Partnered with trusted custodians for secure fund management.' },
    { year: '2021 - 2022', milestone: 'Built credibility by consistently protecting investor capital.' },
    { year: '2020', milestone: 'Arbill Platform was established, guided by responsibility and resilience.' },
    
    
    
  ],
  quote: {
    text: 'At Arbill, we believe credibility is not claimed - it is proven through action, we have faced volatility, endured challenges, and built trust step by step. Today, we are committed to transforming that foundation into a sustainable, globally trusted investment platform for the future.',
    author: 'Casey Farming',
    role: 'CEO, Arbill',
  },
};

export const howItWorksContent = {
  hero: {    
    title: 'A coordinated path from insight to execution',
    subtitle:
      'Clear processes for both Project Owners and Investors, ensuring secure contracts, transparent fund flow, and milestone-based accoutablity.',
    backgroundImage:
      `linear-gradient(115deg, #1565C0A3, #21212180), url("${heroHIW}")`,
  },
  processes: {
    heading: 'Two Roles, One Trusted Platform',
    subheading:
      'Arbill operates with clear processes tailored for Project Owners and Investors. Each journey is different, but both are built on the same foundation of security, transparency and accountability',
    owner: {
      title: 'Project Owner Process',
      steps: [
        {
          title: '1. Onboarding',
          description: 'Share your project details. We will verify your identity, review your plan, and make sure everything is ready for investors to trust.',
        },
        {
          title: '2. Listing',
          description: 'Once approved, your project appears on Arbill Platform with clear terms - interest rate, duration, milestones, and other key details.',
        },
        {
          title: '3. Milestone-based Releases',
          description: 'Funds are unlocked gradually as you achieve agreed milestones. This ensures money is used responsibly and boosts Investor confidence.',
        },
        {
          title: '4. Progress Reporting',
          description: 'Keep your investors updated with regular progress reports. We help you structure updates so they are clear and easy to follow.',
        },
        {
          title: '5. Interest Servicing',
          description: 'Pay interest to your investors from your Operating fund, showing consistency and reliability.',
        },
        {
          title: '6. Closure',
          description: 'At completion, investor principal and final returns are released, you get back the assurance. If a project doesn\'t succeed, undisbursed fund are refunded safely.',
        },
      ],
    },
    investor: {
      title: 'Investor Process',
      steps: [
        {
          title: '1. Create Your Account',
          description: 'Sign up, complete a quick verification, and deposit your crypto securely with our trusted custodian.',
        },
        {
          title: '2. Explore & Commit',
          description: 'Browse carefully reviewed projects, check their terms, and commit the amount you choose.',
        },
        {
          title: '3. Track Progress',
          description: 'See exactly how your funds are allocated. Monitor milestones, updates, and financial reports in real time.',
        },
        {
          title: '4. Earn Interest',
          description: 'Your interest payments appear directly in your account, ready to reinvest or withdraw at any time.',
        },
        {
          title: '5. Project Closure',
          description: 'When a project succeeds, your principal and interest are returned. If it fails, your remaining funds are refunded and covered by any Assurance fund provided.',
        },
      ],
    },
  },
  highlight: {
    heading: 'Built-in Safeguards for Every Transaction',
    subheading: 'Investor capital and project funds are strictly controlled. Every disbursement is tied to evidence, approvals, and daily reconciliation for maximum security.',
    pillars: [
      {
        title: 'Custody Boundary',
        description: 'Only deposits and withdrawals touch the custodian.',
        icon: 'Lan',
      },
      {
        title: 'Milestone Discipline',
        description: 'Funds are released only after milestone verification.',
        icon: 'ManageHistory',
      },
      {
        title: 'No Cross-Project Reuse',
        description: 'Project funds cannot be diverted elsewhere.',
        icon: 'Hub',
      },
      {
        title: 'Assurance Fund',
        description: 'The safety pool to compensate investors on failure.',
        icon: 'Handshake',
      },
    ],
  },
  quote: {
    text: 'Together, you and us create a future where investment are responsible.',
    author: 'Jokie Downing',
    role: 'Chief Strategy Officer, Arbill',
    ctas: [
      { label: 'Partner as a Project Owner', to: links.projectOwnerForm },
      { label: 'Partner as an Investor', to: links.investorLogin },
    ],
  },
};

export const solutionHighlights = [
  {
    title: 'Smart Field App',
    points: [
      'Offline-ready data capture for audits and inspections',
      'Instant escalation workflows and team alerts',
      'QR-enabled asset tracking across locations',
    ],
    imageAlt: 'Mobile app showing safety inspection tasks',
  },
  {
    title: 'Command Center Insights',
    points: [
      'Configurable dashboards for leading and lagging indicators',
      'Automated OSHA and ISO compliance reporting',
      'Benchmarking data from 50+ industries',
    ],
    imageAlt: 'Dashboard highlighting safety metrics and alerts',
  },
];

export const faqs = [
  {
    question: 'How quickly can we launch Arbill?',
    answer:
      'Most customers complete implementation in 6-8 weeks with a guided rollout plan from our safety advisory team.',
  },
  {
    question: 'Can Arbill integrate with our existing systems?',
    answer:
      'Yes. Native integrations cover leading ERP, HRIS, and EHS tools, and our API supports custom workflows.',
  },
  {
    question: 'Is onboarding available for frontline teams?',
    answer:
      'We offer blended training that combines self-paced microlearning with live coaching and multilingual support.',
  },
];

export const contactContent = {
  hero: {    
    title: 'Get in Touch with Arbill',
    subtitle:
      'We are here to support Project Owners, Investors and partners worldwide.',
    backgroundImage:
      `linear-gradient(115deg, #1565C0A3, #546E7A80), url("${heroContact}")`,
  },
  addressBook: {
    heading: 'Your Address Book',
    subheading: 'Choose the right channels for your inquiry, and our team will respond promptly.',
    cards: [
      {
        title: 'General inquiries',
        email: 'contact@arbill.co',
        description: 'For questions about our platform, services, or partnerships.',
        icon: "Global",
      },
      {
        title: 'Project Owners',
        email: 'projects@arbill.co',
        description: 'Submit your proposal or request support or onboarding',
        icon: "Briefcase"
      },
      {
        title: 'Investors',
        email: 'investors@arbill.co',
        description: 'For assistance with accounts, deposits, or investment details.',
        icon: "Team"
      },
    ],
  },
  form: {
    heading: 'Send Us a Message',
    description: 'Prefer direct communication? Use the form below and we will get back to you.',
  },
  community: {
    heading: 'Join the community',
    subheading: 'Stay connected with Arbill across professional networks and investor groups.',
    channels: [
      {
        title: 'Join Group',
        description: 'Real-time updates and Q&A with safety strategists.',
        link: 'https://t.me/arbill',
        icon: 'Telegram'
      },
      {
        title: 'Subscribe Channel',
        description: 'Workshops, platform walkthroughs, and customer stories.',
        link: 'https://youtube.com/@ArbillPlatform',
        icon: 'YouTube'
      },
      {
        title: 'Follow Fanpage',
        description: 'Community highlights, event recaps, and best practices.',
        link: 'https://www.facebook.com/arbillfund',
        icon: 'Facebook'
      },
      {
        title: 'Follow LinkedIn',
        description: 'Industry trends, leadership insights, and partnerships.',
        link: 'https://www.linkedin.com/company/arbill-platform',
        icon: 'LinkedIn'
      },
    ],
  },
};

export const termsContent = {
  hero: {
    title: 'Terms and Conditions',
    description:
      'Our Terms and Conditions were last updated on March 19, 2022. Please read these terms and conditions carefully before using our service.',
    lastUpdated: 'March 19, 2022',
  },
  sections: [
    {
      title: 'Interpretation and Definitions',
      subsections: [
        {
          title: 'Interpretation',
          paragraphs: [
            'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
          ],
        },
        {
          title: 'Definitions',
          paragraphs: ['For the purposes of these Terms and Conditions:'],
          list: [
            '"Account" means a unique account registered by you to access our service or parts of our service.',
            '"Company" (referred to as either "the Arbill", "Arbill", "Arbill Fund", "we", "us" or "our" in this Agreement) refers to Arbill.',
            '"Content" refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by you, regardless of the form of that content.',
            '"Contract" means an agreement between an investor and a project owner on the investment that the investor sends to the project that the project owner owns.',
            '"Feedback" means feedback, innovations or suggestions sent by you regarding the attributes, performance or features of our service.',
            '"Insurance" means the amount of money in the project that is intended to be divided among investors according to the conditions after the project is closed.',
            '"Investment" refers to contract.',
            '"Investor" refers to account.',
            '"Project" refers to the projects or plans offered by a project owner on the service.',
            '"Project Owner" means the account who owns a project on the website.',
            '"Service" refers to the website.',
            '"Terms and Conditions" (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between you and Arbill regarding the use of the service. This Terms and Conditions agreement was generated by TermsFeed Terms and Conditions Generator.',
            '"Third-party Social Media Service" means any services or content (including data, information, products or services) provided by a third party that may be displayed, included or made available by the service.',
            '"Website" refers to Arbill, accessible from https://arbill.co and subdomains.',
            '"You" means the individual accessing or using the service, or the company or other legal entity on behalf of which such individual is accessing or using the service, as applicable.',
          ],
        },
      ],
    },
    {
      title: 'Acknowledgment',
      paragraphs: [
        'These are the Terms and Conditions governing the use of this service and the agreement that operates between you and the company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the service.',
        'Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the service.',
        'By accessing or using the service you agree to be bound by these Terms and Conditions. If you disagree with any part of these Terms and Conditions then you may not access the service.',
        'You represent that you are over the age of 18. The company does not permit those under 18 to use the service.',
        'Your access to and use of the service is also conditioned on your acceptance of and compliance with the privacy policy of the company. Our privacy policy describes our policies and procedures on the collection, use and disclosure of your personal information when you use the application or the website and tells you about your privacy rights and how the law protects you. Please read our privacy policy carefully before using our service.',
      ],
    },
    {
      title: 'User Accounts',
      paragraphs: [
        'When you create an account with us, you must provide us information that is accurate, complete and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.',
        'You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password, whether your password is with our service or a third-party social media service.',
        'You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
        'You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.',
      ],
    },
    {
      title: 'Content',
      subsections: [
        {
          title: 'Your Right to Post Content',
          paragraphs: [
            'Our service allows you to post content. You are responsible for the content that you post to the service, including its legality, reliability and appropriateness.',
            'By posting content to the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce and distribute such content on and through the service. You retain all of your rights to the content you submit, post or display on or through the service and you are responsible for protecting those rights.',
            'You agree that this license includes the right for us to make your content available to other users of the service, who may also use your content subject to these Terms. You represent and warrant that the content is yours or that you have the right to use it and grant us the rights and license as provided in these Terms, and that the posting of your content on or through the service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.',
          ],
        },
        {
          title: 'Content Restrictions',
          paragraphs: [
            'The company is not responsible for the content of the service\'s users. You expressly understand and agree that you are solely responsible for the content and for all activity that occurs under your account, whether done so by you or any third person using your account.',
            'You may not transmit any content that is unlawful, offensive, upsetting, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable content include, but are not limited to, the following:',
          ],
          list: [
            'Unlawful or promoting unlawful activity.',
            'Defamatory, discriminatory or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national or ethnic origin, or other targeted groups.',
            'Spam, machine- or randomly-generated content constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.',
            'Content containing or installing any viruses, worms, malware, trojan horses or other material designed or intended to disrupt, damage or limit the functioning of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of a third person.',
            'Content infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights.',
            'Impersonating any person or entity including the company and its employees or representatives.',
            'Violating the privacy of any third person.',
            'False information and features.',
          ],
          postListParagraphs: [
            'The company reserves the right, but not the obligation, to determine whether any content is appropriate and complies with these Terms, and may refuse or remove such content. The company further reserves the right to make formatting and edits and change the manner of any content. The company can also limit or revoke the use of the service if you post objectionable content.',
            'As the company cannot control all content posted by users or third parties on the service, you agree to use the service at your own risk. You understand that by using the service you may be exposed to content that you may find offensive, indecent, incorrect or objectionable, and you agree that under no circumstances will the company be liable in any way for any content, including any errors or omissions, or any loss or damage of any kind incurred as a result of your use of any content.',
          ],
        },
        {
          title: 'Content Backups',
          paragraphs: [
            'Although regular backups of content are performed, the company does not guarantee there will be no loss or corruption of data.',
            'Corrupt or invalid backup points may be caused by, without limitation, content that is corrupted prior to being backed up or that changes during the time a backup is performed.',
            'The company will provide support and attempt to troubleshoot any known or discovered issues that may affect the backups of content, but has no liability related to the integrity of content or the failure to successfully restore content to a usable state. You agree to maintain a complete and accurate copy of any content in a location independent of the service.',
          ],
        },
      ],
    },
    {
      title: 'Copyright Policy',
      subsections: [
        {
          title: 'Intellectual Property Infringement',
          paragraphs: [
            'We respect the intellectual property rights of others. It is our policy to respond to any claim that content posted on the service infringes a copyright or other intellectual property rights of any person.',
            'If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the service, you must submit your notice in writing to our copyright agent via email at copyright@arbill.co and include in your notice a detailed description of the alleged infringement.',
            'You may be held accountable for damages, including costs and attorneys\' fees, for misrepresenting that any content is infringing your copyright.',
          ],
        },
        {
          title: 'DMCA Notice and Procedure for Copyright Infringement Claims',
          paragraphs: [
            'You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our copyright agent with the following information in writing (see 17 U.S.C. 512(c)(3) for further detail):',
          ],
          list: [
            'An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.',
            'A description of the copyrighted work that you claim has been infringed, including the URL of the location where the copyrighted work exists or a copy of the copyrighted work.',
            'Identification of the URL or other specific location on the service where the material that you claim is infringing is located.',
            'Your address, telephone number and email address.',
            'A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law.',
            'A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner\'s behalf.',
          ],
          postListParagraphs: [
            'You can contact our copyright agent via email at copyright@arbill.co. Upon receipt of a notification, the company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the service.',
          ],
        },
      ],
    },
    {
      title: 'Project Operations',
      subsections: [
        {
          title: 'Creating a Project',
          paragraphs: [
            'The initialization of the project and responsibility for the project is entirely undertaken by the project owner. The project owner has full right to use the funds in the project. Arbill only provides services, financial management for accounts and dispute arbitration between investors and project owners. We are under no obligation to guarantee interest payments to investors in such projects.',
          ],
        },
        {
          title: 'Fee',
          paragraphs: [
            'For each project, we apply a 9.09% tax on the payment of referral commissions. This fee is paid by the project owner through the interest rate display.',
          ],
        },
        {
          title: 'Close Project',
          paragraphs: [
            'We will warn the status of interest payments to investors with each project. For projects that are overdue for up to seven days, the project will be forced to close.',
            'The project owner does not have the right to voluntarily close the project or cancel the contract with the investor after it has been created. The project owner who wants to close the project must send a notice to Arbill. Arbill reserves the right to close the project at any time when it sees signs of fraud, inaccurate information or damage to the system.',
          ],
        },
        {
          title: 'Insurance Release',
          paragraphs: [
            'Insurance is a non-refundable fund for each project. The insurance fund is only released and divided among investors who have contracts with paying status. This fund is divided according to the ratio of the contract value.',
          ],
        },
        {
          title: 'Making an Investment',
          paragraphs: [
            'By making an investment to a project through the service, you warrant that you are legally capable of entering into binding contracts.',
            'Arbill reserves the right to terminate the contract without warning if it is found to have committed any wrongdoing. For contracts offered by a project owner, Arbill will send notice to the parties and make a final arbitration decision.',
          ],
        },
      ],
    },
    {
      title: 'Your Information',
      paragraphs: [
        'If you wish to place an order for products available on the service, you may be asked to supply certain information relevant to your order including, without limitation, your name, your email and your phone number.',
        'You represent and warrant that the information you supply to us is true, correct and complete. By submitting such information, you grant us the right to provide the information to payment processing third parties for purposes of facilitating the completion of your investment.',
      ],
    },
    {
      title: 'Availability, Errors and Inaccuracies',
      paragraphs: [
        'We are constantly updating our offerings of projects on the service. The projects available on our service may be mispriced, described inaccurately or unavailable, and we may experience delays in updating information regarding our projects on the service and in our advertising on other websites.',
        'We cannot and do not guarantee the accuracy or completeness of any information, including interest rate, specifications, availability and services. We reserve the right to change or update information and to correct errors, inaccuracies or omissions at any time without prior notice.',
      ],
    },
    {
      title: 'Links to Other Websites',
      paragraphs: [
        'Our service may contain links to third-party web sites or services that are not owned or controlled by the company.',
        'The company has no control over and assumes no responsibility for the content, privacy policies or practices of any third-party web sites or services. You further acknowledge and agree that the company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.',
        'We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.',
      ],
    },
    {
      title: 'Termination',
      paragraphs: [
        'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.',
        'Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may simply discontinue using the service.',
      ],
    },
    {
      title: '"AS IS" and "AS AVAILABLE" Disclaimer',
      paragraphs: [
        'The service is provided to you "as is" and "as available" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the company, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the company provides no warranty or undertaking, and makes no representation of any kind that the service will meet your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.',
        'Without limiting the foregoing, neither the company nor any of the company\'s providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the service, or the information, content and materials or products included thereon; (ii) that the service will be uninterrupted or error-free; (iii) as to the accuracy, reliability or currency of any information or content provided through the service; or (iv) that the service, its servers, the content or e-mails sent from or on behalf of the company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.',
        'Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to you. In such cases the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.',
      ],
    },
    {
      title: 'Disputes Resolution',
      paragraphs: [
        'If you have any concern or dispute about the service, you agree to first try to resolve the dispute informally by contacting the company.',
      ],
    },
    {
      title: 'Severability and Waiver',
      subsections: [
        {
          title: 'Severability',
          paragraphs: [
            'If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of that provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.',
          ],
        },
        {
          title: 'Waiver',
          paragraphs: [
            'Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party\'s ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.',
          ],
        },
      ],
    },
    {
      title: 'Changes to These Terms and Conditions',
      paragraphs: [
        'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will make reasonable efforts to provide at least 24 hours\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
        'By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the website and the service.',
      ],
    },
    {
      title: 'Contact Us',
      paragraphs: [
        'If you have any questions about these Terms and Conditions, you can contact us using the following methods:',
      ],
      list: [
        'By visiting this page on our website: https://arbill.co/contact',
        'By sending us an email: admin@arbill.co',
      ],
    },
  ],
  contact: {
    heading: 'Questions about these Terms?',
    description:
      'Reach out to our compliance team for clarification or to report concerns related to the Terms and Conditions.',
    list: [
      'Email legal@arbill.co for compliance questions.',
      'Visit https://arbill.co/contact for additional support options.',
    ],
  },
};

export const privacyContent = {
  hero: {
    title: 'Privacy Policy',
    description:
      'This Privacy Policy outlines how we collect, use, and disclose information when you interact with the Arbill service and explains your privacy rights and protections.',
    lastUpdated: 'March 17, 2022',
  },
  sections: [
    {
      title: 'Interpretation and Definitions',
      subsections: [
        {
          title: 'Interpretation',
          paragraphs: [
            'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
          ],
        },
        {
          title: 'Definitions',
          paragraphs: ['For the purposes of this Privacy Policy:'],
          list: [
            '"Account" means a unique account created for you to access our service or parts of our service.',
            '"Company" (referred to as either "the Company", "we", "us" or "our" in this Agreement) refers to Arbill.',
            '"Cookies" are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.',
            '"Device" means any device that can access the service such as a computer, a cellphone or a digital tablet.',
            '"Personal Data" is any information that relates to an identified or identifiable individual.',
            '"Service" refers to the website.',
            '"Service Provider" means any natural or legal person who processes the data on behalf of the company, including third parties engaged to facilitate or analyze the service.',
            '"Usage Data" refers to data collected automatically, either generated by the use of the service or from the service infrastructure itself (for example, the duration of a page visit).',
            '"Website" refers to Arbill Fund, accessible from https://arbill.co.',
            '"You" means the individual accessing or using the service, or the company or other legal entity on behalf of which such individual is accessing or using the service, as applicable.',
          ],
        },
      ],
    },
    {
      title: 'Types of Data Collected',
      subsections: [
        {
          title: 'Personal Data',
          paragraphs: [
            'While using our service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:',
          ],
          list: [
            'Email address',
            'First and last name',
            'Phone number',
            'Address, state, province, ZIP or postal code, and city',
            'Usage data',
          ],
        },
        {
          title: 'Usage Data',
          paragraphs: [
            'Usage data is collected automatically when using the service and may include information such as your device\'s IP address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.',
            'When you access the service by or through a mobile device, we may automatically collect information including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile internet browser you use, unique device identifiers and other diagnostic data.',
            'We may also collect information that your browser sends whenever you visit our service or when you access the service by or through a mobile device.',
          ],
        },
      ],
    },
    {
      title: 'Tracking Technologies and Cookies',
      paragraphs: [
        'We use cookies and similar tracking technologies to track activity on our service and store certain information. The technologies we use may include beacons, tags and scripts to collect and track information and to improve and analyze our service.',
      ],
      list: [
        'Cookies or browser cookies: small files placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent; however, refusing cookies may limit parts of the service.',
        'Flash cookies: local stored objects that may store information about your preferences or activity on the service and are not managed by typical browser settings.',
        'Web beacons: small electronic files that help count users who have visited certain pages or opened an email and support related statistics such as verifying system and server integrity.',
      ],
      postListParagraphs: [
        'Cookies can be persistent or session based. Persistent cookies remain when you go offline, while session cookies are deleted when you close your browser.',
        'We use both session and persistent cookies for the purposes described below.',
        'For more details about the cookies we use and your choices, please review our cookies policy or the cookies section of this privacy policy.',
      ],
      subsections: [
        {
          title: 'Necessary / Essential Cookies',
          paragraphs: [
            'Type: Session cookies',
            'Administered by: Arbill',
            'Purpose: Essential for providing services through the website, enabling core features, authenticating users and preventing fraudulent use of accounts.',
          ],
        },
        {
          title: 'Cookies Policy / Notice Acceptance Cookies',
          paragraphs: [
            'Type: Persistent cookies',
            'Administered by: Arbill',
            'Purpose: Identify whether users have accepted the use of cookies on the website.',
          ],
        },
        {
          title: 'Functionality Cookies',
          paragraphs: [
            'Type: Persistent cookies',
            'Administered by: Arbill',
            'Purpose: Remember choices you make, such as login details or language preference, to provide a more personal experience.',
          ],
        },
      ],
    },
    {
      title: 'Use of Your Personal Data',
      subsections: [
        {
          title: 'How We Use Personal Data',
          paragraphs: ['The company may use personal data for the following purposes:'],
          list: [
            'To provide and maintain our service, including monitoring usage.',
            'To manage your account and registration as a user of the service.',
            'For the performance of contracts covering products, items or services you have purchased or any other agreement with Arbill.',
            'To contact you by email, telephone, SMS or other electronic communications about updates or informative messages related to the service and its security.',
            'To provide you with news, special offers and general information about goods, services and events similar to those you already engage with, unless you opt out.',
            'To manage and respond to your requests.',
            'For business transfers, including evaluating or conducting mergers, divestitures, restructurings, reorganizations, dissolutions or other sale or transfer of assets.',
            'For other purposes such as data analysis, identifying usage trends, measuring campaign effectiveness and improving services and user experience.',
          ],
        },
        {
          title: 'When We Share Personal Data',
          paragraphs: ['We may share your personal information in the following situations:'],
          list: [
            'With service providers to monitor and analyze the use of our service or to contact you.',
            'For business transfers in connection with mergers, sales of assets, financing or acquisition events.',
            'With affiliates who are required to honor this privacy policy.',
            'With business partners to offer you specific products, services or promotions.',
            'With other users when you share personal information in public areas of the service.',
            'With your consent for any other disclosed purpose.',
          ],
        },
      ],
    },
    {
      title: 'Retention of Your Personal Data',
      paragraphs: [
        'We retain personal data only as long as necessary for the purposes described in this privacy policy and to comply with legal obligations, resolve disputes and enforce agreements.',
        'Usage data is generally retained for shorter periods unless needed to improve service security or functionality, or if longer retention is legally required.',
      ],
    },
    {
      title: 'Transfer of Your Personal Data',
      paragraphs: [
        'Personal data may be processed at company offices and other locations where parties involved in processing are situated, which can include jurisdictions with different data protection laws.',
        'Your submission of personal data represents agreement to such transfers. We take reasonable steps to ensure data is treated securely and transfers occur only where adequate safeguards are in place.',
      ],
    },
    {
      title: 'Disclosure of Your Personal Data',
      subsections: [
        {
          title: 'Business Transactions',
          paragraphs: [
            'If Arbill is involved in a merger, acquisition or asset sale, personal data may be transferred. We will provide notice before your personal data becomes subject to a different privacy policy.',
          ],
        },
        {
          title: 'Law Enforcement',
          paragraphs: [
            'Under certain circumstances, we may be required to disclose personal data to comply with law or valid requests by public authorities such as courts or government agencies.',
          ],
        },
        {
          title: 'Other Legal Requirements',
          paragraphs: ['We may disclose personal data in good faith when necessary to:'],
          list: [
            'Comply with a legal obligation.',
            'Protect and defend the rights or property of the company.',
            'Prevent or investigate possible wrongdoing in connection with the service.',
            'Protect the personal safety of service users or the public.',
            'Protect against legal liability.',
          ],
        },
      ],
    },
    {
      title: 'Security of Your Personal Data',
      paragraphs: [
        'We strive to use commercially acceptable means to protect personal data, but no method of transmission or electronic storage is 100% secure. While we work to safeguard your information, we cannot guarantee absolute security.',
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        'Our service does not address anyone under the age of 13, and we do not knowingly collect personally identifiable information from children. If we learn that personal data has been collected from a child without parental consent, we take steps to remove the information.',
        'When consent is required by law, we may need a parent or guardian to provide consent before collecting and using a child\'s personal data.',
      ],
    },
    {
      title: 'Links to Other Websites',
      paragraphs: [
        'Our service may contain links to third-party websites that are not operated by us. If you click a third-party link, you will be directed to that site and should review its privacy policy.',
        'We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party websites or services.',
      ],
    },
    {
      title: 'Changes to this Privacy Policy',
      paragraphs: [
        'We may update this privacy policy periodically. Changes will be posted on this page and the "Last updated" date will reflect the latest revision.',
        'When appropriate we will notify you via email and/or a prominent notice before the changes take effect. Please review this policy periodically for updates.',
      ],
    },
    {
      title: 'Contact Us',
      paragraphs: ['If you have any questions about this privacy policy, you can contact us:'],
      list: [
        'By email: legal@arbill.co',
        'By visiting https://arbill.co/contact',
      ],
    },
  ],
};
