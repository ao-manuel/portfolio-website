import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { projects } from '../data/content'
import styles from './Work.module.css'

function AnimSection({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up">{children}</div>
}

export default function Work() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">Portfolio</p>
        <h1>Real Estate Sites <em>I've Built</em></h1>
        <p>Every project below is a live lead machine — IDX integrated, CRM connected, and built around how US real estate agents actually work.</p>
      </div>

      <section className="section">
        <div className={styles.grid}>
          {projects.map(p => (
            <AnimSection key={p.id}>
              <div className={`${styles.card} ${p.color === 'gold' ? styles.cardGold : p.color === 'teal' ? styles.cardTeal : ''}`}>
                <div className={styles.cardImg}>
                  <span className={styles.locLabel}>{p.location}</span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.tag}>{p.tag}</p>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.miniTag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.demoLink}>View Demo →</span>
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="info-note" style={{ marginTop: 32 }}>
            <strong>Note:</strong> Screenshots shown are representative wireframes. Live demo links available on request — send me a message and I'll share access to any project.
          </div>
        </AnimSection>

        <AnimSection>
          <div className={styles.cta}>
            <h2>Like what you see?</h2>
            <p>Let's talk about building your real estate site.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 20 }}>Start a Project →</Link>
          </div>
        </AnimSection>
      </section>
    </>
  )
}
