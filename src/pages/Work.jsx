import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { projects } from '../data/content'
import styles from './Work.module.css'

const PROJECT_IMGS = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
  'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=700&q=80',
]

function Anim({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up">{children}</div>
}

export default function Work() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">Portfolio</p>
        <h1>Real Estate Sites <em>Built to Convert</em></h1>
        <p>Every project is a live lead machine — IDX integrated, CRM connected, built around the way US agents actually work.</p>
      </div>

      <section className={styles.workSection}>
        <div className="wrap">
          <div className={styles.grid}>
            {projects.map((p, i) => (
              <Anim key={p.id}>
                <div className={`${styles.card} ${i % 3 === 0 ? styles.cardFeat : ''}`}>
                  <div
                    className={styles.cardImg}
                    style={{ backgroundImage: `url(${PROJECT_IMGS[i % PROJECT_IMGS.length]})` }}
                  >
                    <span className={styles.locLabel}>{p.location}</span>
                    <div className={styles.cardImgOverlay}>
                      <span className={styles.viewLink}>View Demo →</span>
                    </div>
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
                  </div>
                </div>
              </Anim>
            ))}
          </div>

          <Anim>
            <p className={styles.disclaimer}>
              Screenshots shown are representative. Live demo links available on request — message me and I'll share access to any project.
            </p>
          </Anim>

          <Anim>
            <div className={styles.ctaBox}>
              <p className={styles.ctaNum}>— Next Project?</p>
              <h2 className={styles.ctaTitle}>Like what you see?<br /><em>Let's build yours.</em></h2>
              <p className={styles.ctaDesc}>Tell me about your market, CRM, and goals — I'll scope a site that fits.</p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 8 }}>Start a Project →</Link>
            </div>
          </Anim>
        </div>
      </section>
    </>
  )
}
