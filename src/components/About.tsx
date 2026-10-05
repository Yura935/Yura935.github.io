import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'

// About section with CV-aligned focus, domains, education, languages.
export function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`section reveal ${visible ? 'reveal--in' : ''}`}
    >
      <div className="section__head">
        <p className="section__kicker">Codex</p>
        <h2>About the player</h2>
        <p>{profile.summary}</p>
      </div>

      <div className="about__stack">
        <div className="panel about__focus">
          <h3>2026 focus</h3>
          <p className="about__lead">
            Where the campaign is headed right now — grounded in current product work and strengths from the CV.
          </p>
          <ul className="focus-list">
            {profile.focus.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__side">
          <div className="panel">
            <h3>Domains cleared</h3>
            <ul className="chip-row">
              {profile.domains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h3>Education</h3>
            <ul className="edu-list">
              {profile.education.map((item) => (
                <li key={item.degree}>
                  <strong>{item.degree}</strong>
                  <span>
                    {item.school} · {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h3>Languages</h3>
            <ul className="lang-list">
              {profile.languages.map((lang) => (
                <li key={lang.name}>
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
