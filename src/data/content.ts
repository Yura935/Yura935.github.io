// Central portfolio content aligned with CV. Inputs: none. Returns: typed site data.

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  stack: string[]
  liveUrl: string
  repoUrl?: string
  status: 'Live' | 'Demo'
  demoUser?: string
  demoPassword?: string
}

export type SkillGroup = {
  title: string
  level: number
  items: string[]
}

export type FocusItem = {
  title: string
  detail: string
}

export type ExperienceItem = {
  title: string
  org: string
  location: string
  period: string
  note?: string
  points: string[]
  projects?: string[]
}

export const profile = {
  name: 'Yurii Boiko',
  handle: 'Yura935',
  role: 'Software Engineer',
  company: 'Solvexus',
  location: 'Lviv, Ukraine',
  years: '5+',
  level: 52,
  className: 'Frontend Engineer',
  summary:
    'Software Engineer with 5+ years building React, Preact, and Angular products across SaaS, healthcare, maritime logistics, B2B sales, and enterprise analytics. Strong in TypeScript, state management, UI systems, PWAs, and Playwright e2e.',
  focus: [
    {
      title: 'Maritime SaaS & vessel ops',
      detail:
        'Shipping port-call workflows, bunker trading UI, and vessel-side PWAs with secure SSO/2FA and real-time ops data.',
    },
    {
      title: 'Complex data interfaces',
      detail:
        'AG Grid, SignalR dashboards, analytics charts, and table-heavy screens that stay fast under real operational load.',
    },
    {
      title: 'Quality & delivery',
      detail:
        'Owning Playwright coverage, CI/CD on Azure/GitHub Actions, and reliable production journeys for critical flows.',
    },
    {
      title: 'Modernization',
      detail:
        'Migrating legacy AngularJS/UI toward modern React/Angular patterns while keeping delivery speed and maintainability.',
    },
  ] as FocusItem[],
  domains: [
    'Maritime logistics',
    'Healthcare / dental SaaS',
    'B2B sales portals',
    'Enterprise analytics',
    'Partner portals & CMS',
  ],
  education: [
    {
      degree: 'MSc, Computer Engineering',
      school: 'Lviv Polytechnic National University',
      period: '2022 – 2023',
    },
    {
      degree: 'BSc, Computer Engineering',
      school: 'Lviv Polytechnic National University',
      period: '2018 – 2022',
    },
  ],
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'B2 · Professional' },
  ],
  contacts: {
    email: 'boyko.yuriy16@gmail.com',
    phone: '+38 097 449 8935',
    linkedin: 'https://www.linkedin.com/in/yurii-boiko-47a1111a9/',
    telegram: 'https://t.me/Yura935',
    github: 'https://github.com/Yura935',
    dou: 'https://dou.ua/users/yurii-boiko-1/topics/',
  },
}

export const skills: SkillGroup[] = [
  {
    title: 'Core Frontend',
    level: 92,
    items: ['TypeScript', 'JavaScript', 'React', 'Preact', 'Next.js', 'Angular', 'HTML5', 'CSS3/SCSS'],
  },
  {
    title: 'UI Systems',
    level: 88,
    items: ['MUI', 'Mantine', 'Tailwind', 'Bootstrap', 'Angular Material', 'Styled Components'],
  },
  {
    title: 'State & Data',
    level: 90,
    items: ['Redux/RTK', 'Zustand', 'NgRx', 'RxJS', 'Apollo GraphQL', 'REST', 'SignalR', 'IndexedDB'],
  },
  {
    title: 'Backend & Cloud',
    level: 78,
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'GCP', 'Azure'],
  },
  {
    title: 'Quality & Delivery',
    level: 86,
    items: ['Playwright', 'Jest', 'Testing Library', 'GitHub Actions', 'Azure DevOps', 'Workbox PWA'],
  },
]

export const projects: Project[] = [
  {
    id: 'amator-dub',
    title: 'Amator Dub',
    tagline: 'Quest 01 · Community platform',
    description:
      'A full-stack style React app with authentication and product flows for an amateur-dubbing community experience.',
    stack: ['React', 'TypeScript', 'Firebase'],
    liveUrl: 'https://amator-dub.web.app/signIn',
    repoUrl: 'https://github.com/Yura935/amator-dub',
    status: 'Live',
    demoUser: 'user10@gmail.com',
    demoPassword: 'qwerty123',
  },
  {
    id: 'chatforyou',
    title: 'ChatForYou',
    tagline: 'Quest 02 · Messenger + translation',
    description:
      'Messenger with translation features — originally a bachelor project, rebuilt as a real product demo with login and chat flows.',
    stack: ['Angular', 'TypeScript', 'Firebase'],
    liveUrl: 'https://yura935.github.io/ChatForYou/login',
    repoUrl: 'https://github.com/Yura935/ChatForYou',
    status: 'Live',
    demoUser: 'user@gmail.com',
    demoPassword: 'qwery123',
  },
  {
    id: 'friendly',
    title: 'Friendly',
    tagline: 'Quest 03 · Social product',
    description:
      'A social-oriented web product with auth and user flows. Public demo and source are available.',
    stack: ['React', 'TypeScript'],
    liveUrl: 'https://friendly-sandy.vercel.app/auth/sign-in',
    repoUrl: 'https://github.com/Yura935/Friendly',
    status: 'Live',
    demoUser: 'atest',
    demoPassword: '12345',
  },
]

export const experience: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    org: 'Solvexus',
    location: 'UAE · Remote',
    period: 'Apr 2025 – Present',
    points: [
      'Build and ship frontend features for maritime SaaS: fleet/agency hub, bunker trading, and vessel onboard apps.',
      'Deliver vessel port-call workflows: arrival/departure, terminals, bunkers, port log, and bulk ETA/ETD updates.',
      'Own Playwright e2e coverage and production reliability for critical operational journeys.',
      'Implement secure vessel auth (SSO, 2FA, on-behalf sessions) and PWA delivery.',
    ],
    projects: ['Beacon52 Platform', 'Bunker Suite', 'Onboard PWA'],
  },
  {
    title: 'Software Engineer',
    org: 'SoftServe',
    location: 'Lviv',
    period: 'Oct 2021 – Apr 2025',
    points: [
      'Delivered React and Angular features for healthcare, B2B sales, real estate analytics, and internal HR tools.',
      'Migrated legacy UI (including AngularJS) to modern Angular/React patterns for faster, cleaner delivery.',
      'Built data visualization and table-heavy screens with Apache ECharts, AG Grid, and DataTables.',
      'Wrote unit tests (Jest, Jasmine, Karma, RTL) and mentored teammates on conventions and PR quality.',
      'Worked full-stack on selected products: Node.js/Express APIs and MongoDB with React/MUI frontends.',
    ],
    projects: ['BMI InTouch', 'BMI Sales', 'Nexus CBRE', 'Model N'],
  },
  {
    title: 'Software Engineer',
    org: 'NSTSoft',
    location: 'Remote',
    period: 'Apr 2024 – Dec 2024',
    points: [
      'Built and maintained healthcare SaaS for dental clinics: patient records, treatments, scheduling, and ops.',
      'Delivered full-stack features with React + Redux Toolkit and Node.js/Express APIs on AWS.',
      'Collaborated on workflows that reduce admin load for day-to-day clinic management.',
    ],
    projects: ['DentalBox'],
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
