import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { projects, services, testimonials } from '../data/content'
import styles from './Home.module.css'

function AnimSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="wrap">
          <div className={`fade-up visible ${styles.heroInner}`}>
            <p className={styles.kicker}>WordPress Real Estate Specialist</p>
            <h1 className={styles.heroTitle}>
              WordPress Websites<br />for <em>Real Estate Agents</em>
            </h1>
            <p className={styles.heroSub}>
              I build lead-generating sites for US real estate agents that connect directly to your CRM — every visitor becomes a lead in Follow Up Boss automatically.
            </p>
            <div className={styles.heroChips}>
              <span className="chip gold">Follow Up Boss Certified</span>
              <span className="chip teal">kvCORE Integration</span>
              <span className="chip">FL · CA · TX</span>
              <span className="chip">IDX Ready</span>
            </div>
            <div className={styles.heroBtns}>
              <Link to="/work" className="btn-primary">View My Work →</Link>
              <Link to="/services" className="btn-ghost">See Packages</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <AnimSection>
        <div className={styles.statsBar}>
          {[
            { num: '15+', label: 'Sites Built' },
            { num: '3', label: 'US States Served' },
            { num: 'FUB', label: 'Certified Setup' },
            { num: '100%', label: '5-Star Reviews' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </AnimSection>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="section">
        <AnimSection>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Real Estate Sites I've Built</h2>
          <p className="section-desc">Every project is a live lead machine — IDX integrated, CRM connected, and built around the way agents actually work.</p>
        </AnimSection>
        <div className={styles.projectGrid}>
          {projects.slice(0, 3).map((p, i) => (
            <AnimSection key={p.id}>
              <div className={`${styles.projectCard} ${p.color === 'gold' ? styles.cardGold : p.color === 'teal' ? styles.cardTeal : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.cardImg}>
                  <span>{p.location}</span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTag}>{p.tag}</p>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <div className={styles.cardTags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.miniTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
        <AnimSection>
          <div className={styles.viewAll}>
            <Link to="/work" className="btn-ghost">View All Projects →</Link>
          </div>
        </AnimSection>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <AnimSection>
          <p className="section-label">Services & Pricing</p>
          <h2 className="section-title">Clear Packages. No Surprises.</h2>
          <p className="section-desc">Three packages built around how real estate agents actually work — from solo agents getting started to teams needing a full lead machine.</p>
        </AnimSection>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <AnimSection key={s.name}>
              <div className={`${styles.serviceCard} ${s.highlight ? styles.serviceHighlight : ''}`}>
                {s.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <div className={styles.servicePrice}>{s.price}</div>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.serviceFeatures}>
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className={s.highlight ? 'btn-primary' : 'btn-ghost'} style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <AnimSection>
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Agents Say</h2>
        </AnimSection>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <AnimSection key={i}>
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.quote}>"{t.quote}"</p>
                <div>
                  <p className={styles.reviewer}>{t.name}</p>
                  <p className={styles.reviewerRole}>{t.role}</p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <AnimSection>
        <div className={styles.ctaStrip}>
          <div>
            <h2 className={styles.ctaTitle}>Ready to build your real estate site?</h2>
            <p className={styles.ctaDesc}>Free 30-min discovery call. I typically respond within 4 hours.</p>
          </div>
          <Link to="/contact" className="btn-primary">Book a Call →</Link>
        </div>
      </AnimSection>
    </>
  )
}
