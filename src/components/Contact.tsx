import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'

// Contact / reach-out section. Inputs: none. Returns: contact channels from CV + profile.
export function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()
  const { contacts } = profile

  return (
    <section
      id="contact"
      ref={ref}
      className={`section reveal ${visible ? 'reveal--in' : ''}`}
    >
      <div className="section__head">
        <p className="section__kicker">Party invite</p>
        <h2>Let&apos;s talk</h2>
        <p>Open to interesting frontend / product engineering work and collaboration.</p>
      </div>

      <div className="contact">
        <a className="contact__link" href={`mailto:${contacts.email}`}>
          Email
          <span>{contacts.email}</span>
        </a>
        <a className="contact__link" href={`tel:${contacts.phone.replace(/\s/g, '')}`}>
          Phone
          <span>{contacts.phone}</span>
        </a>
        <a className="contact__link" href={contacts.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <span>yurii-boiko</span>
        </a>
        <a className="contact__link" href={contacts.telegram} target="_blank" rel="noreferrer">
          Telegram
          <span>@Yura935</span>
        </a>
        <a className="contact__link" href={contacts.github} target="_blank" rel="noreferrer">
          GitHub
          <span>Yura935</span>
        </a>
        <a className="contact__link" href={contacts.dou} target="_blank" rel="noreferrer">
          DOU
          <span>Profile</span>
        </a>
      </div>
    </section>
  )
}
