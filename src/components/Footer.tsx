import { profile } from '../data/content'

// Site footer. Inputs: none. Returns: copyright line.
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {profile.name}. Built with React + Vite · Deployed on GitHub Pages.
      </p>
    </footer>
  )
}
