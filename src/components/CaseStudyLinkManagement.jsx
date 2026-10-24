import React, { useEffect, useState } from 'react';
import './CaseStudy.css';
import {
  ArrowLeft,
  Search,
  Filter,
  Upload,
  Folder,
  FileText,
  Share2,
  Copy,
  Sparkles,
  Link2,
  QrCode,
  Globe,
  Layout,
  Compass
} from 'lucide-react';

export default function CaseStudyLinkManagement({ onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sampleFiles = [
    {
      id: 1,
      name: 'Summer-Lookbook-2026.pdf',
      type: 'PDF',
      size: '14.2 MB',
      downloads: 42,
      status: 'Active • 42 downloads',
      time: '2 hours ago'
    },
    {
      id: 2,
      name: 'Brand-Guidelines-v3.sketch',
      type: 'Archive',
      size: '38.5 MB',
      downloads: 16,
      status: 'Client viewed • 16 downloads',
      time: 'Yesterday'
    },
    {
      id: 3,
      name: 'Media-Kit-Q3-Launch.zip',
      type: 'ZIP',
      size: '85.0 MB',
      downloads: 89,
      status: 'Active • 89 downloads',
      time: '3 days ago'
    },
    {
      id: 4,
      name: 'Press-Release-Announcement.docx',
      type: 'Doc',
      size: '1.8 MB',
      downloads: 0,
      status: 'You opened • 0 downloads',
      time: '5 days ago'
    }
  ];

  const handleCopy = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="case-study-page case-link-theme">
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
              <span className="current">LINK management</span>
            </div>
          </div>

          <div className="case-nav-links">
            <a href="#overview" className="case-nav-pill">Overview</a>
            <a href="#problem" className="case-nav-pill">Problem</a>
            <a href="#process" className="case-nav-pill">Process</a>
            <a href="#strategy" className="case-nav-pill">Strategy</a>
            <a href="#features" className="case-nav-pill">Features</a>
            <a href="#personas" className="case-nav-pill">Personas</a>
            <a href="#metrics" className="case-nav-pill">Metrics</a>
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
        <div className="case-hero-eyebrow-dark">
          UX/UI Case study | Website & web dashboard | 2026
        </div>

        <h1 className="case-hero-title-link">LINK</h1>
        <h2 className="case-hero-subtitle-link">management</h2>

        <p className="case-hero-desc">
          A link management website and dashboard where teams create short links, QR codes and bio
          pages, run campaigns, share branded files and track what works.
        </p>

        <div className="case-hero-role-bar">
          <span><b>Role:</b> UX/UI Designer</span>
          <span>•</span>
          <span><b>Scope:</b> Website + Dashboard</span>
          <span>•</span>
          <span><b>Tools:</b> Figma | Framer</span>
        </div>

        {/* 3 Pastel Pills: Links, QR Codes, Bio Pages */}
        <div className="link-pill-group">
          <div className="link-pill yellow">
            <div className="pill-title">Links</div>
            <div className="pill-desc">Short and branded</div>
          </div>
          <div className="link-pill blue">
            <div className="pill-title">QR Codes</div>
            <div className="pill-desc">Print and screens</div>
          </div>
          <div className="link-pill purple">
            <div className="pill-title">Bio Pages</div>
            <div className="pill-desc">All links, one page</div>
          </div>
        </div>

        {/* ================= HERO INTERACTIVE DASHBOARD PREVIEW ================= */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: '1px solid #cbd5e1',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
            marginBottom: 48
          }}
        >
          {/* Dashboard Window Header */}
          <div
            style={{
              background: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
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
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Link Management Dashboard Preview
            </span>
            <span style={{ fontSize: '0.74rem', background: '#e2e8f0', padding: '2px 8px', borderRadius: 4, color: '#475569' }}>
              Interactive
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 460 }}>
            {/* Sidebar */}
            <aside style={{ background: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '18px 14px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a', marginBottom: 20, paddingLeft: 6 }}>
                File Sharing
              </div>

              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 6 }}>
                Main
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Layout size={14} /> Dashboard
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Link2 size={14} /> Links
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <QrCode size={14} /> QR Codes
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Globe size={14} /> Bio Pages
                </div>
              </div>

              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 6 }}>
                Grow
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sparkles size={14} /> Campaigns
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', background: '#fef3c7', color: '#92400e', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Folder size={14} /> File Sharing
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FileText size={14} /> Link Previews
                </div>
                <div style={{ padding: '7px 10px', borderRadius: 8, fontSize: '0.82rem', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Compass size={14} /> Migrations
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <main style={{ padding: 24, background: '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 8, padding: '7px 14px', width: 280 }}>
                  <Search size={14} color="#64748b" />
                  <input
                    type="text"
                    placeholder="Search files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.82rem', width: '100%', color: '#0f172a' }}
                  />
                </div>

                <button
                  style={{
                    background: '#facc15',
                    color: '#0f172a',
                    border: 'none',
                    fontWeight: 700,
                    padding: '8px 18px',
                    borderRadius: 8,
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer'
                  }}
                >
                  <Upload size={14} />
                  <span>Upload file</span>
                </button>
              </div>

              {/* Smart Filters row */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 18, fontSize: '0.78rem', color: '#475569', flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Filter size={11} /> Smart filters:
                </span>
                <span style={{ padding: '4px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 6 }}>Type: All ▾</span>
                <span style={{ padding: '4px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 6 }}>People ▾</span>
                <span style={{ padding: '4px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 6 }}>Modified ▾</span>
                <span style={{ padding: '4px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 6 }}>Location ▾</span>
              </div>

              {/* Suggested Files Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                {sampleFiles.map((f) => (
                  <div key={f.id} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 6, background: '#fef3c7', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileText size={16} />
                      </div>
                      <span style={{ fontSize: '0.68rem', color: '#0369a1', background: '#e0f2fe', padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>
                        {f.status}
                      </span>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#0f172a', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {f.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: 12 }}>
                      {f.size} • {f.time}
                    </div>

                    <div style={{ display: 'flex', gap: 6, borderTop: '1px solid #f1f5f9', paddingTop: 8 }}>
                      <button
                        onClick={() => handleCopy(f.id)}
                        style={{
                          flex: 1,
                          padding: '5px',
                          background: copiedId === f.id ? '#10b981' : '#f1f5f9',
                          color: copiedId === f.id ? '#ffffff' : '#334155',
                          border: 'none',
                          borderRadius: 6,
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 4
                        }}
                      >
                        <Copy size={11} /> {copiedId === f.id ? 'Copied' : 'Copy'}
                      </button>
                      <button style={{ padding: '5px 8px', background: '#f1f5f9', border: 'none', borderRadius: 6, color: '#475569', cursor: 'pointer' }}>
                        <Share2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>

        {/* ================= 1. WHAT IS THIS PROJECT? ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>What is this project?</span>
          </div>
          <p className="case-sub-text">
            A link management platform with a marketing website and a web dashboard. Teams create short links,
            QR codes and bio pages, group them into campaigns, share branded file download pages and track opens
            and downloads, all from one workspace.
          </p>
        </div>

        {/* ================= 2. PROBLEM STATEMENT ================= */}
        <div className="case-section-block" id="problem">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Problem statement</span>
          </div>
          <p className="case-sub-text">
            A problem statement is a concise description of an issue that needs to be addressed. Here, links
            and files are scattered and results are unclear.
          </p>

          <div className="case-split-grid">
            <div className="pdf-card-problem">
              <h3>Problem</h3>
              <ul>
                <li>Links, QR codes, files in many tools</li>
                <li>Hard to find older assets</li>
                <li>No clear view of opens and downloads</li>
                <li>Switching platforms feels risky</li>
              </ul>
            </div>

            <div className="pdf-card-solution">
              <h3>Solution</h3>
              <ul>
                <li>One sidebar for every asset type</li>
                <li>Filters by type, people, date, place</li>
                <li>Open and download counts on cards</li>
                <li>Guided Migrations area</li>
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
                <span>• Wireframes</span>
              </div>
            </div>

            <div className="pdf-process-step step4">
              <div className="pdf-step-title">Step 4 Design</div>
              <div className="pdf-step-list">
                <span>• High-fidelity UI</span>
                <span>• Design system</span>
                <span>• Interactive screens</span>
                <span>• Prototype</span>
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
              <p>Create a link, generate a QR code, build a bio page, launch a campaign, upload and share a file, review downloads, migrate links.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Target audience</h4>
              <p>Marketers, small business owners, creators and agencies, aged 18 to 50.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Technology constraints</h4>
              <p>Desktop browser first, responsive down to tablet, stable internet needed for uploads.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Critical success factor</h4>
              <p>A first asset created and shared within minutes of signing up.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Executive intent</h4>
              <p>Customer retention, revenue growth and a platform that can add new modules easily.</p>
            </div>

            <div className="pdf-strategy-card">
              <h4>Cross channel</h4>
              <p>Marketing website, web dashboard and shareable branded pages.</p>
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
            One left sidebar holds every module. The File Sharing screen shows the pattern: filter, find, share, track.
          </p>

          <div className="pdf-modules-grid">
            <div className="pdf-module-card">
              <h4>Links</h4>
              <p>Create, edit and organise short links</p>
            </div>
            <div className="pdf-module-card">
              <h4>QR Codes</h4>
              <p>Generate and manage QR codes</p>
            </div>
            <div className="pdf-module-card">
              <h4>Bio Pages</h4>
              <p>One landing page for all of a creator's links</p>
            </div>
            <div className="pdf-module-card">
              <h4>Campaigns</h4>
              <p>Group assets to compare results</p>
            </div>
            <div className="pdf-module-card">
              <h4>Dashboard</h4>
              <p>Overview of activity across assets</p>
            </div>
            <div className="pdf-module-card">
              <h4>File Sharing</h4>
              <p>Upload files, share branded download pages</p>
            </div>
            <div className="pdf-module-card">
              <h4>Link Previews</h4>
              <p>Control how a link looks when shared</p>
            </div>
            <div className="pdf-module-card">
              <h4>Migrations</h4>
              <p>Bring links from another platform</p>
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
                  <th>Typical link tools</th>
                  <th>File-sharing tools</th>
                  <th className="highlight-col">This platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>All assets in one place</b></td>
                  <td>Links only</td>
                  <td>Files only</td>
                  <td className="highlight-col">Links, QR, bio, files</td>
                </tr>
                <tr>
                  <td><b>Filter and sorting</b></td>
                  <td>Basic</td>
                  <td>Standard</td>
                  <td className="highlight-col">Type, people, date, place</td>
                </tr>
                <tr>
                  <td><b>Download tracking</b></td>
                  <td>Click counts</td>
                  <td>Limited</td>
                  <td className="highlight-col">Per file, on the card</td>
                </tr>
                <tr>
                  <td><b>Branded share page</b></td>
                  <td>Paid add-on</td>
                  <td>Rare</td>
                  <td className="highlight-col">Built in</td>
                </tr>
                <tr>
                  <td><b>Onboarding guide</b></td>
                  <td>Minimal</td>
                  <td>Minimal</td>
                  <td className="highlight-col">Help Center, Community</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= 7. QUANTITATIVE ANALYSIS ================= */}
        <div className="case-section-block" id="metrics">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Quantitative analysis</span>
          </div>
          <p className="case-sub-text">
            Quantitative analysis measures behaviour with numbers: task time, click rates and conversion.
          </p>

          <div className="pdf-metrics-grid">
            <div className="pdf-metric-card">
              <div className="pdf-metric-title">Find an older file</div>
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
              <div className="pdf-metric-title">Create a link</div>
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
              <div className="pdf-metric-title">Share a file</div>
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
              <div className="pdf-metric-title">Check downloads</div>
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
                <div className="pdf-persona-avatar" style={{ background: '#0b132b' }}>A</div>
                <div>
                  <div className="pdf-persona-name">Arjun</div>
                  <div className="pdf-persona-role">Social media manager</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Runs five campaigns at once and shares assets with clients daily. Needs speed and clear reports.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Find any asset in seconds</li>
                  <li>Proof of downloads</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card blue">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#0284c7' }}>M</div>
                <div>
                  <div className="pdf-persona-name">Meera</div>
                  <div className="pdf-persona-role">Boutique owner</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Prints QR codes for her store and shares lookbooks as files. Wants simple screens and no training.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Share a branded file fast</li>
                  <li>Simple menus</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card lavender">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#6d28d9' }}>N</div>
                <div>
                  <div className="pdf-persona-name">Neha</div>
                  <div className="pdf-persona-role">Agency lead</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Manages links for many clients and moves them from older tools. Wants safe migration and clean reports.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Migrate without risk</li>
                  <li>Report per campaign</li>
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
            An empathy map synthesises what a user says, thinks, does and feels. Shown for Arjun, the social media manager.
          </p>

          <div className="pdf-empathy-grid">
            <div className="pdf-empathy-box says">
              <div className="pdf-empathy-title">Says</div>
              <p className="pdf-empathy-text">
                "Where is that file from last month?"<br />
                "Did the client open it?"
              </p>
            </div>

            <div className="pdf-empathy-box thinks">
              <div className="pdf-empathy-title">Thinks</div>
              <p className="pdf-empathy-text">
                Will this link look professional?<br />
                I hope I delete nothing by mistake.
              </p>
            </div>

            <div className="pdf-empathy-box does">
              <div className="pdf-empathy-title">Does</div>
              <p className="pdf-empathy-text">
                Filters by type and date, copies links, checks download counts after sending.
              </p>
            </div>

            <div className="pdf-empathy-box feels">
              <div className="pdf-empathy-title">Feels</div>
              <p className="pdf-empathy-text">
                Relieved when results are clear, frustrated by scattered tools.
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
                  <th>Create</th>
                  <th>Share</th>
                  <th>Track</th>
                  <th>Grow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-dim">Action</td>
                  <td>Visits the website, signs up</td>
                  <td>Adds a link, QR code or file</td>
                  <td>Copies or shares an asset</td>
                  <td>Checks opens and downloads</td>
                  <td>Runs campaigns, migrates links</td>
                </tr>
                <tr>
                  <td className="row-dim pain-text">Pain point</td>
                  <td className="pain-text">Unsure where to start</td>
                  <td className="pain-text">Too many options</td>
                  <td className="pain-text">Worry about how it looks</td>
                  <td className="pain-text">Numbers hard to find</td>
                  <td className="pain-text">Moving old links is scary</td>
                </tr>
                <tr>
                  <td className="row-dim opp-text">Opportunity</td>
                  <td className="opp-text">Clear sidebar, grouped modules</td>
                  <td className="opp-text">One obvious main button</td>
                  <td className="opp-text">Branded pages, link previews</td>
                  <td className="opp-text">Counts on every file card</td>
                  <td className="opp-text">Guided Migrations area</td>
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
            <span className="pdf-flow-pill yellow">Visit website</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Sign up</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Dashboard</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">File Sharing</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Use filters</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Upload file</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill yellow">Share page</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill blue">Track downloads</span>
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
              <h4>Create + share</h4>
              <p>• Links<br />• QR Codes<br />• Bio Pages</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#e0f2fe', borderColor: '#bae6fd' }}>
              <h4>Grow</h4>
              <p>• Campaigns<br />• File Sharing<br />• Link Previews<br />• Migrations</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ede9fe', borderColor: '#ddd6fe' }}>
              <h4>Manage & Support</h4>
              <p>• Dashboard<br />• Settings & Account<br />• Community & Help Center<br />• Collapse sidebar</p>
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
            Low-fidelity wireframes set the structure for the website and dashboard, high-fidelity screens in Figma set the look, and Framer tested the interactions.
          </p>

          <div className="pdf-wireframes-grid">
            <div className="pdf-wireframe-box yellow">
              <span className="inner-placeholder">Screen Mockup</span>
              <div className="screen-label">Website screens</div>
            </div>
            <div className="pdf-wireframe-box blue">
              <span className="inner-placeholder">Screen Mockup</span>
              <div className="screen-label">Dashboard screens</div>
            </div>
            <div className="pdf-wireframe-box pink">
              <span className="inner-placeholder">Screen Mockup</span>
              <div className="screen-label">File Sharing screen</div>
            </div>
          </div>
        </div>

        {/* ================= 14. WEBSITE EXPERIENCE ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Website experience</span>
          </div>
          <p className="case-sub-text">
            The marketing website introduces the product and leads visitors into the dashboard. Edit these points to match your final pages.
          </p>

          <div className="pdf-strategy-grid">
            <div className="pdf-strategy-card" style={{ background: '#fef9c3', borderColor: '#fde047' }}>
              <h4>Clear value proposition</h4>
              <p>One headline that says what the platform does</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#e0f2fe', borderColor: '#7dd3fc' }}>
              <h4>Feature overview</h4>
              <p>Links, QR codes, bio pages, campaigns, files</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Simple sign-up</h4>
              <p>Few fields, one clear call to action</p>
            </div>
            <div className="pdf-strategy-card" style={{ background: '#ede9fe', borderColor: '#ddd6fe' }}>
              <h4>Consistent brand</h4>
              <p>Navy and yellow shared with the dashboard</p>
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
              <p>Users hunted through menus to find an older file.</p>
            </div>
            <div className="pdf-val-box after">
              <h4>AFTER</h4>
              <p>Filters and suggested files helped users find it quickly.</p>
            </div>
          </div>
        </div>

        {/* ================= 16. THANK YOU FOOTER CARD ================= */}
        <div className="pdf-thank-card">
          <div className="pdf-thank-title">Thank you</div>
          <a href="mailto:kowshikanathan@gmail.com" className="pdf-thank-email">
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
      <button className="case-floating-return" onClick={onBack} aria-label="Back to Portfolio">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </button>
    </div>
  );
}
