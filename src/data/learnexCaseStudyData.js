export const LEARNEX_NAV_SECTIONS = [
  { id: 'learnex-overview', label: 'Overview' },
  { id: 'learnex-challenge', label: 'Challenge' },
  { id: 'learnex-cycle', label: 'Ecosystem' },
  { id: 'learnex-workspace', label: 'Workspace' },
  { id: 'learnex-tools', label: 'Study Tools' },
  { id: 'learnex-analytics', label: 'Performance' },
  { id: 'learnex-system', label: 'Design System' },
  { id: 'learnex-showcase', label: 'Showcase' },
  { id: 'learnex-outcome', label: 'Outcome' },
];

export const LEARNEX_HERO = {
  eyebrow: 'FEATURED CASE STUDY / PROFESSIONAL EDTECH PLATFORM',
  title: 'Learnex.',
  headline: 'Study smarter. Prepare with confidence.',
  description:
    'Learnex is a professional learning and exam preparation platform built for accounting and finance certification candidates—unifying structured study plans, video and audio lessons, practice tests, flashcards, digital textbooks, Exa AI assistance, and diagnostic readiness analytics.',
  metadata: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Category', value: 'Professional EdTech / Exam Preparation Platform' },
    { label: 'Platform', value: 'Web Application (Adaptive Study Views)' },
    { label: 'Design Scope', value: '63 High-Fidelity Design Files' },
  ],
  browserScreens: [
    {
      title: 'Study Home Dashboard',
      url: 'app.learnex.edu/dashboard',
      src: '/images/learnex/dashboard.webp',
      alt: 'Learnex personalized study dashboard with study journey and time breakdown',
      role: 'left',
    },
    {
      title: 'CPA-FAR Prep Dashboard',
      url: 'app.learnex.edu/prep/cpa-far',
      src: '/images/learnex/prep-dashboard.webp',
      alt: 'Learnex preparation dashboard showing 42.8% Exam-Day Readiness and syllabus sections',
      role: 'center',
    },
    {
      title: 'Performance Intelligence',
      url: 'app.learnex.edu/analytics/readiness',
      src: '/images/learnex/performance-analysis.webp',
      alt: 'Learnex diagnostic performance analysis with readiness gauge, weak areas and MCQ vs TBS breakdown',
      role: 'right',
    },
  ],
};

export const LEARNEX_OVERVIEW = {
  sectionNumber: '02',
  eyebrow: 'PRODUCT OVERVIEW',
  heading: 'Engineered for high-stakes accounting & finance certifications.',
  intro:
    'Candidates studying for multi-part exams like US CPA and CMA balance full-time careers alongside hundreds of hours of syllabus coverage. Learnex structures the entire preparation lifecycle around three tightly connected pillars.',
  pillars: [
    {
      number: '01 · LEARN',
      title: 'Learn',
      summary:
        'Modular CPA/CMA section playlists combining concept video lectures, commuter-friendly audio lessons, digital annotated textbooks, and contextual Exa AI concept breakdowns.',
    },
    {
      number: '02 · PRACTICE',
      title: 'Practice',
      summary:
        'Chapter-wise drills, timed practice simulations, Task-Based Simulations (TBS), unit/testlet review tables, and active-recall spaced-repetition flashcards.',
    },
    {
      number: '03 · IMPROVE',
      title: 'Improve',
      summary:
        'Exam-Day Readiness (EDR) gauges, weekly study pacing alerts, weak-topic detection, and targeted remediation plans turning analytics directly into tomorrow’s schedule.',
    },
  ],
};

export const LEARNEX_CHALLENGE = {
  sectionNumber: '03',
  eyebrow: 'DESIGN CHALLENGE',
  statement:
    'How might we transform complex professional exam preparation into a structured, personalized and manageable learning experience?',
  details: [
    {
      title: 'Taming massive multi-section syllabuses',
      detail:
        'Accounting certifications span hundreds of topics, videos, MCQs, simulations, and dense regulatory standards. Presenting them flatly creates paralysis.',
    },
    {
      title: 'Unifying disconnected study modes',
      detail:
        'Learners constantly jump from watching lectures to searching PDF textbooks, reviewing formulas, practicing MCQs, and checking weak areas across days and weeks.',
    },
  ],
};

export const LEARNEX_OBJECTIVES = {
  sectionNumber: '04',
  eyebrow: 'DESIGN OBJECTIVES',
  heading: 'Designing disciplined clarity into every study session.',
  items: [
    {
      number: '01',
      title: 'Structured learning',
      detail: 'Break CPA-FAR and CMA parts into progressive Sections, Modules, and Lessons with visible completion benchmarks.',
    },
    {
      number: '02',
      title: 'Active recall',
      detail: 'Embed spaced-repetition flashcards and targeted MCQ/TBS practice blocks directly beside conceptual lessons.',
    },
    {
      number: '03',
      title: 'Contextual assistance',
      detail: 'Anchor Exa AI summaries, key formulas, and chapter quizzes right inside the active video and textbook context.',
    },
    {
      number: '04',
      title: 'Performance tracking',
      detail: 'Pair Exam Readiness targets (75% EDR) with MCQ/TBS diagnostic breakdowns and time-investment charts.',
    },
    {
      number: '05',
      title: 'Study consistency',
      detail: 'Maintain momentum via study streaks, suggested schedule modes (Aggressive/Balanced), and catch-up pacing alerts.',
    },
    {
      number: '06',
      title: 'Actionable revision',
      detail: 'Link every red weak-area indicator straight into curated recovery plans, filtered unit reviews, and flashcards.',
    },
  ],
};

export const LEARNEX_CYCLE = {
  sectionNumber: '05',
  eyebrow: 'LEARNING ECOSYSTEM',
  heading: 'A continuous six-stage preparation cycle.',
  steps: [
    { step: '01', title: 'Plan', detail: 'Define target exam date & weekly hour budget' },
    { step: '02', title: 'Learn', detail: 'Watch videos, listen to audio & read textbooks' },
    { step: '03', title: 'Practice', detail: 'Solve MCQs, TBS simulations & flashcard drills' },
    { step: '04', title: 'Evaluate', detail: 'Inspect testlet accuracy & time spent per unit' },
    { step: '05', title: 'Improve', detail: 'Identify sub-50% topics via Performance Intelligence' },
    { step: '06', title: 'Revise', detail: 'Execute AI-recommended weak-area catch-up plans' },
  ],
};

export const LEARNEX_DASHBOARD = {
  sectionNumber: '06',
  eyebrow: 'PERSONALIZED DASHBOARD',
  heading: 'Daily targets, time distribution, and guided momentum.',
  intro:
    'The home dashboard greets candidates with their 5-Day Streak, active CPA Prep journey cards, checkable Today’s Target Tasks with a primary "Launch Today’s Session" trigger, a 14.5-hour Study Time Breakdown ring, Suggested Plan Mode, upcoming calendar tasks, and quick AICPA Blueprint & Formula resources.',
  screens: [
    {
      title: 'Primary Study Dashboard',
      url: 'app.learnex.edu/dashboard',
      caption: 'Daily checklist, 14.5h activity breakdown ring, Suggested Plan Mode & supplementary guides.',
      src: '/images/learnex/dashboard.webp',
    },
    {
      title: 'Compact Dashboard View',
      url: 'app.learnex.edu/dashboard/compact',
      caption: 'Alternative above-the-fold layout surfacing priority tasks and milestone targets.',
      src: '/images/learnex/dashboard-1.webp',
    },
    {
      title: 'Onboard Intro Carousel',
      url: 'app.learnex.edu/welcome',
      caption: '3-screen product onboarding framing Master Accounting, Get Certified & Track Progress.',
      src: '/images/learnex/canvas.webp',
    },
  ],
};

export const LEARNEX_PREP_DASHBOARD = {
  sectionNumber: '07',
  eyebrow: 'PREPARATION DASHBOARD',
  heading: 'Organizing certification sections across every learning modality.',
  intro:
    'Inside each exam course (such as CPA-FAR), candidates switch cleanly between Video Lessons, Audio Lessons, and Course Info while monitoring Exam Readiness (42.8%), XP progression, and exact MCQ + TBS topic tallies.',
  screens: [
    {
      title: 'Prep Dashboard · Video Mode',
      url: 'app.learnex.edu/cpa-far/video',
      caption: '42.8% Readiness card, Level 5 XP bar & Section A–D topic accordion with MCQ/TBS counts.',
      src: '/images/learnex/prep-dashboard.webp',
    },
    {
      title: 'Prep Dashboard · Audio Mode',
      url: 'app.learnex.edu/cpa-far/audio',
      caption: '28% course progress paired with persistent mini audio player for commuter revision.',
      src: '/images/learnex/prep-dashboard-1.webp',
    },
    {
      title: 'Chapter Syllabus Drilldown',
      url: 'app.learnex.edu/cpa-far/chapters',
      caption: 'Focused unit hierarchy exposing completion badges and next unstarted subtopics.',
      src: '/images/learnex/prep-chapter.webp',
    },
  ],
};

export const LEARNEX_WORKSPACE = {
  sectionNumber: '08',
  eyebrow: 'LEARNING WORKSPACE',
  heading: 'Unified media, transcripts, resources, and AI in one study flow.',
  intro:
    'During active video lessons, students avoid tab-hopping through contextual tabs right below the player—jumping straight into Slides, TBS, or MCQs while consulting Notes, interactive Transcripts, AI Tutor Chat, Resources, and Playlist progress.',
  screens: [
    {
      title: 'Lesson Player + AI Tab',
      url: 'app.learnex.edu/lesson/audit-engagement',
      caption: 'ASC 606 video lecture with quick practice triggers & embedded AI Tutor comparison.',
      src: '/images/learnex/prep-ai.webp',
    },
    {
      title: 'Module Playlist & Chapters',
      url: 'app.learnex.edu/lesson/playlist',
      caption: 'Toggleable Playlist & Chapters list tracking completed vs. upcoming lessons.',
      src: '/images/learnex/prep-playlist.webp',
    },
    {
      title: 'Extended Playlist Drawer',
      url: 'app.learnex.edu/lesson/queue',
      caption: 'Full-section queue state showing pacing durations and lesson milestones.',
      src: '/images/learnex/prep-playlistt.webp',
    },
    {
      title: 'Interactive Transcripts',
      url: 'app.learnex.edu/lesson/transcript',
      caption: 'Synchronized spoken text allowing quick keyword scanning during revision.',
      src: '/images/learnex/prep-transcript.webp',
    },
    {
      title: 'Downloadable Resources',
      url: 'app.learnex.edu/lesson/resources',
      caption: 'Lesson-specific lecture slides, formula sheets, and worked examples.',
      src: '/images/learnex/prep-resource.webp',
    },
    {
      title: 'Module Progress Summary',
      url: 'app.learnex.edu/lesson/progress',
      caption: 'Granular completion breakdown across lessons and study hours.',
      src: '/images/learnex/progress.webp',
    },
  ],
};

export const LEARNEX_PRACTICE = {
  sectionNumber: '09',
  eyebrow: 'PRACTICE & ASSESSMENT',
  heading: 'Structured test modes paired with unit and testlet diagnostics.',
  intro:
    'Candidates configure Chapter-wise or Quick Practice sessions tailored by module, track accuracy trends alongside a Flashcard of the Day widget, solve realistic MCQs, and review every attempt grouped either by Syllabus Unit or Exam Testlet.',
  screens: [
    {
      title: 'Practice Tests Hub',
      url: 'app.learnex.edu/practice-tests',
      caption: 'AI weakness prompt (-15% Cost Management), Overall Accuracy ring, Practice Modes & Attempt list.',
      src: '/images/learnex/practice-tests.webp',
    },
    {
      title: 'Active Question Runner',
      url: 'app.learnex.edu/practice/question',
      caption: 'Clean exam question interface with option selection, navigation controls & timer.',
      src: '/images/learnex/question.webp',
    },
    {
      title: 'Review · View by Unit',
      url: 'app.learnex.edu/practice/review/unit',
      caption: 'Attempt #3 breakdown organized by U2 Cost Management through U6 Risk Management with QIDs.',
      src: '/images/learnex/practice-tests-review-view-by-unit.webp',
    },
    {
      title: 'Review · View by Testlet',
      url: 'app.learnex.edu/practice/review/testlet',
      caption: 'Testlet-grouped review mirroring actual CPA exam simulation structure.',
      src: '/images/learnex/practice-tests-review-view-by-testlet.webp',
    },
    {
      title: 'Testlet Filter State',
      url: 'app.learnex.edu/practice/review/testlet-filtered',
      caption: 'Filtered review narrowing down incorrect or flagged items by score range.',
      src: '/images/learnex/practice-tests-review-view-by-testlet-1.webp',
    },
    {
      title: 'Testlet Detailed Item View',
      url: 'app.learnex.edu/practice/review/testlet-detail',
      caption: 'Granular per-question status, time spent, and grade percentages.',
      src: '/images/learnex/practice-tests-review-view-by-testlet-2.webp',
    },
  ],
};

export const LEARNEX_TEXTBOOK = {
  sectionNumber: '10',
  eyebrow: 'DIGITAL TEXTBOOK',
  heading: 'Built-in study reader with annotations, TOC, bookmarks, and Ask Exa.',
  intro:
    'Reading authoritative accounting texts becomes active study when margin notes, financial balance tables, search, bookmarks, zoom controls, and an instant "Ask Exa" button live directly inside the PDF viewer.',
  screens: [
    {
      title: 'Annotated PDF Reader',
      url: 'app.learnex.edu/textbook/reader',
      caption: 'Fit Width/Page toggles, inline highlighted text, margin notes, balance tables & floating page bar.',
      src: '/images/learnex/pdf-view.webp',
    },
    {
      title: 'Alternate Zoom & Highlight State',
      url: 'app.learnex.edu/textbook/zoom',
      caption: 'Clean typography and tabular balance schedules preserved at mobile/tablet widths.',
      src: '/images/learnex/pdf-view-1.webp',
    },
    {
      title: 'Split Reader Toolbar State',
      url: 'app.learnex.edu/textbook/toolbar',
      caption: 'Quick bottom actions for View, Annotate, Bookmark, and Search.',
      src: '/images/learnex/pdf-view-2.webp',
    },
    {
      title: 'Table of Contents Drawer',
      url: 'app.learnex.edu/textbook/toc',
      caption: 'Hierarchical chapter navigation jumping seamlessly across units and lessons.',
      src: '/images/learnex/table-of-content.webp',
    },
    {
      title: 'In-Book Keyword Search',
      url: 'app.learnex.edu/textbook/search',
      caption: 'Highlighted search hits with chapter/page snippets across long PDFs.',
      src: '/images/learnex/search.webp',
    },
    {
      title: 'Saved Bookmarks',
      url: 'app.learnex.edu/textbook/bookmarks',
      caption: 'Curated index of flagged textbook pages for rapid pre-exam revision.',
      src: '/images/learnex/bookmark.webp',
    },
    {
      title: 'Personal Study Notes',
      url: 'app.learnex.edu/textbook/notes',
      caption: 'Aggregated personal annotations linked back to their originating chapters.',
      src: '/images/learnex/notes.webp',
    },
  ],
};

export const LEARNEX_AI = {
  sectionNumber: '11',
  eyebrow: 'DESIGNED FEATURE · EXA STUDY ASSISTANT',
  heading: 'Contextual AI grounded directly in the active chapter.',
  intro:
    'Exa Study Assistant was designed as an embedded study companion rather than a generic standalone chatbot. Triggered from either the digital textbook or video lesson player, the interface displays current chapter context ("Reading: Chapter 7.3 — Pension Expense Components") and offers one-tap prompts: Key Formulas, Summarize Page, and Quiz Me. (Note: presented as designed interface concepts rather than verified production metrics.)',
  screens: [
    {
      title: 'Ask Exa · Prompt Entry State',
      url: 'app.learnex.edu/exa/context',
      caption: 'Contextual reading pill + structured prompt chips: Key Formulas, Summarize Page & Quiz Me.',
      src: '/images/learnex/ask-ai.webp',
    },
    {
      title: 'Ask Exa · Conversational Breakdown',
      url: 'app.learnex.edu/exa/response',
      caption: 'Structured response UI presenting explanations, follow-up suggestions & citation prompts.',
      src: '/images/learnex/ask-ai1.webp',
    },
    {
      title: 'Embedded Video AI Tutor Tab',
      url: 'app.learnex.edu/lesson/exa-chat',
      caption: 'Bullet-point comparison (AUP vs. Full Audit) & clickable follow-up chips inside video lessons.',
      src: '/images/learnex/prep-ai.webp',
    },
  ],
};

export const LEARNEX_FLASHCARDS = {
  sectionNumber: '12',
  eyebrow: 'FLASHCARDS & ACTIVE RECALL',
  heading: 'Spaced repetition built for dense accounting rules.',
  intro:
    'The flashcard system closes memory gaps across standards and formulas—tracking Mastered, To Review, and In Queue counts across Quick Practice, Chapter-wise drills, and Full-Length simulated decks.',
  screens: [
    {
      title: 'Flashcards Dashboard',
      url: 'app.learnex.edu/flashcards',
      caption: '12 cards due today alert, Mastered/To Review/In Queue deck summary & 3 practice modes.',
      src: '/images/learnex/flashcard.webp',
    },
    {
      title: 'Module & Topic Selection',
      url: 'app.learnex.edu/flashcards/modules',
      caption: 'Targeted syllabus scoping before starting an active recall drill.',
      src: '/images/learnex/flashcards-select-module.webp',
    },
    {
      title: 'Prompt Card State',
      url: 'app.learnex.edu/flashcards/session',
      caption: 'Focused question prompt with numbered pill stepper (Q 03 / 12) and Overview sheet.',
      src: '/images/learnex/flashcards-practice.webp',
    },
    {
      title: 'Answer Reveal & Exam Tip',
      url: 'app.learnex.edu/flashcards/reveal',
      caption: 'Audio cue button, US GAAP/IFRS definition card, highlighted CMA Exam Tip & "Review Again / Got It!" buttons.',
      src: '/images/learnex/flashcards-practice-ans-reveal.webp',
    },
  ],
};

export const LEARNEX_PLANNING = {
  sectionNumber: '13',
  eyebrow: 'INTELLIGENT STUDY PLANNING',
  heading: 'Flexible schedules that adapt when life gets busy.',
  intro:
    'Candidates configure target exam dates, weekly hour budgets, and preferred study blocks, monitor progress in Monthly or Weekly calendar views, follow Daily Goal Tracking rings, and trigger automatic schedule rebalancing without losing momentum.',
  screens: [
    {
      title: 'Define Study Schedule',
      url: 'app.learnex.edu/planner/setup',
      caption: 'Initial exam target date selection, daily availability hours, and intensity mode onboarding.',
      src: '/images/learnex/define-schedule.webp',
    },
    {
      title: 'FAR Calendar Tracker',
      url: 'app.learnex.edu/planner/calendar',
      caption: 'Weekly day selector, Urgent 9:00 AM Valuation Intro focus card, timeline & Cloud Sync preview.',
      src: '/images/learnex/calendar-tracker.webp',
    },
    {
      title: 'Today’s Study Plan',
      url: 'app.learnex.edu/planner/today',
      caption: '2/4 Tasks Done circular gauge, 3.5 hrs daily goal & time-blocked Video, Break, MCQ & Flashcard cards.',
      src: '/images/learnex/todays-plan.webp',
    },
    {
      title: 'Adjust Study Plan Settings',
      url: 'app.learnex.edu/planner/adjust',
      caption: 'Reschedule Exam Date triggers, per-day Mon–Sun hour toggles & 3 Rebalance Strategy options.',
      src: '/images/learnex/adjust-study-plan.webp',
    },
  ],
};

export const LEARNEX_PERFORMANCE = {
  sectionNumber: '14',
  eyebrow: 'FLAGSHIP HIGHLIGHT · PERFORMANCE INTELLIGENCE',
  heading: 'Turning exam telemetry into clear next study decisions.',
  intro:
    'Rather than burying candidates in passive charts, the Performance Intelligence suite pairs overall Exam-Day Readiness (sample prototype view: 72% vs. 75% target) and MCQ vs. Task-Based Simulation breakdowns with ranked Weak Areas that drill straight into a 4-phase AI Remediation Plan. Note: all figures displayed in the UI mockups represent illustrative sample states designed to validate visual hierarchy, not measured production outcomes.',
  highlights: [
    {
      label: 'SIGNAL 01 · READINESS & TELEMETRY',
      title: 'Performance Analysis',
      description:
        'Connects overall Exam Readiness gauge, Study Time line graph, Weak Areas rank bars, MCQ (847) vs. TBS (64) donuts, AI score-lift comparison, and unit-by-unit EDR cards.',
      url: 'app.learnex.edu/analytics/performance',
      src: '/images/learnex/performance-analysis.webp',
    },
    {
      label: 'SIGNAL 02 · PACING ADHERENCE',
      title: 'FAR Prep Progress Overview',
      description:
        'Flags behind-schedule drift ("4.5 hours behind weekly goal") with an immediate Catch Up Plan CTA, 6-stage Module Path Milestones, and Planned vs. Actual weekly bars.',
      url: 'app.learnex.edu/analytics/prep-progress',
      src: '/images/learnex/prep-progress.webp',
    },
    {
      label: 'SIGNAL 03 · WEAK-AREA REMEDIATION',
      title: 'Government & NFP Focus Detail',
      description:
        'Zooms into a weak topic (sample 42% vs. 75% target) with a 4-phase Study Plan, Concept Mastery sub-topic bars (Fund Accounting, Budgetary Entries), trajectory chart, and Start Plan CTA.',
      url: 'app.learnex.edu/analytics/focus/gov-nfp',
      src: '/images/learnex/government-and-nfp-accounting-focus-detail.webp',
    },
  ],
};

export const LEARNEX_COMMUNITY = {
  sectionNumber: '15',
  eyebrow: 'COMMUNITY & ENGAGEMENT',
  heading: 'Peer accountability, verified course reviews, and leaderboards.',
  intro:
    'Candidates exchange Pomodoro tips and module reviews flagged with "Verified Review" badges, draft formatted posts with live previews before publishing, bookmark discussions for later, and check cohort rankings.',
  screens: [
    { title: 'Community Feed', src: '/images/learnex/community.webp' },
    { title: 'Topic Filter State', src: '/images/learnex/community-1.webp' },
    { title: 'Discussion Thread View', src: '/images/learnex/community-2.webp' },
    { title: 'Saved & Upvoted State', src: '/images/learnex/community-3.webp' },
    { title: 'Compose New Post', src: '/images/learnex/new-post.webp' },
    { title: 'Post Formatting & Tags', src: '/images/learnex/new-post-1.webp' },
    { title: 'Live Post Preview', src: '/images/learnex/preview.webp' },
    { title: 'Submit & Publish', src: '/images/learnex/submit.webp' },
    { title: 'Saved Posts Archive', src: '/images/learnex/saed-post.webp' },
    { title: 'Global Bookmark Confirm', src: '/images/learnex/save.webp' },
    { title: 'Candidate Leaderboard', src: '/images/learnex/leaderboard.webp' },
    { title: 'Candidate Profile', src: '/images/learnex/profile.webp' },
  ],
};

export const LEARNEX_SUPPORTING = {
  sectionNumber: '16',
  eyebrow: 'SUPPORTING EXPERIENCES',
  heading: 'Authentication, course management, global search, and settings.',
  intro:
    'Every utility flow—from account login and password recovery verification to cross-platform search and course enrollment management—maintains strict visual continuity with the core study workspace.',
  screens: [
    { title: 'Sign In Screen', src: '/images/learnex/login.webp' },
    { title: 'Forgot Password', src: '/images/learnex/forgot-password.webp' },
    { title: 'Password Reset', src: '/images/learnex/password-reset.webp' },
    { title: 'Account Verification', src: '/images/learnex/verfiy.webp' },
    { title: 'App Settings', src: '/images/learnex/settings.webp' },
    { title: 'Manage Courses', src: '/images/learnex/manage-course.webp' },
    { title: 'Track Management', src: '/images/learnex/manage.webp' },
    { title: 'General Preferences A', src: '/images/learnex/general.webp' },
    { title: 'General Preferences B', src: '/images/learnex/general-1.webp' },
    { title: 'Global Search Entry', src: '/images/learnex/search-2.webp' },
    { title: 'Search Results List', src: '/images/learnex/search-list.webp' },
    { title: 'Module Card Spec', src: '/images/learnex/frame-1509.webp' },
  ],
};

export const LEARNEX_DESIGN_SYSTEM = {
  sectionNumber: '17',
  eyebrow: 'DESIGN SYSTEM',
  heading: 'Financial-grade clarity powered by Navy, Amber, and Diagnostic tints.',
  intro:
    'Extracted directly from the 63 Learnex PDF screens: an authoritative Deep Navy identity anchors primary actions and readiness banners, balanced by warm Amber streaks/tips and crisp red/green diagnostic indicators.',
  colors: [
    { name: 'Authority Deep Navy', hex: '#0D1F4B', role: 'Hero cards, primary CTAs, active navigation pill & progress bars' },
    { name: 'Warm Study Canvas', hex: '#F4F5F8', role: 'Light neutral workspace background contrasting white cards' },
    { name: 'Amber Accent Gold', hex: '#E89B12', role: 'Exam readiness arcs, streaks, CMA Exam Tips & active highlight lines' },
    { name: 'Diagnostic Alert Red', hex: '#DC2626', role: 'Weak-area bars (42%), pacing alerts & incorrect answers' },
    { name: 'Mastery Emerald', hex: '#15803D', role: 'Verified reviews, passed indicators & >75% EDR targets' },
    { name: 'Elevated Card White', hex: '#FFFFFF', role: 'KPI grids, test runners, PDF viewer & community cards' },
  ],
  components: [
    {
      title: 'Typography & Financial Clarity',
      detail: 'High-contrast bold sans-serif headers paired with clean tabular metrics for testlet percentages, accounting balance sheets, and XP counters.',
    },
    {
      title: 'Floating Pill Dock & Segmented Switchers',
      detail: 'Rounded bottom dock paired with navy active pill tabs (All Posts / Playlist / Chapters / Fit Width / View by Unit vs. Testlet).',
    },
    {
      title: 'Circular Gauges & Line Charts',
      detail: 'Unified ring indicators (Readiness 42.8% / 72%, Accuracy 54.76%, Daily Tasks 2/4), weekly study curves, and MCQ vs. TBS breakdowns.',
    },
    {
      title: 'Study & Flashcard Components',
      detail: 'Reversible prompt/answer cards with numbered Q-steppers, audio triggers, and highlighted yellow/amber Exam Tip callouts.',
    },
    {
      title: 'Exa AI Panel Architecture',
      detail: 'Sparkle-badged prompt chips (Key Formulas, Summarize Page, Quiz Me), active chapter pill bar, and structured conversational bullet responses.',
    },
    {
      title: 'Diagnostic Alerts & Pacing Banners',
      detail: 'Inline red pacing alerts ("4.5 hours behind weekly goal") with action links transforming analytics immediately into schedule recovery.',
    },
  ],
};

export const LEARNEX_SHOWCASE_GROUPS = [
  { id: 'all', label: 'All Modules (62)' },
  { id: 'dashboards', label: 'Dashboards & Prep' },
  { id: 'workspace', label: 'Workspace & Textbook' },
  { id: 'practice', label: 'Practice & Flashcards' },
  { id: 'planning', label: 'Planning & Analytics' },
  { id: 'community', label: 'Community & System' },
];

export const LEARNEX_ALL_SHOWCASE = [
  { group: 'dashboards', title: 'Personalized Study Dashboard', src: '/images/learnex/dashboard.webp' },
  { group: 'dashboards', title: 'Compact Study Dashboard', src: '/images/learnex/dashboard-1.webp' },
  { group: 'dashboards', title: 'Certification Prep Dashboard (Video)', src: '/images/learnex/prep-dashboard.webp' },
  { group: 'dashboards', title: 'Certification Prep Dashboard (Audio)', src: '/images/learnex/prep-dashboard-1.webp' },
  { group: 'dashboards', title: 'Section Chapter Drilldown', src: '/images/learnex/prep-chapter.webp' },
  { group: 'dashboards', title: '3-Step Value Onboarding Canvas', src: '/images/learnex/canvas.webp' },

  { group: 'workspace', title: 'Lesson Video Player + Exa AI Chat', src: '/images/learnex/prep-ai.webp' },
  { group: 'workspace', title: 'Lesson Module Playlist', src: '/images/learnex/prep-playlist.webp' },
  { group: 'workspace', title: 'Extended Playlist View', src: '/images/learnex/prep-playlistt.webp' },
  { group: 'workspace', title: 'Synchronized Lecture Transcript', src: '/images/learnex/prep-transcript.webp' },
  { group: 'workspace', title: 'Downloadable Lesson Resources', src: '/images/learnex/prep-resource.webp' },
  { group: 'workspace', title: 'Module Progress Tracker', src: '/images/learnex/progress.webp' },
  { group: 'workspace', title: 'Digital Textbook Reader (Annotated)', src: '/images/learnex/pdf-view.webp' },
  { group: 'workspace', title: 'Digital Textbook (Zoom View)', src: '/images/learnex/pdf-view-1.webp' },
  { group: 'workspace', title: 'Digital Textbook Toolbar', src: '/images/learnex/pdf-view-2.webp' },
  { group: 'workspace', title: 'Textbook Table of Contents', src: '/images/learnex/table-of-content.webp' },
  { group: 'workspace', title: 'Textbook Keyword Search', src: '/images/learnex/search.webp' },
  { group: 'workspace', title: 'Textbook Bookmarks', src: '/images/learnex/bookmark.webp' },
  { group: 'workspace', title: 'Textbook Marginalia & Notes', src: '/images/learnex/notes.webp' },
  { group: 'workspace', title: 'Ask Exa Contextual Prompt', src: '/images/learnex/ask-ai.webp' },
  { group: 'workspace', title: 'Ask Exa Concept Breakdown', src: '/images/learnex/ask-ai1.webp' },

  { group: 'practice', title: 'My Practice Tests Hub', src: '/images/learnex/practice-tests.webp' },
  { group: 'practice', title: 'Active Exam Question Runner', src: '/images/learnex/question.webp' },
  { group: 'practice', title: 'Practice Review · By Unit', src: '/images/learnex/practice-tests-review-view-by-unit.webp' },
  { group: 'practice', title: 'Practice Review · By Testlet', src: '/images/learnex/practice-tests-review-view-by-testlet.webp' },
  { group: 'practice', title: 'Testlet Filter Drawer', src: '/images/learnex/practice-tests-review-view-by-testlet-1.webp' },
  { group: 'practice', title: 'Testlet Detailed Breakdown', src: '/images/learnex/practice-tests-review-view-by-testlet-2.webp' },
  { group: 'practice', title: 'Flashcards Spaced Repetition Hub', src: '/images/learnex/flashcard.webp' },
  { group: 'practice', title: 'Flashcards Module Selector', src: '/images/learnex/flashcards-select-module.webp' },
  { group: 'practice', title: 'Flashcards Prompt Mode', src: '/images/learnex/flashcards-practice.webp' },
  { group: 'practice', title: 'Flashcards Answer Reveal & Tip', src: '/images/learnex/flashcards-practice-ans-reveal.webp' },

  { group: 'planning', title: 'FAR Calendar Tracker', src: '/images/learnex/calendar-tracker.webp' },
  { group: 'planning', title: 'Define Exam Study Schedule', src: '/images/learnex/define-schedule.webp' },
  { group: 'planning', title: 'Today’s Study Plan Checklist', src: '/images/learnex/todays-plan.webp' },
  { group: 'planning', title: 'Adjust Study Plan & Rebalance', src: '/images/learnex/adjust-study-plan.webp' },
  { group: 'planning', title: 'Performance Analysis Flagship', src: '/images/learnex/performance-analysis.webp' },
  { group: 'planning', title: 'FAR Prep Progress & Pacing', src: '/images/learnex/prep-progress.webp' },
  { group: 'planning', title: 'Gov & NFP Focus Remediation Detail', src: '/images/learnex/government-and-nfp-accounting-focus-detail.webp' },

  { group: 'community', title: 'Community Discussions Feed', src: '/images/learnex/community.webp' },
  { group: 'community', title: 'Community Filter State', src: '/images/learnex/community-1.webp' },
  { group: 'community', title: 'Community Thread Detail', src: '/images/learnex/community-2.webp' },
  { group: 'community', title: 'Community Saved View', src: '/images/learnex/community-3.webp' },
  { group: 'community', title: 'Compose New Post', src: '/images/learnex/new-post.webp' },
  { group: 'community', title: 'Post Formatting Modal', src: '/images/learnex/new-post-1.webp' },
  { group: 'community', title: 'Post Publish Preview', src: '/images/learnex/preview.webp' },
  { group: 'community', title: 'Post Submitted State', src: '/images/learnex/submit.webp' },
  { group: 'community', title: 'Saved Posts Library', src: '/images/learnex/saed-post.webp' },
  { group: 'community', title: 'Bookmark Saved Action', src: '/images/learnex/save.webp' },
  { group: 'community', title: 'Certification Leaderboard', src: '/images/learnex/leaderboard.webp' },
  { group: 'community', title: 'Candidate Profile Overview', src: '/images/learnex/profile.webp' },
  { group: 'community', title: 'Candidate Sign In', src: '/images/learnex/login.webp' },
  { group: 'community', title: 'Forgot Password Flow', src: '/images/learnex/forgot-password.webp' },
  { group: 'community', title: 'Password Reset Flow', src: '/images/learnex/password-reset.webp' },
  { group: 'community', title: 'Verification Screen', src: '/images/learnex/verfiy.webp' },
  { group: 'community', title: 'Workspace Settings', src: '/images/learnex/settings.webp' },
  { group: 'community', title: 'Manage Enrolled Courses', src: '/images/learnex/manage-course.webp' },
  { group: 'community', title: 'Certification Track Manager', src: '/images/learnex/manage.webp' },
  { group: 'community', title: 'General Account Preferences A', src: '/images/learnex/general.webp' },
  { group: 'community', title: 'General Account Preferences B', src: '/images/learnex/general-1.webp' },
  { group: 'community', title: 'Global Search Input State', src: '/images/learnex/search-2.webp' },
  { group: 'community', title: 'Global Search Results List', src: '/images/learnex/search-list.webp' },
  { group: 'community', title: 'Course Card Module Spec', src: '/images/learnex/frame-1509.webp' },
];

export const LEARNEX_OUTCOME = {
  sectionNumber: '19',
  eyebrow: 'OUTCOME & LEARNINGS',
  heading: 'Designing analytical depth into an approachable daily study habit.',
  summary:
    'Spanning 63 design artifacts across curriculum navigation, digital reading, Exa AI assistance, spaced-repetition flashcards, dynamic study planning, and diagnostic telemetry, Learnex demonstrates how specialized EdTech UX turns overwhelming exam blueprints into actionable daily progress.',
  learnings: [
    {
      title: 'Architecting Deep EdTech Systems',
      detail:
        'Organizing multi-format preparation (video, audio, PDF, MCQ, TBS, flashcards) under a predictable Plan -> Learn -> Practice -> Evaluate -> Improve -> Revise cycle prevents tool fragmentation.',
    },
    {
      title: 'Analytics Built for Decisions, Not Vanity',
      detail:
        'Pairing high-level Exam-Day Readiness scores directly with ranked weak topics and one-click AI remediation plans ensures candidates know immediately what to study next.',
    },
    {
      title: 'Flexible Study Planning for Working Adults',
      detail:
        'Allowing candidates to toggle per-day study hours and choose how missed hours rebalance respects real-world schedules rather than punishing breaks.',
    },
    {
      title: 'Contextualizing AI Inside Study Materials',
      detail:
        'Anchoring Exa AI inside specific chapters and lecture concepts with structured prompt starters makes AI assistance immediately useful without replacing active recall.',
    },
    {
      title: 'Cohesive Design Grammar Across 63 Screens',
      detail:
        'Consistent deep navy CTAs, amber achievement cues, tabular metrics, and uniform card padding unify complex exam screens with community and account utilities.',
    },
  ],
};

