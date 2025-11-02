import en from './en.js';

const zh = {
  ...en,
  navigationItems: [
    { label: '首页', path: '/' },
    { label: '关于 Arbill', path: '/about' },
    { label: '运作方式', path: '/how-it-works' },
    { label: '联系我们', path: '/contact' },
  ],
  navbar: {
    ...en.navbar,
    brand: 'ARBILL',
    drawerTagline: '高端投资平台',
    login: '登录',
    toggleAriaLabel: '切换导航菜单',
  },
  footer: {
    ...en.footer,
    tagline: '以负责任的投资打造信誉。',
    legalNotice: '© {year} Arbill Platform。保留所有权利。',
    sections: {
      product: {
        ...en.footer.sections.product,
        title: '产品',
        links: [
          { label: '平台总览', link: '#' },
          { label: '移动应用', link: '#' },
          { label: '条款与条件', link: '/terms' },
          { label: '隐私政策', link: '/privacy' },
        ],
      },
      company: {
        ...en.footer.sections.company,
        title: '公司',
        links: [
          { label: '关于我们', link: '#' },
          { label: '招聘', link: '#' },
          { label: '合作伙伴', link: '#' },
          { label: '新闻资讯', link: '#' },
        ],
      },
      resources: {
        ...en.footer.sections.resources,
        title: '资源',
        links: [
          { label: '指南', link: '#' },
          { label: '投资学院', link: '#' },
          { label: '活动', link: '#' },
          { label: '支持', link: '#' },
        ],
      },
    },
  },
  homeHero: {
    ...en.homeHero,
    title: 'Arbill 平台 —— 全球连接项目与投资者',
    subtitle:
      '自 2020 年以来，Arbill 致力于打造值得信赖的投资平台，帮助项目方获得融资，并让投资者依托区块链透明度与安全合约发现优质机会。',
    ctas: [
      { label: '项目方入口', linkKey: 'projectOwnerForm' },
      { label: '投资者入口', linkKey: 'investorLogin' },
    ],
  },
  whoWeAreContent: {
    heading: '我们是谁',
    tagline: '项目与资本之间值得信赖的桥梁。',
    description:
      'Arbill 是一家国际投资平台，连接具有远见的项目方与投资者。我们专注于安全的投资合约与加密货币资金流管理。自 2020 年 4 月以来，我们始终致力于构建一个透明可靠、可持续发展的生态体系。',
    bullets: [
      '责任审查：每个项目都经过严格筛选，保护投资者并支持真正可信的机会。',
      '透明资金流：借助区块链流程确保每笔交易都可视、可追溯且安全。',
      '可持续增长：我们重视项目方与投资者的长期价值，而非短期收益。',
    ],
  },
  homeHowItWorkSteps: {
    heading: 'Arbill 如何运作',
    tagline: '清晰步骤助力想法与资本高效对接。',
    steps: [
      {
        title: '提交提案',
        description:
          '项目方提交构想，我们会审核其质量、可行性与投资者信心。',
      },
      {
        title: '促成合约',
        description:
          'Arbill 帮助双方以安全透明的合约明确条款与责任。',
      },
      {
        title: '资金管理',
        description:
          '投资款按里程碑管控分批拨付，确保资金透明且被负责任地使用。',
      },
    ],
  },
  joinAudienceContent: {
    heading: '适合谁加入',
    tagline: '面向全球创作者与投资者的机会。',
    owner: {
      title: '项目方',
      description: '接触全球投资者，自信完成融资。',
      highlights: [
        '跨越国界的投资者网络。',
        '里程碑规划、汇报与用款辅导。',
        '加入重视信任与透明度的平台。',
      ],
      cta: { label: '提交您的项目', linkKey: 'projectOwnerForm' },
    },
    investor: {
      title: '投资者',
      description: '发掘经过审查的项目，并通过安全的加密交易进行投资。',
      highlights: [
        '仅投资经严格审核的项目。',
        '区块链化报表实时跟踪投资状况。',
        '以风控机制获取稳健回报。',
      ],
      cta: { label: '开始投资', linkKey: 'investorLogin' },
    },
  },
  commitmentContent: {
    heading: '我们的承诺',
    tagline: '为每一笔交易构筑长期信任。',
    values: [
      {
        title: '五年服务历程',
        description:
          'Arbill 成立于 2020 年 4 月。尽管市场波动，我们仍持续服务社区，展现韧性与长远承诺。',
      },
      {
        title: '安全优先',
        description:
          '所有投资均以数字合约支撑，并由区块链资金流管理保障项目方与投资者的安全。',
      },
      {
        title: '全球网络',
        description:
          'Arbill 连接全球项目方与投资者，让接受加密货币的用户突破边界。',
      },
      {
        title: '可持续承诺',
        description:
          '我们追求透明、信任与责任，打造长期成功的生态，而非冒险追逐高风险高收益。',
      },
    ],
    narrative: [
      '自成立以来，Arbill 一直致力于为全球投资者构建安全透明的环境。我们深知信任是金融关系的根基，因此通过区块链技术与精心设计的合约确保每一步都值得信赖。',
      '多年来我们经历了市场变动与全球挑战，但 Arbill 依旧是投资者稳定的伙伴。这种一致性体现了我们对长期服务的坚持，并通过全球网络让跨境投资更顺畅。',
      '我们的使命不仅是撮合双方，更在于打造一个可持续的生态，让项目安心成长、投资者放心托付。透明、安全、责任始终是我们支持每位参与者的核心原则。',
    ],
    quote: {
      text: '在 Arbill，信誉不是宣称，而是行动证明。我们直面波动、经受考验、一步步建立信任。如今，我们正将这份基础拓展为面向未来的全球可信投资平台。',
      author: 'Casey Farming',
      role: 'Arbill 首席执行官',
    },
  },
  spotlightContent: {
    heading: '立即加入 Arbill 网络',
    description:
      '无论您是项目方还是投资者，Arbill 都是助力可持续发展的合作伙伴。',
    primaryCta: {
      label: '启动您的项目',
      linkKey: 'projectOwnerForm',
    },
    secondaryCta: {
      label: '自信投资',
      linkKey: 'investorLogin',
    },
  },
  metrics: [
    { value: '38%', label: '记录在案的事故减少 38%' },
    { value: '4 倍', label: '合规报告速度提升 4 倍' },
    { value: '24/7', label: '认证安全顾问全天候支持' },
  ],
  aboutContent: {
    ...en.aboutContent,
    hero: {
      ...en.aboutContent.hero,
      title: 'Arbill —— 五年值得信赖的投资连接',
      subtitle: '面对挑战保持韧性。流程保持透明。愿景追求可持续。',
    },
    highlights: [
      {
        title: '成立于 2020 年',
        description: '在严峻市场中验证韧性',
        icon: 'Flag',
      },
      {
        title: '透明度',
        description: '区块链支持的合约与资金流',
        icon: 'BorderClear',
      },
      {
        title: '全球社区',
        description: '汇聚全球项目方与投资者',
        icon: 'Global',
      },
      {
        title: '可持续优先',
        description: '追求稳健增长与长期信任',
        icon: 'Sustainability',
      },
    ],
    story: {
      heading: '我们的故事',
      paragraphs: [
        'Arbill 的旅程始于投资领域中风险最高的赛道之一。在许多平台因不可持续的承诺而崩溃时，我们选择了另一条道路：**恪守承诺**、**持续兑现回报，并以纪律保护投资者资本**。',
        '凭借这份坚持，我们在缺乏信任的市场中树立了可靠的声誉。责任的根基至今仍指引着我们。最初在不确定时代中求生的故事，如今已成长为连接全球项目方与投资者的专业平台。',
        '我们的使命是打造一个可信的投资平台，让有意义的项目获取所需资源，让投资者发现值得信赖的机会。通过加密货币和透明资金管理，我们在每一步都带来明确性、责任感和信心，使双方专注于创造长远价值。',
        '我们的愿景是成为全球公认、以合规驱动的投资生态典范，证明财务增长与透明度可以并行。Arbill 立志赋能跨境创新，同时保护每位投资者的权益，重新定义数字时代可持续投资的样貌。',
      ],
    },
    beliefs: {
      heading: '我们的信念',
      items: [
        {
          title: '诚信',
          description: '每个项目都以公平与谨慎的态度审核。',
          icon: 'Integrity',
        },
        {
          title: '透明',
          description: '流程清晰，并由区块链技术支持。',
          icon: 'FactCheck',
        },
        {
          title: '可持续',
          description: '优先考虑长期机会而非短期收益。',
          icon: 'Sustainability',
        },
        {
          title: '韧性',
          description: '在挑战性的市场中以负责的方式运营。',
          icon: 'VolunteerActivism',
        },
      ],
    },
    journey: {
      heading: '我们的里程碑',
      items: [
        { year: '2024 - 2025', milestone: '向合规驱动的运营过渡，为全球扩张做好准备。' },
        { year: '2023', milestone: '携手可信的托管机构，保障资金管理安全。' },
        { year: '2021 - 2022', milestone: '以持续保护投资者资本的表现建立信誉。' },
        { year: '2020', milestone: 'Arbill 平台成立，以责任与韧性为指导。' },
      ],
    },
    quote: {
      heading: '我们的承诺',
      text: '在 Arbill，信誉不是宣称，而是行动证明。我们直面波动、经受考验、一步步建立信任。如今，我们正将这份基础拓展为面向未来的全球可信投资平台。',
      author: 'Casey Farming',
      role: 'Arbill 首席执行官',
    },
  },
  howItWorksContent: {
    hero: {
      ...en.howItWorksContent.hero,
      title: '从洞察到执行的协同路径',
      subtitle:
        '为项目方与投资者提供清晰流程，确保安全合约、透明资金流与基于里程碑的责任机制。',
      backgroundImage: en.howItWorksContent.hero.backgroundImage,
    },
    processes: {
      heading: '双角色，共享可信平台',
      subheading:
        'Arbill 为项目方与投资者量身定制流程。虽然旅程不同，但都建立在安全、透明与责任的基础上。',
      owner: {
        title: '项目方流程',
        steps: [
          {
            title: '1. 入驻',
            description:
              '分享项目详情。我们会核实身份、审查计划，确保准备充分以赢得投资者信任。',
          },
          {
            title: '2. 上线',
            description:
              '通过审核后，项目会以清晰的条款上线——包括利率、期限、里程碑等关键信息。',
          },
          {
            title: '3. 里程碑解锁',
            description:
              '资金随里程碑逐步释放，确保负责任的用款并提升投资者信心。',
          },
          {
            title: '4. 进度汇报',
            description:
              '定期向投资者更新。我们协助结构化报告，使信息明确易读。',
          },
          {
            title: '5. 支付利息',
            description:
              '从运营资金中向投资者支付利息，展现持续性与可靠度。',
          },
          {
            title: '6. 项目结项',
            description:
              '当项目完成，归还本金与收益，并取回担保。如果项目未达成，未拨付资金将安全退还。',
          },
        ],
      },
      investor: {
        title: '投资者流程',
        steps: [
          {
            title: '1. 创建账户',
            description:
              '注册、快速验证并通过可信托管方安全存入加密资产。',
          },
          {
            title: '2. 探索并出资',
            description: '浏览经过严格筛选的项目，查看条款并决定投入金额。',
          },
          {
            title: '3. 跟踪进度',
            description:
              '清楚了解资金使用情况。实时监控里程碑、更新与财务报告。',
          },
          {
            title: '4. 获取利息',
            description:
              '利息直接记入账户，可随时再投资或提现。',
          },
          {
            title: '5. 项目收尾',
            description:
              '项目成功时返还本金与利息；若失败，则退回剩余资金，并在适用情况下启动保障基金。',
          },
        ],
      },
    },
    highlight: {
      heading: '内建的交易防护机制',
      subheading: '投资资金与项目资金高度管控。每次拨付都基于证据、审批与日常核对，确保安全。',
      pillars: [
        {
          title: '托管边界',
          description: '仅有充值与提现涉及托管方。',
          icon: 'Lan',
        },
        {
          title: '里程碑纪律',
          description: '资金只有在验证里程碑后才能释放。',
          icon: 'ManageHistory',
        },
        {
          title: '禁止跨项目挪用',
          description: '项目资金不得挪作他用。',
          icon: 'Hub',
        },
        {
          title: '保障基金',
          description: '安全储备池，在项目失败时向投资者补偿。',
          icon: 'Handshake',
        },
      ],
    },
    quote: {
      text: '携手共创负责任的投资未来。',
      author: 'Jokie Downing',
      role: 'Arbill 首席战略官',
      ctas: [
        { label: '以项目方身份合作', linkKey: 'projectOwnerForm' },
        { label: '以投资者身份合作', linkKey: 'investorLogin' },
      ],
    },
  },
  contactContent: {
    hero: {
      ...en.contactContent.hero,
      title: '联系 Arbill 团队',
      subtitle: '我们随时支持全球范围内的项目方、投资者及合作伙伴。',
    },
    addressBook: {
      heading: '联系目录',
      subheading: '选择合适的沟通渠道，我们会尽快回应。',
      cards: [
        {
          title: '一般咨询',
          email: 'contact@arbill.co',
          description: '关于平台、服务或合作机会的提问。',
          icon: 'Global',
        },
        {
          title: '项目方',
          email: 'projects@arbill.co',
          description: '提交项目提案或索取入驻支持。',
          icon: 'Briefcase',
        },
        {
          title: '投资者',
          email: 'investors@arbill.co',
          description: '账户、充值或投资信息相关协助。',
          icon: 'Team',
        },
      ],
    },
    form: {
      heading: '发送消息给我们',
      description: '倾向直接沟通？填写下方表单，我们会尽快回复。',
      fields: {
        name: '姓名',
        email: '电子邮箱',
        subject: '主题',
        message: '留言内容',
      },
      submitLabel: '提交请求',
      submittingLabel: '正在提交...',
      successMessage: '感谢您的来信，我们已收到并会尽快回复。',
      errorMessage: '提交出现问题，请稍后再试。',
    },
    community: {
      heading: '加入社区',
      subheading: '通过社交平台与专业网络保持与 Arbill 的联系。',
      channels: [
        {
          title: '加入群组',
          description: '与安全策略师实时互动与问答。',
          link: 'https://t.me/arbill',
          icon: 'Telegram',
        },
        {
          title: '订阅频道',
          description: '参加工作坊、平台演示和客户故事。',
          link: 'https://youtube.com/@ArbillPlatform',
          icon: 'YouTube',
        },
        {
          title: '关注主页',
          description: '社区亮点、活动回顾与最佳实践。',
          link: 'https://www.facebook.com/arbillfund',
          icon: 'Facebook',
        },
        {
          title: '关注 LinkedIn',
          description: '行业趋势、领导洞察与合作伙伴关系。',
          link: 'https://www.linkedin.com/company/arbill-platform',
          icon: 'LinkedIn',
        },
      ],
      newsletter: {
        emailLabel: '工作邮箱',
        submitLabel: '订阅新闻简报',
        submittingLabel: '正在订阅...',
        successMessage: '成功订阅我们的新闻简报！',
        errorMessage: '订阅失败，请重试。',
        requiredMessage: '请输入邮箱',
      },
    },
  },
  termsContent: en.termsContent,
  privacyContent: en.privacyContent,
  resourcesContent: {
    badge: '资源',
    assuranceFund: {
      title: '保障基金',
      keyTakeawaysHeading: '关键信息',
      keyTakeaways: [
        '在项目失败时保护投资者。',
        '非强制机制，但能显著提升项目信誉。',
        '资金独立托管、透明并自动分配。',
        '鼓励项目方承担更多责任。',
      ],
      intro: [
        '保障基金是一种防护机制，用于在项目失败时保护投资者。',
        '它像一张安全网——虽然并非强制要求，但启用保障基金的项目能立即展现更高的责任感。',
        '当项目方决定设立保障基金时，会将募集资金的一部分（或额外出资）存入 Arbill 管理的独立账户。该资金完全透明，并在项目页面清晰展示，使投资者在投资前了解保障力度。',
        '如果项目成功，保障基金作为奖励返还给项目方。',
        '如果项目失败，保障基金会按投资者的出资比例自动分配，帮助弥补损失并维护信任。',
      ],
      exampleHeading: '示例',
      exampleParagraphs: [
        '假设一个项目从投资者处募集 100,000 美元，项目方将 5,000 美元（5%）划入保障基金。',
      ],
      exampleBullets: [
        '如果项目成功，这 5,000 美元返还给项目方。',
        '如果项目失败，Arbill 会按比例将 5,000 美元重新分配给所有投资者。',
      ],
      examplePostListParagraphs: [
        '例如，投入 10,000 美元（10%）的投资者将获得 500 美元补偿。',
      ],
      closing: [
        '该机制鼓励项目方提供真实担保，也让投资者更有信心，即使最坏情况发生，他们仍能部分收回资金。',
        '因此，保障基金不仅是一项功能，更是彰显项目责任感的信号。',
      ],
    },
    curePeriod: {
      title: '补救期（Cure Period）',
      keyTakeawaysHeading: '关键信息',
      keyTakeaways: [
        '为项目方提供补齐短缺的缓冲期。',
        '避免因延迟付款而立即被判定违约。',
        '通过冻结资金和严格控制保护投资者。',
        '兼顾公平性与责任约束。',
      ],
      whatHeading: '什么是补救期？',
      whatParagraphs: [
        '补救期是预设的短暂宽限期，允许项目方在系统标记违约前补足付款或余额缺口。',
        '这体现了 Arbill 对公平透明的承诺，在保障投资者权益的同时，也给负责任的项目提供纠正机会。',
        '当项目错过利息支付或运营余额低于要求时，Arbill 会立即：',
      ],
      immediateActions: [
        '冻结所有新的资金拨付，',
        '启动补救期（例如 7 天）。',
      ],
      resolutionParagraphs: [
        '在此期间，项目方必须补足缺口以恢复平衡。',
        '若在宽限期内完成补救，项目照常进行；否则系统将其标记为违约，并启动资金回收程序。',
      ],
      exampleHeading: '示例',
      exampleIntro: [
        '假设项目需向投资者支付 2,000 美元利息，但账户仅有 1,200 美元。Arbill 会冻结所有新拨付并启动 7 天补救期。',
      ],
      exampleOutcomes: [
        '若项目方在 7 天内补齐 800 美元 → 项目继续运行。',
        '若未补齐 → 系统判定违约，退回未拨付资金，并在适用时启动保障基金。',
      ],
      whyHeading: '为何重要',
      whyParagraphs: [
        '补救期保证：',
      ],
      whyList: [
        '投资者免于遭遇突然违约，',
        '项目方获得公平且结构化的整改机会，',
        'Arbill 坚守透明与纪律并行的投资环境。',
      ],
    },
  },
};

export default zh;

