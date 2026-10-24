import React, { useEffect } from 'react';
import './CaseStudy.css';
import {
  ArrowLeft,
  Search,
  RefreshCw,
  Plus,
  Layout,
  Users,
  Receipt,
  CreditCard,
  DollarSign,
  Zap,
  Clock,
  FileCheck,
  ShieldCheck
} from 'lucide-react';

export default function CaseStudyFeeManagement({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="case-study-page case-fee-theme">
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
              <span className="current">DODO finance</span>
            </div>
          </div>

          <div className="case-nav-links">
            <a href="#overview" className="case-nav-pill">Overview</a>
            <a href="#problem" className="case-nav-pill">Problem</a>
            <a href="#process" className="case-nav-pill">Process</a>
            <a href="#strategy" className="case-nav-pill">Strategy</a>
            <a href="#features" className="case-nav-pill">Features</a>
            <a href="#personas" className="case-nav-pill">Personas</a>
            <a href="#frontend" className="case-nav-pill">Frontend</a>
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
        <div className="case-hero-eyebrow-dark" style={{ background: '#064e3b' }}>
          UX/UI Case study | Web app & dashboard | 2026
        </div>

        <h1 className="case-hero-title-link" style={{ color: '#064e3b' }}>DODO</h1>
        <h2 className="case-hero-subtitle-link" style={{ color: '#064e3b' }}>finance</h2>

        <p className="case-hero-desc" style={{ color: '#2d4a3e' }}>
          A fee management and payments platform that helps institutions collect fees, track instalments and reconcile
          settlements from one clean console.
        </p>

        <div className="case-hero-role-bar" style={{ color: '#4b6358' }}>
          <span><b>Role:</b> UX/UI Designer • Frontend Developer</span>
          <span>•</span>
          <span><b>Design:</b> Figma | Framer</span>
          <span>•</span>
          <span><b>Code:</b> React | VS Code | GitHub</span>
        </div>

        {/* 3 Pastel KPI Pills: Net Payable, Collected, Outstanding (Matching PDF) */}
        <div className="fee-kpi-group">
          <div className="fee-kpi-pill mint">
            <div className="kpi-label">Net payable</div>
            <div className="kpi-num">₹1,00,000</div>
          </div>
          <div className="fee-kpi-pill coral">
            <div className="kpi-label">Collected</div>
            <div className="kpi-num">₹65,000</div>
          </div>
          <div className="fee-kpi-pill lavender">
            <div className="kpi-label">Outstanding</div>
            <div className="kpi-num">₹35,000</div>
          </div>
        </div>

        {/* ================= HERO INTERACTIVE CONSOLE PREVIEW ================= */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: '1px solid #a7f3d0',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(6, 78, 59, 0.08)',
            marginBottom: 48
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#e6f7ef',
              borderBottom: '1px solid #d1fae5',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }}></span>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#065f46' }}>
              Dodo Finance Console — Collections Overview
            </span>
            <span style={{ fontSize: '0.74rem', background: '#c6f5e2', padding: '2px 8px', borderRadius: 4, color: '#065f46', fontWeight: 600 }}>
              Live System
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 460 }}>
            {/* Sidebar */}
            <aside style={{ background: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '18px 14px' }}>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: '#064e3b', marginBottom: 20, paddingLeft: 6 }}>
                Dodo Finance
              </div>

              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 6 }}>
                Main Menu
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', background: '#dcf7eb', color: '#065f46', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Layout size={14} /> Dashboard
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Users size={14} /> Students
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Receipt size={14} /> Installments
                </div>
              </div>

              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 6 }}>
                Operations
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CreditCard size={14} /> Payments
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <DollarSign size={14} /> Settlements
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Zap size={14} /> Flex / eNACH
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Clock size={14} /> Overdue
                </div>
              </div>

              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 6 }}>
                Management
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FileCheck size={14} /> Reports
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShieldCheck size={14} /> Settings
                </div>
              </div>
            </aside>

            {/* Main Console View */}
            <main style={{ padding: 24, background: '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 8, padding: '7px 14px', width: 280 }}>
                  <Search size={14} color="#64748b" />
                  <input
                    type="text"
                    placeholder="Search student or UTR..."
                    readOnly
                    style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.82rem', width: '100%', color: '#0f172a' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    style={{
                      background: '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 700,
                      padding: '8px 16px',
                      borderRadius: 8,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      cursor: 'pointer'
                    }}
                  >
                    <Plus size={14} />
                    <span>New Student</span>
                  </button>
                  <button style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 8, padding: '8px 12px', color: '#475569', cursor: 'pointer' }}>
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>

              {/* 4 Summary Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 18 }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Total students</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>3</div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600 }}>+2.5% this month</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Net payable</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7', margin: '4px 0' }}>₹1,00,000</div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600 }}>+2.5% this month</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Amount collected</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981', margin: '4px 0' }}>₹65,000</div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600 }}>+2.5% this month</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Outstanding</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f43f5e', margin: '4px 0' }}>₹35,000</div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600 }}>+2.5% this month</div>
                </div>
              </div>

              {/* 8 Operational Tiles Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Collection rate</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#10b981' }}>65.0%</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Target 80%</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Due today</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>₹0.00</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>0 due now</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Upcoming, 7 days</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>₹0.00</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>This week</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Overdue</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f43f5e' }}>₹0.00</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Past due date</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Active eNACH</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0284c7' }}>1</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Auto debits</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Failed attempts</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>0</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>To follow up</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Pending settle</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>0</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>To bank</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Reconciliation</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>₹0.00</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Queue review</div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* ================= 1. WHAT IS DODO FINANCE? ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>What is Dodo Finance?</span>
          </div>
          <p className="case-sub-text">
            Dodo Finance is an institution console for fee management. Staff enrol students, set fee structures, collect instalments, run eNACH auto-debits, follow settlements and review reconciliation, so owners always know what is collected and what is pending.
          </p>
        </div>

        {/* ================= 2. PROBLEM STATEMENT ================= */}
        <div className="case-section-block" id="problem">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Problem statement</span>
          </div>
          <p className="case-sub-text">
            A problem statement is a concise description of an issue that needs to be addressed. Here, fee collection is slow, scattered and hard to trust.
          </p>

          <div className="case-split-grid">
            <div className="pdf-card-problem">
              <h3>Problem</h3>
              <ul>
                <li>Scattered fee records</li>
                <li>Unclear who is due or overdue</li>
                <li>Failed debits found too late</li>
                <li>Slow manual reconciliation</li>
              </ul>
            </div>

            <div className="pdf-card-solution mint">
              <h3>Solution</h3>
              <ul>
                <li>One collections dashboard</li>
                <li>Due today and next 7 day views</li>
                <li>Failed debit and overdue alerts</li>
                <li>Reconciliation review queue</li>
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
            A five-step human-centred process, from research to testing, with design and development done together.
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
                <span>• Wireframes</span>
              </div>
            </div>

            <div className="pdf-process-step step4">
              <div className="pdf-step-title">Step 4 Design + build</div>
              <div className="pdf-step-list">
                <span>• High-fidelity UI</span>
                <span>• Design system</span>
                <span>• Interactive screens</span>
                <span>• Frontend code</span>
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
            <div className="pdf-strategy-card">
              <h4>General tasks</h4>
              <p>Add a student, set fee structure, create instalments, collect payment, set up eNACH, check settlements, review overdue, export reports, run bulk actions.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Target audience</h4>
              <p>Institution owners, administrators and accountants. Secondary: parents and students who pay fees.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Technology constraints</h4>
              <p>Desktop browser first, responsive for payers on mobile, internet and bank gateway availability.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Critical success factor</h4>
              <p>Higher collection rate with less manual follow-up.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Executive intent</h4>
              <p>Faster collections, lower admin effort, trusted numbers, room to scale to more institutions.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Cross channel</h4>
              <p>Admin console, parent payment page, auto-debit and reports.</p>
            </div>
          </div>
        </div>

        {/* ================= 5. DASHBOARD FEATURES ================= */}
        <div className="case-section-block" id="features">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Dashboard features</span>
          </div>
          <p className="case-sub-text">
            The home screen answers three questions: how much is collected, what is pending, and what needs action today.
          </p>

          <div className="pdf-modules-grid">
            <div className="pdf-module-card">
              <h4>Collection rate</h4>
              <p>Percentage collected, links to reports</p>
            </div>
            <div className="pdf-module-card">
              <h4>Due today</h4>
              <p>Instalments due now</p>
            </div>
            <div className="pdf-module-card">
              <h4>Upcoming, next 7 days</h4>
              <p>What is coming this week</p>
            </div>
            <div className="pdf-module-card">
              <h4>Overdue</h4>
              <p>Instalments past due</p>
            </div>
            <div className="pdf-module-card">
              <h4>Active eNACH mandates</h4>
              <p>Auto-debits currently running</p>
            </div>
            <div className="pdf-module-card">
              <h4>Failed debit attempts</h4>
              <p>Debits that need follow-up</p>
            </div>
            <div className="pdf-module-card">
              <h4>Pending settlements</h4>
              <p>Money not yet settled to bank</p>
            </div>
            <div className="pdf-module-card">
              <h4>Reconciliation to review</h4>
              <p>Items needing a manual match</p>
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
                  <th>Spreadsheets</th>
                  <th>Accounting tools</th>
                  <th className="highlight-col">Dodo Finance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Live collection overview</b></td>
                  <td>None</td>
                  <td>Limited</td>
                  <td className="highlight-col">4 cards + 8 tiles</td>
                </tr>
                <tr>
                  <td><b>Instalment tracking</b></td>
                  <td>Manual</td>
                  <td>Basic</td>
                  <td className="highlight-col">Due, upcoming, overdue</td>
                </tr>
                <tr>
                  <td><b>eNACH visibility</b></td>
                  <td>None</td>
                  <td>Rare</td>
                  <td className="highlight-col">Mandates + failed debits</td>
                </tr>
                <tr>
                  <td><b>Settlement and reconcile</b></td>
                  <td>Manual</td>
                  <td>Partial</td>
                  <td className="highlight-col">Pending + review queue</td>
                </tr>
                <tr>
                  <td><b>Learning curve</b></td>
                  <td>Low</td>
                  <td>High</td>
                  <td className="highlight-col">Low, one sidebar</td>
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
              <div className="pdf-metric-title">Find overdue student</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">100s</span>
                  <div className="pdf-bar-shape before" style={{ height: '80px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">30s</span>
                  <div className="pdf-bar-shape after" style={{ height: '26px' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>

            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Check failed debit</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">90s</span>
                  <div className="pdf-bar-shape before" style={{ height: '72px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">25s</span>
                  <div className="pdf-bar-shape after" style={{ height: '22px' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>

            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Match settlement</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">120s</span>
                  <div className="pdf-bar-shape before" style={{ height: '85px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">45s</span>
                  <div className="pdf-bar-shape after" style={{ height: '34px' }}></div>
                </div>
              </div>
              <div className="pdf-bars-legend">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>

            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Add student</div>
              <div className="pdf-bars">
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">70s</span>
                  <div className="pdf-bar-shape before" style={{ height: '58px' }}></div>
                </div>
                <div className="pdf-bar-col">
                  <span className="pdf-bar-val">35s</span>
                  <div className="pdf-bar-shape after" style={{ height: '28px' }}></div>
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
                <div className="pdf-persona-avatar" style={{ background: '#064e3b' }}>K</div>
                <div>
                  <div className="pdf-persona-name">Kavitha</div>
                  <div className="pdf-persona-role">Institution owner</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Runs an academy with several batches. Wants to know in seconds how much is collected and pending without opening spreadsheets.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>See collections at a glance</li>
                  <li>Spot overdue accounts</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card mint">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#047857' }}>S</div>
                <div>
                  <div className="pdf-persona-name">Suresh</div>
                  <div className="pdf-persona-role">Accountant</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Handles daily payments and bank statements. Needs to match settlements to students quickly and catch failed debits.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Reconcile with less checking</li>
                  <li>Fewer repeated entries</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card lavender">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#6d28d9' }}>P</div>
                <div>
                  <div className="pdf-persona-name">Priya</div>
                  <div className="pdf-persona-role">Parent</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Pays her child's fees in instalments. Wants the amount, due date and an easy way to pay.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Pay on time</li>
                  <li>Clear receipts</li>
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
            An empathy map synthesises what a user says, thinks, does and feels. Shown for Kavitha, the owner.
          </p>

          <div className="pdf-empathy-grid">
            <div className="pdf-empathy-box says">
              <div className="pdf-empathy-title">Says</div>
              <p className="pdf-empathy-text">
                "Who has not paid this month?"<br />
                "Did the debit go through?"
              </p>
            </div>

            <div className="pdf-empathy-box thinks" style={{ background: '#dcf7eb', borderColor: '#a7f3d0' }}>
              <div className="pdf-empathy-title">Thinks</div>
              <p className="pdf-empathy-text">
                Are these numbers current?<br />
                I hope I miss no overdue student.
              </p>
            </div>

            <div className="pdf-empathy-box does">
              <div className="pdf-empathy-title">Does</div>
              <p className="pdf-empathy-text">
                Checks the dashboard first, filters overdue, exports reports.
              </p>
            </div>

            <div className="pdf-empathy-box feels">
              <div className="pdf-empathy-title">Feels</div>
              <p className="pdf-empathy-text">
                Confident when totals are clear, stressed by manual reconciliation.
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
                  <th>Set up</th>
                  <th>Collect</th>
                  <th>Monitor</th>
                  <th>Resolve</th>
                  <th>Reconcile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-dim">Action</td>
                  <td>Add students and fee structures</td>
                  <td>Send instalments, take payments</td>
                  <td>Check collected vs outstanding</td>
                  <td>Handle failed debits and overdue</td>
                  <td>Match settlements</td>
                </tr>
                <tr>
                  <td className="row-dim pain-text">Pain point</td>
                  <td className="pain-text">Repeated data entry</td>
                  <td className="pain-text">Missed due dates</td>
                  <td className="pain-text">Numbers scattered</td>
                  <td className="pain-text">Found too late</td>
                  <td className="pain-text">Slow and manual</td>
                </tr>
                <tr>
                  <td className="row-dim opp-text">Opportunity</td>
                  <td className="opp-text">New Student, Bulk Actions</td>
                  <td className="opp-text">Due today tiles</td>
                  <td className="opp-text">Summary cards with trend</td>
                  <td className="opp-text">Tiles with direct links</td>
                  <td className="opp-text">Reconciliation queue</td>
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
            <span className="pdf-flow-pill mint">Sign in</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">MFA check</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill mint">Dashboard</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Review cards</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Overdue or failed</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill mint">Take action</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Settlements</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill mint">Reports</span>
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
            <div className="pdf-strategy-card" style={{ background: '#d1fae5', borderColor: '#a7f3d0' }}>
              <h4>Main menu</h4>
              <p>• Dashboard<br />• Students<br />• Installments</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#e0f2fe', borderColor: '#bae6fd' }}>
              <h4>Operations</h4>
              <p>• Payments<br />• Settlements<br />• Flex / eNACH<br />• Cashflow<br />• Overdue</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ede9fe', borderColor: '#ddd6fe' }}>
              <h4>Management & Top bar</h4>
              <p>• Reports<br />• Bulk Actions<br />• Search + voice<br />• Language, Settings, MFA</p>
            </div>
          </div>
        </div>

        {/* ================= 13. WIREFRAMES AND UI SCREENS ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Wireframes and UI screens</span>
          </div>
          <p className="case-sub-text">
            Low-fidelity wireframes set the structure, high-fidelity screens in Figma set the look, and Framer tested the interactions.
          </p>

          <div className="pdf-wireframes-grid">
            <div className="pdf-wireframe-box yellow">
              <span className="inner-placeholder">Screen Mockup</span>
              <div className="screen-label">Low-fidelity wireframes</div>
            </div>
            <div className="pdf-wireframe-box blue">
              <span className="inner-placeholder">Screen Mockup</span>
              <div className="screen-label">High-fidelity wireframes</div>
            </div>
            <div className="pdf-wireframe-box pink">
              <span className="inner-placeholder">Screen Mockup</span>
              <div className="screen-label">Final UI screens</div>
            </div>
          </div>
        </div>

        {/* ================= 14. FRONTEND DEVELOPMENT ================= */}
        <div className="case-section-block" id="frontend">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Frontend development</span>
          </div>
          <p className="case-sub-text">
            As both designer and developer, I built the dashboard straight from the Figma design so spacing, colour and states match.
          </p>

          <div className="pdf-strategy-grid">
            <div className="pdf-strategy-card" style={{ background: '#d1fae5', borderColor: '#a7f3d0' }}>
              <h4>Reusable components</h4>
              <p>Summary card, activity tile, sidebar item, top bar actions</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#e0f2fe', borderColor: '#7dd3fc' }}>
              <h4>Stack</h4>
              <p>HTML, CSS, JavaScript and React</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Responsive and consistent</h4>
              <p>Hover, focus and empty-data states handled in code</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ede9fe', borderColor: '#ddd6fe' }}>
              <h4>Faster iteration</h4>
              <p>No handoff delay: usability fixes designed and shipped together</p>
            </div>
          </div>
        </div>

        {/* ================= 15. USABILITY TESTING ================= */}
        <div className="case-section-block">
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
              <p>Staff opened several sheets to find overdue students and failed debits.</p>
            </div>
            <div className="pdf-val-box after">
              <h4>AFTER</h4>
              <p>The dashboard tiles showed everything on one screen, with links to act.</p>
            </div>
          </div>
        </div>

        {/* ================= 16. THANK YOU FOOTER CARD ================= */}
        <div className="pdf-thank-card">
          <div className="pdf-thank-title">Thank you</div>
          <a href="mailto:kowshikanathan@gmail.com" className="pdf-thank-email" style={{ color: '#a7f3d0' }}>
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
      <button className="case-floating-return" style={{ background: '#064e3b' }} onClick={onBack} aria-label="Back to Portfolio">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </button>
    </div>
  );
}
