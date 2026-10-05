import { experience } from '../data/content'
import { useReveal } from '../hooks/useReveal'

// Work experience timeline from CV. Inputs: none. Returns: role panels with project tags.
export function Experience() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="experience"
      ref={ref}
      className={`section reveal ${visible ? 'reveal--in' : ''}`}
    >
      <div className="section__head">
        <p className="section__kicker">Campaign log</p>
        <h2>Experience</h2>
        <p>5+ years shipping production frontend across SaaS, healthcare, maritime, and enterprise analytics.</p>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.org}-${item.period}`} className="panel timeline__item">
            <div className="timeline__top">
              <div>
                <h3>
                  {item.title} · {item.org}
                </h3>
                <p className="timeline__meta">
                  {item.location}
                  {item.note ? ` · ${item.note}` : ''}
                </p>
              </div>
              <span>{item.period}</span>
            </div>
            <ul className="bullet-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {item.projects && item.projects.length > 0 ? (
              <ul className="chip-row timeline__projects">
                {item.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
