export const ACADLY_NAV_SECTIONS = [
  { id: 'acadly-overview', label: 'Overview' },
  { id: 'acadly-challenge', label: 'Challenge' },
  { id: 'acadly-journey', label: 'Journey' },
  { id: 'acadly-dashboard', label: 'Dashboard' },
  { id: 'acadly-courses', label: 'Courses' },
  { id: 'acadly-assessment', label: 'Assessment' },
  { id: 'acadly-system', label: 'Design System' },
  { id: 'acadly-showcase', label: 'Showcase' },
  { id: 'acadly-outcome', label: 'Outcome' },
];

export const ACADLY_HERO = {
  eyebrow: 'FEATURED CASE STUDY / MOBILE EDTECH LMS',
  title: 'Acadly.',
  headline: 'Learning without limits.',
  description:
    'Acadly is a mobile learning management platform designed to bring the complete student experience into one accessible application—connecting courses, live classes, recorded lessons, assessments, assignments, peer communities, achievements, and student services.',
  metadata: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Category', value: 'Mobile EdTech / Learning Management System' },
    { label: 'Platform', value: 'Mobile Application (iOS & Android)' },
    { label: 'Design Scope', value: '43 Mobile Application Screens' },
  ],
  phones: [
    {
      role: 'back-left',
      src: '/images/acadly/splash-phone-1.webp',
      alt: 'Acadly splash onboarding screen — Your Learning Journey, Redefined',
      caption: 'Onboarding Introduction',
    },
    {
      role: 'center-main',
      src: '/images/acadly/exsisting-student-dashboard.webp',
      alt: 'Acadly existing student dashboard with course progress and live class schedule',
      caption: 'Existing Student Dashboard',
    },
    {
      role: 'back-right',
      src: '/images/acadly/splash-phone-4.webp',
      alt: 'Acadly welcome entry screen — Your Future Starts Here',
      caption: 'Guided Account Entry',
    },
  ],
};

export const ACADLY_OVERVIEW = {
  sectionNumber: '02',
  eyebrow: 'PRODUCT OVERVIEW',
  heading: 'A complete student ecosystem in one pocket workspace.',
  intro:
    'Students preparing for demanding professional certifications often juggle video portals, messaging groups, PDF drives, test portals, and support emails. Acadly consolidates that entire academic lifecycle inside a calm mobile experience built around continuity and low friction.',
  pillars: [
    {
      number: '01',
      title: 'First-Time & Active Learners',
      summary:
        'Adapts automatically from zero-state course discovery for new enrollees to high-signal Resume Learning widgets and upcoming live session cards for active students.',
    },
    {
      number: '02',
      title: 'Structured Content & Live Classes',
      summary:
        'Organizes syllabus categories, HD video lessons with playback speed and completion toggles, downloadable recordings, and upcoming instructor sessions.',
    },
    {
      number: '03',
      title: 'Practice, Peer Support & Services',
      summary:
        'Unifies timed module tests, step-by-step question review, assignment uploads, mentor Q&A, direct chats, leaderboards, and transparent billing/support tools.',
    },
  ],
};

export const ACADLY_CHALLENGE = {
  sectionNumber: '03',
  eyebrow: 'DESIGN CHALLENGE',
  statement:
    'How might we make a comprehensive learning platform feel simple, engaging and accessible on a mobile device?',
  points: [
    {
      title: 'Packing enterprise LMS breadth onto a compact screen',
      detail:
        'Acadly spans video lectures, live streams, 30-question timed tests, assignment uploads, community threads, and billing records. Without strict hierarchy, mobile screens quickly turn into cluttered nested menus.',
    },
    {
      title: 'Maintaining momentum across multi-step academic tasks',
      detail:
        'Tests, assignment submissions, and course modules require multi-stage progress tracking so a student interrupted on mobile knows exact timer states, saved responses, and deadlines at a glance.',
    },
  ],
};

export const ACADLY_OBJECTIVES = {
  sectionNumber: '04',
  eyebrow: 'DESIGN OBJECTIVES',
  heading: 'Six principles shaping mobile clarity.',
  items: [
    {
      number: '01',
      title: 'Mobile accessibility',
      detail:
        'Thumb-reachable bottom dock navigation across Home, Courses, Classes, Practice, and Support paired with clean scannable cards.',
    },
    {
      number: '02',
      title: 'Intuitive navigation',
      detail:
        'Keep daily study routes in a 5-tab bar while moving secondary account, certificates, downloads, and billing into a structured slide-out drawer.',
    },
    {
      number: '03',
      title: 'Student engagement',
      detail:
        'Combine approachable 3D illustrations, streak/leaderboard milestones, and celebratory completion states without overwhelming serious study flows.',
    },
    {
      number: '04',
      title: 'Assessment continuity',
      detail:
        'Preserve automatic answer saving, test instructions clarity, flagged-question tracking, and post-test topic insights on small screens.',
    },
    {
      number: '05',
      title: 'Collaboration & mentorship',
      detail:
        'Connect structured syllabus Q&A, direct instructor messaging, and peer community discussions directly around active courses.',
    },
    {
      number: '06',
      title: 'Transparent self-service',
      detail:
        'Empower students to inspect plans, download invoices, track refund requests, access offline downloads, and raise support tickets inside the app.',
    },
  ],
};

export const ACADLY_JOURNEY = {
  sectionNumber: '05',
  eyebrow: 'STUDENT JOURNEY',
  heading: 'An end-to-end connected learning loop.',
  steps: [
    { step: '01', title: 'Onboarding', detail: 'Splash intro, OTP signup & goal orientation' },
    { step: '02', title: 'Dashboard', detail: 'Adaptive home hub & Continue Learning CTA' },
    { step: '03', title: 'Learning', detail: 'Syllabus tree, HD video & live/recorded classes' },
    { step: '04', title: 'Practice', detail: 'Topic drills, instructions & timed module tests' },
    { step: '05', title: 'Evaluation', detail: 'Instant score breakdown & question review' },
    { step: '06', title: 'Engagement', detail: 'Q&A, direct mentor messages & community' },
    { step: '07', title: 'Achievement', detail: 'Leaderboard rank, calendar & certificates' },
  ],
};

export const ACADLY_ONBOARDING = {
  sectionNumber: '06',
  eyebrow: 'ONBOARDING EXPERIENCE',
  heading: 'Welcoming clarity from the first tap.',
  intro:
    'A soft mint backdrop, warm character-led 3D illustrations, and calm step-by-step account verification lower entry anxiety for new students before introducing full course workflows.',
  highlights: [
    '3-slide value story covering self-paced courses, live sessions, and achievement tracking',
    'Focused account setup with real-time password strength criteria & 6-digit email verification',
    'Celebratory "You’re All Set!" confirmation bridging cleanly to "Explore learning"',
  ],
  phones: [
    {
      src: '/images/acadly/splash-phone-1.webp',
      title: '01 · Value Intro',
      caption: 'Your Learning Journey, Redefined — illustration-first introduction',
    },
    {
      src: '/images/acadly/splash-phone-2.webp',
      title: '02 · Live & Recorded',
      caption: 'Learn Anytime, Anywhere — communicating live classes & flex pacing',
    },
    {
      src: '/images/acadly/splash-phone-3.webp',
      title: '03 · Milestones',
      caption: 'Track Progress & Achieve More — previewing certificates & rankings',
    },
    {
      src: '/images/acadly/splash-phone-4.webp',
      title: '04 · Guided Entry',
      caption: 'Your Future Starts Here — clear Get Started vs. existing login paths',
    },
  ],
  sheetOverview: {
    src: '/images/acadly/onboarding-screen.webp',
    alt: 'Acadly full 8-screen account creation, OTP verification, login and password reset flow',
    caption: 'Complete 8-screen Signup, OTP Mail Verification & Password Recovery Flow',
  },
};

export const ACADLY_DASHBOARD = {
  sectionNumber: '07',
  eyebrow: 'PERSONALIZED DASHBOARD',
  heading: 'Designed for day-one discovery and daily return.',
  intro:
    'Comparing the first-time and returning student home states alongside the slide-out navigation drawer illustrates how Acadly tailors actions to student readiness without changing spatial structure.',
  comparisons: [
    {
      tag: 'NEW STUDENT STATE',
      title: 'Onboarding-Ready Empty Hub',
      summary:
        'Guides new students to explore courses, displays 0% progress clearly, swaps empty lists for helpful prompts, and surfaces an AI Tutor card to prevent dead ends.',
      src: '/images/acadly/new-student-dashboard.webp',
      alt: 'Acadly new student mobile dashboard before course enrollment',
    },
    {
      tag: 'EXISTING STUDENT STATE',
      title: 'Active Progress & Resume Command',
      summary:
        'Elevates a "Continue Learning" card for US CMA Part 1 (68% completed), shows 2 pending assignments, scheduled live classes with countdown, and active course progress bars.',
      src: '/images/acadly/exsisting-student-dashboard.webp',
      alt: 'Acadly returning student mobile dashboard with active progress and live class card',
    },
    {
      tag: 'UTILITY NAVIGATION',
      title: 'Hamburger Account & Services Drawer',
      summary:
        'Tucks Leaderboard, Achievements, Calendar, Downloads, Subscriptions, Invoices, Refunds, and Support neatly into an uncluttered slide-out menu.',
      src: '/images/acadly/hamburger-menu.webp',
      alt: 'Acadly mobile hamburger navigation drawer',
    },
  ],
};

export const ACADLY_COURSES = {
  sectionNumber: '08',
  eyebrow: 'COURSES & CLASSES',
  heading: 'Seamless flow across curriculum, video, and live sessions.',
  intro:
    'Whether browsing new certifications, resuming Module 03: Performance Management, joining an upcoming live session, or filtering recorded replays, the UI keeps progress indicators and doubt resolution one tap away.',
  screens: [
    {
      tag: 'Discovery Drawer',
      title: 'Categories Filter',
      caption: 'Slide-in certification & subject filters keeping course browsing focused.',
      src: '/images/acadly/categoriessidebar.webp',
    },
    {
      tag: 'Course Catalog',
      title: 'Enrolled Courses',
      caption: 'Card-based library highlighting active course completion and next lessons.',
      src: '/images/acadly/enrolled-courses.webp',
    },
    {
      tag: 'Syllabus Tree',
      title: 'Course Details',
      caption: 'Collapsible module accordions with done/current/locked states & Notes/Doubts tabs.',
      src: '/images/acadly/course-details.webp',
    },
    {
      tag: 'Playback Workspace',
      title: 'HD Video Player',
      caption: '1.25x speed, captions, lesson progress bar, playlist queue & Ask Doubt trigger.',
      src: '/images/acadly/video-player.webp',
    },
    {
      tag: 'Real-Time Sessions',
      title: 'Live Classes',
      caption: 'Upcoming instructor-led sessions with schedule countdowns and direct Join CTAs.',
      src: '/images/acadly/live-classes.webp',
    },
    {
      tag: 'On-Demand Archive',
      title: 'Recorded Classes',
      caption: 'Searchable archive of past class recordings organized by topic and mentor.',
      src: '/images/acadly/recorded-classes.webp',
    },
  ],
};

export const ACADLY_ASSESSMENT = {
  sectionNumber: '09',
  eyebrow: 'FLAGSHIP HIGHLIGHT · ASSESSMENT EXPERIENCE',
  heading: 'A structured 7-stage testing & review journey.',
  intro:
    'High-stakes exam preparation requires calm clarity under time constraints. The Acadly assessment journey removes distractions inside timed tests while turning completed attempts into diagnostic insights.',
  steps: [
    {
      step: '01',
      title: 'Practice Hub',
      uxNote: 'Aggregates Tests Done (08), Pending Tasks, Avg. Score (78%), drill modes, and upcoming tests.',
      src: '/images/acadly/practice.webp',
    },
    {
      step: '02',
      title: 'Test List',
      uxNote: 'Scannable module assessments showing question counts, duration, and completion badges.',
      src: '/images/acadly/test-list.webp',
    },
    {
      step: '03',
      title: 'Test Instructions',
      uxNote: 'Pre-flight overview grid (30 Questions, 45 Mins, Marking Scheme) with explicit rules checkbox.',
      src: '/images/acadly/test-instruction.webp',
    },
    {
      step: '04',
      title: 'Active Test Interface',
      uxNote: 'Distraction-free single-choice view with live 42:15 timer, "Saved" indicator & Mark for Review.',
      src: '/images/acadly/test.webp',
    },
    {
      step: '05',
      title: 'Pre-Submit Check',
      uxNote: 'Transparent attempt summary confirming answered vs. unanswered counts before final lock-in.',
      src: '/images/acadly/test-submition.webp',
    },
    {
      step: '06',
      title: 'Test Result Analytics',
      uxNote: '24/30 (80% Passed) hero summary, topic-wise breakdown, time analysis & weakest-topic nudge.',
      src: '/images/acadly/test-result.webp',
    },
    {
      step: '07',
      title: 'Question Review',
      uxNote: 'Filterable All/Correct/Incorrect/Unanswered walkthrough with reference diagrams & explanations.',
      src: '/images/acadly/question-review.webp',
    },
  ],
};

export const ACADLY_ASSIGNMENTS = {
  sectionNumber: '10',
  eyebrow: 'ASSIGNMENT MANAGEMENT',
  heading: 'Clear deadlines, structured submissions, and receipt tracking.',
  intro:
    'Students monitor pending, submitted, and overdue coursework inside an overview header, review full assignment briefs, upload files confidently, and revisit evaluated submission details.',
  screens: [
    {
      title: 'My Assignments List',
      caption: 'Filterable All/Pending/Submitted/Overdue queue with highlighted "Due Soon" alert card.',
      src: '/images/acadly/assignment.webp',
    },
    {
      title: 'Assignment Details',
      caption: 'Structured prompt requirements, grading rubric criteria, and due date badge.',
      src: '/images/acadly/assignment-details.webp',
    },
    {
      title: 'Upload & Compose',
      caption: 'File attachment dropzone and student notes editor prior to submission.',
      src: '/images/acadly/submit-assignment.webp',
    },
    {
      title: 'Submission Confirmation',
      caption: 'Validated attachment state before finalizing submission to the instructor.',
      src: '/images/acadly/submit-assignment-1.webp',
    },
    {
      title: 'Submitted Details',
      caption: 'Timestamped submission status, uploaded files preview, and instructor review state.',
      src: '/images/acadly/submit-details.webp',
    },
  ],
};

export const ACADLY_COMMUNICATION = {
  sectionNumber: '11',
  eyebrow: 'COMMUNICATION & COMMUNITY',
  heading: 'Closing the loop between peers and instructors.',
  intro:
    'Rather than pushing students to external chat apps, Acadly embeds structured course Q&A, direct instructor conversations, and peer discussion boards directly inside the learning environment.',
  screens: [
    {
      title: 'Course Q&A',
      caption: 'Lesson-linked doubt threads surfacing instructor answers alongside topic tags.',
      src: '/images/acadly/qa.webp',
    },
    {
      title: 'Direct Messaging · Inbox',
      caption: 'Real-time 1-on-1 message list connecting students with mentors and cohort peers.',
      src: '/images/acadly/direct-message.webp',
    },
    {
      title: 'Direct Messaging · Thread',
      caption: 'Clean conversational thread with shared study references and quick reply bar.',
      src: '/images/acadly/direct-message-1.webp',
    },
    {
      title: 'Student Community Feed',
      caption: 'Peer study discussions, tips, and cohort updates organized by category filters.',
      src: '/images/acadly/community.webp',
    },
    {
      title: 'Community Post Details',
      caption: 'Focused long-form discussion view with nested peer replies and reactions.',
      src: '/images/acadly/community-post-details.webp',
    },
  ],
};

export const ACADLY_GAMIFICATION = {
  sectionNumber: '12',
  eyebrow: 'GAMIFICATION & PROGRESS',
  heading: 'Sustaining motivation through visible milestones.',
  intro:
    'Thoughtful motivational mechanics reinforce steady habits—highlighting batch rank progression, scheduled study consistency across weeks, and verifiable earned credentials.',
  screens: [
    {
      title: 'Batch Leaderboard',
      caption: 'Current Rank #12 card (45 pts to Rank #11), Top-3 Hall of Fame & Find Me shortcut.',
      src: '/images/acadly/leaderboard.webp',
    },
    {
      title: 'Learning Calendar',
      caption: 'Monthly & daily schedule visibility uniting live classes, tests, and revision sessions.',
      src: '/images/acadly/learning-calendar.webp',
    },
    {
      title: 'Certificates & Achievements',
      caption: 'Earned/In-progress course certificates with download actions and unlocked achievement badges.',
      src: '/images/acadly/certification.webp',
    },
  ],
};

export const ACADLY_SELF_SERVICE = {
  sectionNumber: '13',
  eyebrow: 'STUDENT SELF-SERVICE',
  heading: 'Account, support, and billing autonomy built right in.',
  intro:
    'Comprehensive student portals depend on dependable utility flows. All 12 account, security, notification, offline download, helpdesk, and payment screens follow the same clean mobile card grammar.',
  groups: [
    { id: 'all', label: 'All Services (12)' },
    { id: 'account', label: 'Account & Alerts' },
    { id: 'support', label: 'Help & Tickets' },
    { id: 'billing', label: 'Plans, Invoices & Downloads' },
  ],
  items: [
    { group: 'account', title: 'Student Profile', src: '/images/acadly/profile.webp' },
    { group: 'account', title: 'Edit Profile', src: '/images/acadly/edit-profile.webp' },
    { group: 'account', title: 'Password Security', src: '/images/acadly/reset-password.webp' },
    { group: 'account', title: 'Update Password Flow', src: '/images/acadly/reset-password-1.webp' },
    { group: 'account', title: 'Notifications Center', src: '/images/acadly/notification.webp' },
    { group: 'support', title: 'Help Center', src: '/images/acadly/help-center.webp' },
    { group: 'support', title: 'Contact Support', src: '/images/acadly/contact-support.webp' },
    { group: 'support', title: 'Submit New Request', src: '/images/acadly/new-request.webp' },
    { group: 'billing', title: 'Subscription Plans', src: '/images/acadly/subscription-plans.webp' },
    { group: 'billing', title: 'Orders & Invoices', src: '/images/acadly/orders-and-invoices.webp' },
    { group: 'billing', title: 'Refund Requests', src: '/images/acadly/refund-requests.webp' },
    { group: 'billing', title: 'My Downloads', src: '/images/acadly/my-downloads.webp' },
  ],
};

export const ACADLY_DESIGN_SYSTEM = {
  sectionNumber: '14',
  eyebrow: 'DESIGN SYSTEM',
  heading: 'Extracted visual language across all 43 screens.',
  intro:
    'Acadly pairs a calm off-white canvas with a trustworthy deep teal primary palette and semantic pastel category fills—balancing academic seriousness with friendly onboarding warmth.',
  colors: [
    { name: 'Deep Teal Primary', hex: '#0B3B40', role: 'Primary buttons, active bottom pill & headers' },
    { name: 'App Canvas Surface', hex: '#F7FAFA', role: 'Clean light screen backdrop reducing eye strain' },
    { name: 'Mint Soft Surface', hex: '#D7F5EA', role: 'Courses shortcut, Passed pills & rank summary cards' },
    { name: 'Warm Peach Tint', hex: '#FEF1E2', role: 'Live Classes cards, Pending pills & leaderboard accents' },
    { name: 'Soft Lavender Tint', hex: '#F0EBFE', role: 'Assignments module & unanswered question counters' },
    { name: 'Cool Sky Tint', hex: '#E6F4FE', role: 'Tests module, learning focus insights & download tiles' },
  ],
  components: [
    {
      title: 'Typography & Scannable Metrics',
      detail: 'Clean sans-serif headings with tabular metric numbers (78% Avg. Score, 68% Completion, 42:15 Timer) for instant mobile glanceability.',
    },
    {
      title: 'Buttons, Pills & Form Controls',
      detail: 'Rounded full-width deep teal primary CTAs paired with crisp hairline secondary outlines, 6-box OTP inputs, and password validation checklists.',
    },
    {
      title: 'Cards & Progress Indicators',
      detail: 'Uniform elevated white cards with linear bars (course/topic mastery) and circular SVG rings (overall progress & test breakdown).',
    },
    {
      title: '3D Character & Learning Illustrations',
      detail: 'Friendly pastel-teal student illustrations during onboarding, empty dashboard states, and "Account Created!" confirmations.',
    },
    {
      title: 'Assessment UI Components',
      detail: 'Numbered question navigator chips, radio-option selection highlights, Mark for Review toggles, and color-coded Answer Explanation callouts.',
    },
    {
      title: 'Bottom Tab & Drawer Architecture',
      detail: '5-icon bottom dock (Home, Courses, Classes, Practice, Support) complemented by an uncluttered top-left Hamburger Drawer.',
    },
  ],
};

export const ACADLY_FINAL_GROUPS = [
  { id: 'all', label: 'All Screens' },
  { id: 'onboarding', label: 'Onboarding & Home' },
  { id: 'learning', label: 'Courses & Classes' },
  { id: 'assessment', label: 'Tests & Assignments' },
  { id: 'community', label: 'Community & Progress' },
  { id: 'services', label: 'Profile & Self-Service' },
];

export const ACADLY_ALL_SCREENS = [
  { group: 'onboarding', title: 'Splash Slides (5-Screen Showcase)', src: '/images/acadly/splash-screen.webp' },
  { group: 'onboarding', title: 'Signup, Verify & Reset Flow (8 Screens)', src: '/images/acadly/onboarding-screen.webp' },
  { group: 'onboarding', title: 'New Student Dashboard', src: '/images/acadly/new-student-dashboard.webp' },
  { group: 'onboarding', title: 'Existing Student Dashboard', src: '/images/acadly/exsisting-student-dashboard.webp' },
  { group: 'onboarding', title: 'Hamburger Navigation Drawer', src: '/images/acadly/hamburger-menu.webp' },
  { group: 'learning', title: 'Categories Filter Drawer', src: '/images/acadly/categoriessidebar.webp' },
  { group: 'learning', title: 'Enrolled Courses', src: '/images/acadly/enrolled-courses.webp' },
  { group: 'learning', title: 'Course Details & Modules', src: '/images/acadly/course-details.webp' },
  { group: 'learning', title: 'Video Lesson Player', src: '/images/acadly/video-player.webp' },
  { group: 'learning', title: 'Live Classes Schedule', src: '/images/acadly/live-classes.webp' },
  { group: 'learning', title: 'Recorded Classes Archive', src: '/images/acadly/recorded-classes.webp' },
  { group: 'assessment', title: 'Practice & Assessments Hub', src: '/images/acadly/practice.webp' },
  { group: 'assessment', title: 'Module Test List', src: '/images/acadly/test-list.webp' },
  { group: 'assessment', title: 'Test Instructions', src: '/images/acadly/test-instruction.webp' },
  { group: 'assessment', title: 'Live Test Screen', src: '/images/acadly/test.webp' },
  { group: 'assessment', title: 'Test Submission Review', src: '/images/acadly/test-submition.webp' },
  { group: 'assessment', title: 'Test Result Analysis', src: '/images/acadly/test-result.webp' },
  { group: 'assessment', title: 'Question-by-Question Review', src: '/images/acadly/question-review.webp' },
  { group: 'assessment', title: 'Assignments List', src: '/images/acadly/assignment.webp' },
  { group: 'assessment', title: 'Assignment Brief & Details', src: '/images/acadly/assignment-details.webp' },
  { group: 'assessment', title: 'Submit Assignment', src: '/images/acadly/submit-assignment.webp' },
  { group: 'assessment', title: 'Assignment File Confirmation', src: '/images/acadly/submit-assignment-1.webp' },
  { group: 'assessment', title: 'Submission Receipt Details', src: '/images/acadly/submit-details.webp' },
  { group: 'community', title: 'Course Q&A Threads', src: '/images/acadly/qa.webp' },
  { group: 'community', title: 'Direct Messages Inbox', src: '/images/acadly/direct-message.webp' },
  { group: 'community', title: 'Direct Chat Conversation', src: '/images/acadly/direct-message-1.webp' },
  { group: 'community', title: 'Student Community Feed', src: '/images/acadly/community.webp' },
  { group: 'community', title: 'Community Post Thread', src: '/images/acadly/community-post-details.webp' },
  { group: 'community', title: 'Batch Leaderboard', src: '/images/acadly/leaderboard.webp' },
  { group: 'community', title: 'Learning Calendar', src: '/images/acadly/learning-calendar.webp' },
  { group: 'community', title: 'Certificates & Achievements', src: '/images/acadly/certification.webp' },
  { group: 'services', title: 'Profile Overview', src: '/images/acadly/profile.webp' },
  { group: 'services', title: 'Edit Profile', src: '/images/acadly/edit-profile.webp' },
  { group: 'services', title: 'Reset Password', src: '/images/acadly/reset-password.webp' },
  { group: 'services', title: 'Reset Password Verification', src: '/images/acadly/reset-password-1.webp' },
  { group: 'services', title: 'Notifications Center', src: '/images/acadly/notification.webp' },
  { group: 'services', title: 'Help Center', src: '/images/acadly/help-center.webp' },
  { group: 'services', title: 'Contact Support', src: '/images/acadly/contact-support.webp' },
  { group: 'services', title: 'New Support Request', src: '/images/acadly/new-request.webp' },
  { group: 'services', title: 'Subscription Plans', src: '/images/acadly/subscription-plans.webp' },
  { group: 'services', title: 'Orders & Invoices', src: '/images/acadly/orders-and-invoices.webp' },
  { group: 'services', title: 'Refund Requests', src: '/images/acadly/refund-requests.webp' },
  { group: 'services', title: 'Offline Downloads', src: '/images/acadly/my-downloads.webp' },
];

export const ACADLY_OUTCOME = {
  sectionNumber: '16',
  eyebrow: 'OUTCOME & LEARNINGS',
  heading: 'Designing breadth without sacrificing mobile ease.',
  summary:
    'Designing Acadly across all 43 mobile screens reinforced how systematic visual tokens, adaptive empty states, and progressive task flows make an expansive EdTech ecosystem approachable on small viewports.',
  learnings: [
    {
      title: 'Mobile-First Information Hierarchy',
      detail:
        'Splitting primary study flows across 5 bottom tabs while isolating account administration inside the slide-out menu preserves clean spatial focus on active lessons.',
    },
    {
      title: 'Designing State Continuity Across Student Journeys',
      detail:
        'Supporting both first-time zero-state learners and returning students mid-course ensures neither cohort meets confusing placeholders or buried resume actions.',
    },
    {
      title: 'Low-Friction Mobile Assessment Flows',
      detail:
        'Clear pre-test rules, visible auto-save indicators, confirmation checkpoints, and scannable question-review filters help reduce test anxiety on smaller screens.',
    },
    {
      title: 'Reusable Cards & Visual Restraint',
      detail:
        'Semantic pastel fills, uniform pill badges, and predictable action rows let students recognize statuses instantly across assignments, certificates, and billing screens.',
    },
    {
      title: 'Unified Services Build Trust',
      detail:
        'Treating notifications, offline downloads, invoices, and support requests with the same design rigor as video playback makes the entire student ecosystem cohesive.',
    },
  ],
};

