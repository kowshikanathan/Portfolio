export const GREETO_IMAGE_SLOTS = {
  originalPurple: {
    src: '/images/greeto-original-purple.png',
    slotId: 'SLOT-01 · ORIGINAL INTERFACE',
    title: 'Original Greeto Product Interface (Purple Sidebar)',
    instruction:
      'Drop your original purple-sidebar Greeto screenshot at public/images/greeto-original-purple.png to populate this Before view automatically.',
    alt: 'Original Greeto SaaS dashboard interface with purple gradient sidebar',
  },
  templatesScreen: {
    src: '/images/greeto-templates.jpg',
    slotId: 'SLOT-02 · TEMPLATES MODULE',
    title: 'Redesigned Templates Management Screen',
    instruction:
      'Drop your Templates module screenshot at public/images/greeto-templates.jpg (note: Templates appears in the sidebar navigation, Quick Operations bar, Campaign builder, and Send Template workflow node).',
    alt: 'Greeto redesigned Meta-approved message templates management interface',
  },
};

export const GREETO_NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'redesign', label: 'Redesign' },
  { id: 'design-system', label: 'Design System' },
  { id: 'features', label: 'Features' },
  { id: 'workflow-builder', label: 'Workflow Builder' },
  { id: 'outcome', label: 'Outcome' },
];

export const GREETO_HERO = {
  label: 'FEATURED PROJECT / B2B SAAS REDESIGN',
  title: 'Greeto.',
  subtitle: 'Simplifying customer communication through intelligent automation.',
  description:
    'Redesigning an omnichannel communication platform into an intuitive, scalable workspace for customer engagement and no-code automation.',
  heroImage: '/images/greeto-dashboard.jpg',
  heroImageCaption: 'Redesigned Greeto Workspace Dashboard · High-resolution desktop view',
  metadata: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Project Type', value: 'Product Redesign' },
    { label: 'Platform', value: 'Desktop Web Application' },
    {
      label: 'Scope',
      value: 'Customer Engagement, SaaS Dashboard and Workflow Automation',
    },
  ],
};

export const GREETO_OVERVIEW = {
  sectionNumber: '02',
  eyebrow: 'PRODUCT OVERVIEW',
  heading: 'Connecting conversations. Simplifying operations.',
  intro:
    'Greeto is an omnichannel customer engagement and automation platform designed for growing customer support, operations, and lifecycle messaging teams. By unifying real-time inbox conversations, contact segmentation, broadcast campaigns, approved messaging templates, and visual workflow automation into a single desktop workspace, the redesign replaces fragmented navigation with operational clarity.',
  pillars: [
    {
      number: '01',
      title: 'Customer communication',
      summary:
        'A three-pane Conversations inbox, live WhatsApp 24-hour window indicators, internal agent notes, template insertion, and real-time message delivery logging.',
    },
    {
      number: '02',
      title: 'Customer management',
      summary:
        'Unified Contacts directory with table/board views, multi-step CSV import validation, channel opt-in tracking, and dynamic Groups, Tags, and pipeline Stages.',
    },
    {
      number: '03',
      title: 'Workflow automation',
      summary:
        'A visual no-code builder enabling teams to compose multi-channel triggers, template actions, conversation routing rules, waits, and conditional branches.',
    },
  ],
};

export const GREETO_EXISTING_ANALYSIS = {
  sectionNumber: '03',
  eyebrow: 'EXISTING PRODUCT ANALYSIS',
  heading: 'Looking beyond the interface.',
  intro:
    'Reviewing the original purple-sidebar interface alongside the platform feature set highlighted structural friction across navigation, visual hierarchy, and multi-module workflows. The points below summarize key design observations from that audit:',
  observations: [
    {
      number: '01',
      title: 'Sidebar & Navigation Overload',
      note: 'Design Observation',
      detail:
        'The wide purple gradient sidebar carried heavy visual weight while competing with primary workspace content, flattening hierarchy across daily messaging, CRM lists, and setup settings.',
    },
    {
      number: '02',
      title: 'Weak Visual Hierarchy Across Modules',
      note: 'Design Observation',
      detail:
        'Key operational metrics, status indicators, and primary actions lacked consistent typographic scale and semantic surface treatment, making rapid triage harder.',
    },
    {
      number: '03',
      title: 'Disconnected User Flows',
      note: 'Design Observation',
      detail:
        'Moving between contact segmentation, template approval, campaign dispatch, and automated triggers required mental context switching without shared UI patterns.',
    },
    {
      number: '04',
      title: 'Inconsistent UI Patterns',
      note: 'Design Observation',
      detail:
        'Tables, modals, form inputs, and confirmation dialogs differed across sections, increasing the learning curve when teams moved from inbox replies to configuration.',
    },
    {
      number: '05',
      title: 'High Cognitive Load for Complex Workflows',
      note: 'Design Observation',
      detail:
        'Multi-step tasks—such as CSV contact mapping, WhatsApp API setup, and conditional workflow branching—lacked progressive disclosure and live preview feedback.',
    },
  ],
};

export const GREETO_CHALLENGE = {
  sectionNumber: '04',
  eyebrow: 'DESIGN CHALLENGE',
  statement:
    'How might we simplify a feature-rich communication platform without compromising its functionality?',
  context: [
    'Greeto serves teams managing high-volume WhatsApp and multi-channel messaging alongside CRM segmentation and event-driven automation. Stripping features away was never an option—teams depend on granular filters, error diagnostics, compliance opt-ins, and conditional logic.',
    'The design challenge lay in reorganizing every module around a predictable spatial grammar: a slim persistent navigation rail, uniform KPI summary strips, standardized toolbar filters, contextual slide-over inspectors, and explicit empty-to-populated state transitions.',
  ],
};

export const GREETO_OBJECTIVES = {
  sectionNumber: '05',
  eyebrow: 'REDESIGN OBJECTIVES',
  heading: 'Focused principles guiding every screen.',
  items: [
    {
      number: '01',
      title: 'Clarity over clutter',
      description:
        'Replace heavy chrome and saturated gradients with calm neutral surfaces that let customer data and statuses stand out.',
    },
    {
      number: '02',
      title: 'Unified design language',
      description:
        'Establish shared KPI cards, search/filter bars, table/board switches, pills, and drawer inspectors across every module.',
    },
    {
      number: '03',
      title: 'Faster navigation & orientation',
      description:
        'Compact left icon rail plus Quick Operations and breadcrumb back-links keep frequent tasks within one click.',
    },
    {
      number: '04',
      title: 'Guided empty & onboarding states',
      description:
        'Transform blank screens into actionable checklists and direct setup prompts rather than dead-end placeholders.',
    },
    {
      number: '05',
      title: 'Accessible visual automation',
      description:
        'Expose triggers, messaging actions, conversation controls, and logic branches on an approachable dotted canvas.',
    },
    {
      number: '06',
      title: 'Scalable SaaS architecture',
      description:
        'Ensure layouts accommodate 0 records or 14,000+ logs cleanly without breaking alignment or scannability.',
    },
  ],
};

export const GREETO_IA = {
  sectionNumber: '06',
  eyebrow: 'INFORMATION ARCHITECTURE',
  heading: 'Structured workspace hierarchy.',
  intro:
    'All modules in the redesigned Greeto desktop experience are organized beneath a persistent global top bar and slim left navigation rail, separating daily customer operations, audience tools, automation, and workspace configuration.',
  root: {
    name: 'Greeto Workspace',
    subtitle: 'Global Search · Trial & Quota Status · Notifications · Workspace Profile',
  },
  branches: [
    {
      group: 'Core Operations',
      nodes: [
        {
          name: 'Dashboard',
          detail: 'KPI strip, setup checklist, agent workload, message volume & Quick Operations',
        },
        {
          name: 'Conversations',
          detail: '3-pane inbox, 24h messaging window badge, internal notes & contact panel',
        },
        {
          name: 'Messaging',
          detail: 'WhatsApp Business, Telegram, Instagram, Messenger & template-compliant replies',
        },
      ],
    },
    {
      group: 'Audience & Outreach',
      nodes: [
        {
          name: 'Contacts',
          detail: 'Searchable directory, Table/Board toggle, Add Contact & 3-step CSV Import',
        },
        {
          name: 'Contact Tools',
          detail: 'Labels & Groups (auto-sync & dynamic rules), Tags, and pipeline Stages',
        },
        {
          name: 'Campaigns',
          detail: 'Broadcast scheduling, Meta template selection, live preview & opt-in guard',
        },
        {
          name: 'Templates',
          detail: 'Approved WhatsApp templates, variable mapping & quick creation flows',
        },
      ],
    },
    {
      group: 'Automation & Diagnostics',
      nodes: [
        {
          name: 'Automation',
          detail: 'Trigger-to-action execution engine connecting channels, contacts & routing',
        },
        {
          name: 'Workflows',
          detail: 'Visual node canvas with Triggers, Send, Conversation, Logic & Inspector',
        },
        {
          name: 'Activity Log',
          detail: 'Real-time dispatch feed, status filters & error payload blueprint drawer',
        },
        {
          name: 'Settings',
          detail: 'Connected channels (WhatsApp Cloud API / Manual Setup) & workspace preferences',
        },
      ],
    },
  ],
};

export const GREETO_BEFORE_AFTER = {
  sectionNumber: '07',
  eyebrow: 'BEFORE & AFTER',
  heading: 'From saturated chrome to focused utility.',
  intro:
    'Comparing the original purple-sidebar interface against the redesigned Greeto workspace highlights the shift in visual restraint, spatial hierarchy, and operational scan speed.',
  afterImage: '/images/greeto-dashboard.jpg',
  afterCaption: 'After · Redesigned Greeto Dashboard (Calm slate/teal surface system)',
  beforeCaption: 'Before · Original Greeto Interface (Purple gradient sidebar)',
  annotations: [
    {
      area: 'Navigation Rail',
      before: 'Wide, high-saturation purple sidebar dominating horizontal real estate.',
      after: 'Compact white icon rail with subtle teal active pill, expanding canvas width.',
    },
    {
      area: 'KPI & Status Scanning',
      before: 'Competing surface colors and uneven spacing across metric blocks.',
      after: '4 pastel-tinted summary cards (Open Conversations, Messages, Contacts, Failed sends) with scannable deltas.',
    },
    {
      area: 'Operational Actions',
      before: 'Multi-click navigation required to start key daily tasks.',
      after: 'Dedicated Quick Operations footer bar (+ Add Contact, Create Template, Launch Campaign, + Create Workflow).',
    },
    {
      area: 'Live Team Visibility',
      before: 'Limited queue context directly from the workspace home screen.',
      after: 'Side-by-side Recent Conversations table, Agent Workload capacity bars, and 14-day Message Volume chart.',
    },
  ],
};

export const GREETO_DESIGN_SYSTEM = {
  sectionNumber: '08',
  eyebrow: 'DESIGN SYSTEM',
  heading: 'Consistent foundations across 57+ screens.',
  intro:
    'A disciplined component and color system ensures that every Greeto view—from inbox threads to workflow inspectors—shares identical spacing, contrast, and feedback states. Exact unverified Figma variable hex values are marked clearly as placeholders where measured directly from exported screens rather than source tokens.',
  categories: [
    {
      id: 'colors',
      label: 'Color Palette',
      title: 'Semantic Light Workspace & Deep Teal Accent',
      description:
        'A light neutral canvas pairs with a high-contrast deep teal primary action tone and soft pastel KPI card fills for instant status differentiation without visual fatigue.',
      type: 'colors',
      swatches: [
        {
          name: 'Primary Brand / CTA',
          hex: '#0B3B40',
          note: 'Estimated from screen exports — confirm exact Figma token',
          role: 'Primary buttons, active tabs, selected checkboxes, brand mark',
        },
        {
          name: 'Workspace Surface',
          hex: '#F8FAFC',
          note: 'Estimated from screen exports — confirm exact Figma token',
          role: 'App canvas background separating elevated white cards',
        },
        {
          name: 'Card & Panel Surface',
          hex: '#FFFFFF',
          note: 'Pure white elevated containers with 1px hairline border',
          role: 'Tables, inspectors, modals, workflow nodes',
        },
        {
          name: 'KPI Amber Tint',
          hex: '#FEF1E2',
          note: 'Observed KPI Card 01 background fill',
          role: 'Open Conversations / Total Campaigns / Total Groups highlight',
        },
        {
          name: 'KPI Mint Tint',
          hex: '#D7F5EA',
          note: 'Observed KPI Card 02 & success pill background',
          role: 'Messages delivered, WhatsApp verified, Ready status',
        },
        {
          name: 'KPI Lavender Tint',
          hex: '#F0EBFE',
          note: 'Observed KPI Card 03 highlight fill',
          role: 'Total Contacts, Active Audiences, Email verification KPI',
        },
        {
          name: 'KPI Sky & Alert Tint',
          hex: '#E6F4FE / #FEE2E2',
          note: 'Observed sky metric card & semantic error alert surfaces',
          role: 'Health diagnostics, Read Rate, and ERR 131026 failure alerts',
        },
      ],
    },
    {
      id: 'typography',
      label: 'Typography',
      title: 'Clean Sans-Serif SaaS Hierarchy',
      description:
        'Readable geometric/humanist sans-serif typography tuned for dense tabular metrics, conversational threads, and technical workflow variable tags.',
      type: 'typography',
      specStatus:
        'Font family name & exact point/rem tokens are placeholder references derived from visual proportions in the redesigned screens.',
      scales: [
        {
          token: 'Page Title',
          sample: 'Dashboard · Conversations · Contacts',
          spec: 'SemiBold · Compact tracking · Primary dark slate',
        },
        {
          token: 'KPI Metric Figure',
          sample: '18,450   ·   1,420   ·   98.4%',
          spec: 'Tabular numerals · Medium/SemiBold large display scale',
        },
        {
          token: 'Section / Card Header',
          sample: 'Recent Conversations · Agent Workload',
          spec: 'Medium weight · Paired with concise subtitle helper text',
        },
        {
          token: 'Table Headers & Micro Labels',
          sample: 'CONTACT   ·   SYNC MECHANISM   ·   PAYLOAD BLUEPRINT',
          spec: 'Uppercase · Subtle muted slate · Wide letter spacing',
        },
        {
          token: 'Variable & Code Chips',
          sample: '{{first_name}}   ·   @name   ·   ERR 131026',
          spec: 'Inline pill tags for dynamic workflow & API payload clarity',
        },
      ],
    },
    {
      id: 'controls',
      label: 'Buttons & Inputs',
      title: 'Buttons, Form Inputs & Search Toolbars',
      description:
        'High-contrast solid dark teal CTAs reserve visual prominence for primary actions (+ Add Contact, + New Campaign, Save Node), paired with crisp hairline secondary controls.',
      type: 'controls',
      items: [
        'Primary Action Button (Solid deep teal fill with clear icon + verb label)',
        'Secondary Action Button (White fill, subtle 1px border, Refresh / Discard / Export)',
        'Global Search Bar & Scoped Table Search Input with keyboard-friendly icon prefix',
        'Dropdown Selects, Toggle Switches (Draft/Active, Opt-in Guard), and Radio Cards',
      ],
      previewScreens: [
        '/images/greeto-screens/screen_09.jpg',
        '/images/greeto-screens/screen_21.jpg',
      ],
    },
    {
      id: 'badges',
      label: 'Status Badges',
      title: 'Channel Pills, Validation States & Delivery Indicators',
      description:
        'Consistent dot-prefixed pills allow operators to scan delivery states, channel connections, and lead stages at a glance across dense tables.',
      type: 'badges',
      badges: [
        { label: 'WhatsApp Connected', tone: 'mint' },
        { label: 'Approved · Meta', tone: 'mint' },
        { label: 'Sending · In Queue', tone: 'sky' },
        { label: 'Scheduled · Nov 24', tone: 'amber' },
        { label: 'Template only', tone: 'neutral' },
        { label: 'Failed · ERR 131026', tone: 'danger' },
      ],
    },
    {
      id: 'navigation',
      label: 'Navigation',
      title: 'Left Icon Rail, Top Utility Bar & Module Tabs',
      description:
        'A slim fixed left rail frees horizontal space for multi-column tables and 3-pane chats, while segmented tabs (All / Unread / Assigned / Unassigned, Table / Board) filter views in place.',
      type: 'screens',
      screens: [
        {
          src: '/images/greeto-screens/screen_06.jpg',
          caption: 'Segmented inbox filters & 3-pane workspace navigation',
        },
        {
          src: '/images/greeto-screens/screen_11.jpg',
          caption: 'Integration category tabs & top quota/notification bar',
        },
      ],
    },
    {
      id: 'surfaces',
      label: 'Cards, Tables & Modals',
      title: 'Dashboard Cards, Data Tables, Dialogs & Workflow Nodes',
      description:
        'Modular containers scale uniformly across dashboards, sortable contact directories, multi-step CSV validation modals, slide-over diagnostics drawers, and dotted-canvas workflow nodes.',
      type: 'screens',
      screens: [
        {
          src: '/images/greeto-screens/screen_08.jpg',
          caption: 'Contacts KPI strip & paginated multi-column data table',
        },
        {
          src: '/images/greeto-screens/screen_17.jpg',
          caption: 'Multi-step Import Contacts modal with validation summary cards',
        },
        {
          src: '/images/greeto-screens/screen_24.jpg',
          caption: 'Activity Details slide-over drawer with execution trace',
        },
        {
          src: '/images/greeto-screens/screen_50.jpg',
          caption: 'Dotted canvas workflow node & right-hand Condition inspector',
        },
      ],
    },
  ],
};

export const GREETO_MODULES = [
  {
    number: '01',
    name: 'Dashboard',
    userNeed:
      'Support leads and workspace admins need an immediate health check on open chats, messaging volume, agent workload, and workspace setup without opening multiple reports.',
    designApproach:
      'Designed dual workspace states: a guided 4-step setup checklist for newly created workspaces and an analytics-rich command center for active teams.',
    functionality: [
      '4-card KPI strip: Open Conversations, Messages (14 days), Total Contacts, Failed Sends',
      'Recent Conversations live feed with channel pills, status badges, and assignee visibility',
      'Agent Workload capacity bars with target chat cap and Rebalance Queue action',
      '14-day Received vs. Sent volume chart and Quick Operations shortcut bar',
    ],
    image: '/images/greeto-dashboard.jpg',
    secondaryImage: '/images/greeto-screens/screen_01.jpg',
    imageCaption: 'Populated Workspace Dashboard · Hover toggle available for Onboarding Empty State',
  },
  {
    number: '02',
    name: 'Conversations',
    userNeed:
      'Agents handling dozens of concurrent WhatsApp inquiries need message context, reply-window timers, customer tags, and internal notes visible on one screen.',
    designApproach:
      'Structured a classic 3-pane split layout: filterable queue on the left, chronological conversation thread in the center, and persistent customer CRM inspector on the right.',
    functionality: [
      'Queue segmentation tabs: All, Unread, Assigned, Unassigned + Template-only badges',
      'Live WhatsApp 24-hour customer service window countdown in the thread header',
      'Rich attachment & PDF cards alongside one-click approved Templates insertion',
      'Collapsible Customer Details, VIP/Enterprise Tags, and Internal Notes sidebar',
    ],
    image: '/images/greeto-screens/screen_06.jpg',
    secondaryImage: '/images/greeto-screens/screen_05.jpg',
    imageCaption: '3-Pane Omnichannel Inbox with Contact Inspector & Internal Notes',
  },
  {
    number: '03',
    name: 'Contact Management',
    userNeed:
      'Operations teams importing lead spreadsheets and verifying WhatsApp opt-in status require bulk validation before contacts enter live campaigns.',
    designApproach:
      'Combined a clean directory table with Table/Board switching, inline WhatsApp channel badges, and a guided 3-step CSV import modal that flags duplicates and missing fields early.',
    functionality: [
      'Directory KPIs tracking Total Contacts, With Phone, With Email, and Address Health',
      'Search, multi-filter popover, column visibility selector, and pagination',
      'Dedicated Add Contact modal for quick single-record entry',
      '3-step CSV Import Wizard (Upload CSV -> Map Columns -> Review & Import)',
    ],
    image: '/images/greeto-screens/screen_08.jpg',
    secondaryImage: '/images/greeto-screens/screen_17.jpg',
    imageCaption: 'Contacts Directory & Multi-Step CSV Validation Flow',
  },
  {
    number: '04',
    name: 'Campaigns',
    userNeed:
      'Marketing and lifecycle teams scheduling WhatsApp broadcasts must verify Meta-approved templates, recipient segments, and explicit opt-in compliance before dispatch.',
    designApproach:
      'Paired a real-time campaign performance table (Sending, Scheduled, Completed, Draft, Failed) with a structured campaign creation modal featuring a live mobile message preview.',
    functionality: [
      'KPI metrics across Total Campaigns, Messages Sent, Delivery Rate, and Read Rate',
      'Inline delivery progress bars with completion ratios and error recovery actions',
      'New Campaign dialog with live WhatsApp recipient preview and variable binding',
      'Compliance toggle restricting sends to explicitly opted-in WhatsApp contacts',
    ],
    image: '/images/greeto-screens/screen_20.jpg',
    secondaryImage: '/images/greeto-screens/screen_21.jpg',
    imageCaption: 'Campaign Performance Table & New WhatsApp Campaign Builder Modal',
  },
  {
    number: '05',
    name: 'Templates',
    userNeed:
      'Teams sending outbound notifications outside the 24-hour WhatsApp window rely on Meta-approved message templates with clear variable mapping.',
    designApproach:
      'Integrated template creation and selection directly into daily touchpoints—from the left navigation rail and Dashboard Quick Operations to Campaign setup and Workflow Send nodes—while preserving a dedicated Templates slot for the full management screen.',
    functionality: [
      'Approved vs. rejected Meta template status visibility before dispatch',
      'Dynamic placeholder binding such as {{first_name}} and customer context fields',
      'Live recipient preview verifying interactive buttons and copy formatting',
      'Direct insertion inside Conversations inbox and Workflow Send Template actions',
    ],
    image: GREETO_IMAGE_SLOTS.templatesScreen.src,
    slotConfig: GREETO_IMAGE_SLOTS.templatesScreen,
    secondaryImage: '/images/greeto-screens/screen_40.jpg',
    imageCaption: 'Templates Management Slot & Send WhatsApp Template Inspector',
  },
  {
    number: '06',
    name: 'Contact Tools',
    userNeed:
      'Growth teams need reusable audience groups, tags, and lead stages that update dynamically from inbound forms and automation workflows.',
    designApproach:
      'Grouped segmentation mechanics under unified Labels (Groups), Tags, and Stages tabs so operators see sync rules, audience counts, and coverage ratios without SQL queries.',
    functionality: [
      'Unified tab bar switching seamlessly between Labels (Groups), Tags, and Stages',
      'Sync mechanism indicators: Auto-sync Active, Dynamic Rule, Automation Rule, Manual List',
      'Visual coverage ratio progress bars showing segment share of total audience',
      'Connected channel badges verifying WhatsApp broadcast eligibility per group',
    ],
    image: '/images/greeto-screens/screen_26.jpg',
    secondaryImage: '/images/greeto-screens/screen_28.jpg',
    imageCaption: 'Contact Tools · Audience Groups & Tag Segmentation Views',
  },
  {
    number: '07',
    name: 'Workflow Automation',
    userNeed:
      'Non-technical operators want to build event-driven messaging sequences, agent routing, and conditional logic without writing code or misconfiguring live bots.',
    designApproach:
      'Created a calm dotted-grid visual canvas where a floating 5-category dock (Add Trigger, Send, Conversation, Logic, Data & Apps) pairs with a contextual right-hand settings inspector.',
    functionality: [
      'Top execution header: Draft/Active switch, live graph validation badge, Undo/Redo, Test & Activate',
      'Left sub-node rail revealing triggers, message formats, waits, and conditions per category',
      'Contextual inspector showing @variables, output paths (True/False), and execution previews',
      'Integrated Activity Log & Error Drawer (ERR 131026) to trace and retry failed runs',
    ],
    image: '/images/greeto-workflow.jpg',
    secondaryImage: '/images/greeto-screens/screen_24.jpg',
    imageCaption: 'Visual Workflow Canvas & Contextual Node Settings Inspector',
  },
];

export const GREETO_WORKFLOW_JOURNEY = {
  sectionNumber: '10',
  eyebrow: 'WORKFLOW BUILDER',
  heading: 'Making automation accessible.',
  intro:
    'The workflow builder was engineered to keep complex branching approachable. Every node exposes only relevant fields inside a fixed right-hand inspector while showing live graph validity and zoom controls on an uncluttered dotted grid.',
  pillars: [
    {
      title: 'Canvas & Navigation Controls',
      description:
        'A subtle dotted canvas removes background noise, anchored by bottom-left zoom (100%), fit-to-screen, auto-layout, and snap-grid controls.',
    },
    {
      title: 'Triggers & Node Categories',
      description:
        'A floating top dock groups building blocks into Add Trigger, Send, Conversation, Logic, and Data & Apps, paired with a compact vertical sub-tool rail.',
    },
    {
      title: 'Conditional Branching & Waits',
      description:
        'Dedicated Condition, Split, and Wait nodes render explicit True/False output ports and step-by-step execution previews inside the inspector.',
    },
    {
      title: 'Contextual Settings & AI Assist',
      description:
        'Draft state validation ("1 issue needs attention" / "Graph Valid"), clickable @variable pills, and "Improve with AI" streamline safe testing before activation.',
    },
  ],
  steps: [
    {
      step: 'Step 01',
      label: 'Trigger Configuration',
      title: 'Start on incoming WhatsApp message',
      description:
        'Operators pick a trigger from Add Trigger, select the active WhatsApp Business Direct channel, scope contact type, and toggle first-message deduplication.',
      screen: '/images/greeto-screens/screen_30.jpg',
    },
    {
      step: 'Step 02',
      label: 'Send Template & Media',
      title: 'Deliver approved templates or rich media',
      description:
        'Under the Send dock, teams choose Meta-approved templates with dynamic {{first_name}} variables or send rich media packets with live preview verification.',
      screen: '/images/greeto-screens/screen_40.jpg',
    },
    {
      step: 'Step 03',
      label: 'Wait for Reply & Route',
      title: 'Pause workflow until customer responds',
      description:
        'Conversation nodes hold execution for configurable hours, capture customer replies into variables, and mask sensitive OTP/PIN values in logs.',
      screen: '/images/greeto-screens/screen_45.jpg',
    },
    {
      step: 'Step 04',
      label: 'Rich Media Action',
      title: 'Compose multi-format outbound messages',
      description:
        'Structured media selectors configure attachments, captions, and conditional follow-ups directly inside the contextual Action Settings drawer.',
      screen: '/images/greeto-workflow.jpg',
    },
    {
      step: 'Step 05',
      label: 'Conditional Logic',
      title: 'Branch automatically on contact variables',
      description:
        'Condition nodes evaluate contact fields or reply variables with readable summaries ("If [Contact field] exists") and clear True / False output paths.',
      screen: '/images/greeto-screens/screen_50.jpg',
    },
    {
      step: 'Step 06',
      label: 'Timed Delays',
      title: 'Schedule wait intervals with live preview',
      description:
        'Wait steps display human-readable execution previews (Previous Step -> Wait 1 hour -> Continue to Next Step) before saving the node.',
      screen: '/images/greeto-screens/screen_54.jpg',
    },
  ],
};

export const GREETO_INTERFACE_STATES = {
  sectionNumber: '11',
  eyebrow: 'INTERFACE STATES',
  heading: 'Every state matters.',
  intro:
    'Enterprise SaaS products succeed or fail outside the happy path. The Greeto redesign defines intentional empty states, onboarding prompts, multi-step creation dialogs, channel configuration forms, and error recovery drawers.',
  groups: [
    {
      id: 'all',
      label: 'All States',
    },
    {
      id: 'empty',
      label: 'Empty & Onboarding',
    },
    {
      id: 'populated',
      label: 'Populated Workspaces',
    },
    {
      id: 'dialogs',
      label: 'Creation & Import Modals',
    },
    {
      id: 'config',
      label: 'Configuration & Errors',
    },
  ],
  items: [
    {
      category: 'empty',
      feature: 'Dashboard',
      state: 'Empty / Onboarding Checklist',
      caption: '4-step onboarding guide prompting WhatsApp connection before live metrics populate.',
      src: '/images/greeto-screens/screen_01.jpg',
    },
    {
      category: 'empty',
      feature: 'Conversations',
      state: 'Empty Inbox Ready State',
      caption: 'Connected channel confirmation guiding teams toward first incoming conversations.',
      src: '/images/greeto-screens/screen_05.jpg',
    },
    {
      category: 'empty',
      feature: 'Contacts',
      state: 'No Contacts Yet',
      caption: 'Empty contact directory surfacing CSV import and single-contact creation immediately.',
      src: '/images/greeto-screens/screen_07.jpg',
    },
    {
      category: 'empty',
      feature: 'Campaigns',
      state: 'No Campaigns Created',
      caption: 'Clear empty broadcast table state with primary CTA to launch the first campaign.',
      src: '/images/greeto-screens/screen_19.jpg',
    },
    {
      category: 'empty',
      feature: 'Contact Tools',
      state: 'Empty Groups & Tags',
      caption: 'Clean starter states introducing dynamic segmentation rules before groups exist.',
      src: '/images/greeto-screens/screen_25.jpg',
    },
    {
      category: 'populated',
      feature: 'Dashboard',
      state: 'Active Workspace Metrics',
      caption: 'Real-time KPI summary cards, workload allocation, and 14-day message trends.',
      src: '/images/greeto-dashboard.jpg',
    },
    {
      category: 'populated',
      feature: 'Conversations',
      state: 'Live 3-Pane Thread',
      caption: 'Active WhatsApp support thread with PDF invoice exchange, tags, and internal notes.',
      src: '/images/greeto-screens/screen_06.jpg',
    },
    {
      category: 'populated',
      feature: 'Contacts',
      state: '1,420 Contacts Directory',
      caption: 'Filterable multi-column table displaying WhatsApp reachability and lead stages.',
      src: '/images/greeto-screens/screen_08.jpg',
    },
    {
      category: 'populated',
      feature: 'Activity Log',
      state: '14,820 Real-Time Logs',
      caption: 'Audit log across automated triggers, campaigns, and direct messages.',
      src: '/images/greeto-screens/screen_23.jpg',
    },
    {
      category: 'dialogs',
      feature: 'Contacts',
      state: 'Add Contact Dialog',
      caption: 'Single-contact creation modal preserving workspace context behind a subtle backdrop.',
      src: '/images/greeto-screens/screen_09.jpg',
    },
    {
      category: 'dialogs',
      feature: 'Contacts · Step 3',
      state: 'CSV Validation Preview',
      caption: 'Pre-import validation flagging 1,196 ready rows, 28 duplicates, and 16 invalid entries.',
      src: '/images/greeto-screens/screen_17.jpg',
    },
    {
      category: 'dialogs',
      feature: 'Contacts · Complete',
      state: 'Import Confirmation State',
      caption: 'Explicit confirmation summary verifying imported contacts and downloadable error report.',
      src: '/images/greeto-screens/screen_18.jpg',
    },
    {
      category: 'dialogs',
      feature: 'Campaigns',
      state: 'New Campaign Modal',
      caption: 'Template selection, Meta compliance guard, scheduling, and live mobile preview.',
      src: '/images/greeto-screens/screen_21.jpg',
    },
    {
      category: 'config',
      feature: 'Integrations',
      state: 'Channel Directory (6 Apps)',
      caption: 'Unified connection hub for WhatsApp, Telegram, Instagram, YouTube, GBP & Messenger.',
      src: '/images/greeto-screens/screen_11.jpg',
    },
    {
      category: 'config',
      feature: 'WhatsApp Setup',
      state: 'Quick Connection vs Manual API',
      caption: 'Guided Meta Cloud onboarding paired with manual API credential configuration.',
      src: '/images/greeto-screens/screen_12.jpg',
    },
    {
      category: 'config',
      feature: 'Activity Log',
      state: 'Failure Drawer · ERR 131026',
      caption: 'Diagnostic slide-over exposing Meta API reason, rendered payload, and one-click retry.',
      src: '/images/greeto-screens/screen_24.jpg',
    },
  ],
};

export const GREETO_SHOWCASE_GALLERY = [
  {
    title: 'Workspace Command Center',
    category: 'Dashboard',
    caption: 'KPI health strip, live conversation triage, agent workload caps, and 14-day message volume.',
    src: '/images/greeto-dashboard.jpg',
    featured: true,
  },
  {
    title: 'Omnichannel 3-Pane Conversations',
    category: 'Conversations',
    caption: 'Unified WhatsApp Business inbox with 24-hour window timer, tags, and internal notes.',
    src: '/images/greeto-screens/screen_06.jpg',
    featured: true,
  },
  {
    title: 'Visual Workflow Automation Builder',
    category: 'Workflows',
    caption: 'Send Media configuration inside the dotted automation canvas and node inspector.',
    src: '/images/greeto-workflow.jpg',
    featured: false,
  },
  {
    title: 'Contacts & Segmentation Directory',
    category: 'Contacts',
    caption: 'Searchable customer table with channel verification pills and stage tracking.',
    src: '/images/greeto-screens/screen_08.jpg',
    featured: false,
  },
  {
    title: 'CSV Bulk Import Validation',
    category: 'Import Flow',
    caption: 'Clean pre-import verification preventing duplicate and malformed records.',
    src: '/images/greeto-screens/screen_17.jpg',
    featured: false,
  },
  {
    title: 'WhatsApp Campaign Composer',
    category: 'Campaigns',
    caption: 'Live mobile message preview alongside explicit opt-in compliance controls.',
    src: '/images/greeto-screens/screen_21.jpg',
    featured: false,
  },
  {
    title: 'Audience Groups & Sync Rules',
    category: 'Contact Tools',
    caption: 'Dynamic and rule-driven customer segments with audience coverage metrics.',
    src: '/images/greeto-screens/screen_26.jpg',
    featured: false,
  },
  {
    title: 'Message Delivery Diagnostics',
    category: 'Activity Log',
    caption: 'Slide-over execution trace pinning failed Meta Cloud dispatches with retry actions.',
    src: '/images/greeto-screens/screen_24.jpg',
    featured: false,
  },
  {
    title: 'Channel Integrations Hub',
    category: 'Settings · Channels',
    caption: 'Omnichannel setup cards covering WhatsApp, Telegram, Instagram, and Messenger.',
    src: '/images/greeto-screens/screen_11.jpg',
    featured: false,
  },
];

export const GREETO_OUTCOME = {
  sectionNumber: '13',
  eyebrow: 'OUTCOME & LEARNINGS',
  heading: 'Designing clarity into complex SaaS operations.',
  summary:
    'The Greeto redesign transformed a visually heavy, fragmented interface into a cohesive 57-screen desktop SaaS system spanning onboarding, omnichannel messaging, CRM tools, broadcast campaigns, diagnostics, and visual no-code automation.',
  learnings: [
    {
      title: 'SaaS Information Architecture',
      detail:
        'Separating daily high-frequency workflows (Conversations, Contacts, Campaigns) from setup and diagnostic layers (Integrations, Activity Log, Settings) reduces navigation friction without hiding capabilities.',
    },
    {
      title: 'Visual Consistency at Scale',
      detail:
        'Standardizing KPI strips, filter toolbars, table/board toggles, and right-hand drawers across every module makes complex B2B screens immediately learnable.',
    },
    {
      title: 'Complex Interaction Design',
      detail:
        'Multi-step tasks like CSV column mapping, WhatsApp opt-in validation, and failed dispatch debugging benefit from inline previews and progressive disclosure.',
    },
    {
      title: 'Designing Visual Workflow Automation',
      detail:
        'Pairing an uncluttered node canvas with a structured category dock and contextual inspector lets non-technical users configure conditional logic with confidence.',
    },
    {
      title: 'Designing Beyond the Happy Path',
      detail:
        'Dedicated empty states, onboarding checklists, and explicit error diagnostics (like ERR 131026) are just as critical to product usability as populated dashboards.',
    },
  ],
};

