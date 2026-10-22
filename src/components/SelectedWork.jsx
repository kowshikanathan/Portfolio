import React from 'react';

const projects = [
  {
    title: 'Link Management Website',
    desc: 'A clean, easy-to-use website for creating, organizing and sharing links. I designed the full experience.',
    thumb: '/images/project-ziplin.webp',
    tags: ['UX/UI Design', 'Web'],
    link: 'https://www.ziplin.io/',
    status: 'View live',
    isExternal: true,
  },
  {
    title: 'Academy Website',
    desc: 'A website for an academy that helps students find courses and get in touch with ease.',
    thumb: '/images/project-academy.webp',
    tags: ['UX/UI Design', 'Web'],
    status: 'Case study soon',
    isExternal: false,
  },
  {
    title: 'Fee Management Website',
    desc: 'An ongoing project: a fee management platform inspired by Jodo, making fee payments simple for schools and parents. I’m designing it and building the frontend.',
    thumb: '/images/project-fee-management.webp',
    tags: ['UX/UI Design', 'Frontend', 'React', 'Ongoing'],
    status: 'In progress',
    isExternal: false,
  },
  {
    title: 'Beauty Shopping App',
    desc: 'An app that simplifies skincare routines and product discovery, with personalized picks from a skin-type quiz and AI skin analysis through the camera.',
    thumb: '/images/project-beauty-app.webp',
    tags: ['UX Research', 'UI Design', 'iOS & Android'],
    link: 'https://kowshikas.framer.website/casestudy',
    status: 'View case study',
    isExternal: true,
  },
];

export default function SelectedWork() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>My <b>Projects</b></h2>
        <p className="sub">A showcase of my recent work</p>

        <div className="grid g3">
          {projects.map((p, idx) => (
            <article key={idx} className="card">
              <div className="thumb">
                <img src={p.thumb} alt={p.title} loading="lazy" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tags">
                {p.tags.map((t, tIdx) => (
                  <span key={tIdx}>{t}</span>
                ))}
              </div>

              {p.link ? (
                <a className="go" href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.status}
                </a>
              ) : (
                <span className="soon">{p.status}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
