import en from './en.js';

const vi = {
  ...en,
  navigationItems: [
    { label: 'Trang chủ', path: '/' },
    { label: 'Về Arbill', path: '/about' },
    { label: 'Cách thức hoạt động', path: '/how-it-works' },
    { label: 'Liên hệ', path: '/contact' },
  ],
  navbar: {
    ...en.navbar,
    brand: 'ARBILL',
    drawerTagline: 'Nền tảng đầu tư uy tín',
    login: 'Đăng nhập',
    toggleAriaLabel: 'Chuyển đổi menu điều hướng',
  },
  footer: {
    ...en.footer,
    tagline: 'Xây dựng uy tín bằng đầu tư có trách nhiệm.',
    legalNotice: '© {year} Arbill Platform. Bảo lưu mọi quyền.',
    sections: {
      product: {
        ...en.footer.sections.product,
        title: 'Sản phẩm',
        links: [
          { label: 'Tổng quan nền tảng', link: '#' },
          { label: 'Ứng dụng di động', link: '#' },
          { label: 'Điều khoản & Điều kiện', link: '/terms' },
          { label: 'Chính sách bảo mật', link: '/privacy' },
        ],
      },
      company: {
        ...en.footer.sections.company,
        title: 'Công ty',
        links: [
          { label: 'Giới thiệu', link: '#' },
          { label: 'Tuyển dụng', link: '#' },
          { label: 'Đối tác', link: '#' },
          { label: 'Tin tức', link: '#' },
        ],
      },
      resources: {
        ...en.footer.sections.resources,
        title: 'Tài nguyên',
        links: [
          { label: 'Hướng dẫn', link: '#' },
          { label: 'Học viện đầu tư', link: '#' },
          { label: 'Sự kiện', link: '#' },
          { label: 'Hỗ trợ', link: '#' },
        ],
      },
    },
  },
  homeHero: {
    ...en.homeHero,
    title: 'Nền tảng Arbill - Kết nối Dự án và Nhà đầu tư toàn cầu',
    subtitle:
      'Từ năm 2020, Arbill mang đến nền tảng đầu tư tin cậy giúp Chủ dự án huy động vốn và Nhà đầu tư tìm kiếm cơ hội với tính minh bạch trên blockchain và hợp đồng an toàn.',
    ctas: [
      { label: 'Dành cho Chủ dự án', linkKey: 'projectOwnerForm' },
      { label: 'Dành cho Nhà đầu tư', linkKey: 'investorLogin' },
    ],
  },
  whoWeAreContent: {
    heading: 'Chúng tôi là ai',
    tagline: 'Cầu nối tin cậy giữa dự án và nhà đầu tư.',
    description:
      'Arbill là nền tảng đầu tư quốc tế kết nối những nhà kiến tạo và nhà đầu tư. Chúng tôi chuyên cung cấp hợp đồng đầu tư an toàn và quản lý dòng tiền bằng tiền mã hóa. Từ tháng 4/2020, Arbill kiên định xây dựng hệ sinh thái minh bạch và đáng tin cậy.',
    bullets: [
      'Thẩm định trách nhiệm: Mọi dự án đều được đánh giá kỹ lưỡng để bảo vệ nhà đầu tư và chỉ hỗ trợ cơ hội đáng tin cậy.',
      'Dòng tiền minh bạch: Quy trình dựa trên blockchain giúp mỗi giao dịch đều rõ ràng, dễ kiểm tra và an toàn.',
      'Phát triển bền vững: Ưu tiên giá trị dài hạn cho cả nhà đầu tư và chủ dự án thay vì lợi nhuận ngắn hạn.',
    ],
  },
  homeHowItWorkSteps: {
    heading: 'Arbill hoạt động thế nào',
    tagline: 'Các bước rõ ràng để kết nối ý tưởng với nguồn vốn.',
    steps: [
      {
        title: 'Gửi đề xuất',
        description:
          'Chủ dự án gửi ý tưởng, được thẩm định để đảm bảo chất lượng, tính khả thi và tạo niềm tin cho nhà đầu tư.',
      },
      {
        title: 'Chuẩn hóa hợp đồng',
        description:
          'Arbill hỗ trợ hai bên hoàn thiện thỏa thuận với các điều khoản minh bạch, an toàn và rõ trách nhiệm.',
      },
      {
        title: 'Quản lý dòng tiền',
        description:
          'Khoản đầu tư được giải ngân theo từng mốc, bảo đảm sử dụng vốn đúng mục đích và minh bạch.',
      },
    ],
  },
  joinAudienceContent: {
    heading: 'Đối tượng tham gia',
    tagline: 'Cơ hội cho cả nhà kiến tạo và nhà đầu tư toàn cầu.',
    owner: {
      title: 'Chủ dự án',
      description: 'Tiếp cận nhà đầu tư toàn cầu và huy động vốn với sự tự tin.',
      highlights: [
        'Tiếp cận nhà đầu tư không biên giới.',
        'Hỗ trợ xây dựng mốc triển khai, báo cáo và sử dụng vốn hiệu quả.',
        'Niêm yết trên nền tảng coi trọng niềm tin và minh bạch.',
      ],
      cta: { label: 'Gửi dự án của bạn', linkKey: 'projectOwnerForm' },
    },
    investor: {
      title: 'Nhà đầu tư',
      description: 'Khám phá dự án đã được thẩm định và đầu tư bằng giao dịch tiền mã hóa an toàn.',
      highlights: [
        'Chỉ đầu tư vào dự án được xét duyệt cẩn trọng.',
        'Theo dõi khoản đầu tư với báo cáo minh bạch trên blockchain.',
        'Tạo thu nhập ổn định với cơ chế giảm thiểu rủi ro.',
      ],
      cta: { label: 'Bắt đầu đầu tư', linkKey: 'investorLogin' },
    },
  },
  commitmentContent: {
    heading: 'Cam kết của chúng tôi',
    tagline: 'Kiến tạo niềm tin lâu dài cho mọi giao dịch.',
    values: [
      {
        title: '5 năm phục vụ',
        description:
          'Arbill được thành lập tháng 4/2020. Dù thị trường biến động, chúng tôi vẫn kiên định phục vụ cộng đồng và duy trì cam kết dài hạn.',
      },
      {
        title: 'An toàn là trên hết',
        description:
          'Mọi khoản đầu tư đều gắn với hợp đồng số và dòng tiền được quản lý bằng blockchain để đảm bảo minh bạch cho cả hai bên.',
      },
      {
        title: 'Mạng lưới toàn cầu',
        description:
          'Arbill kết nối Chủ dự án và Nhà đầu tư khắp thế giới, mang cơ hội vượt biên giới cho những ai chấp nhận tiền mã hóa.',
      },
      {
        title: 'Phát triển bền vững',
        description:
          'Mục tiêu của chúng tôi không phải lợi nhuận mạo hiểm mà là hệ sinh thái minh bạch, đáng tin cậy và bền vững.',
      },
    ],
    narrative: [
      'Từ khi thành lập, Arbill luôn hướng tới môi trường đầu tư minh bạch và an toàn cho cộng đồng toàn cầu. Chúng tôi tin rằng niềm tin là nền tảng của mọi quan hệ tài chính, vì vậy mọi tương tác đều được thiết kế để tạo sự tin cậy ngay từ đầu bằng cách kết hợp công nghệ blockchain và hợp đồng cấu trúc rõ ràng.',
      'Trải qua nhiều biến động thị trường, Arbill vẫn là đối tác ổn định của nhà đầu tư. Điều đó phản ánh năng lực thích ứng và cam kết phục vụ dài hạn thay vì chạy theo lợi nhuận ngắn hạn. Với mạng lưới toàn cầu, chúng tôi giúp cơ hội đầu tư lưu chuyển mạch lạc giữa các quốc gia.',
      'Sứ mệnh của chúng tôi vượt lên việc kết nối các bên. Arbill xây dựng hệ sinh thái nơi dự án phát triển bền vững và nhà đầu tư yên tâm đồng hành. Minh bạch, an toàn và trách nhiệm là những nguyên tắc cốt lõi để mỗi thành viên đều được bảo vệ.',
    ],
    quote: {
      text: 'Ở Arbill, uy tín không phải lời tuyên bố mà là hành động nhất quán. Chúng tôi đã đi qua biến động, đối mặt thử thách và kiến tạo niềm tin từng bước. Giờ đây chúng tôi tiếp tục biến nền tảng đó thành hệ sinh thái đầu tư toàn cầu đáng tin cậy cho tương lai.',
      author: 'Casey Farming',
      role: 'CEO, Arbill',
    },
  },
  spotlightContent: {
    heading: 'Tham gia mạng lưới Arbill ngay hôm nay',
    description:
      'Dù bạn là Chủ dự án hay Nhà đầu tư, Arbill luôn là đối tác đồng hành trong hành trình phát triển bền vững.',
    primaryCta: {
      label: 'Bắt đầu dự án',
      linkKey: 'projectOwnerForm',
    },
    secondaryCta: {
      label: 'Đầu tư tự tin',
      linkKey: 'investorLogin',
    },
  },
  metrics: [
    { value: '38%', label: 'Giảm 38% sự cố được ghi nhận' },
    { value: '4x', label: 'Báo cáo tuân thủ nhanh hơn gấp 4 lần' },
    { value: '24/7', label: 'Đội ngũ cố vấn an toàn hỗ trợ 24/7' },
  ],
  aboutContent: {
    ...en.aboutContent,
    hero: {
      ...en.aboutContent.hero,
      title: 'Arbill - 5 năm kết nối đầu tư đáng tin cậy',
      subtitle: 'Kiên cường trước thử thách. Minh bạch trong quy trình. Bền vững trong tầm nhìn.',
    },
    highlights: [
      {
        title: 'Thành lập năm 2020',
        description: 'Minh chứng khả năng thích ứng trong thị trường đầy thử thách',
        icon: 'Flag',
      },
      {
        title: 'Minh bạch',
        description: 'Hợp đồng và dòng tiền bảo chứng bởi blockchain',
        icon: 'BorderClear',
      },
      {
        title: 'Cộng đồng toàn cầu',
        description: 'Kết nối Chủ dự án và Nhà đầu tư trên khắp thế giới',
        icon: 'Global',
      },
      {
        title: 'Ưu tiên bền vững',
        description: 'Tăng trưởng ổn định, niềm tin dài hạn',
        icon: 'Sustainability',
      },
    ],
    story: {
      heading: 'Câu chuyện của chúng tôi',
      paragraphs: [
        'Hành trình của Arbill bắt đầu từ một trong những lĩnh vực đầu tư giàu rủi ro nhất. Khi nhiều nền tảng sụp đổ vì chạy theo hứa hẹn quá mức, chúng tôi chọn con đường khác: **giữ trọn cam kết**, **mang lại lợi nhuận ổn định và bảo vệ vốn của nhà đầu tư** bằng sự kỷ luật.',
        'Chính sự kiên định đó đã giúp Arbill gây dựng danh tiếng trong thị trường khan hiếm niềm tin. Nền tảng trách nhiệm ngày ấy vẫn dẫn dắt chúng tôi hôm nay. Điều khởi nguồn bằng bản năng sinh tồn trong biến động giờ đã trở thành nền tảng chuyên nghiệp kết nối Chủ dự án và Nhà đầu tư toàn cầu.',
        'Sứ mệnh của Arbill là tạo ra nền tảng đầu tư nơi những dự án ý nghĩa tìm được nguồn lực, và nhà đầu tư sở hữu cơ hội đáng tin cậy. Ứng dụng sức mạnh của tiền mã hóa cùng quản lý dòng tiền minh bạch, chúng tôi đảm bảo mọi bước đi đều rõ ràng để cả hai bên tập trung xây dựng giá trị lâu dài.',
        'Tầm nhìn của chúng tôi là trở thành hệ sinh thái đầu tư tuân thủ toàn cầu, đặt chuẩn mực mới về niềm tin và trách nhiệm. Arbill mong muốn tiếp thêm sức mạnh cho đổi mới xuyên biên giới đồng thời bảo vệ quyền lợi của từng nhà đầu tư, chứng minh rằng tăng trưởng tài chính và minh bạch có thể song hành.',
      ],
    },
    beliefs: {
      heading: 'Niềm tin của chúng tôi',
      items: [
        {
          title: 'Liêm chính',
          description: 'Mọi dự án đều được đánh giá công bằng và kỹ lưỡng.',
          icon: 'Integrity',
        },
        {
          title: 'Minh bạch',
          description: 'Quy trình rõ ràng được hỗ trợ bởi công nghệ blockchain.',
          icon: 'FactCheck',
        },
        {
          title: 'Bền vững',
          description: 'Ưu tiên cơ hội dài hạn hơn lợi nhuận chớp nhoáng.',
          icon: 'Sustainability',
        },
        {
          title: 'Kiên cường',
          description: 'Đã chứng minh khả năng vận hành có trách nhiệm trong thị trường thử thách.',
          icon: 'VolunteerActivism',
        },
      ],
    },
    journey: {
      heading: 'Hành trình của chúng tôi',
      items: [
        { year: '2024 - 2025', milestone: 'Chuyển đổi sang mô hình tuân thủ để mở rộng toàn cầu.' },
        { year: '2023', milestone: 'Hợp tác với các đơn vị lưu ký uy tín nhằm bảo đảm dòng tiền an toàn.' },
        { year: '2021 - 2022', milestone: 'Gây dựng uy tín bằng việc bảo vệ vốn nhà đầu tư một cách nhất quán.' },
        { year: '2020', milestone: 'Arbill Platform ra đời với kim chỉ nam trách nhiệm và bền vững.' },
      ],
    },
    quote: {
      heading: 'Cam kết của chúng tôi',
      text: 'Ở Arbill, uy tín không phải lời tuyên bố mà là hành động nhất quán. Chúng tôi đã đi qua biến động, đối mặt thử thách và kiến tạo niềm tin từng bước. Giờ đây chúng tôi tiếp tục biến nền tảng đó thành hệ sinh thái đầu tư toàn cầu đáng tin cậy cho tương lai.',
      author: 'Casey Farming',
      role: 'CEO, Arbill',
    },
  },
  howItWorksContent: {
    hero: {
      ...en.howItWorksContent.hero,
      title: 'Lộ trình phối hợp từ insight đến thực thi',
      subtitle:
        'Quy trình rõ ràng cho Chủ dự án và Nhà đầu tư, đảm bảo hợp đồng an toàn, dòng tiền minh bạch và trách nhiệm theo từng mốc.',
      backgroundImage: en.howItWorksContent.hero.backgroundImage,
    },
    processes: {
      heading: 'Hai vai trò, một nền tảng đáng tin',
      subheading:
        'Arbill vận hành quy trình riêng cho Chủ dự án và Nhà đầu tư. Mỗi hành trình khác nhau nhưng đều dựa trên nền tảng an toàn, minh bạch và trách nhiệm.',
      owner: {
        title: 'Quy trình cho Chủ dự án',
        steps: [
          {
            title: '1. Onboarding',
            description:
              'Chia sẻ thông tin dự án. Chúng tôi xác minh danh tính, rà soát kế hoạch và chuẩn bị đầy đủ để nhà đầu tư tin tưởng.',
          },
          {
            title: '2. Niêm yết',
            description:
              'Sau khi phê duyệt, dự án được hiển thị trên nền tảng với các điều khoản rõ ràng: lãi suất, thời hạn, mốc giải ngân và điều kiện.',
          },
          {
            title: '3. Giải ngân theo mốc',
            description:
              'Vốn được giải ngân từng phần khi hoàn thành mốc đã thỏa thuận, đảm bảo sử dụng vốn trách nhiệm và củng cố niềm tin.',
          },
          {
            title: '4. Báo cáo tiến độ',
            description:
              'Cập nhật định kỳ cho nhà đầu tư. Chúng tôi hỗ trợ chuẩn hóa báo cáo để thông tin rõ ràng, dễ theo dõi.',
          },
          {
            title: '5. Chi trả lãi',
            description: 'Trả lãi cho nhà đầu tư từ quỹ vận hành, thể hiện sự nhất quán và đáng tin cậy.',
          },
          {
            title: '6. Hoàn tất',
            description:
              'Khi dự án hoàn thành, hoàn trả gốc và lãi, đồng thời thu hồi quỹ đảm bảo. Nếu dự án không thành công, phần vốn chưa giải ngân sẽ được hoàn trả.',
          },
        ],
      },
      investor: {
        title: 'Quy trình cho Nhà đầu tư',
        steps: [
          {
            title: '1. Tạo tài khoản',
            description: 'Đăng ký, xác minh nhanh và gửi tiền mã hóa an toàn vào tài khoản lưu ký tin cậy.',
          },
          {
            title: '2. Khám phá & cam kết',
            description: 'Xem xét dự án đã thẩm định, kiểm tra điều khoản và chọn khoản đầu tư mong muốn.',
          },
          {
            title: '3. Theo dõi tiến độ',
            description: 'Theo dõi cách vốn được phân bổ. Giám sát mốc, cập nhật và báo cáo tài chính theo thời gian thực.',
          },
          {
            title: '4. Nhận lãi',
            description: 'Lãi suất được ghi nhận trực tiếp trong tài khoản, sẵn sàng tái đầu tư hoặc rút ra.',
          },
          {
            title: '5. Kết thúc dự án',
            description:
              'Khi dự án thành công, hoàn vốn và lãi cho bạn. Nếu thất bại, phần vốn còn lại được hoàn trả và kích hoạt quỹ đảm bảo (nếu có).',
          },
        ],
      },
    },
    highlight: {
      heading: 'Cơ chế bảo vệ tích hợp cho mọi giao dịch',
      subheading:
        'Vốn của nhà đầu tư và dòng tiền dự án được kiểm soát chặt chẽ. Mọi giải ngân đều gắn với bằng chứng, phê duyệt và đối soát hàng ngày.',
      pillars: [
        {
          title: 'Ranh giới lưu ký',
          description: 'Chỉ giao dịch nạp/rút mới chạm đến đơn vị lưu ký.',
          icon: 'Lan',
        },
        {
          title: 'Kỷ luật theo mốc',
          description: 'Tiền chỉ được giải ngân khi mốc được xác nhận.',
          icon: 'ManageHistory',
        },
        {
          title: 'Không dùng chéo dự án',
          description: 'Vốn của dự án không thể bị chuyển sang dự án khác.',
          icon: 'Hub',
        },
        {
          title: 'Quỹ đảm bảo',
          description: 'Quỹ dự phòng bù đắp tổn thất nếu dự án thất bại.',
          icon: 'Handshake',
        },
      ],
    },
    quote: {
      text: 'Cùng nhau, chúng ta kiến tạo tương lai đầu tư có trách nhiệm.',
      author: 'Jokie Downing',
      role: 'Giám đốc Chiến lược, Arbill',
      ctas: [
        { label: 'Đồng hành với tư cách Chủ dự án', linkKey: 'projectOwnerForm' },
        { label: 'Đồng hành với tư cách Nhà đầu tư', linkKey: 'investorLogin' },
      ],
    },
  },
  contactContent: {
    hero: {
      ...en.contactContent.hero,
      title: 'Liên hệ với Arbill',
      subtitle: 'Chúng tôi luôn sẵn sàng hỗ trợ Chủ dự án, Nhà đầu tư và đối tác trên toàn cầu.',
    },
    addressBook: {
      heading: 'Sổ liên hệ của bạn',
      subheading: 'Chọn kênh phù hợp với nhu cầu, đội ngũ Arbill sẽ phản hồi nhanh chóng.',
      cards: [
        {
          title: 'Yêu cầu chung',
          email: 'contact@arbill.co',
          description: 'Liên hệ về nền tảng, dịch vụ hoặc cơ hội hợp tác.',
          icon: 'Global',
        },
        {
          title: 'Chủ dự án',
          email: 'projects@arbill.co',
          description: 'Gửi đề xuất dự án hoặc yêu cầu hỗ trợ onboarding.',
          icon: 'Briefcase',
        },
        {
          title: 'Nhà đầu tư',
          email: 'investors@arbill.co',
          description: 'Hỗ trợ tài khoản, nạp/rút hoặc thông tin khoản đầu tư.',
          icon: 'Team',
        },
      ],
    },
    form: {
      heading: 'Gửi tin nhắn cho chúng tôi',
      description: 'Bạn muốn liên hệ trực tiếp? Điền biểu mẫu dưới đây, chúng tôi sẽ phản hồi sớm nhất.',
      fields: {
        name: 'Họ và tên',
        email: 'Email',
        subject: 'Chủ đề',
        message: 'Nội dung',
      },
      submitLabel: 'Gửi yêu cầu',
      submittingLabel: 'Đang gửi...',
      successMessage: 'Cảm ơn bạn! Chúng tôi đã nhận được tin nhắn.',
      errorMessage: 'Có lỗi xảy ra, vui lòng thử lại.',
    },
    community: {
      heading: 'Tham gia cộng đồng',
      subheading: 'Kết nối với Arbill qua mạng xã hội chuyên nghiệp và nhóm nhà đầu tư.',
      channels: [
        {
          title: 'Tham gia nhóm',
          description: 'Cập nhật thời gian thực và trao đổi với chuyên gia an toàn.',
          link: 'https://t.me/arbill',
          icon: 'Telegram',
        },
        {
          title: 'Theo dõi kênh',
          description: 'Hội thảo, hướng dẫn nền tảng và câu chuyện khách hàng.',
          link: 'https://youtube.com/@ArbillPlatform',
          icon: 'YouTube',
        },
        {
          title: 'Theo dõi fanpage',
          description: 'Điểm nhấn cộng đồng, sự kiện và kinh nghiệm thực tiễn.',
          link: 'https://www.facebook.com/arbillfund',
          icon: 'Facebook',
        },
        {
          title: 'Theo dõi LinkedIn',
          description: 'Xu hướng ngành, góc nhìn lãnh đạo và hợp tác mới.',
          link: 'https://www.linkedin.com/company/arbill-platform',
          icon: 'LinkedIn',
        },
      ],
      newsletter: {
        emailLabel: 'Email công việc',
        submitLabel: 'Đăng ký bản tin',
        submittingLabel: 'Đang đăng ký...',
        successMessage: 'Đăng ký nhận bản tin thành công!',
        errorMessage: 'Đăng ký thất bại. Vui lòng thử lại.',
        requiredMessage: 'Vui lòng nhập email',
      },
    },
  },
  termsContent: en.termsContent,
  privacyContent: en.privacyContent,
  resourcesContent: {
    badge: 'Tài liệu',
    assuranceFund: {
      title: 'Quỹ đảm bảo',
      keyTakeawaysHeading: 'Điểm chính',
      keyTakeaways: [
        'Bảo vệ nhà đầu tư khi dự án thất bại.',
        'Không bắt buộc nhưng thể hiện sự cam kết của dự án.',
        'Nguồn quỹ tách biệt, minh bạch và tự động phân bổ.',
        'Khuyến khích Chủ dự án hành xử có trách nhiệm.',
      ],
      intro: [
        'Quỹ đảm bảo là lớp đệm tài chính giúp bảo vệ nhà đầu tư nếu dự án không thành công.',
        'Đây giống như lưới an toàn – không phải dự án nào cũng bắt buộc, nhưng dự án có quỹ đảm bảo sẽ thể hiện trách nhiệm cao hơn.',
        'Khi Chủ dự án thiết lập quỹ đảm bảo, một phần vốn huy động (hoặc khoản bổ sung) sẽ được tách riêng và do Arbill quản lý. Khoản này minh bạch và hiển thị rõ trên trang dự án để nhà đầu tư biết mức bảo vệ.',
        'Nếu dự án thành công, quỹ đảm bảo được hoàn trả cho Chủ dự án như phần thưởng cho sự cam kết.',
        'Nếu dự án thất bại, quỹ đảm bảo sẽ tự động phân bổ cho nhà đầu tư theo tỷ lệ góp vốn, giúp giảm thiểu tổn thất và duy trì niềm tin.',
      ],
      exampleHeading: 'Ví dụ',
      exampleParagraphs: [
        'Giả sử một dự án huy động 100.000 USD và Chủ dự án dành 5.000 USD (5%) vào quỹ đảm bảo.',
      ],
      exampleBullets: [
        'Nếu dự án thành công, 5.000 USD được hoàn trả cho Chủ dự án.',
        'Nếu thất bại, Arbill phân bổ 5.000 USD lại cho nhà đầu tư theo tỷ lệ góp vốn.',
      ],
      examplePostListParagraphs: [
        'Ví dụ nhà đầu tư góp 10.000 USD (10%) sẽ nhận lại 500 USD từ quỹ đảm bảo.',
      ],
      closing: [
        'Cơ chế này khuyến khích Chủ dự án ký gửi tài sản thực, đồng thời mang lại thêm sự tự tin cho nhà đầu tư rằng một phần vốn của họ được bảo vệ trong kịch bản xấu nhất.',
        'Vì vậy, quỹ đảm bảo không chỉ là một tính năng – đó là tín hiệu thể hiện trách nhiệm của dự án trên nền tảng Arbill.',
      ],
    },
    curePeriod: {
      title: 'Thời gian khắc phục (Cure Period)',
      keyTakeawaysHeading: 'Điểm chính',
      keyTakeaways: [
        'Khoảng thời gian gia hạn để Chủ dự án bổ sung thiếu hụt.',
        'Tránh việc dự án bị đánh dấu vỡ nợ ngay lập tức khi trễ thanh toán.',
        'Bảo vệ nhà đầu tư nhờ đóng băng quỹ và kiểm soát dòng tiền.',
        'Dung hòa giữa sự công bằng và trách nhiệm nghiêm ngặt.',
      ],
      whatHeading: 'Thời gian khắc phục là gì?',
      whatParagraphs: [
        'Cure Period là khoảng thời gian ân hạn ngắn cho phép Chủ dự án bổ sung khoản thiếu hụt trước khi hệ thống xác định vỡ nợ.',
        'Điều này thể hiện cam kết của Arbill về sự công bằng và minh bạch: dự án vẫn có cơ hội sửa sai trong khi quyền lợi nhà đầu tư vẫn được bảo vệ.',
        'Khi dự án trễ lãi hoặc số dư thấp hơn mức yêu cầu, Arbill sẽ:',
      ],
      immediateActions: [
        'Đóng băng mọi khoản giải ngân mới, và',
        'Kích hoạt Cure Period (ví dụ 7 ngày).',
      ],
      resolutionParagraphs: [
        'Trong thời gian này, Chủ dự án phải nạp thêm phần thiếu để khôi phục trạng thái cân bằng.',
        'Nếu khắc phục kịp thời, dự án tiếp tục như bình thường; nếu không, hệ thống chuyển sang chế độ vỡ nợ và thu hồi.',
      ],
      exampleHeading: 'Ví dụ',
      exampleIntro: [
        'Giả sử dự án phải trả 2.000 USD tiền lãi nhưng chỉ còn 1.200 USD. Arbill đóng băng giải ngân và bắt đầu thời gian khắc phục 7 ngày.',
      ],
      exampleOutcomes: [
        'Nếu Chủ dự án bổ sung 800 USD trong 7 ngày → dự án tiếp tục.',
        'Nếu không → hệ thống ghi nhận vỡ nợ, hoàn trả phần vốn chưa giải ngân và kích hoạt quỹ đảm bảo (nếu có).',
      ],
      whyHeading: 'Vì sao quan trọng',
      whyParagraphs: [
        'Thời gian khắc phục đảm bảo rằng:',
      ],
      whyList: [
        'Nhà đầu tư được bảo vệ khỏi việc vỡ nợ bất ngờ,',
        'Chủ dự án có cơ hội công bằng để xử lý sự cố ngắn hạn, và',
        'Arbill duy trì môi trường đầu tư minh bạch, kỷ luật.',
      ],
    },
  },
};

export default vi;

