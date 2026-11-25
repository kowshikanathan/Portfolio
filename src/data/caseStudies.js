export const CASE_STUDIES = [
  {
    id: 'greeto',
    title: 'Greeto',
    subtitle: 'Omnichannel Customer Engagement & Workflow Automation SaaS',
    category: 'Featured · SaaS Product Design',
    featured: true,
    role: 'UX/UI Designer',
    scope: 'Omnichannel Workspace, Automation Canvas & SaaS Product Architecture',
    tools: ['Figma', 'Component Systems', 'Interactive Prototyping'],
    description:
      'Greeto is an omnichannel customer engagement and automation platform that unifies business messaging, contact management, team collaboration, and no-code workflow automation. Designed for businesses and customer support teams, it simplifies complex communication processes and enables efficient, personalized customer experiences at scale.',
    overview:
      'Greeto is a B2B SaaS communication and workflow automation platform designed to centralize customer conversations across channels such as WhatsApp, Telegram, and Instagram while giving teams no-code automation tools. Rather than splitting support monitoring and automation setup into separate products, Greeto brings real-time conversation triage, agent workload balancing, contact & campaign operations, and visual flow building into one cohesive workspace.',
    productObjective:
      'Simplify complex business communication and automation through an intuitive, centralized workspace.',
    targetUsers: [
      {
        group: 'Customer Support Leads',
        need: 'Monitor open conversations, spot overloaded teammates, and rebalance active chat queues before response times slip.',
      },
      {
        group: 'Support & Operations Agents',
        need: 'Respond across WhatsApp, Telegram, and Instagram from a unified queue with clear conversation status and assignee context.',
      },
      {
        group: 'Growth & Automation Builders',
        need: 'Configure automated triggers, media replies, and branching rules visually without writing code or breaking live workflows.',
      },
    ],
    problem: {
      summary:
        'Businesses managing high customer message volumes often rely on fragmented inbox tools, spreadsheets for contact lists, and modal-heavy automation editors that hide system health and agent capacity.',
      points: [
        'Support teams struggle to track open, pending, and unassigned conversations across multiple messaging channels in real time',
        'Team leads lack immediate visibility into agent workload balance against target chat caps',
        'Visual workflow builders frequently interrupt flow creation with nested modal dialogs for configuring node actions',
        'Key operational actions—adding contacts, creating templates, launching campaigns, and building flows—are often scattered across deep menus',
      ],
    },
    responsibilities: [
      'Defined the end-to-end SaaS workspace information architecture spanning messaging, contacts, campaigns, workflows, and team settings',
      'Designed the Existing-User Workspace Dashboard surfacing conversation triage, agent workload caps, 14-day message volume, and quick operations',
      'Designed the visual no-code Workflow Builder canvas, node-category bar, graph validation header, and docked Action Settings inspector',
      'Established a calm teal-and-neutral SaaS design token system for high-density operational readability',
    ],
    coreCapabilities: {
      completedScreens: [
        {
          title: 'Centralized Workspace Dashboard',
          detail:
            'Tracks Open Conversations (unread/unassigned triage), 14-day message totals, Total Contacts, Failed Sends health, Recent Conversations across WhatsApp/Telegram/Instagram, Agent Workload vs. 10-chat cap, and a 14-day Message Volume trendline.',
        },
        {
          title: 'Visual No-Code Workflow Builder',
          detail:
            'Dotted spatial canvas with top node-type categories (Add Trigger, Send, Conversation, Logic, Data & Apps), Draft/Graph Valid status bar, Test & Activate controls, and a docked Action Settings drawer for WhatsApp Business Direct media configuration.',
        },
        {
          title: 'Quick Operations Strip',
          detail:
            'One-click bottom shortcut bar on the home dashboard for Add Contact, Create Template, Launch Campaign, and Create Workflow.',
        },
      ],
      plannedEcosystem: [
        {
          title: 'Omnichannel Conversation Inbox & Call Logs',
          detail:
            'Dedicated multi-channel inbox and voice/call modules anchored in the primary left navigation rail.',
        },
        {
          title: 'Contact Management, Segmentation & Campaigns',
          detail:
            'Structured contact directories, opt-in tracking, reusable message templates, and outbound broadcast campaigns.',
        },
        {
          title: 'Team Management & Extended Analytics',
          detail:
            'Agent role permissions, queue routing rules, failure log inspection, and channel-level performance reporting.',
        },
      ],
    },
    process: [
      {
        phase: '01 · Product Framing',
        detail: 'Mapped core omnichannel support workflows—from incoming message triage to automated WhatsApp reply setup.',
      },
      {
        phase: '02 · Information Architecture',
        detail: 'Organized the global icon rail to separate daily operations (Home, Inbox, Contacts, Campaigns) from automation (Workflows, Calls) and workspace settings.',
      },
      {
        phase: '03 · Spatial Layout Exploration',
        detail: 'Explored pairing the node canvas with a persistent right-docked Action Settings drawer instead of disruptive full-screen configuration modals.',
      },
      {
        phase: '04 · High-Fidelity UI Design',
        detail: 'Built the Existing-User Dashboard and Workflow Builder screens in Figma with clear KPI cards, status pills, and validation states.',
      },
      {
        phase: '05 · Design Refinement',
        detail: 'Refined table scannability, progress bar hierarchy, and inline validation feedback (Draft toggle, issue counter, Graph Valid badge).',
      },
    ],
    flowsAndIA: {
      iaModules: [
        'Primary Rail: Home Dashboard · Conversations · Contacts · Campaigns · Templates · Visual Workflows · Calls · Reports · Team & Settings',
        'Dashboard Zone: KPI Health Row → Recent Conversations + Agent Workload Split → 14-Day Message Volume Chart → Quick Operations',
        'Workflow Zone: Draft & Validation Header → Node Category Bar → Dotted Canvas → Docked Action Settings Inspector',
      ],
      userFlow: [
        'Open Workspace Dashboard',
        'Inspect Open & Unassigned Conversations',
        'Check Agent Workload vs. Target Cap',
        'Trigger Create Workflow',
        'Select Trigger & Send Node',
        'Configure WhatsApp Media in Action Drawer',
        'Verify Graph Valid Status & Activate',
      ],
    },
    designSystem: {
      summary:
        'A light, calm operational SaaS interface anchored by deep teal primary actions, soft tinted KPI surfaces, and crisp hairline borders to keep dense telemetry easy to scan.',
      tokens: [
        { label: 'Primary Brand & CTA', value: 'Deep Teal (#0D3B44 / #0F766E) with Mint Highlights' },
        { label: 'Semantic Status Tones', value: 'Emerald (Active / Graph Valid), Amber (Pending / Triage), Rose (Issues / Unassigned)' },
        { label: 'Surface Hierarchy', value: 'Pure White Cards on Soft Slate Canvas with 1px Neutral Dividers' },
        { label: 'Reusable Patterns', value: 'KPI Stat Cards, Channel Badges, Agent Capacity Bars, Docked Inspector Drawer' },
      ],
    },
    screens: [
      {
        id: 'dashboard',
        label: 'Workspace Dashboard',
        image: '/images/greeto-dashboard.jpg',
        caption:
          'Completed UI — Existing-User Workspace Dashboard featuring 14-day KPIs, multi-channel Recent Conversations, Agent Workload vs. 10-chat cap, Message Volume chart, and Quick Operations.',
      },
      {
        id: 'workflow',
        label: 'Visual Workflow Builder',
        image: '/images/greeto-workflow.jpg',
        caption:
          'Completed UI — Node-based Workflow Builder with Draft/Graph Valid validation bar, dotted canvas, Send Media node, and right-docked Action Settings panel.',
      },
    ],
    keyDecisions: [
      {
        title: 'Docked Action Settings Instead of Modals',
        detail:
          'Keeping the WhatsApp Business Direct media configuration panel docked on the right preserves full visual context of the surrounding workflow nodes.',
      },
      {
        title: 'Workload Paired Directly Next to Conversations',
        detail:
          'Placing Agent Workload beside Recent Conversations lets support leads immediately connect unassigned chats with available team capacity.',
      },
      {
        title: 'Always-Visible Graph Validation Controls',
        detail:
          'Surfacing Draft state, issue counts, Graph Valid status, Test, and Activate Workflow in one persistent header prevents accidental publishing of incomplete flows.',
      },
    ],
    learnings: [
      'Designing operational SaaS products requires balancing data density with breathing room so leads can scan queue health without fatigue.',
      'Spatial continuity inside no-code builders—showing node connections alongside inline settings—keeps complex automation logic approachable.',
      'Connecting high-level telemetry directly to action shortcuts (like Rebalance Queue and Quick Operations) bridges monitoring and execution.',
    ],
  },
  {
    id: 'acadly',
    title: 'Acadly',
    subtitle: 'Mobile-First Personalized Learning Ecosystem',
    category: 'Featured · Mobile EdTech App',
    featured: true,
    role: 'UX/UI Designer',
    scope: 'Mobile Onboarding Narrative & Learning Ecosystem Architecture',
    tools: ['Figma', 'Mobile UI Design', 'Interactive Prototyping'],
    description:
      'Acadly is a mobile-first learning platform designed to make education accessible, engaging, and personalized. It empowers students to access courses, attend live classes, complete assessments, track academic progress, and connect with instructors through an intuitive mobile experience that combines structured learning with gamification.',
    overview:
      'Acadly is a mobile learning application crafted for students and early-career professionals upskilling from their phones. The product experience connects structured coursework—courses, live classes, tests, and downloadable resources—with gamified momentum such as progress tracking, leaderboards, streaks, and verified certificates, beginning with a clear visual onboarding journey.',
    productObjective:
      'Create a seamless mobile learning ecosystem that supports students throughout their educational journey.',
    targetUsers: [
      {
        group: 'College Students & Job Seekers',
        need: 'Access structured courses, recorded sessions, and practice tests on mobile with clear progress milestones.',
      },
      {
        group: 'Working Professionals Upskilling',
        need: 'Resume learning quickly in short sessions, attend live classes, and earn verifiable completion certificates.',
      },
      {
        group: 'Returning App Learners',
        need: 'Sign back in effortlessly without navigating through new-user registration prompts.',
      },
    ],
    problem: {
      summary:
        'Mobile EdTech platforms often confront first-time visitors with generic text slides or rigid sign-up walls before demonstrating how the app helps learners stay consistent and reach career goals.',
      points: [
        'New learners struggle to understand how courses, live classes, tests, and progress tracking fit together before registering',
        'Returning students frequently experience friction when login actions are visually deprioritized beneath sign-up CTAs',
        'Dry, text-heavy onboarding fails to communicate motivational elements like certificates and peer leaderboards',
      ],
    },
    responsibilities: [
      'Defined the mobile product structure spanning onboarding, personalized dashboard, courses, live classes, tests, resources, and leaderboard modules',
      'Designed the high-fidelity Welcome Screen and multi-step Onboarding Splash experience in Figma',
      'Crafted the visual narrative integrating dashboard previews, verified certificates, and gamification cues into mobile-first frames',
      'Established thumb-zone CTA ergonomics, mint-to-deep-teal color hierarchy, and clean legal footer patterns',
    ],
    coreCapabilities: {
      completedScreens: [
        {
          title: 'Preview-Driven Welcome Screen',
          detail:
            'Introduces "ACADLY — Never stop learning" with an embedded tablet dashboard preview illustrating Continue Learning progress, My Courses, Live Classes, Tests, Resources, and Leaderboard, paired with primary "Get Started" and secondary "I Already Have an Account" CTAs.',
        },
        {
          title: 'Gamified Onboarding Splash Flow (Screen 3)',
          detail:
            'Highlights "Track Progress & Achieve More" with trophy, growth chart, certificate, and leaderboard ranking artwork, alongside Skip and 3-step pagination controls.',
        },
      ],
      plannedEcosystem: [
        {
          title: 'Personalized Dashboard & Courses',
          detail:
            'Continue Learning shortcuts, module progress percentages, and structured curriculum tracks previewed inside the Welcome artwork.',
        },
        {
          title: 'Live Classes, Recorded Sessions & Resources',
          detail:
            'Mobile access to live instructor classes, replayable lectures, downloadable study materials, and tests/assessments.',
        },
        {
          title: 'Leaderboards, Certificates & Instructor Connection',
          detail:
            'Peer ranking motivation, achievement certificates, rewards, and student-instructor communication channels.',
        },
      ],
    },
    process: [
      {
        phase: '01 · Ecosystem Mapping',
        detail: 'Mapped the end-to-end mobile learner lifecycle from first launch and personalization to live classes, assessments, and certification.',
      },
      {
        phase: '02 · Onboarding Narrative',
        detail: 'Structured a concise three-step onboarding arc focused on value clarity, progress visibility, and zero-friction account entry.',
      },
      {
        phase: '03 · Mobile Ergonomics',
        detail: 'Positioned primary and secondary CTAs inside the lower thumb zone while keeping visual storytelling centered above.',
      },
      {
        phase: '04 · High-Fidelity Visual Polish',
        detail: 'Designed mobile frames in Figma pairing soft mint surfaces with high-contrast #083D46 deep-teal action buttons.',
      },
    ],
    flowsAndIA: {
      iaModules: [
        'Onboarding Entry: Splash Steps (1–3) + Skip → Welcome Screen (Get Started / Existing Account)',
        'Mobile Ecosystem (Previewed in Dashboard): Dashboard · My Courses · Live Classes · Tests · Resources · Leaderboard · Profile',
        'Progress Loop: Course Modules → Assessments → Certificates & Rewards → Leaderboard Rank',
      ],
      userFlow: [
        'Launch Acadly App',
        'View 3-Step Onboarding Highlights (or Skip)',
        'Review Value & Dashboard Preview on Welcome Screen',
        'Choose Get Started or Existing Account',
        'Enter Personalized Student Dashboard',
      ],
    },
    designSystem: {
      summary:
        'A calm, approachable mobile EdTech system pairing soft mint backgrounds with deep ocean teal CTAs and warm gold achievement accents.',
      tokens: [
        { label: 'Primary Action & Brand', value: 'Deep Teal (#083D46) with Crisp White Typography' },
        { label: 'Canvas & Surfaces', value: 'Soft Mint Tint (#F0FDF9 / #FFFFFF) for Low-Glare Mobile Reading' },
        { label: 'Motivational Accents', value: 'Warm Gold & Emerald for Trophies, Streaks, and Certificates' },
        { label: 'Mobile Components', value: 'Full-Width Thumb-Zone Buttons, 3-Step Pill Indicator, Soft-Rounded Cards' },
      ],
    },
    screens: [
      {
        id: 'welcome',
        label: 'Welcome Screen',
        image: '/images/acadly-welcome.png',
        caption:
          'Completed UI — Welcome Screen showcasing the dashboard preview artwork, "Next-Gen Professional Learning" pill, and dual Get Started / Existing Account actions.',
      },
      {
        id: 'splash3',
        label: 'Splash Screen 3',
        image: '/images/acadly-splash3.png',
        caption:
          'Completed UI — Onboarding Splash 3 introducing tests, verified certificates, and leaderboard progression with Skip and pagination controls.',
      },
    ],
    keyDecisions: [
      {
        title: 'Showing the Real Product Inside Welcome Artwork',
        detail:
          'Embedding the core navigation (Courses, Live Classes, Tests, Resources, Leaderboard) directly into the Welcome illustration lets learners grasp the full ecosystem before signing up.',
      },
      {
        title: 'Equal Clarity for New and Returning Users',
        detail:
          'Stacking a filled primary "Get Started" button directly above a clean outlined "I Already Have an Account" button eliminates confusion for returning students.',
      },
      {
        title: 'Skip Affordance on Every Splash Step',
        detail:
          'Providing an unobtrusive Skip control alongside the 3-step indicator respects fast-moving learners while preserving the story for first-time visitors.',
      },
    ],
    learnings: [
      'Mobile onboarding succeeds when it proves product value visually in one glance rather than asking users to read paragraphs.',
      'Ergonomic bottom-half CTA placement and restrained color contrast immediately make mobile flows feel calm and trustworthy.',
      'Connecting core learning tools (classes, tests, resources) with visible milestones (certificates, rank) gives the mobile app a clear motivational arc.',
    ],
  },
  {
    id: 'learnex',
    title: 'Learnex',
    subtitle: 'Unified Web-Based Learning Management System',
    category: 'Featured · Web EdTech / LMS',
    featured: true,
    role: 'UX/UI Designer',
    scope: 'Student LMS Dashboard, Gamified Analytics & Self-Serve Billing Portal',
    tools: ['Figma', 'Information Architecture', 'Design Systems'],
    description:
      'Learnex is a comprehensive web-based learning management system that brings course delivery, virtual classrooms, assessments, performance analytics, communication, and academic resources into one unified digital workspace. It is designed to simplify the learning journey for students while supporting structured and scalable digital education.',
    overview:
      'Learnex is a web-based Learning Management System built to support the full academic and administrative student journey in one structured workspace. From courses, virtual live classrooms, schedules, communication, and certificates in the primary navigation rail to gamified peer leaderboards, 14-day streaks, and self-serve Orders & Invoices management, Learnex reduces context switching across fragmented student portals.',
    productObjective:
      'Unify the complete digital learning experience within an accessible, structured, and scalable web platform.',
    targetUsers: [
      {
        group: 'Enrolled Cohort Students',
        need: 'Track study streaks, rank progress, courses, and upcoming sessions while staying motivated alongside peers.',
      },
      {
        group: 'Self-Paced Online Learners',
        need: 'Manage course plans, subscriptions, order statuses, and GST/course invoices independently without contacting support.',
      },
      {
        group: 'Digital Education Programs',
        need: 'Provide a scalable, consistent web LMS architecture spanning classrooms, assessments, analytics, and account billing.',
      },
    ],
    problem: {
      summary:
        'Many web LMS platforms split learning tools, performance tracking, and billing history across disconnected portals—leaving learners unmotivated by static tables and frustrated when retrieving receipts.',
      points: [
        'Plain leaderboard tables rarely show mid-tier students (#42+) how close they are to the next milestone or how daily habits connect to progress',
        'Students switching between courses, live classes, calendars, and messages need a consistent left-rail structure',
        'Course order history, pending payments, subscription plans, and downloadable invoices are frequently buried or require support emails',
      ],
    },
    responsibilities: [
      'Structured the unified web LMS navigation architecture covering Home/Dashboard, Courses, Live Classes, Schedule, Communication, Certificates, and Account Settings',
      'Designed the high-fidelity Leaderboard & Student Engagement screen with podium rankings, Top 100 filters, 14-day streak tracker, personal rank card, and Achievements',
      'Designed the Account Settings — Orders & Invoices portal covering order KPIs, status filters, downloadable invoices, and categorized account controls',
      'Created a cohesive emerald, deep-forest, and gold-accent design system across both analytical and administrative workflows',
    ],
    coreCapabilities: {
      completedScreens: [
        {
          title: 'Gamified Leaderboard & Streak Dashboard',
          detail:
            'Features cohort KPI cards (Total Learners, Active Learners, Avg. Growth, Rewards Earned), Top Performers #1–#3 podium, filterable Top 100 list (By Points, By Courses, By Tests, By Activity), 14-Day Learning Streak widget, personal Rank (#42 with XP to Top 20), Achievements, and Set Your Learning Goal.',
        },
        {
          title: 'Account Settings — Orders & Invoices Hub',
          detail:
            'Includes categorized Account Settings sidebar (Profile, Orders & Invoices, Subscription & Management, Saved Payment Methods, Refund Requests, Privacy & Security, Account Data), order summary KPIs, All/Completed/Pending/Cancelled filters, downloadable invoices, Track Order, and Contact Support.',
        },
      ],
      plannedEcosystem: [
        {
          title: 'Course Delivery, Virtual Classrooms & Calendar',
          detail:
            'Curriculum modules, live class sessions, recorded lectures, and schedule management anchored in the persistent left navigation rail.',
        },
        {
          title: 'Tests, Assessments & Student Communication',
          detail:
            'Assignments, assessments, certificates, learning resources, and direct communication tools integrated into the same workspace shell.',
        },
      ],
    },
    process: [
      {
        phase: '01 · LMS Workflow Audit',
        detail: 'Mapped both the academic side (classes, assessments, streaks, rankings) and the administrative side (subscriptions, orders, invoices).',
      },
      {
        phase: '02 · Workspace Architecture',
        detail: 'Established a persistent top search + notification bar and compact left icon rail to keep all LMS modules one click apart.',
      },
      {
        phase: '03 · Modular Grid Design',
        detail: 'Balanced a primary content column (podium + rank table / orders table) with a contextual right rail (streaks, rank gap, achievements).',
      },
      {
        phase: '04 · High-Fidelity UI Polish',
        detail: 'Built reusable KPI cards, status pills, category menus, and action buttons in Figma for visual continuity across learning and billing.',
      },
    ],
    flowsAndIA: {
      iaModules: [
        'Persistent Global Shell: Course/Topic Search (with Voice) · Notifications · Learner Profile · Left Icon Rail (Home, Courses, Live Classes, Calendar, Messages, Certificates, Settings)',
        'Engagement Surface: Timeframe Filter → 4 Summary KPIs → Top Performers Podium + Filterable Top 100 Table | Streak, Rank Gap & Achievements Rail',
        'Account Surface: Categories Menu (Profile, Orders & Invoices, Subscriptions, Payments, Refunds, Privacy) → Spend KPIs → Filterable Orders & Invoice Downloads',
      ],
      userFlow: [
        'Enter Unified LMS Workspace',
        'Monitor 14-Day Streak & Personal Rank Gap',
        'Filter Peer Leaderboard by Points, Courses, or Tests',
        'Open Account Settings from Left Rail',
        'Filter Orders & Download Course Invoice',
      ],
    },
    designSystem: {
      summary:
        'A crisp, high-trust EdTech web system combining deep forest-teal navigation and CTAs with warm gold achievement accents and clean white data cards.',
      tokens: [
        { label: 'Primary Brand & Active States', value: 'Deep Forest Teal (#0D3B29 / #083D46) & Mint Tints' },
        { label: 'Achievement & Streak Accents', value: 'Warm Gold & Flame Amber for Podium Ranks and Streaks' },
        { label: 'Data & Billing Surfaces', value: 'Pure White Cards on Soft Gray Canvas with Semantic Status Badges' },
        { label: 'Reusable Patterns', value: '4-Column KPI Row, Filter Tab Pills, Profile Badges, Actionable Data Tables' },
      ],
    },
    screens: [
      {
        id: 'leaderboard',
        label: 'Leaderboard & Engagement',
        image: '/images/learnex-leaderboard.jpg',
        caption:
          'Completed UI — Student Leaderboard featuring Top Performers podium, 14-day Mon–Sun streak card, personal rank progress bar, achievements, and filterable Top 100 table.',
      },
      {
        id: 'orders',
        label: 'Account Settings — Orders & Invoices',
        image: '/images/learnex-orders.png',
        caption:
          'Completed UI — Self-serve Account Settings hub with category navigation, order KPIs, status filters, and one-click invoice downloads.',
      },
    ],
    keyDecisions: [
      {
        title: 'Pairing Peer Podiums with Personal Rank Momentum',
        detail:
          'Showing both the #1–#3 podium and the student’s personal "760 XP to reach Top 20" progress bar keeps mid-tier learners motivated rather than discouraged.',
      },
      {
        title: 'Self-Serve Billing with Visual Parity',
        detail:
          'Designing Orders & Invoices with the exact same card hierarchy, filters, and help banner as the core dashboard reduces support friction.',
      },
      {
        title: 'Left-Rail Scalability for Full LMS Growth',
        detail:
          'Using a compact icon rail alongside categorized sub-navigation keeps complex modules (courses, live classes, billing, privacy) organized without clutter.',
      },
    ],
    learnings: [
      'Unifying academic engagement and account administration inside one design language makes an LMS feel cohesive and dependable.',
      'Actionable progress indicators ("XP to reach next tier") turn passive analytics into clear next steps for students.',
      'Self-serve order status tags and direct invoice download actions eliminate common post-enrollment friction.',
    ],
  },
  {
    id: 'link-management',
    title: 'Link Management Website',
    subtitle: 'Short Links, QR Codes & Branded File Sharing',
    category: 'Web Application & Marketing Site',
    featured: false,
    role: 'Researcher & UX/UI Designer',
    scope: 'Marketing Website & Dashboard Information Architecture',
    tools: ['Figma', 'Framer', 'HTML / CSS'],
    description:
      'A link management website and dashboard where teams create short links, QR codes, and bio pages, run campaigns, share branded files, and monitor link activity in one clean workspace.',
    overview:
      'Designed as an end-to-end website and dashboard experience, this platform unifies link creation, QR code generation, bio pages, campaigns, branded file sharing, and link migration into one intuitive information architecture.',
    productObjective:
      'Bring link shortening, QR assets, bio pages, and branded file sharing together inside one clear workspace.',
    targetUsers: [
      {
        group: 'Marketing & Growth Teams',
        need: 'Organize campaign links, QR codes, and shareable media kits from one searchable hub.',
      },
      {
        group: 'Creators & Consultants',
        need: 'Share branded bio pages and client files with clean links and quick copy actions.',
      },
    ],
    problem: {
      summary:
        'Teams relied on separate tools for shortening links, generating QR codes, and sending client files, leading to scattered assets and inconsistent branding.',
      points: [
        'Switching across multiple disconnected tools to share links, QR codes, and files',
        'Unclear asset organization making older campaign documents hard to retrieve',
        'Anxiety around migrating existing links without breaking live destinations',
      ],
    },
    responsibilities: [
      'Defined information architecture separating creation modules from growth and file-sharing workflows',
      'Designed responsive website and dashboard screens in Figma and interactive prototypes in Framer',
    ],
    coreCapabilities: {
      completedScreens: [
        {
          title: 'Searchable File Sharing Console',
          detail: 'Live file search, upload trigger, asset metadata, and one-click copy/share actions.',
        },
      ],
      plannedEcosystem: [
        {
          title: 'Links, QR Codes, Bio Pages & Migrations',
          detail: 'Grouped sidebar modules for short links, printable QR codes, bio pages, campaigns, and guided migrations.',
        },
      ],
    },
    process: [
      { phase: '01 · Discovery', detail: 'Audited link, QR, and file-sharing friction across creator and marketing workflows.' },
      { phase: '02 · Architecture', detail: 'Grouped navigation by intent (Main Creation vs. Grow & Manage).' },
      { phase: '03 · UI & Prototyping', detail: 'Built Figma screens and interactive copy/search states.' },
    ],
    flowsAndIA: {
      iaModules: [
        'Main: Dashboard · Links · QR Codes · Bio Pages',
        'Grow: Campaigns · File Sharing · Link Previews · Migrations',
      ],
      userFlow: ['Visit Website', 'Sign Up', 'Open File Sharing', 'Search or Upload Asset', 'Copy Branded Link'],
    },
    designSystem: {
      summary: 'Clean slate surfaces paired with high-contrast navy typography and warm yellow action triggers.',
      tokens: [
        { label: 'Primary Accent', value: 'Warm Yellow (#FACC15) on Crisp Slate Surfaces' },
        { label: 'Components', value: 'Grouped Sidebar Rail, Search Bar, File Rows with Copy Feedback' },
      ],
    },
    uiType: 'link-management',
    keyDecisions: [
      {
        title: 'Intent-Grouped Sidebar',
        detail: 'Separating Main creation tools from Grow modules keeps feature-rich SaaS navigation approachable.',
      },
    ],
    learnings: [
      'Grouping navigation by user intent keeps multi-tool platforms easy to scan.',
      'Surfacing search and primary upload controls at the top of tables speeds retrieval.',
    ],
  },
  {
    id: 'dodo',
    title: 'Dodo',
    subtitle: 'Education Fee Management Platform',
    category: 'FinTech Console · UX/UI Design',
    featured: false,
    role: 'UX/UI Designer',
    scope: 'Institution Collections Dashboard & Web Interface',
    tools: ['Figma', 'HTML / CSS'],
    description:
      'A fee management and payments platform that helps educational institutions enroll students, structure installments, manage eNACH auto-debits, and reconcile settlements from one console.',
    overview:
      'Dodo is an institutional finance console built to replace scattered spreadsheets with one structured workspace for student enrollment, fee structures, installments, eNACH mandates, overdue alerts, and settlement reconciliation.',
    productObjective:
      'Give educational institutions immediate clarity into fee collections, pending balances, and automated debits.',
    targetUsers: [
      {
        group: 'Institution Owners & Administrators',
        need: 'Track Net Payable, Amount Collected, and Outstanding balances at a glance.',
      },
      {
        group: 'Accountants & Finance Staff',
        need: 'Catch overdue accounts and failed eNACH debits early and reconcile settlements efficiently.',
      },
    ],
    problem: {
      summary:
        'Institution administrators and accountants tracked fees across disconnected spreadsheets and bank statements, making overdue follow-ups and failed eNACH debits slow to catch.',
      points: [
        'Scattered fee records across batches and manual spreadsheets',
        'Difficulty seeing who is due today, upcoming within 7 days, or overdue',
        'Failed auto-debits discovered too late without clear operational tiles',
      ],
    },
    responsibilities: [
      'Designed the FinTech console UI in Figma across summary KPIs, operational tiles, and sidebar menus',
      'Built responsive web dashboard layouts using HTML and CSS',
    ],
    coreCapabilities: {
      completedScreens: [
        {
          title: 'Collections Overview Console',
          detail: 'Four primary financial KPIs and eight operational pulse tiles for due dates, eNACH mandates, and reconciliation.',
        },
      ],
      plannedEcosystem: [
        {
          title: 'Students, Installments, Flex/eNACH & Settlements',
          detail: 'Full institutional workflow modules accessible via the Main Menu, Operations, and Management sidebar groups.',
        },
      ],
    },
    process: [
      { phase: '01 · Discovery', detail: 'Mapped workflows across institution owners, accountants, and parents.' },
      { phase: '02 · Architecture', detail: 'Separated high-level financial totals from daily exception queues.' },
      { phase: '03 · Design + Build', detail: 'Designed in Figma and structured clean HTML/CSS dashboard tiles.' },
    ],
    flowsAndIA: {
      iaModules: [
        'Main Menu: Dashboard · Students · Installments',
        'Operations & Management: Payments · Settlements · Flex / eNACH · Overdue · Reports',
      ],
      userFlow: ['Open Collections Console', 'Review Summary KPIs', 'Check Overdue or Failed Tiles', 'Reconcile Settlements'],
    },
    designSystem: {
      summary: 'Calm mint-and-slate financial console using semantic status colors for instant balance scannability.',
      tokens: [
        { label: 'Primary FinTech Accent', value: 'Emerald Mint (#10B981 / #064E3B)' },
        { label: 'Components', value: 'KPI Summary Cards, 8-Tile Operational Grid, Student & UTR Search' },
      ],
    },
    uiType: 'dodo',
    keyDecisions: [
      {
        title: 'Separating Financial Totals from Exception Queues',
        detail: 'Placing Net Payable/Collected/Outstanding above operational tiles makes daily triage immediate.',
      },
    ],
    learnings: [
      'Translating Figma layouts into clean HTML and CSS ensures precision on dense financial states.',
      'Semantic color coding helps finance teams distinguish healthy collections from action items instantly.',
    ],
  },
  {
    id: 'academy',
    title: 'Academy Website',
    subtitle: 'Career Course Discovery & Counselling Platform',
    category: 'Responsive Web Design',
    featured: false,
    role: 'Researcher & UX/UI Designer',
    scope: 'Information Architecture, Hero UX & Enquiry Flow',
    tools: ['Figma', 'Framer', 'Responsive Web Design'],
    description:
      'A career-course academy website designed to establish credibility quickly, highlight upcoming batch schedules, and convert prospective learners into counselling enquiries through a focused short form.',
    overview:
      'Built for prospective students and working professionals exploring career programs, this academy website pairs a clear value proposition and trust strip with an inline counselling form right in the first screen.',
    productObjective:
      'Establish program credibility upfront and make booking a counselling call effortless on desktop and mobile.',
    targetUsers: [
      {
        group: 'Graduating Students & Career Switchers',
        need: 'Understand course outcomes, next batch dates, and mentor quality quickly before enquiring.',
      },
    ],
    problem: {
      summary:
        'Visitors evaluating career programs felt uncertain about accreditation and struggled with long enquiry forms and hard-to-find batch start dates.',
      points: [
        'Unclear program credibility above the fold',
        'Next batch start date hidden inside secondary pages',
        'Long enquiry forms causing prospective students to drop off',
      ],
    },
    responsibilities: [
      'Structured landing page IA, batch announcement banner, split-hero form layout, and responsive mobile breakpoints',
    ],
    coreCapabilities: {
      completedScreens: [
        {
          title: 'Split-Hero & Counselling Enquiry Experience',
          detail: 'Persistent batch date banner, program value proposition, and concise 4-field study plan form.',
        },
      ],
      plannedEcosystem: [
        {
          title: 'Program Catalog & Trust Modules',
          detail: 'Course comparison menus, accreditation strip, and mentorship highlights.',
        },
      ],
    },
    process: [
      { phase: '01 · Architecture', detail: 'Prioritized batch visibility, trust cues, and a short enquiry flow above the fold.' },
      { phase: '02 · Responsive UI', detail: 'Designed desktop and mobile layouts in Figma and prototyped in Framer.' },
    ],
    flowsAndIA: {
      iaModules: ['Top Demo Banner', 'Split Hero (Headline + Short Form)', 'Four-Pillar Trust Strip'],
      userFlow: ['Check Next Batch Date', 'Read Program Overview', 'Complete Short Enquiry Form', 'Book Counselling'],
    },
    designSystem: {
      summary: 'High-contrast dark hero paired with crimson action highlights and a crisp white lead card.',
      tokens: [
        { label: 'Primary Accent', value: 'Crimson Red (#DC2626 / #B91C1C)' },
        { label: 'Components', value: 'Batch Banner, Split Hero Form Card, Trust Strip' },
      ],
    },
    uiType: 'academy',
    keyDecisions: [
      {
        title: 'Inline Counselling Form Above the Fold',
        detail: 'Reducing fields to name, email, phone, and background removes multi-page enquiry friction.',
      },
    ],
    learnings: [
      'Putting batch dates and concise social proof next to a short form makes landing pages approachable.',
    ],
  },
];

export const getCaseStudyById = (id) => {
  const normalized = id === 'fee-management' ? 'dodo' : id;
  return CASE_STUDIES.find((item) => item.id === normalized) || null;
};
