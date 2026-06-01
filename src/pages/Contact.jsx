import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'

function AnimSection({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up">{children}</div>
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Replace with your EmailJS service/template IDs
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', budget: '', message: '' })
  }

  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">Contact</p>
        <h1>Let's Build Your <em>Real Estate Site</em></h1>
        <p>Free 30-min discovery call for all inquiries. I typically respond within 4 hours.</p>
      </div>

      <section className="section">
        <div className={styles.layout}>
          <AnimSection>
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Get In Touch</p>
                <p className={styles.infoText}>
                  I work with US real estate agents remotely. Tell me about your business and what you're looking to build — I'll come back with a proposal within 24 hours.
                </p>
              </div>

              <div className={styles.contactDetails}>
                {[
                  { icon: '✉', label: 'Email', value: 'hello@realtyfub.com' },
                  { icon: '📅', label: 'Booking', value: 'calendly.com/realtyfub' },
                  { icon: '⏱', label: 'Response', value: 'Under 4 hours avg.' },
                  { icon: '🌎', label: 'Serving', value: 'FL · CA · TX + all US states' },
                ].map(d => (
                  <div key={d.label} className={styles.detailRow}>
                    <span className={styles.detailIcon}>{d.icon}</span>
                    <div>
                      <p className={styles.detailLabel}>{d.label}</p>
                      <p className={styles.detailValue}>{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.calendlyBox}>
                <p className={styles.calendlyLabel}>Prefer to book directly?</p>
                <a href="#" className="btn-ghost" style={{ display: 'inline-flex' }}>
                  Book a 30-min Call →
                </a>
              </div>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.formCol}>
              {status === 'sent' ? (
                <div className={styles.successMsg}>
                  <span className={styles.successIcon}>✓</span>
                  <h3>Message sent!</h3>
                  <p>I'll get back to you within 4 hours. Check your inbox — I may reply with a few quick questions before sending a proposal.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Your Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Sarah Mitchell"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="sarah@mitchellrealty.com"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className={styles.input} required>
                      <option value="">Select a package...</option>
                      <option value="starter">Agent Starter — $800</option>
                      <option value="pro">Agent Pro — $1,500</option>
                      <option value="team">Team / Brokerage — $2,500</option>
                      <option value="custom">Custom / Not sure yet</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Tell Me About Your Real Estate Business</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="I'm a solo agent in Miami FL, currently using Follow Up Boss. I need a site with IDX integration and seller lead funnels..."
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <><span className={styles.spinner} /> Sending...</>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                  <p className={styles.formNote}>No spam. Your info is only used to respond to your inquiry.</p>
                </form>
              )}
            </div>
          </AnimSection>
        </div>
      </section>
    </>
  )
}
