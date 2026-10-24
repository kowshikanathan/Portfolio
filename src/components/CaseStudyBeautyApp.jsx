import React, { useEffect } from 'react';
import './CaseStudy.css';
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Sparkles,
  Search,
  Scan
} from 'lucide-react';

export default function CaseStudyBeautyApp({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="case-study-page case-beauty-theme">
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
              <span className="current">LUSH Aura</span>
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
        <div className="case-hero-eyebrow-dark" style={{ background: '#4a0e2e' }}>
          UX/UI Case study | Mobile app | 2026
        </div>

        <h1 className="case-hero-title-link" style={{ color: '#4a0e2e' }}>LUSH</h1>
        <h2 className="case-hero-subtitle-link" style={{ color: '#701a75' }}>Aura</h2>

        <p className="case-hero-desc" style={{ color: '#4c0519' }}>
          A beauty-focused e-commerce app that simplifies product discovery, builds trust and helps people make confident skincare and beauty decisions.
        </p>

        <div className="case-hero-role-bar" style={{ color: '#831843' }}>
          <span><b>Role:</b> UX/UI Designer</span>
          <span>•</span>
          <span><b>Platform:</b> Mobile app | iOS + Android</span>
          <span>•</span>
          <span><b>Tool:</b> Figma</span>
        </div>

        {/* 3 Pastel Feature Pills (Matching PDF) */}
        <div className="link-pill-group">
          <div className="link-pill" style={{ background: '#fce7f3', border: '1px solid #fbcfe8', color: '#9d174d' }}>
            <div className="pill-title">Skin scan</div>
            <div className="pill-desc">Photo analysis, picks</div>
          </div>
          <div className="link-pill" style={{ background: '#ffedd5', border: '1px solid #fed7aa', color: '#9a3412' }}>
            <div className="pill-title">Beauty portfolio</div>
            <div className="pill-desc">Save and download</div>
          </div>
          <div className="link-pill" style={{ background: '#ede9fe', border: '1px solid #ddd6fe', color: '#6b21a8' }}>
            <div className="pill-title">Easy checkout</div>
            <div className="pill-desc">Card, UPI, wallet</div>
          </div>
        </div>

        {/* ================= HERO MOBILE APP SHOWCASE ================= */}
        <div
          style={{
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fff1f2 100%)',
            borderRadius: 20,
            border: '1px solid #fbcfe8',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(157, 23, 77, 0.08)',
            marginBottom: 48,
            padding: '36px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Mobile Phone Mockup Frame */}
          <div
            style={{
              width: '100%',
              maxWidth: 380,
              background: '#090508',
              borderRadius: 36,
              padding: '12px',
              boxShadow: '0 25px 60px rgba(74, 14, 46, 0.25), 0 0 0 4px #2a081a',
              border: '2px solid #581c87'
            }}
          >
            {/* Screen Notch */}
            <div style={{ height: 22, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: 100, height: 16, background: '#000000', borderRadius: 999 }}></div>
            </div>

            {/* App Screen Content */}
            <div style={{ background: '#ffffff', borderRadius: 28, overflow: 'hidden', padding: 18, color: '#1f2937' }}>
              {/* App Topbar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#9d174d' }}>Lush Aura</span>
                <div style={{ display: 'flex', gap: 10, color: '#475569' }}>
                  <Search size={16} />
                  <Heart size={16} />
                  <ShoppingBag size={16} />
                </div>
              </div>

              {/* Skin Scan Banner */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
                  border: '1px solid #fbcfe8',
                  borderRadius: 14,
                  padding: 14,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: '#db2777', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Scan size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.86rem', color: '#831843' }}>AI Skin Diagnostic</div>
                  <div style={{ fontSize: '0.72rem', color: '#9d174d' }}>Photo analysis &amp; personal routine picks</div>
                </div>
              </div>

              {/* Score Rings Card */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 12, marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', fontWeight: 700, color: '#64748b', marginBottom: 8 }}>
                  <span>Hydration: 84%</span>
                  <span>Texture: Smooth</span>
                  <span>Sensitivity: Low</span>
                </div>
                <div style={{ height: 6, background: '#e2e8f0', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg, #ec4899, #db2777)' }}></div>
                </div>
              </div>

              {/* Recommended Picks */}
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>
                Curated For Your Skin Type
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 10 }}>
                  <div style={{ height: 65, background: '#fdf2f8', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', marginBottom: 6 }}>
                    <Sparkles size={20} />
                  </div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0f172a' }}>Barrier Repair Cream</div>
                  <div style={{ fontSize: '0.72rem', color: '#db2777', fontWeight: 800 }}>₹649</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 10 }}>
                  <div style={{ height: 65, background: '#fef3c7', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b45309', marginBottom: 6 }}>
                    <Sparkles size={20} />
                  </div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0f172a' }}>Glow C-Serum</div>
                  <div style={{ fontSize: '0.72rem', color: '#b45309', fontWeight: 800 }}>₹799</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 1. WHAT IS LUSH AURA? ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>What is Lush Aura?</span>
          </div>
          <p className="case-sub-text">
            Lush Aura is a beauty-focused e-commerce mobile app designed to simplify product discovery, build trust
            and help users make confident skincare and beauty decisions.
          </p>
        </div>

        {/* ================= 2. PROBLEM STATEMENT ================= */}
        <div className="case-section-block" id="problem">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Problem statement</span>
          </div>
          <p className="case-sub-text">
            A problem statement is a concise, clear description of an issue that needs to be addressed or a
            condition that needs to be improved.
          </p>

          <div className="case-split-grid">
            <div className="pdf-card-problem">
              <h3>Problem</h3>
              <ul>
                <li>Product quality uncertainty</li>
                <li>Confusing search and discovery</li>
                <li>Payment frustrations</li>
                <li>Delivery tracking confusion</li>
              </ul>
            </div>

            <div className="pdf-card-solution" style={{ background: '#ffedd5', borderColor: '#fed7aa' }}>
              <h3 style={{ color: '#9a3412' }}>Solution</h3>
              <ul style={{ color: '#7c2d12' }}>
                <li>Trust-focused product experience</li>
                <li>Simplified search experience</li>
                <li>Smooth and reassuring checkout</li>
                <li>Transparent delivery tracking</li>
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
            A five-step human-centred process, from empathy research to final validation.
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
                <span>• User story</span>
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
            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>General tasks</h4>
              <p>Add to wishlist, create a new collection, add to cart, select a store, make payment, add an address, add card details.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Target audience</h4>
              <p>All genders aged 18 to 30, and all genders aged 31 to 50.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Technology constraints</h4>
              <p>Phone and internet connection.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Critical success factor</h4>
              <p>Making the customer purchase with trust and confidence.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Executive intent</h4>
              <p>Customer retention, revenue growth and continuous innovation.</p>
            </div>

            <div className="pdf-strategy-card" style={{ background: '#ffe4e6', borderColor: '#fecdd3' }}>
              <h4>Cross channel</h4>
              <p>Native mobile apps across iOS and Android.</p>
            </div>
          </div>
        </div>

        {/* ================= 5. APP FEATURES ================= */}
        <div className="case-section-block" id="features">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>App features</span>
          </div>
          <p className="case-sub-text">
            Four main areas carry people from first launch to checkout and a personal skin analysis.
          </p>

          <div className="pdf-modules-grid">
            <div className="pdf-module-card">
              <h4>Onboarding</h4>
              <p>Splash, walkthrough, login, signup, guest login and account setup</p>
            </div>
            <div className="pdf-module-card">
              <h4>Home and discovery</h4>
              <p>Search, shop by concern, categories, filters and sorting</p>
            </div>
            <div className="pdf-module-card">
              <h4>Purchase</h4>
              <p>Product selection, cart, address, card, UPI or wallet, order confirmation</p>
            </div>
            <div className="pdf-module-card">
              <h4>Skin analysis</h4>
              <p>Photo scan, detailed analysis, picks for you and a downloadable report</p>
            </div>
            <div className="pdf-module-card">
              <h4>Wishlist</h4>
              <p>Save products into collections</p>
            </div>
            <div className="pdf-module-card">
              <h4>Play and win</h4>
              <p>Rewards and live streaming</p>
            </div>
            <div className="pdf-module-card">
              <h4>My orders</h4>
              <p>Track delivery, support, cancel</p>
            </div>
            <div className="pdf-module-card">
              <h4>Wallet and cards</h4>
              <p>Saved card, saved UPI, wallet</p>
            </div>
            <div className="pdf-module-card">
              <h4>Offers</h4>
              <p>Coupons, gift cards, super coins</p>
            </div>
            <div className="pdf-module-card">
              <h4>Beauty portfolio</h4>
              <p>Photo selection, analysis, download</p>
            </div>
            <div className="pdf-module-card">
              <h4>Search</h4>
              <p>Recent searches, similar products, brands</p>
            </div>
            <div className="pdf-module-card">
              <h4>Filter and sort</h4>
              <p>Price, brand, rating, delivery time</p>
            </div>
          </div>
        </div>

        {/* ================= 6. USER PERSONAS ================= */}
        <div className="case-section-block" id="personas">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>User personas</span>
          </div>
          <p className="case-sub-text">
            Two shoppers shape the design decisions.
          </p>

          <div className="pdf-personas-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="pdf-persona-card" style={{ background: '#ffe4e6', border: '1px solid #fecdd3' }}>
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#9d174d' }}>R</div>
                <div>
                  <div className="pdf-persona-name">Roshini</div>
                  <div className="pdf-persona-role">Makeup artist, Bengaluru</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Travels often and relies on fast delivery to source products. Checks reviews, ratings and offers before buying, and sometimes receives low quality products.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Fast delivery</li>
                  <li>Up-to-date product knowledge</li>
                  <li>Trusted quality</li>
                </ul>
              </div>
            </div>

            <div className="pdf-persona-card lavender">
              <div className="pdf-persona-header">
                <div className="pdf-persona-avatar" style={{ background: '#6d28d9' }}>S</div>
                <div>
                  <div className="pdf-persona-name">Shreshta</div>
                  <div className="pdf-persona-role">Research analyst</div>
                </div>
              </div>
              <p className="pdf-persona-desc">
                Shops online for fashion and lifestyle products across many apps. Does not want complicated options and prefers trusted brands and easy returns.
              </p>
              <div className="pdf-persona-goals">
                <div className="pdf-persona-goals-label">Goals</div>
                <ul>
                  <li>Balance of quality and price</li>
                  <li>Easy return option</li>
                  <li>Simple, clear filters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 7. JOURNEY MAP ================= */}
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
                  <th>Compare and decide</th>
                  <th>Purchase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-dim">Action</td>
                  <td>Finds the app through Instagram ads, influencers or friends</td>
                  <td>Browses categories, searches, views recommendations</td>
                  <td>Reads reviews, compares prices, checks ingredients</td>
                  <td>Adds to cart, applies a coupon, pays</td>
                </tr>
                <tr>
                  <td className="row-dim pain-text">Pain point</td>
                  <td className="pain-text">Unsure whether the app is trustworthy</td>
                  <td className="pain-text">Too many products and filters</td>
                  <td className="pain-text">Fake reviews, unclear benefits</td>
                  <td className="pain-text">Long checkout process</td>
                </tr>
                <tr>
                  <td className="row-dim opp-text">Opportunity</td>
                  <td className="opp-text">Influencer and social proof</td>
                  <td className="opp-text">Personalized recommendations</td>
                  <td className="opp-text">AI skin quiz, verified reviews</td>
                  <td className="opp-text">One tap checkout, many payment options</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= 8. USER FLOW ================= */}
        <div className="case-section-block">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>User flow</span>
          </div>
          <p className="case-sub-text">
            A user flow maps the path a user takes to complete a task.
          </p>

          <div className="pdf-flow-wrapper">
            <span className="pdf-flow-pill" style={{ background: '#fce7f3', border: '1px solid #fbcfe8', color: '#9d174d' }}>Splash screen</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#ffedd5', border: '1px solid #fed7aa', color: '#9a3412' }}>Walkthrough</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#ede9fe', border: '1px solid #ddd6fe', color: '#6b21a8' }}>Login or guest</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#fce7f3', border: '1px solid #fbcfe8', color: '#9d174d' }}>Home</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#ffedd5', border: '1px solid #fed7aa', color: '#9a3412' }}>Search + filter</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#ede9fe', border: '1px solid #ddd6fe', color: '#6b21a8' }}>Product page</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#fce7f3', border: '1px solid #fbcfe8', color: '#9d174d' }}>Cart + checkout</span>
            <span className="pdf-flow-arrow">➔</span>
            <span className="pdf-flow-pill" style={{ background: '#dcfce7', border: '1px solid #bbf7d0', color: '#166534' }}>Order confirmed</span>
          </div>
        </div>

        {/* ================= 9. USABILITY TESTING ================= */}
        <div className="case-section-block" id="testing">
          <div className="case-bar-heading">
            <span className="case-bar-accent"></span>
            <span>Usability testing</span>
          </div>
          <p className="case-sub-text">
            Usability testing observes real users completing tasks to find pain points. The skin scan screen was improved after testing.
          </p>

          <div className="pdf-validation-grid">
            <div className="pdf-val-box before">
              <h4>BEFORE</h4>
              <p>Scores sat in small cards over the photo and recommendations were hard to reach.</p>
            </div>
            <div className="pdf-val-box after" style={{ background: '#fce7f3', borderColor: '#fbcfe8' }}>
              <h4 style={{ color: '#9d174d' }}>AFTER</h4>
              <p>Clear score rings, a short disclaimer, download and scan again buttons, and picks for you.</p>
            </div>
          </div>
        </div>

        {/* ================= 10. THANK YOU FOOTER CARD ================= */}
        <div className="pdf-thank-card">
          <div className="pdf-thank-title">Thank you</div>
          <a href="mailto:kowshikanathan@gmail.com" className="pdf-thank-email" style={{ color: '#fbcfe8' }}>
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
      <button className="case-floating-return" style={{ background: '#4a0e2e' }} onClick={onBack} aria-label="Back to Portfolio">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </button>
    </div>
  );
}
