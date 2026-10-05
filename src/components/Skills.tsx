import { skills } from '../data/content'
import { useReveal } from '../hooks/useReveal'

// Skills loadout from CV. Inputs: none. Returns: skill groups + XP meters.
export function Skills() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`section reveal ${visible ? 'reveal--in' : ''}`}
    >
      <div className="section__head">
        <p className="section__kicker">Skill tree</p>
        <h2>Build loadout</h2>
        <p>
          Technical skills from production work: React/Preact/Next/Angular, state systems, grids, PWAs, testing,
          and cloud delivery.
        </p>
      </div>

      <div className="skills">
        {skills.map((group) => (
          <article key={group.title} className="panel skill">
            <div className="skill__top">
              <h3>{group.title}</h3>
              <span>{group.level} XP</span>
            </div>
            <div className="skill__track" aria-hidden="true">
              <div
                className="skill__fill"
                style={{ width: visible ? `${group.level}%` : '0%' }}
              />
            </div>
            <ul className="chip-row">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
