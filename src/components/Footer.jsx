import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail('') }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Col 1 — Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <span>Realtyfub</span>
            </Link>
            <p className={styles.tagline}>
              WordPress websites for real estate agents — fully integrated with Follow Up Boss &amp; kvCORE
              from day one.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.social} aria-label="LinkedIn">in</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.social} aria-label="Twitter/X">𝕏</a>
              <a href="https://upwork.com" target="_blank" rel="noreferrer" className={styles.social} aria-label="Upwork">Up</a>
              <a href="https://fiverr.com" target="_blank" rel="noreferrer" className={styles.social} aria-label="Fiverr">Fi</a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Quick Links</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Col 3 — Contact */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Contact</span>
            <span>hello@realtyfub.com</span>
            <span>Available Mon–Fri</span>
            <span>Response &lt; 4 hours</span>
            <span>Serving FL · CA · TX</span>
            <Link to="/contact" className={styles.footerCta}>Book a Call →</Link>
          </div>

          {/* Col 4 — Newsletter */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Stay Updated</span>
            <p className={styles.newsletterDesc}>
              Real estate web tips, CRM guides, and IDX updates — monthly, no spam.
            </p>
            {sent ? (
              <p className={styles.sentMsg}>✓ You're on the list!</p>
            ) : (
              <form onSubmit={handleNewsletter} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.submitBtn}>→</button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} Realtyfub. All rights reserved.</span>
          <span className={styles.made}>Made with ♥ for Real Estate Agents</span>
        </div>
      </div>
    </footer>
  )
}
