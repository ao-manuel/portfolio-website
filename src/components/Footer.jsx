import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Realtyfub</span>
            <p className={styles.tagline}>WordPress websites for real estate agents — fully integrated with Follow Up Boss & kvCORE.</p>
          </div>
          <div className={styles.links}>
            <div className={styles.col}>
              <span className={styles.colLabel}>Navigation</span>
              <Link to="/">Home</Link>
              <Link to="/work">Work</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>Services</span>
              <span>WordPress Development</span>
              <span>IDX Integration</span>
              <span>Follow Up Boss Setup</span>
              <span>kvCORE Integration</span>
              <span>Lead Funnels</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} Realtyfub. All rights reserved.</span>
          <span className={styles.made}>hello@realtyfub.com</span>
        </div>
      </div>
    </footer>
  )
}
