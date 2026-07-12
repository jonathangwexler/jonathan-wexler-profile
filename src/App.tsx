const institutionalJourney = [
  {
    id: "world-affairs",
    dates: "1998 - 2001",
    dateTime: "1998",
    role: "Producer",
    organization: "World Affairs Television",
    location: "Montreal, Quebec",
    description:
      "Produced and wrote for The Editors and The Directors, broadcast on PBS and CBC, working with prominent voices from politics, publishing, and film.",
  },
  {
    id: "autodesk",
    dates: "2001 - 2003",
    dateTime: "2001",
    role: "Consultant, Editor & Lead Technical Writer",
    organization: "Autodesk",
    location: "Montreal, Quebec",
    description:
      "Senior writer for Flame and Smoke systems and managed documentation for Lustre and Incinerator color-grading products.",
  },
  {
    id: "genetec",
    dates: "2008 - 2009",
    dateTime: "2008",
    role: "Documentation Lead",
    organization: "Genetec",
    location: "Montreal, Quebec",
    description:
      "Led the Omnicast and AutoVu documentation effort, producing up to 1,000 pages of illustrated material while improving the FrameMaker and online-help workflow.",
  },
  {
    id: "canadavisa",
    dates: "2010 - 2011",
    dateTime: "2010",
    role: "Communications Manager",
    organization: "CanadaVisa.com - Cohen Immigration Law",
    location: "Montreal, Quebec",
    description:
      "Managed social channels and web content across Joomla and WordPress, and contributed to newcomer-banking and immigration-analytics initiatives.",
  },
  {
    id: "moment-factory",
    dates: "2011 - 2012",
    dateTime: "2011",
    role: "Documentation & Localization Consultant",
    organization: "Moment Factory",
    location: "Montreal, Quebec",
    description:
      "Managed X-Agora documentation and software-string translation, creating the localization pipeline and coordinating outside specialists.",
  },
  {
    id: "liberal-party",
    dates: "2014 - 2015",
    dateTime: "2014",
    role: "Web Communications Manager",
    organization: "Liberal Party of Canada",
    location: "Montreal, Quebec",
    description:
      "Managed the web presence for the early stages of a Montreal parliamentary campaign.",
  },
  {
    id: "ni2",
    dates: "2017 - 2018",
    dateTime: "2017",
    role: "Writer",
    organization: "Ni2",
    location: "Montreal, Quebec",
    description:
      "Improved technical communications and wrote marketing material for brochures, white papers, and the company website.",
  },
  {
    id: "element-ai",
    dates: "2018 - 2019",
    dateTime: "2018",
    role: "Technical Writer",
    organization: "Element AI, a ServiceNow company",
    location: "Montreal, Quebec",
    description:
      "As the first onsite technical writer, documented an AI appliance, server installation, and Linux and Docker-based batch-job software.",
  },
  {
    id: "green-party",
    dates: "June - September 2021",
    dateTime: "2021",
    role: "Campaign Manager",
    organization: "Green Party of Canada",
    location: "Montreal, Quebec",
    description:
      "Managed a Montreal campaign during the 2021 federal election.",
  },
];

const independentPractice = [
  {
    dates: "1998 - January 2026",
    role: "Freelance Journalist",
    organization: "Freelance",
    description:
      "Wrote and edited across music, Montreal arts and nightlife, Spotify, ADHD, autism, and culture - a thread that began as editor of the Dawson College newspaper.",
  },
  {
    dates: "2006 - January 2026",
    role: "Consultant, Information Architect & Writer",
    organization: "Various clients",
    description:
      "Supported organizations including Patagonia, Convivio, TouchTunes, Phototerra, Avotus, Edisoft, Objectif Lune, and MindAvenue with content systems and production.",
  },
  {
    dates: "2010 - January 2026",
    role: "Web Developer",
    organization: "Freelance",
    description:
      "Designed, built, wrote, and hosted websites, including WordPress multisite installations on Cloudron and independent cloud infrastructure.",
  },
  {
    dates: "October 2021 - December 2025",
    role: "Teacher",
    organization: "Clascity",
    description:
      "Taught AI to newbies as well as Linux, WordPress, technical writing, and custom-computer building.",
  },
  {
    dates: "September 2022 - January 2026",
    role: "Immigration Consultant",
    organization: "Freelance",
    description:
      "Helped newcomers and asylum claimants navigate Quebec paperwork, language, housing, employment materials, banking, relocation, and daily logistics.",
  },
  {
    dates: "October 2022 - January 2026",
    role: "Content Creator",
    organization: "Various companies",
    description:
      "Created podcasts and independent writing, self-published books, and developed nonfiction and video ideas across a range of publishing tools.",
  },
];

const certifications = [
  "Generative Design Foundations",
  "Designing Learning Experiences in the Metaverse",
  "MBA in a Box: Business Lessons from a CEO",
  "Generative AI Deep Research: Strategic AI Edge for Leaders",
  "A Guide to Understanding Ethics in Technology",
];

const domains = [
  "Technical writing",
  "Information architecture",
  "AI literacy",
  "Context engineering",
  "Web publishing",
  "Localization",
  "Journalism",
  "Education",
];

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to profile
      </a>

      <header className="hero" id="top" aria-labelledby="page-title">
        <img
          className="hero__photo"
          src={portraitUrl}
          alt="Jonathan Wexler smiling on a snow-covered trail in an evergreen forest"
          width="3264"
          height="2448"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="ridge" aria-hidden="true" />

        <div className="masthead">
          <a className="brand" href="#top" aria-label="Jonathan Wexler, home">
            <span className="brand__mark" aria-hidden="true">
              JW
            </span>
            <span className="brand__text">Jonathan Wexler</span>
          </a>
          <p className="location">Montreal, Quebec</p>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#profile">Profile</a>
            <a href="#journey">Journey</a>
            <a href="#practice">Practice</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="hero__body">
          <div className="intro">
            <p className="eyebrow">Writer · Technologist · Observer</p>
            <h1 id="page-title">
              Jonathan <span>Wexler</span>
            </h1>

            <div className="intro__lower">
              <p className="headline">
                Retired Writer &<br /> Technologist
              </p>
              <div>
                <p className="intro__copy">
                  A career across software, media, education, and independent consulting - now
                  focused on religion, ethics, and the meaning of technology.
                </p>
                <a className="cta" href="#journey">
                  Explore the journey
                </a>
              </div>
            </div>
          </div>

          <aside className="career-index" aria-label="Selected career index">
            <p className="career-index__title">
              <span>Selected journey</span>
              <span>1998 - 2026</span>
            </p>
            <ol>
              <li>
                <a href="#world-affairs">
                  <strong>1998</strong>
                  <span>World Affairs Television</span>
                </a>
              </li>
              <li>
                <a href="#autodesk">
                  <strong>2001</strong>
                  <span>Autodesk</span>
                </a>
              </li>
              <li>
                <a href="#genetec">
                  <strong>2008</strong>
                  <span>Genetec</span>
                </a>
              </li>
              <li>
                <a href="#element-ai">
                  <strong>2018</strong>
                  <span>Element AI</span>
                </a>
              </li>
              <li>
                <a href="#now">
                  <strong>Now</strong>
                  <span>Religion, ethics & technology</span>
                </a>
              </li>
            </ol>
          </aside>
        </div>

        <div className="section-cues" aria-hidden="true">
          <span>
            <b>01</b> Profile
          </span>
          <span>
            <b>02</b> Career archive
          </span>
          <span>
            <b>03</b> Ideas & practice
          </span>
        </div>
      </header>

      <main id="main">
        <section className="profile" id="profile" aria-labelledby="profile-heading">
          <div className="section-anchor">
            <SectionLabel number="01">Profile</SectionLabel>
            <p className="section-coordinate">45.5019° N / 73.5674° W</p>
          </div>
          <div className="profile__body">
            <h2 id="profile-heading">Ideas at the edge of systems and society.</h2>
            <p className="profile__lead">
              Jonathan Wexler is a retired writer and technologist whose career moved between
              software, media, education, civic work, and independent consulting.
            </p>
            <div className="profile__copy">
              <p>
                Across Montreal-area organizations including Autodesk, Moment Factory,
                TouchTunes, Genetec, and Element AI, he translated complex systems into clear
                language and useful experiences.
              </p>
              <p>
                His work has ranged from television production and journalism to technical
                documentation, information architecture, web publishing, AI education, and
                practical support for newcomers to Quebec.
              </p>
            </div>

            <dl className="profile__facts">
              <div>
                <dt>Career archive</dt>
                <dd>1998 - 2026</dd>
              </div>
              <div>
                <dt>Chapters featured</dt>
                <dd>15</dd>
              </div>
              <div>
                <dt>Home base</dt>
                <dd>Montreal</dd>
              </div>
            </dl>

            <div className="organizations" aria-label="Selected organizations">
              <span>Autodesk</span>
              <span>Moment Factory</span>
              <span>Genetec</span>
              <span>Element AI</span>
              <span>TouchTunes</span>
            </div>
          </div>
        </section>

        <section className="journey" id="journey" aria-labelledby="journey-heading">
          <div className="journey__intro">
            <SectionLabel number="02">Career archive</SectionLabel>
            <h2 id="journey-heading">A career in chapters.</h2>
            <p>
              Institutional roles traced a route from broadcast storytelling to the systems
              behind creative software, physical security, immigration, and artificial
              intelligence.
            </p>
          </div>

          <ol className="timeline">
            {institutionalJourney.map((item, index) => (
              <li id={item.id} key={item.id}>
                <article>
                  <div className="timeline__meta">
                    <span className="timeline__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <time dateTime={item.dateTime}>{item.dates}</time>
                  </div>
                  <div className="timeline__body">
                    <p className="timeline__organization">{item.organization}</p>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                    <span className="timeline__location">{item.location}</span>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="independent"
          id="independent"
          aria-labelledby="independent-heading"
        >
          <div className="independent__intro">
            <SectionLabel number="03">Independent practice</SectionLabel>
            <h2 id="independent-heading">Work that crossed the boundaries.</h2>
            <p>
              Alongside organizational roles, a long independent practice connected writing,
              consulting, teaching, web craft, and community support.
            </p>
          </div>

          <div className="practice-grid">
            {independentPractice.map((item, index) => (
              <article className="practice-card" key={`${item.role}-${item.dates}`}>
                <div className="practice-card__top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item.dates}</p>
                </div>
                <p className="practice-card__organization">{item.organization}</p>
                <h3>{item.role}</h3>
                <p className="practice-card__copy">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="practice" id="practice" aria-labelledby="practice-heading">
          <div className="practice__heading">
            <SectionLabel number="04">Ideas & practice</SectionLabel>
            <h2 id="practice-heading">A broad toolkit. A human question.</h2>
          </div>

          <div className="practice__content">
            <div className="domain-cloud" aria-label="Areas of practice">
              {domains.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </div>

            <div className="credential-grid">
              <article className="credential-card credential-card--education">
                <p className="credential-card__label">Education</p>
                <div>
                  <h3>Concordia University</h3>
                  <p>Bachelor&apos;s degree with honors, Communication and Media Studies, and Religion</p>
                </div>
                <div>
                  <h3>Dawson College</h3>
                  <p>DEC, Ghallager Award for best student in CEGEP</p>
                </div>
              </article>

              <article className="credential-card">
                <p className="credential-card__label">Profile skills</p>
                <ul className="skill-list">
                  <li>AI-built Websites</li>
                  <li>Figma Weave</li>
                  <li>Context Engineering</li>
                </ul>
              </article>

              <article className="credential-card credential-card--wide">
                <p className="credential-card__label">Continued learning</p>
                <ul className="certification-list">
                  {certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </article>

              <article className="credential-card credential-card--recognition">
                <p className="credential-card__label">Recognition</p>
                <h3>Autodesk</h3>
                <p>
                  Two bonuses, a stock grant, and team recognition connected to work on a <a href="https://www.fxguide.com/fxfeatured/stoned_and_wired_behind_discreets_y2k_4_bug/">critical rollover issue</a>.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="now" id="now" aria-labelledby="now-heading">
          <div className="now__index" aria-hidden="true">
            05 / NOW
          </div>
          <div className="now__content">
            <p className="eyebrow">The next chapter</p>
            <h2 id="now-heading">Technology is the setting. Meaning is the subject.</h2>
            <p>
              Retired from full-time technical work, Jonathan now focuses on independent study
              in religion, ethics, and the meaning of technology - especially the choices that
              intelligent tools ask individuals and societies to make.
            </p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="contact__heading">
            <SectionLabel number="06">Contact</SectionLabel>
            <h2 id="contact-heading">Continue the conversation.</h2>
          </div>
          <div className="contact__body">
            <p>
              Connect with Jonathan through his professional profile, send a note, or visit his
              existing website.
            </p>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/jonathan-wexler-technical-writer"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="mailto:jonathan.g.wexler@proton.me">
                Email <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.jonathanwexler.com/" target="_blank" rel="noreferrer">
                Website <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer__brand" href="#top" aria-label="Back to top">
          <span className="brand__mark" aria-hidden="true">
            JW
          </span>
          <span className="brand__text">Jonathan Wexler</span>
        </a>
        <p>Writer · Technologist · Observer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
import type { ReactNode } from "react";
import portraitUrl from "./assets/jonathan-wexler-winter.jpg";
