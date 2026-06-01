import { Link } from 'react-router-dom'
import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { services, faqs } from '../data/content'
import styles from './Services.module.css'

function AnimSection({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up">{children}</div>
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`} onClick={() => setOpen(o => !o)}>
      <div className={styles.faqQ}>
        <span>{q}</span>
        <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </div>
      {open && <p className={styles.faqA}>{a}</p>}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">Services & Pricing</p>
        <h1>Clear Packages.<br /><em>No Surprises.</em></h1>
        <p>Three packages built around how real estate agents actually work — from solo agents getting started to full brokerage teams.</p>
      </div>

      <section className="section">
        <AnimSection>
          <p className="section-label">Packages</p>
          <h2 className="section-title">Choose Your Package</h2>
        </AnimSection>
        <div className={styles.grid}>
          {services.map(s => (
            <AnimSection key={s.name}>
              <div className={`${styles.card} ${s.highlight ? styles.highlight : ''}`}>
                {s.highlight && <div className={styles.badge}>Most Popular</div>}
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{s.icon}</span>
                  <div>
                    <h3 className={styles.name}>{s.name}</h3>
                    <p className={styles.desc}>{s.desc}</p>
                  </div>
                </div>
                <div className={styles.price}>{s.price}</div>
                <ul className={styles.features}>
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className={s.highlight ? 'btn-primary' : 'btn-ghost'} style={{ justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className={styles.addons}>
            <p className="section-label" style={{ marginBottom: 20 }}>Add-Ons</p>
            <div className={styles.addonGrid}>
              {[
                { name: 'Demo Site Build', price: '+$200', desc: 'Full fictional US agent site for your portfolio' },
                { name: 'SEO Setup', price: '+$300', desc: 'Rank Math config, keyword targeting, meta optimization' },
                { name: 'Monthly Retainer', price: '$150/mo', desc: 'Updates, security, backups & 1hr of edits/month' },
                { name: 'Blog Content', price: '+$100/post', desc: 'Real estate WordPress articles, SEO-optimized' },
              ].map(a => (
                <div key={a.name} className={styles.addonCard}>
                  <div className={styles.addonName}>{a.name}</div>
                  <div className={styles.addonPrice}>{a.price}</div>
                  <p className={styles.addonDesc}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </section>

      <section className="section">
        <AnimSection>
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-desc">Everything agents ask before hiring. If your question isn't here, drop me a message.</p>
        </AnimSection>
        <div className={styles.faqList}>
          {faqs.map(f => (
            <AnimSection key={f.q}>
              <FaqItem q={f.q} a={f.a} />
            </AnimSection>
          ))}
        </div>
      </section>
    </>
  )
}
