import { navLinks, profile } from '../data/content'

// Top navigation bar. Inputs: none. Returns: sticky nav with section anchors.
export function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark">YB</span>
        <span className="nav__name">{profile.name}</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href={profile.contacts.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </header>
  )
}
