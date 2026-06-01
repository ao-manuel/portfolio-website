import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import styles from './About.module.css'

function AnimSection({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up">{children}</div>
}

const tools = [
  { name: 'Follow Up Boss', tag: 'CRM', teal: true },
  { name: 'kvCORE', tag: 'CRM', teal: true },
  { name: 'IDX Broker', tag: 'IDX' },
  { name: 'Elementor Pro', tag: 'Builder' },
  { name: 'Astra Pro', tag: 'Theme' },
  { name: 'Zapier', tag: 'Automation' },
  { name: 'WPForms', tag: 'Forms' },
  { name: 'Rank Math', tag: 'SEO' },
  { name: 'LiteSpeed Cache', tag: 'Performance' },
  { name: 'Calendly', tag: 'Booking' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">About</p>
        <h1>The Developer Behind <em>Realtyfub</em></h1>
        <p>One specialization. One niche. WordPress websites that generate real leads for real estate agents in the US.</p>
      </div>

      <section className="section">
        <div className={styles.layout}>
          <AnimSection>
            <div className={styles.photoCol}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoLabel}>Your Photo</span>
                <span className={styles.photoSub}>Professional headshot</span>
              </div>
              <div className={styles.statsList}>
                {[
                  { num: '15+', label: 'Real estate sites built' },
                  { num: '3', label: 'US states (FL, CA, TX)' },
                  { num: '100%', label: '5-star client rating' },
                  { num: '4hrs', label: 'Average response time' },
                ].map(s => (
                  <div key={s.label} className={styles.statRow}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          <div className={styles.content}>
            <AnimSection>
              <p className="section-label">Specialization</p>
              <p className={styles.intro}>
                I specialize in one thing: WordPress websites that generate real leads for real estate agents in Florida, California, and Texas — connected to Follow Up Boss and kvCORE from day one.
              </p>
            </AnimSection>
            <AnimSection>
              <p className={styles.body}>
                Before I focused on real estate, I built WordPress sites for restaurants, salons, e-commerce — all of it. The work was fine. But I noticed something: agents who came to me kept asking the same questions. "Can it connect to Follow Up Boss?" "Will it work with IDX?" "How do I make sure leads get into my CRM automatically?"
              </p>
              <p className={styles.body} style={{ marginTop: 16 }}>
                Those questions had specific answers. Answers that required knowing the real estate tech stack deeply — not just WordPress. So I went deep. Every site I build now is designed from the ground up around the tools US agents actually use daily.
              </p>
              <p className={styles.body} style={{ marginTop: 16 }}>
                I work remotely with agents across the US. Most projects are delivered in 2–3 weeks. Every client gets a loom walkthrough so they can manage their site without depending on me.
              </p>
            </AnimSection>

            <AnimSection>
              <div className={styles.toolsSection}>
                <p className={styles.toolsLabel}>Tools I Master</p>
                <div className={styles.toolsGrid}>
                  {tools.map(t => (
                    <div key={t.name} className={`${styles.toolChip} ${t.teal ? styles.toolTeal : ''}`}>
                      <span>{t.name}</span>
                      <span className={styles.toolTag}>{t.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

            <AnimSection>
              <div className={styles.states}>
                <p className={styles.statesLabel}>US States Served</p>
                <div className={styles.statesRow}>
                  {['Florida', 'California', 'Texas'].map(s => (
                    <div key={s} className={styles.stateChip}>{s}</div>
                  ))}
                  <div className={styles.stateChip} style={{ opacity: 0.5 }}>+ All 50 states</div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      <AnimSection>
        <div className={styles.cta}>
          <div className="wrap">
            <p className={styles.ctaQuote}>"Your portfolio is not a résumé — it's your best sales agent."</p>
            <Link to="/contact" className="btn-primary">Let's Build Your Site →</Link>
          </div>
        </div>
      </AnimSection>
    </>
  )
}
