export const seo = {
  zh: {
    title: '薛一凡 | 全栈软件工程师',
    description: '拥有4年以上经验的全栈软件工程师，精通 React、TypeScript 和 Node.js。专注于前端架构和可扩展系统。',
  },
  en: {
    title: 'Yifan Xue | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer with 4+ years of experience in React, TypeScript, and Node.js. Specialized in front-end architecture and scalable systems.',
  },
};

export const translations = {
  zh: {
    greeting: '致力于构建',
    greetingRoles: ['Full-Stack Engineer', 'Front-End Architect', 'React & TypeScript Expert'],
    pillLabels: ['Engineer', 'Architect'],
    email: 'yifanxue.sde@gmail.com',
    role: '全栈系统',
    story: {
      context: '4年以上构建高影响力的软件解决方案经验。',
      reflections: ['运行顺畅。可扩展。', '...下一个挑战是什么？'],
      hookParagraphs: [
        ['在 Sagent 领导了前端架构的现代化改造。'],
        [
          '我的激情是构建可扩展系统。',
          '*构建* +稳健的架构+。',
        ],
      ],
      why: '在 Sagent 和 Walmart，我实现了复杂工作流的自动化，并优化了服务数千用户的多租户平台性能。',
      seeking: [
        '持续学习中。',
        '更大的团队。更难的问题。端到端。',
        '准备好迎接下一个全职角色。',
      ],
      nav: [
        { icon: 'briefcase', label: '我的经历', href: '#experience' },
        { icon: 'mail', label: '联系我', href: '#contact' },
        { icon: 'bot', label: '问问我', href: '#chat', highlight: true },
      ],
      skills: [
        'Front-End Architecture',
        'State Management',
        'Full-Stack Development',
        'Data Pipelines',
        'Performance Optimization',
        'System Observability',
      ],
      skipButton: '跳过介绍',
    },
    taglines: [] as readonly string[],
    location: 'United States · 远程 / 混合办公',
    roles: [
      'Full-Stack Software Engineer',
      'Front-End Architect',
      'TypeScript Specialist',
    ],
    summary: {
      title: '专业总结',
      p1: '软件工程师，专注于',
      p1Highlight: '现代前端架构',
      p1End:
        '及全栈开发。曾在 Walmart 和 Sagent 等行业领先公司任职，擅长将复杂需求转化为可扩展、可维护且高性能的产品。',
      p2: '端到端负责',
      p2Highlight: '设计 → 实现 → 优化 → 维护',
      p2End: '，与产品和设计团队紧密协作。',
      cards: [
        {
          title: '工程师思维',
          desc: '专注于代码质量、严谨测试和整洁架构',
        },
        {
          title: '优势',
          desc: '快速适应新技术，解决复杂问题，系统优化',
        },
        {
          title: '技术熟练度',
          desc: 'React, TypeScript, Node.js, GraphQL, GCP 和数据管道',
        },
      ],
    },
    coreCompetencies: {
      title: '核心能力',
      items: [
        {
          title: '前端架构',
          desc: '现代化遗留架构、专有设计系统和 UI 可扩展性',
        },
        {
          title: '状态管理与性能',
          desc: '熟练运用 React Hooks, Redux (Thunk/Saga) 及重渲染优化',
        },
        {
          title: '全栈开发',
          desc: '使用 Node.js 和 GraphQL 构建 BFF，REST APIs 和可扩展微服务',
        },
        {
          title: '数据工程',
          desc: '在 GCP 上使用 Python, Scala, Apache Spark 和 Airflow 构建数据管道',
        },
        {
          title: '质量与自动化',
          desc: '在 CI/CD 环境中使用 Jest, React Testing Library 和 Cypress 进行详尽测试',
        },
        {
          title: '系统可观测性',
          desc: '使用 Splunk, OpenObserve 和 Grafana 进行主动监控，确保高可用性',
        },
      ],
    },
    techStack: {
      title: '技术栈',
      categories: [
        {
          name: '语言',
          items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Scala', 'SQL'],
        },
        {
          name: '前端',
          items: ['React.js', 'Redux', 'Angular', 'Next.js', 'Ant Design', 'Vite', 'Webpack'],
        },
        {
          name: '后端',
          items: ['Node.js', 'REST APIs', 'GraphQL'],
        },
        {
          name: '基础设施与运维',
          items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD (Jenkins, GitHub Actions)', 'Vercel'],
        },
        {
          name: '数据与工具',
          items: ['Apache Spark', 'Airflow', 'Splunk', 'OpenObserve', 'Grafana', 'Claude Code'],
        },
      ],
    },
    projects: {
      title: '项目',
      githubLink: 'github.com/xueyifan',
      viewCode: '查看代码',
      viewPrototype: '查看原型',
      items: [
        {
          title: 'ISS Real-Time Tracker',
          tech: 'Node.js · Socket.io · React · Leaflet',
          desc: '实时国际空间站追踪器，具有 WebSocket 驱动的地图和实时轨迹。',
          highlights: [
            '设计了单生产者/多消费者的 WebSocket 架构，无论并发查看者数量如何，上游 ISS API 调用始终保持在约 20 次/分钟。',
            '构建了限速的反向地理编码管道，具有 1° 精度的内存缓存和 1.1 秒的出站队列，遵守 Nominatim 每秒 1 次请求的硬限制。',
            '实现了卫星轨迹的固定长度环形缓冲区（O(1) 写入）以及手动地图交互后 10 秒的自动平移宽限期。',
          ],
          demo: 'https://iss-tracker-edpm.onrender.com',
          github: 'https://github.com/<USERNAME>/iss-tracker',
        },
        {
          title: 'GitHub Repository Analytics Dashboard',
          tech: 'Python · FastAPI · async httpx · React · Recharts',
          desc: '多语言仪表板，可视化任何 GitHub 用户的统计数据、顶级仓库、语言和 90 天提交热力图。',
          highlights: [
            '使用 asyncio.gather + httpx.AsyncClient 并行化了 5 个提交历史请求，将冷启动仪表板加载时间缩短至 500 毫秒以下。',
            '策划了优雅的 403 → 429 速率限制转换，并支持可选的 GITHUB_TOKEN，将 GitHub API 限制从 60 提升至 5,000 次/小时。',
            '构建了 13×7 的 CSS-Grid 提交热力图，并在工具提示中透明地披露活动是从用户星标前 5 的仓库中聚合而来的。',
          ],
          demo: 'https://github-dashboard-ui.onrender.com',
          github: 'https://github.com/<USERNAME>/github-dashboard',
        },
        {
          title: 'Spotify Stats Dashboard',
          tech: 'React · Express · OAuth 2.0 · Recharts · CSS Modules',
          desc: 'OAuth 安全的 Spotify 分析 Web 应用，具有实时“正在播放”和音频特征雷达图。',
          highlights: [
            '实现了完整的 OAuth 2.0 授权码流程，具有服务器端会话令牌存储；访问和刷新令牌永远不会到达浏览器。',
            '构建了 refreshIfNeeded 中间件，在过期前 60 秒刷新令牌，以及一个在 Spotify 端撤销授权时销毁会话的 401 捕获包装器。',
            '通过 CSS 自定义属性 + CSS Modules 复制了 Spotify 的设计系统——像素级忠实的深色主题、品牌绿色色调和原生感的播放器界面。',
          ],
          demo: 'https://spotify-stats-lfn0.onrender.com',
          github: 'https://github.com/<USERNAME>/spotify-stats',
        },
      ],
    },
    claudeCode: {
      title: 'AI 增强开发',
      badge: 'High-Agency · AI-Fluency',
      desc: '我使用尖端的 AI 工具来加速软件开发生命周期，从原型设计到性能优化。',
      highlights: [
        '编排代理以自动执行重复的开发任务',
        '高级使用 LLMs 进行复杂代码重构和测试生成',
        '使用 Claude Code 等工具优化工作流',
      ],
      certs: [],
    },
    experience: {
      title: '工作经验',
      sagent: {
        company: 'Sagent Lending Technologies',
        logo: '/logo-xueyifan.jpg', // Placeholder logo
        location: '达拉斯, 德克萨斯州',
        role: 'Full-Stack Engineer',
        period: '2023 - 2026',
        desc: '领导抵押贷款系统的前端架构现代化和数据管道建设。',
        highlights: [
          '领导了从 Material-UI 到 Sagent 专有组件库的过渡，提高了一致性和可访问性 (WCAG 2.1 AA)。',
          '通过重构遗留代码并转向轻量级的 React Hooks 架构优化了应用性能，减少了 60% 的重渲染时间。',
          '使用 Node.js 和 GraphQL 构建了可扩展的 BFF (Backend-for-Frontend) 微服务，采用基于缓存的查询以减少前端加载时间。',
          '在 GCP 上使用 Python, Scala, Apache Spark 和 Airflow 设计了可扩展的数据管道，处理海量财务数据。',
          '在 OpenObserve 中实现了实时监控面板，以监控性能指标和 API 错误趋势。',
          '通过 Jest 和 React Testing Library 进行详尽的单元和集成测试，确保软件质量。',
        ],
      },
      walmart: {
        company: 'Walmart',
        logo: '/logo-everis.jpg', // Placeholder logo
        location: '奥斯汀, 德克萨斯州',
        role: 'Front-End Engineer',
        period: '2022 - 2023',
        desc: '为 Walmart 的多租户 Item360 平台开发高性能 Web 功能。',
        highlights: [
          '为 Item360 平台开发 Web 功能，使供应商和商家能够管理全渠道商业的项目数据。',
          '使用 React Hooks 和 Redux (Thunk/Saga) 实现复杂的状态管理和生命周期，减少了与状态相关的 bug。',
          '设计并构建了一个支持多地区的多租户本地化字符串模块，提高了可访问性和全球用户体验。',
          '通过配置 Webpack 代码分割，将应用包大小减少了 30%，并缩短了初始加载时间。',
          '使用 Jenkins 和 Webpack 构建了稳健的 CI/CD 管道，并使用 Docker 和 Kubernetes 部署了可扩展的微服务。',
          '使用 Splunk 监控查询性能、跟踪 API 错误并设置实时告警。',
        ],
      },
    },
    linkedinPosts: {
      title: '发布内容',
      cta: '在 LinkedIn 上查看',
      items: [],
    },
    xPost: {
      hook: '使用 React 和 TypeScript 现代化前端架构。',
      hookLinkPrefix: '',
      hookLinkUrl: '',
      quoteAuthor: '',
      quoteRole: '',
      quoteHandle: '',
      quoteText: '',
      quoteReplies: '0',
      quoteRetweets: '0',
      quoteLikes: '0',
      quoteViews: '0',
      quoteUrl: '',
      replies: '0',
      retweets: '0',
      likes: '0',
      views: '0',
      cta: '在 X 上查看',
      url: 'https://x.com/xueyifan',
    },
    redditPosts: [],
    speaking: {
      title: '演讲与培训',
      items: [],
    },
    education: {
      title: '教育背景',
      items: [
        {
          year: '2021',
          org: 'Tulane University',
          title: '商业分析硕士',
          desc: '专注于数据分析和业务决策。',
        },
        {
          year: '2019',
          org: 'Michigan State University',
          title: '统计学学士',
          desc: '扎实的统计学和定量分析基础。',
        },
      ],
    },
    certifications: {
      title: '认证',
      items: [],
    },
    skills: {
      title: '技能',
      languages: '语言',
      chinese: '中文',
      native: '母语',
      english: '英语',
      professional: '专业流利',
      technical: '技术技能',
      soft: '软技能',
      softSkills: [
        '沟通',
        '领导力',
        '系统思维',
        '端到端负责',
        '行动导向',
        '解决问题',
        '处理模糊性',
      ],
    },
    cta: {
      title: '聊聊吗？',
      desc: '我正在寻找软件工程师的职位，在那里我可以领导前端开发、优化架构并交付高影响力的结果。',
      contact: '联系我',
    },
    ui: {
      languageBanner: '本网站提供英文版本',
      languageBannerSwitch: '切换至英文',
      languageBannerSwitchPrefix: '切换至',
      languageBannerSwitchLang: '英文',
      languageToggle: '中文',
      typingIndicator: '一凡正在输入...',
    },
    chat: {
      placeholder: '输入你的问题...',
      title: '一凡',
      subtitle: '向我询问关于我的经历',
      greeting:
        '你好！我是 **@一凡**。随便问我任何问题：在 Sagent、Walmart 的经历，我的项目，或者是什么在驱动着我。',
      reset: '重置聊天',
      error: '发送错误。请重试。',
      offline: '看来你离线了。请检查网络并重试。',
      prompts: [
        {
          icon: 'briefcase',
          label: '在 Sagent 的经历',
          query: '薛一凡在 Sagent Lending Technologies 的经历是什么？',
        },
        {
          icon: 'rocket',
          label: '在 Walmart 的项目',
          query: '薛一凡在 Walmart 做了什么？',
        },
        {
          icon: 'help',
          label: '技术栈',
          query: '薛一凡的技术栈是什么？',
        },
        {
          icon: 'mail',
          label: '联系方式',
          query: '我该如何联系薛一凡？',
        },
      ],
      contactCtaTitle: '想直接聊聊吗？',
      voice: {
        start: '与一凡交谈',
        stop: '结束',
        connecting: '连接中...',
        listening: '我在听...',
        thinking: '思考中...',
        searching: '正在搜索我的经历...',
        speaking: '说话中...',
        timeWarning: '剩余 15 秒',
        ended: '语音通话结束',
        rateLimited: '你已达到每天 3 次语音通话的限制',
        unsupported: '你的浏览器不支持音频输入',
        micDenied: '语音模式需要麦克风权限',
        switchToText: '切换到文本',
        connection: '连接错误。请重试。',
      },
    },
  },
  en: {
    greeting: 'who builds',
    greetingRoles: ['Full-Stack Engineer', 'Front-End Architect', 'React & TypeScript Expert'],
    pillLabels: ['Engineer', 'Architect'],
    email: 'yifanxue.sde@gmail.com',
    role: 'full-stack systems',
    story: {
      context: '+4 years building+ high-impact software solutions.',
      reflections: ['It works. It scales.', '...what\'s the next challenge?'],
      hookParagraphs: [
        ['I spearheaded the front-end architecture modernization at Sagent.'],
        [
          "What drives me is building systems that scale.",
          '*Building* +robust architectures+.',
        ],
      ],
      why: 'At Sagent and Walmart, I automated complex workflows and optimized performance for multi-tenant platforms serving thousands of users.',
      seeking: [
        'Always learning.',
        'Bigger teams. Harder problems. End-to-end.',
        "Ready for my next full-time role.",
      ],
      nav: [
        { icon: 'briefcase', label: 'My path', href: '#experience' },
        { icon: 'mail', label: "Let's talk", href: '#contact' },
        { icon: 'bot', label: 'Ask me', href: '#chat', highlight: true },
      ],
      skills: [
        'Front-End Architecture',
        'State Management',
        'Full-Stack Development',
        'Data Pipelines',
        'Performance Optimization',
        'System Observability',
      ],
      skipButton: 'Skip intro',
    },
    taglines: [] as readonly string[],
    location: 'United States · Remote / Hybrid / On-site',
    roles: [
      'Full-Stack Software Engineer',
      'Front-End Architect',
      'TypeScript Specialist',
    ],
    summary: {
      title: 'Professional Summary',
      p1: 'Software Engineer focused on',
      p1Highlight: 'modern front-end architecture',
      p1End:
        'and full-stack development. With experience at industry leaders like Walmart and Sagent, I specialize in transforming complex requirements into scalable, maintainable, and high-performance products.',
      p2: 'End-to-end ownership across',
      p2Highlight: 'design → implementation → optimization → maintenance',
      p2End: ', collaborating closely with product and engineering teams.',
      cards: [
        {
          title: 'Engineering Mindset',
          desc: 'Focus on code quality, rigorous testing, and clean architecture',
        },
        {
          title: 'Strengths',
          desc: 'Fast adaptation to new technologies, solving complex problems, and system optimization',
        },
        {
          title: 'Technical Fluency',
          desc: 'React, TypeScript, Node.js, GraphQL, GCP, and data pipelines',
        },
      ],
    },
    coreCompetencies: {
      title: 'Core Competencies',
      items: [
        {
          title: 'Front-End Architecture',
          desc: 'Modernization of legacy architectures, proprietary design systems, and UI scalability',
        },
        {
          title: 'State Management & Performance',
          desc: 'Expert use of React Hooks, Redux (Thunk/Saga), and re-render optimization',
        },
        {
          title: 'Full-Stack Development',
          desc: 'Building BFFs with Node.js and GraphQL, REST APIs, and scalable microservices',
        },
        {
          title: 'Data Engineering',
          desc: 'Data pipelines on GCP using Python, Scala, Apache Spark, and Airflow',
        },
        {
          title: 'Quality & Automation',
          desc: 'Exhaustive testing with Jest, React Testing Library, and Cypress in CI/CD environments',
        },
        {
          title: 'System Observability',
          desc: 'Proactive monitoring with Splunk, OpenObserve, and Grafana to ensure high availability',
        },
      ],
    },
    techStack: {
      title: 'Tech Stack',
      categories: [
        {
          name: 'Languages',
          items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Scala', 'SQL'],
        },
        {
          name: 'Frontend',
          items: ['React.js', 'Redux', 'Angular', 'Next.js', 'Ant Design', 'Vite', 'Webpack'],
        },
        {
          name: 'Backend',
          items: ['Node.js', 'REST APIs', 'GraphQL'],
        },
        {
          name: 'Infra & DevOps',
          items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD (Jenkins, GitHub Actions)', 'Vercel'],
        },
        {
          name: 'Data & Tools',
          items: ['Apache Spark', 'Airflow', 'Splunk', 'OpenObserve', 'Grafana', 'Claude Code'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      githubLink: 'github.com/xueyifan',
      viewCode: 'View code',
      viewPrototype: 'View prototype',
      items: [
        {
          title: 'ISS Real-Time Tracker',
          tech: 'Node.js · Socket.io · React · Leaflet',
          desc: 'Real-time International Space Station tracker with WebSocket-driven map and live trail.',
          highlights: [
            'Designed a single-producer / multi-consumer WebSocket architecture so upstream ISS API calls stay constant at ~20/min regardless of concurrent viewers.',
            'Built a rate-limited reverse-geocoding pipeline with 1°-precision in-memory cache and a 1.1 s outbound queue, staying within Nominatim\'s 1 req/sec hard limit.',
            'Implemented a fixed-length ring buffer for the satellite trail (O(1) writes) and a 10-second auto-pan grace period after manual map interaction.',
          ],
          demo: 'https://iss-tracker-edpm.onrender.com',
          github: 'https://github.com/<USERNAME>/iss-tracker',
        },
        {
          title: 'GitHub Repository Analytics Dashboard',
          tech: 'Python · FastAPI · async httpx · React · Recharts',
          desc: 'Polyglot dashboard that visualizes any GitHub user\'s stats, top repos, languages, and 90-day commit heatmap.',
          highlights: [
            'Parallelized 5 commit-history requests with asyncio.gather + httpx.AsyncClient, cutting cold dashboard load to under 500 ms.',
            'Engineered graceful 403 → 429 rate-limit translation and optional GITHUB_TOKEN support to lift GitHub API limits from 60 → 5,000 req/hr.',
            'Built a CSS-Grid 13×7 commit heatmap with transparent in-tooltip disclosure that activity is aggregated from the user\'s top-5 starred repos.',
          ],
          demo: 'https://github-dashboard-ui.onrender.com',
          github: 'https://github.com/<USERNAME>/github-dashboard',
        },
        {
          title: 'Spotify Stats Dashboard',
          tech: 'React · Express · OAuth 2.0 · Recharts · CSS Modules',
          desc: 'OAuth-secured Spotify analytics web app with live "now playing" and an audio-feature radar chart.',
          highlights: [
            'Implemented the full OAuth 2.0 Authorization Code flow with server-side session token storage; access and refresh tokens never reach the browser.',
            'Built a refreshIfNeeded middleware that refreshes tokens 60 s before expiry, plus a 401-catch wrapper that destroys sessions on Spotify-side revocation.',
            'Reproduced Spotify\'s design system via CSS custom properties + CSS Modules — pixel-faithful dark theme, brand-green accents, native-feeling player chrome.',
          ],
          demo: 'https://spotify-stats-lfn0.onrender.com',
          github: 'https://github.com/<USERNAME>/spotify-stats',
        },
      ],
    },
    claudeCode: {
      title: 'AI-Augmented Development',
      badge: 'High-Agency · AI-Fluency',
      desc: 'I use cutting-edge AI tools to accelerate the software development lifecycle, from prototyping to performance optimization.',
      highlights: [
        'Agent orchestration to automate repetitive development tasks',
        'Advanced use of LLMs for complex code refactoring and test generation',
        'Workflow optimization with tools like Claude Code',
      ],
      certs: [],
    },
    experience: {
      title: 'Work Experience',
      sagent: {
        company: 'Sagent Lending Technologies',
        logo: '/logo-xueyifan.jpg', // Placeholder logo
        location: 'Dallas, TX',
        role: 'Full-Stack Engineer',
        period: '2023 - 2026',
        desc: 'Leading front-end architecture modernization and data pipelines for mortgage lending systems.',
        highlights: [
          'Led the transition from Material-UI to a proprietary Sagent component library, improving consistency and accessibility (WCAG 2.1 AA).',
          'Optimized application performance by refactoring legacy code and transitioning to a lightweight React Hooks architecture, achieving a 60% reduction in re-render times.',
          'Built scalable BFF (Backend-for-Frontend) microservices with Node.js and GraphQL, adopting cache-based lookups to reduce front-end load times.',
          'Designed scalable data pipelines on GCP using Python, Scala, Apache Spark, and Airflow to process large volumes of financial data.',
          'Implemented system observability with real-time dashboards in OpenObserve to monitor performance metrics and API error trends.',
          'Ensured software quality through exhaustive unit and integration testing with Jest and React Testing Library.',
        ],
      },
      walmart: {
        company: 'Walmart',
        logo: '/logo-everis.jpg', // Placeholder logo
        location: 'Austin, TX',
        role: 'Front-End Engineer',
        period: '2022 - 2023',
        desc: 'Developing high-performance web features for Walmart\'s multi-tenant Item360 platform.',
        highlights: [
          'Engineered web features for the Item360 platform, enabling suppliers and merchants to manage item data for omnichannel commerce.',
          'Implemented complex state management and lifecycle using React Hooks and Redux (Thunk/Saga), reducing state-related bugs.',
          'Designed and built a multi-tenant localized strings module to support multiple locales, improving accessibility and global user experience.',
          'Reduced application bundle size by 30% and improved initial load times by configuring Webpack code splitting.',
          'Built a robust CI/CD pipeline using Jenkins and Webpack, and deployed scalable microservices using Docker and Kubernetes.',
          'Used Splunk to monitor query performance, track API errors, and set up real-time alerts.',
        ],
      },
    },
    linkedinPosts: {
      title: 'Writing',
      cta: 'Read on LinkedIn',
      items: [],
    },
    xPost: {
      hook: 'Modernizing front-end architecture with React and TypeScript.',
      hookLinkPrefix: '',
      hookLinkUrl: '',
      quoteAuthor: '',
      quoteRole: '',
      quoteHandle: '',
      quoteText: '',
      quoteReplies: '0',
      quoteRetweets: '0',
      quoteLikes: '0',
      quoteViews: '0',
      quoteUrl: '',
      replies: '0',
      retweets: '0',
      likes: '0',
      views: '0',
      cta: 'View on X',
      url: 'https://x.com/xueyifan',
    },
    redditPosts: [],
    speaking: {
      title: 'Education',
      items: [],
    },
    education: {
      title: 'Education',
      items: [
        {
          year: '2021',
          org: 'Tulane University',
          title: 'M.S. in Business Analytics',
          desc: 'Focused on data analysis and business decision making.',
        },
        {
          year: '2019',
          org: 'Michigan State University',
          title: 'B.S. in Statistics',
          desc: 'Solid foundations in statistics and quantitative analysis.',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [],
    },
    skills: {
      title: 'Skills',
      languages: 'Languages',
      chinese: 'Chinese',
      native: 'Native',
      english: 'English',
      professional: 'Professional proficiency',
      technical: 'Technical Skills',
      soft: 'Soft Skills',
      softSkills: [
        'Communication',
        'Leadership',
        'Systems Thinking',
        'E2E Ownership',
        'Bias for Action',
        'Problem Solving',
        'Dealing with Ambiguity',
      ],
    },
    cta: {
      title: "Let's talk",
      desc: 'Looking for a Software Engineer role where I can lead front-end development, optimize architectures, and ship high-impact results.',
      contact: 'Contact',
    },
    ui: {
      languageBanner: 'This site is available in Chinese',
      languageBannerSwitch: 'Switch to ZH',
      languageBannerSwitchPrefix: 'Switch to',
      languageBannerSwitchLang: 'ZH',
      languageToggle: 'EN',
      typingIndicator: 'yifan is typing...',
    },
    chat: {
      placeholder: 'Type your question...',
      title: 'yifan',
      subtitle: 'Ask me about my experience',
      greeting:
        "Hi! I'm **@yifan**. Ask me anything: experience at Sagent, Walmart, my projects, or what drives me.",
      reset: 'Reset Chat',
      error: 'Error sending. Please try again.',
      offline: 'Looks like you\'re offline. Check your connection and try again.',
      prompts: [
        {
          icon: 'briefcase',
          label: 'Sagent Experience',
          query: "What is Yifan's experience at Sagent Lending Technologies?",
        },
        {
          icon: 'rocket',
          label: 'Walmart Projects',
          query: "What did Yifan do at Walmart?",
        },
        {
          icon: 'help',
          label: 'Tech Stack',
          query: "What is Yifan's tech stack?",
        },
        {
          icon: 'mail',
          label: 'Contact',
          query: 'How can I contact Yifan?',
        },
      ],
      contactCtaTitle: 'Want to talk directly?',
      voice: {
        start: 'Talk to Yifan',
        stop: 'End',
        connecting: 'Connecting...',
        listening: 'Listening...',
        thinking: 'Thinking...',
        searching: 'Searching my experience...',
        speaking: 'Speaking...',
        timeWarning: '15 seconds remaining',
        ended: 'Voice session ended',
        rateLimited: 'You have reached the limit of 3 voice sessions per day',
        unsupported: 'Your browser does not support audio input',
        micDenied: 'Microphone access is needed for voice mode',
        switchToText: 'Switch to text',
        connection: 'Connection error. Please try again.',
      },
    },
  },
} as const;

export type Lang = 'zh' | 'en';
