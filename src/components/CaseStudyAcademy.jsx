import React, { useEffect } from 'react';
import './CaseStudy.css';
import {
  ArrowLeft,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export default function CaseStudyAcademy({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="case-study-page case-academy-theme">
      {/* ================= STICKY TOP NAV BAR ================= */}
      <header className="case-nav-sticky">
        <div className="case-nav-inner">
          <div className="case-nav-left">
            <button className="case-back-btn" onClick={onBack} aria-label="Back to Portfolio">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <div className="case-breadcrumb">
              <span>Portfolio</span>
              <span className="sep">/</span>
              <span>Projects</span>
              <span className="sep">/</span>
              <span className="current">ACADEMY website</span>
            </div>
          </div>

          <div className="case-nav-links">
            <a href="#overview" className="case-nav-pill">Overview</a>
            <a href="#problem" className="case-nav-pill">Problem</a>
            <a href="#process" className="case-nav-pill">Process</a>
            <a href="#strategy" className="case-nav-pill">Strategy</a>
            <a href="#features" className="case-nav-pill">Features</a>
            <a href="#personas" className="case-nav-pill">Personas</a>
            <a href="#testing" className="case-nav-pill">Testing</a>
          </div>

          <div className="case-nav-right">
            <button className="case-nav-action-btn" onClick={onBack}>
              <span>Explore Projects</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="case-wrap" id="overview" style={{ paddingTop: 40 }}>
        <div className="case-hero-eyebrow-dark" style={{ background: '#4a0e17' }}>
          UX/UI Case study | Course website | 2026
        </div>

        <h1 className="case-hero-title-link" style={{ color: '#4a0e17' }}>ACADEMY</h1>
        <h2 className="case-hero-subtitle-link" style={{ color: '#4a0e17' }}>website</h2>

        <p className="case-hero-desc" style={{ color: '#44403c' }}>
          A career-course website that builds trust fast, shows the next batch, and turns visitors into counselling enquiries with one short form.
        </p>

        <div className="case-hero-role-bar" style={{ color: '#78716c' }}>
          <span><b>Role:</b> Researcher + UX/UI Designer</span>
          <span>•</span>
          <span><b>Scope:</b> Website</span>
          <span>•</span>
          <span><b>Tools:</b> Figma | Framer</span>
        </div>

        {/* 3 Pastel Stat Badges (Matching PDF) */}
        <div className="link-pill-group">
          <div className="link-pill yellow">
            <div className="pill-title">4.6 / 5</div>
            <div className="pill-desc">Google review</div>
          </div>
          <div className="link-pill blue" style={{ background: '#ffe4e6', borderColor: '#fecdd3', color: '#9f1239' }}>
            <div className="pill-title">4.9 / 5</div>
            <div className="pill-desc">Alumni rating</div>
          </div>
          <div className="link-pill purple">
            <div className="pill-title">24k+</div>
            <div className="pill-desc">Skilled learners</div>
          </div>
        </div>

        {/* ================= HERO WEBSITE MOCKUP SHOWCASE ================= */}
        <div
          style={{
            background: '#121214',
            borderRadius: 16,
            border: '1px solid #e7e5e4',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(74, 14, 23, 0.1)',
            marginBottom: 48,
            color: '#ffffff'
          }}
        >
          {/* Top Live Demo Banner */}
          <div
            style={{
              background: '#b91c1c',
              color: '#ffffff',
              padding: '10px 20px',
              textAlign: 'center',
              fontSize: '0.84rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap'
            }}
          >
            <span style={{ background: '#ffffff', color: '#b91c1c', padding: '2px 8px', borderRadius: 4, fontSize: '0.74rem' }}>
              Book a live demo session
            </span>
            <span>Next Batch Starts: September 17, 2026</span>
          </div>

          {/* Hero Content Mockup */}
          <div
            style={{
              padding: '36px 32px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 32,
              background: 'radial-gradient(ellipse at top left, #2a151b 0%, #121214 70%)'
            }}
          >
            {/* Left Hero */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.08)', padding: '5px 12px', borderRadius: 999, fontSize: '0.78rem', marginBottom: 16, color: '#fca5a5' }}>
                <GraduationCap size={14} /> Elite Career Mentorship
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.2, marginBottom: 14 }}>
                We Shape Your Finance Career with <span style={{ color: '#ef4444' }}>Expert Mentorship</span>
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#a8a29e', lineHeight: 1.6, marginBottom: 24 }}>
                Master financial analysis, equity research, and investment banking with industry leaders.
              </p>

              <button
                style={{
                  background: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 26px',
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                  cursor: 'pointer'
                }}
              >
                <span>BOOK FREE COUNSELLING</span>
              </button>

              {/* Social Proof Row */}
              <div style={{ display: 'flex', gap: 16, marginTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 18 }}>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>⭐ 4.6</div>
                  <div style={{ fontSize: '0.7rem', color: '#a8a29e' }}>Google rating</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>⭐ 4.9</div>
                  <div style={{ fontSize: '0.7rem', color: '#a8a29e' }}>Alumni rating</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>👥 24k+</div>
                  <div style={{ fontSize: '0.7rem', color: '#a8a29e' }}>Skilled learners</div>
                </div>
              </div>
            </div>

            {/* Right Lead Form Card */}
            <div
              style={{
                background: '#ffffff',
                color: '#1c1917',
                padding: '24px 22px',
                borderRadius: 14,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1c1917', margin: '0 0 6px 0' }}>
                Start your Finance Journey
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#78716c', margin: 0 }}>
                Get personalized course recommendations and scholarship details.
              </p>

              <input
                type="text"
                placeholder="Full Name *"
                readOnly
                style={{ padding: '8px 12px', border: '1px solid #d6d3d1', borderRadius: 6, fontSize: '0.8rem', outline: 'none' }}
              />
              <input
                type="email"
                placeholder="Email Address *"
                readOnly
                style={{ padding: '8px 12px', border: '1px solid #d6d3d1', borderRadius: 6, fontSize: '0.8rem', outline: 'none' }}
              />
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ padding: '8px 10px', background: '#f5f5f4', border: '1px solid #d6d3d1', borderRadius: 6, fontSize: '0.8rem', color: '#57534e' }}>+91</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  readOnly
                  style={{ flex: 1, padding: '8px 12px', border: '1px solid #d6d3d1', borderRadius: 6, fontSize: '0.8rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: 14, fontSize: '0.76rem', color: '#44403c', margin: '2px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <input type="radio" name="prof" defaultChecked readOnly /> Student
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <input type="radio" name="prof" readOnly /> Working Professional
                </label>
              </div>

              <input
                type="text"
                placeholder="City (e.g. Mumbai, Bengaluru)"
                readOnly
                style={{ padding: '8px 12px', border: '1px solid #d6d3d1', borderRadius: 6, fontSize: '0.8rem', outline: 'none' }}
              />

              <button
                style={{
                  background: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px',
                  borderRadius: 6,
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  marginTop: 4,
                  cursor: 'pointer'
                }}
              >
                Get Your Personalised Study Plan
              </button>
            </div>
          </div>

          {/* Trust Strip */}
          <div
            style={{
              background: '#ffffff',
              color: '#1c1917',
              padding: '16px 24px',
              borderTop: '1px solid #e7e5e4',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
              fontSize: '0.82rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Award size={16} color="#dc2626" />
              <div><b>Globally Accredited</b><br /><span style={{ fontSize: '0.72rem', color: '#78716c' }}>Recognized certifications</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <TrendingUp size={16} color="#dc2626" />
              <div><b>Career Opportunities</b><br /><span style={{ fontSize: '0.72rem', color: '#78716c' }}>300+ hiring partners</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <BookOpen size={16} color="#dc2626" />
              <div><b>Intensive Curriculum</b><br /><span style={{ fontSize: '0.72rem', color: '#78716c' }}>Hands-on case studies</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Users size={16} color="#dc2626" />
              <div><b>Top 1% Faculty</b><br /><span style={{ fontSize: '0.72rem', color: '#78716c' }}>Wall St & Big 4 mentors</span></div>
            </div>
          </div>
        </div>

        {/* ================= 1. WHAT IS THIS PROJECT? ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>What is this project?</span>
          </div>
          <p className="case-sub-text">
            A website for a career academy offering finance and tech courses. It introduces the programs,
            proves credibility with ratings and accreditation, shows when the next batch starts, and gives
            visitors a quick way to book a free counselling call.
          </p>
        </div>

        {/* ================= 2. PROBLEM STATEMENT ================= */}
        <div className="case-section-block" id="problem">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Problem statement</span>
          </div>
          <p className="case-sub-text">
            A problem statement is a concise description of an issue that needs to be addressed. Here,
            visitors are unsure whether to trust a course and find enquiry forms long.
          </p>

          <div className="case-split-grid">
            <div className="pdf-card-problem">
              <h3>Problem</h3>
              <ul>
                <li>Unsure if the course is trusted</li>
                <li>Long, confusing enquiry forms</li>
                <li>Next batch date hard to find</li>
                <li>Unclear which course fits me</li>
              </ul>
            </div>

            <div className="pdf-card-solution" style={{ background: '#fef9c3', borderColor: '#fef08a' }}>
              <h3 style={{ color: '#854d0e' }}>Solution</h3>
              <ul style={{ color: '#713f12' }}>
                <li>Ratings and accreditation up front</li>
                <li>Short form, personal study plan</li>
                <li>Batch date banner on every page</li>
                <li>Profession and city questions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= 3. DESIGN PROCESS ================= */}
        <div className="case-section-block" id="process">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Design process</span>
          </div>
          <p className="case-sub-text">
            A five-step human-centred process, from research to testing, from first research to final validation.
          </p>

          <div className="pdf-process-row">
            <div className="pdf-process-step step1">
              <div className="pdf-step-title">Step 1 Empathize</div>
              <div className="pdf-step-list">
                <span>• Survey</span>
                <span>• Interview</span>
                <span>• Persona</span>
                <span>• Empathy map</span>
                <span>• Journey map</span>
              </div>
            </div>

            <div className="pdf-process-step step2">
              <div className="pdf-step-title">Step 2 Define</div>
              <div className="pdf-step-list">
                <span>• User stories</span>
                <span>• Hypothesis</span>
                <span>• Problem statement</span>
              </div>
            </div>

            <div className="pdf-process-step step3">
              <div className="pdf-step-title">Step 3 Ideate</div>
              <div className="pdf-step-list">
                <span>• Information architecture</span>
                <span>• Brainstorming</span>
                <span>• Card sorting</span>
                <span>• User flow</span>
              </div>
            </div>

            <div className="pdf-process-step step4">
              <div className="pdf-step-title">Step 4 Design</div>
              <div className="pdf-step-list">
                <span>• High-fidelity UI</span>
                <span>• Design system</span>
                <span>• Interactive prototype</span>
                <span>• Handoff</span>
              </div>
            </div>

            <div className="pdf-process-step step5">
              <div className="pdf-step-title">Step 5 Testing</div>
              <div className="pdf-step-list">
                <span>• Usability testing</span>
                <span>• User feedback</span>
                <span>• Final validation</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 4. DESIGN STRATEGY ================= */}
        <div className="case-section-block" id="strategy">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Design strategy</span>
          </div>
          <p className="case-sub-text">
            Design strategy bridges business objectives with user needs to drive better experiences and long-term goals.
          </p>

          <div className="pdf-strategy-grid">
            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>General tasks</h4>
              <p>Browse courses, check ratings, book a live demo, fill the enquiry form, request free counselling, sign in.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>Target audience</h4>
              <p>Students and working professionals, aged 18 to 40, who want a finance or tech career.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>Technology constraints</h4>
              <p>Mobile-first browsing, short forms on small screens, fast loading on slower networks.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>Critical success factor</h4>
              <p>More completed enquiries and counselling bookings.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>Executive intent</h4>
              <p>More enrolments, stronger brand trust and steady growth of each batch.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>Cross channel</h4>
              <p>Website, counselling calls, SMS and email follow-ups.</p>
            </div>
          </div>
        </div>

        {/* ================= 5. WEBSITE FEATURES ================= */}
        <div className="case-section-block" id="features">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Website features</span>
          </div>
          <p className="case-sub-text">
            Every part of the first screen has one job: build trust, show the date, and start the enquiry.
          </p>

          <div className="pdf-modules-grid">
            <div className="pdf-module-card">
              <h4>Live demo banner</h4>
              <p>Book Now button with the next batch date</p>
            </div>
            <div className="pdf-module-card">
              <h4>Hero headline</h4>
              <p>Clear promise and a Book free counselling button</p>
            </div>
            <div className="pdf-module-card">
              <h4>Social proof</h4>
              <p>Google rating, alumni rating, learner count</p>
            </div>
            <div className="pdf-module-card">
              <h4>Lead form</h4>
              <p>Short card with a personalised study plan button</p>
            </div>
            <div className="pdf-module-card">
              <h4>Courses menu</h4>
              <p>Dropdown in the top bar</p>
            </div>
            <div className="pdf-module-card">
              <h4>Sign In</h4>
              <p>Always visible at top right</p>
            </div>
            <div className="pdf-module-card">
              <h4>Free counselling CTA</h4>
              <p>Red button under the headline</p>
            </div>
            <div className="pdf-module-card">
              <h4>Trust strip</h4>
              <p>Accredited, career roles, curriculum, top faculty</p>
            </div>
          </div>
        </div>

        {/* ================= 6. COMPETITIVE ANALYSIS ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Competitive analysis</span>
          </div>
          <p className="case-sub-text">
            Competitor analysis evaluates existing tools to understand strengths, weaknesses and gaps.
          </p>

          <div className="pdf-table-frame">
            <table className="pdf-table">
              <thead>
                <tr>
                  <th>UX dimension</th>
                  <th>Typical course sites</th>
                  <th>Marketplace sites</th>
                  <th className="highlight-col">This website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Clear value proposition</b></td>
                  <td>Generic</td>
                  <td>Crowded</td>
                  <td className="highlight-col">One headline, one CTA</td>
                </tr>
                <tr>
                  <td><b>Lead capture</b></td>
                  <td>Long forms</td>
                  <td>Sign-up wall</td>
                  <td className="highlight-col">Short form, study plan</td>
                </tr>
                <tr>
                  <td><b>Trust signals</b></td>
                  <td>Few</td>
                  <td>Reviews only</td>
                  <td className="highlight-col">Ratings, learners, faculty</td>
                </tr>
                <tr>
                  <td><b>Next batch info</b></td>
                  <td>Hidden</td>
                  <td>Not shown</td>
                  <td className="highlight-col">Banner at the top</td>
                </tr>
                <tr>
                  <td><b>Demo or counselling</b></td>
                  <td>Contact page</td>
                  <td>None</td>
                  <td className="highlight-col">Book Now + free call</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= 7. QUANTITATIVE ANALYSIS ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Quantitative analysis</span>
          </div>
          <p className="case-sub-text">
            Quantitative analysis measures behaviour with numbers: task time, click rates and conversion. Replace these sample figures with your real data.
          </p>

          <div className="pdf-metrics-grid">
            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Find a course</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">100s</span>
                  <div className="pdf-bar-shape before" style={{ height: '80px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">30s</span>
                  <div className="pdf-bar-shape after" style={{ height: '26px', background: '#dc2626' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>

            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Fill the form</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">90s</span>
                  <div className="pdf-bar-shape before" style={{ height: '72px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">25s</span>
                  <div className="pdf-bar-shape after" style={{ height: '22px', background: '#dc2626' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>

            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Book a demo</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">120s</span>
                  <div className="pdf-bar-shape before" style={{ height: '85px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">45s</span>
                  <div className="pdf-bar-shape after" style={{ height: '34px', background: '#dc2626' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>

            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Read benefits</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">70s</span>
                  <div className="pdf-bar-shape before" style={{ height: '58px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">35s</span>
                  <div className="pdf-bar-shape after" style={{ height: '28px', background: '#dc2626' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 8. USER PERSONAS ================= */}
        <div className="case-section-block" id="personas">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>User personas</span>
          </div>
          <p className="case-sub-text">
            Three real-world users shape every decision.
          </p>

          <div className="pdf-personas-grid">
            <div className="pdf-persona-card yellow">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#4a0e17' }}>A</div>
                <div>
                  <div className="pdf-persona-name">Ananya</div>
                  <div className="pdf-persona-role">Final-year student</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Wants a finance career after graduation. Compares courses online and needs proof that a program is trusted.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Find the right course</li>
                  <li>See real ratings</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card blue">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#0284c7' }}>R</div>
                <div>
                  <div className="pdf-persona-name">Rohit</div>
                  <div className="pdf-persona-role">Working professional</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Wants to switch into tech or finance while working. Has little time and dislikes long forms.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Quick enquiry</li>
                  <li>Flexible batch details</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card lavender">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#6d28d9' }}>M</div>
                <div>
                  <div className="pdf-persona-name">Mrs. Devi</div>
                  <div className="pdf-persona-role">Parent</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Helps her child choose a course. Looks for accreditation, faculty and a clear next step.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Check credibility</li>
                  <li>Talk to a counsellor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 9. EMPATHY MAPPING ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Empathy mapping</span>
          </div>
          <p className="case-sub-text">
            An empathy map synthesises what a user says, thinks, does and feels. Shown for Ananya, the final-year student.
          </p>

          <div className="pdf-empathy-grid">
            <div className="pdf-empathy-box says">
              <div className="pdf-empathy-title">Says</div>
              <p className="pdf-empathy-text">
                "Is this course really recognised?"<br />
                "When does the next batch start?"
              </p>
            </div>

            <div className="pdf-empathy-box thinks">
              <div className="pdf-empathy-title">Thinks</div>
              <p className="pdf-empathy-text">
                Will this help me get a job?<br />
                I hope the form is quick.
              </p>
            </div>

            <div className="pdf-empathy-box does">
              <div className="pdf-empathy-title">Does</div>
              <p className="pdf-empathy-text">
                Scans ratings, opens the courses menu, compares programs, fills the form.
              </p>
            </div>

            <div className="pdf-empathy-box feels">
              <div className="pdf-empathy-title">Feels</div>
              <p className="pdf-empathy-text">
                Reassured by reviews and numbers, anxious about wasting money.
              </p>
            </div>
          </div>
        </div>

        {/* ================= 10. JOURNEY MAP ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Journey map</span>
          </div>
          <p className="case-sub-text">
            A journey map follows the steps, thoughts and emotions of a user working toward a goal.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="pdf-journey-table">
              <thead>
                <tr>
                  <th style={{ width: 120 }}>Stage</th>
                  <th>Discover</th>
                  <th>Explore</th>
                  <th>Trust</th>
                  <th>Enquire</th>
                  <th>Enrol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-dim">Action</td>
                  <td>Lands on the website</td>
                  <td>Opens the courses menu</td>
                  <td>Checks ratings and benefits</td>
                  <td>Fills the short form</td>
                  <td>Joins counselling and batch</td>
                </tr>
                <tr>
                  <td className="row-dim pain-text">Pain point</td>
                  <td className="pain-text">Unsure what the site offers</td>
                  <td className="pain-text">Too many options</td>
                  <td className="pain-text">Doubts about credibility</td>
                  <td className="pain-text">Long forms put me off</td>
                  <td className="pain-text">Waiting for a reply</td>
                </tr>
                <tr>
                  <td className="row-dim opp-text">Opportunity</td>
                  <td className="opp-text">Clear headline and CTA</td>
                  <td className="opp-text">Simple courses dropdown</td>
                  <td className="opp-text">Ratings and trust strip</td>
                  <td className="opp-text">Four fields and a study plan</td>
                  <td className="opp-text">Quick counselling follow-up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= 11. USER FLOW ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>User flow</span>
          </div>
          <p className="case-sub-text">
            A user flow maps the path a user takes to complete a task.
          </p>

          <div className="pdf-flow-wrapper">
            <span className="pdf-flow-pill yellow">Land on site</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Read headline</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Check ratings</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Open Courses</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Fill the form</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Get study plan</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Book counselling</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Join the batch</span>
          </div>
        </div>

        {/* ================= 12. INFORMATION ARCHITECTURE ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Information architecture</span>
          </div>
          <p className="case-sub-text">
            IA organises and labels content so information is easy to find.
          </p>

          <div className="pdf-strategy-grid">
            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fef08a' }}>
              <h4>Navigation</h4>
              <p>• Courses menu<br />• Sign In<br />• Demo banner</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#e0f2fe', borderColor: '#bae6fd' }}>
              <h4>Hero & Form</h4>
              <p>• Headline & CTA<br />• Ratings & Learner count<br />• Short lead form</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ede9fe', borderColor: '#ddd6fe' }}>
              <h4>Trust strip</h4>
              <p>• Accredited<br />• Career roles<br />• Curriculum<br />• Top faculty</p>
            </div>
          </div>
        </div>

        {/* ================= 13. USABILITY TESTING ================= */}
        <div className="case-section-block" id="testing">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Usability testing</span>
          </div>
          <p className="case-sub-text">
            Usability testing observes real users completing tasks to find pain points. Replace with your real results.
          </p>

          <div className="pdf-validation-grid">
            <div className="pdf-val-box before">
              <h4>BEFORE</h4>
              <p>Visitors scrolled to find how to enquire and could not see the next batch date.</p>
            </div>
            <div className="pdf-val-box after" style={{ background: '#fef9c3', borderColor: '#fef08a' }}>
              <h4 style={{ color: '#854d0e' }}>AFTER</h4>
              <p>The banner, hero button and short form made enquiry a one-step action.</p>
            </div>
          </div>
        </div>

        {/* ================= 14. THANK YOU FOOTER CARD ================= */}
        <div className="pdf-thank-card">
          <div className="pdf-thank-title">Thank you</div>
          <a href="mailto:kowshikanathan@gmail.com" className="pdf-thank-email" style={{ color: '#fecdd3' }}>
            kowshikanathan@gmail.com
          </a>
          <div className="pdf-thank-btn-row">
            <button className="pdf-return-home-btn" onClick={onBack}>
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Return Button */}
      <button className="case-floating-return" style={{ background: '#4a0e17' }} onClick={onBack} aria-label="Back to Portfolio">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </button>
    </div>
  );
}
