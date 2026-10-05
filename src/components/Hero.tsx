import { profile } from '../data/content'

// Hero with modern player-card identity. Inputs: none. Returns: first-viewport brand block.
export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Intro">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Player profile · Online</p>
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__role">
          {profile.role} · {profile.company}
        </p>
        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View quests
          </a>
          <a className="btn btn--ghost" href="#experience">
            Campaign log
          </a>
        </div>
      </div>

      <aside className="player-card" aria-label="Player stats">
        <div className="player-card__frame">
          <div className="player-card__top">
            <span className="player-card__class">{profile.className}</span>
            <span className="player-card__level">LVL {profile.level}</span>
          </div>
          <div className="player-card__avatar">
            <img
              src="/profile.png"
              alt={`${profile.name} portrait`}
              width={640}
              height={800}
            />
          </div>
          <dl className="player-card__stats">
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{profile.years} years</dd>
            </div>
            <div>
              <dt>Main stack</dt>
              <dd>React · Next · Angular · TS</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd className="player-card__online">Open to contact</dd>
            </div>
          </dl>
          <div className="player-card__xp">
            <div className="player-card__xp-label">
              <span>Campaign XP</span>
              <span>86%</span>
            </div>
            <div className="player-card__xp-track">
              <div className="player-card__xp-fill" style={{ width: '86%' }} />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
