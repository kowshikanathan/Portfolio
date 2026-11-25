import React, { useState } from 'react';
import {
  Check,
  Copy,
  FileText,
  Folder,
  GraduationCap,
  Layout,
  Link2,
  Plus,
  QrCode,
  Search,
  Share2,
  Upload,
} from 'lucide-react';
import './ProjectMockups.css';

function BrowserChrome({ title, children }) {
  return (
    <div className="ui-browser-frame">
      <div className="ui-browser-bar">
        <div className="ui-browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="ui-browser-title">{title}</span>
      </div>
      <div className="ui-browser-body">{children}</div>
    </div>
  );
}

export function ProjectThumbnailMockup({ project }) {
  if (project.id === 'greeto') {
    return (
      <div className="mockup-stage mockup-greeto">
        <div className="mockup-layer-back">
          <BrowserChrome title="greeto.app / dashboard">
            <img
              src="/images/greeto-dashboard.jpg"
              alt="Greeto SaaS workspace dashboard UI"
              loading="lazy"
            />
          </BrowserChrome>
        </div>
        <div className="mockup-layer-front">
          <BrowserChrome title="greeto.app / workflow">
            <img
              src="/images/greeto-workflow.jpg"
              alt="Greeto visual workflow builder UI"
              loading="lazy"
            />
          </BrowserChrome>
        </div>
      </div>
    );
  }

  if (project.id === 'acadly') {
    return (
      <div className="mockup-stage mockup-acadly">
        <div className="ui-phone-frame phone-left">
          <img
            src="/images/acadly-welcome.png"
            alt="Acadly mobile app welcome screen UI"
            loading="lazy"
          />
        </div>
        <div className="ui-phone-frame phone-right">
          <img
            src="/images/acadly-splash3.png"
            alt="Acadly mobile app progress and certificate splash screen UI"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  if (project.id === 'learnex') {
    return (
      <div className="mockup-stage mockup-learnex">
        <div className="mockup-layer-back">
          <BrowserChrome title="learnex.edu / orders-invoices">
            <img
              src="/images/learnex-orders.png"
              alt="Learnex orders and invoices portal UI"
              loading="lazy"
            />
          </BrowserChrome>
        </div>
        <div className="mockup-layer-front">
          <BrowserChrome title="learnex.edu / leaderboard">
            <img
              src="/images/learnex-leaderboard.jpg"
              alt="Learnex student leaderboard dashboard UI"
              loading="lazy"
            />
          </BrowserChrome>
        </div>
      </div>
    );
  }

  if (project.id === 'link-management') {
    return <LinkManagementMockup compact />;
  }

  if (project.id === 'dodo') {
    return <DodoConsoleMockup compact />;
  }

  if (project.id === 'academy') {
    return <AcademyWebsiteMockup compact />;
  }

  return null;
}

export function LinkManagementMockup({ compact = false }) {
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const files = [
    { id: 1, name: 'Summer-Lookbook-2026.pdf', meta: 'PDF · 14.2 MB · 42 downloads' },
    { id: 2, name: 'Brand-Guidelines-v3.sketch', meta: 'Archive · 38.5 MB · 16 downloads' },
    { id: 3, name: 'Media-Kit-Q3-Launch.zip', meta: 'ZIP · 85.0 MB · 89 downloads' },
  ].filter((f) => f.name.toLowerCase().includes(query.toLowerCase()));

  const handleCopy = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1600);
  };

  return (
    <BrowserChrome title="linkhub.io / workspace / file-sharing">
      <div className={`ui-app-shell ${compact ? 'is-compact' : ''}`}>
        <aside className="ui-app-sidebar">
          <div className="ui-app-brand">LinkHub</div>
          <div className="ui-nav-item"><Layout size={13} /> Dashboard</div>
          <div className="ui-nav-item"><Link2 size={13} /> Links</div>
          <div className="ui-nav-item"><QrCode size={13} /> QR Codes</div>
          <div className="ui-nav-item is-active"><Folder size={13} /> File Sharing</div>
        </aside>

        <div className="ui-app-main">
          <div className="ui-app-topbar">
            <div className="ui-search-box">
              <Search size={13} />
              <input
                type="text"
                placeholder="Search shared files..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                readOnly={compact}
                aria-label="Search shared files preview"
              />
            </div>
            <span className="ui-btn-accent-mini">
              <Upload size={12} /> Upload
            </span>
          </div>

          <div className="ui-file-list">
            {files.map((file) => (
              <div key={file.id} className="ui-file-row">
                <div className="ui-file-info">
                  <FileText size={14} className="ui-file-icon" />
                  <div>
                    <div className="ui-file-name">{file.name}</div>
                    <div className="ui-file-meta">{file.meta}</div>
                  </div>
                </div>
                {!compact ? (
                  <button
                    type="button"
                    className="ui-copy-btn"
                    onClick={() => handleCopy(file.id)}
                  >
                    {copiedId === file.id ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedId === file.id ? 'Copied' : 'Copy Link'}</span>
                  </button>
                ) : (
                  <Share2 size={13} className="ui-share-icon" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export function DodoConsoleMockup({ compact = false }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const kpis = [
    { label: 'Net Payable', val: '₹1,00,000', tone: 'blue' },
    { label: 'Collected', val: '₹65,000', tone: 'mint' },
    { label: 'Outstanding', val: '₹35,000', tone: 'coral' },
  ];

  const tiles = [
    { label: 'Collection Rate', val: '65.0%' },
    { label: 'Active eNACH', val: '1 Mandate' },
    { label: 'Upcoming 7d', val: '₹0.00' },
    { label: 'Reconciliation', val: 'Queue Clear' },
  ];

  return (
    <BrowserChrome title="dodo.finance / collections-console">
      <div className={`ui-app-shell ui-dodo-shell ${compact ? 'is-compact' : ''}`}>
        <aside className="ui-app-sidebar">
          <div className="ui-app-brand dodo-brand">Dodo Finance</div>
          {['dashboard', 'installments', 'enach', 'settlements'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`ui-nav-item ui-nav-btn ${activeTab === tab ? 'is-active-mint' : ''}`}
              onClick={() => !compact && setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </aside>

        <div className="ui-app-main">
          <div className="ui-app-topbar">
            <span className="ui-dodo-heading">Collections Overview</span>
            <span className="ui-btn-mint-mini">
              <Plus size={12} /> New Student
            </span>
          </div>

          <div className="ui-dodo-kpis">
            {kpis.map((k) => (
              <div key={k.label} className={`ui-dodo-kpi tone-${k.tone}`}>
                <span>{k.label}</span>
                <strong>{k.val}</strong>
              </div>
            ))}
          </div>

          <div className="ui-dodo-tiles">
            {tiles.map((t) => (
              <div key={t.label} className="ui-dodo-tile">
                <span>{t.label}</span>
                <strong>{t.val}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export function AcademyWebsiteMockup({ compact = false }) {
  return (
    <BrowserChrome title="academy.edu / career-programs">
      <div className={`ui-academy-shell ${compact ? 'is-compact' : ''}`}>
        <div className="ui-academy-banner">
          <span className="ui-academy-pill">Live Demo</span>
          <span>Next Batch Starts: September 17, 2026</span>
        </div>

        <div className="ui-academy-grid">
          <div className="ui-academy-copy">
            <div className="ui-academy-tag">
              <GraduationCap size={13} /> Career Mentorship
            </div>
            <h4>Shape Your Career with Expert Mentors</h4>
            <p>Master financial analysis, equity research, and modern workflows.</p>
            <div className="ui-academy-cta">BOOK FREE COUNSELLING</div>
          </div>

          <div className="ui-academy-form">
            <div className="ui-academy-form-title">Start Your Study Plan</div>
            <div className="ui-academy-input">Full Name *</div>
            <div className="ui-academy-input">Email Address *</div>
            <div className="ui-academy-input">+91 · Phone Number</div>
            <div className="ui-academy-submit">Get Personalised Study Plan</div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

