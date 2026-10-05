import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { buildDemoUrl } from '../utils/demoCredentials'

// Featured projects as quest cards. Inputs: none. Returns: project list with demo links.
export function Projects() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="projects"
      ref={ref}
      className={`section reveal ${visible ? 'reveal--in' : ''}`}
    >
      <div className="section__head">
        <p className="section__kicker">Active quests</p>
        <h2>Selected projects</h2>
        <p>Live demos first. Each quest links to a running product you can try.</p>
      </div>

      <div className="projects">
        {projects.map((project, index) => {
          const shouldEmbed =
            project.embedDemoCredentials !== false &&
            Boolean(project.demoUser && project.demoPassword)
          const demoHref = shouldEmbed
            ? buildDemoUrl(project.liveUrl, project.demoUser!, project.demoPassword!)
            : project.liveUrl

          return (
            <article
              key={project.id}
              className="quest"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="quest__meta">
                <span>{project.tagline}</span>
                <span className="quest__status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.showCredentialsNote && project.demoUser && project.demoPassword ? (
                <p className="quest__creds">
                  Demo login: <code>{project.demoUser}</code> /{' '}
                  <code>{project.demoPassword}</code>
                </p>
              ) : null}
              <ul className="chip-row">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="quest__actions">
                <a className="btn btn--primary" href={demoHref} target="_blank" rel="noreferrer">
                  Open demo
                </a>
                {project.repoUrl ? (
                  <a
                    className="btn btn--ghost"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
                ) : (
                  <span className="quest__soon">Repo coming soon</span>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
