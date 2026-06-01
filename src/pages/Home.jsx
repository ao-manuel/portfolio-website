import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { projects, services, testimonials } from '../data/content'
import Marquee from '../components/Marquee'
import styles from './Home.module.css'

function AnimSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>
}

const MARQUEE_ITEMS = ['Follow Up Boss', 'kvCORE', 'IDX Integration', 'Elementor Pro', 'Zapier', 'WPForms', 'Rank Math', 'Astra Pro', 'WordPress', 'Calendly']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={`wrap ${styles.heroGrid}`}>
          {/* Left */}
          <div className={`fade-up visible ${styles.heroLeft}`}>
            <p className={styles.kicker}>
              <span className={styles.kickerDot} />
              WordPress Real Estate Specialist
            </p>
            <h1 className={styles.heroTitle}>
              WordPress Sites for<br />
              <em className="gradient-text">Real Estate Agents</em>
            </h1>
            <p className={styles.heroSub}>
              Lead-generating WordPress sites that connect directly to your CRM — every visitor becomes a lead in Follow Up Boss automatically.
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
            <div className={styles.trustStrip}>
              <span className={styles.trustStars}>★★★★★</span>
              <span className={styles.trustText}>15+ agents trust Realtyfub</span>
            </div>
          </div>

          {/* Right — Project Preview Card */}
          <div className={`fade-up visible ${styles.heroRight}`}>
            <div className={styles.projectPreview}>
              <div className={styles.previewBar}>
                <div className={styles.previewDots}>
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <div className={styles.previewUrl}>realtyfub.com/sarah-mitchell</div>
              </div>
              <div className={styles.previewBody}>
                <div className={styles.previewLocation}>Miami, FL</div>
                <div className={styles.previewTitle}>Sarah Mitchell Realty</div>
                <div className={styles.previewTagRow}>
                  <span className={styles.previewTag}>IDX</span>
                  <span className={styles.previewTag}>Follow Up Boss</span>
                  <span className={styles.previewTag}>Elementor</span>
                </div>
                <div className={styles.previewMeta}>40+ leads/month · FUB Connected</div>
                <div className={styles.previewStrip}>
                  <div className={styles.previewStripLine} />
                  <div className={styles.previewStripLine} style={{ width: '60%' }} />
                  <div className={styles.previewStripLine} style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <Marquee items={MARQUEE_ITEMS} />
      </div>

      {/* STATS BAR */}
      <AnimSection>
        <div className={styles.statsBar}>
          {[
            { num: '15+', label: 'Sites Built' },
            { num: '3', label: 'US States Served' },
            { num: 'FUB', label: 'Certified Setup' },
            { num: '100%', label: '5-Star Reviews' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={`${styles.statNum} gradient-text`}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </AnimSection>

      {/* PORTFOLIO BENTO */}
      <section className="section">
        <AnimSection>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Real Estate Sites I've Built</h2>
          <p className="section-desc">Every project is a live lead machine — IDX integrated, CRM connected, and built around the way agents actually work.</p>
        </AnimSection>
        <div className={styles.bentoGrid}>
          {projects.slice(0, 4).map((p, i) => (
            <AnimSection key={p.id}>
              <div className={`${styles.projectCard} ${i === 0 ? styles.featuredCard : ''} ${p.color === 'gold' ? styles.cardGold : p.color === 'teal' ? styles.cardTeal : ''}`}>
                <div className={styles.cardImg}>
                  <span className={styles.cardImgLocation}>{p.location}</span>
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

      {/* SERVICES */}
      <section className="section">
        <AnimSection>
          <p className="section-label">Services &amp; Pricing</p>
          <h2 className="section-title">Clear Packages. No Surprises.</h2>
          <p className="section-desc">Three packages built around how real estate agents actually work — from solo agents getting started to teams needing a full lead machine.</p>
        </AnimSection>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <AnimSection key={s.name}>
              <div className={`${styles.serviceCard} ${s.highlight ? styles.serviceHighlight : ''}`}>
                {s.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <div className={`${styles.servicePrice} ${s.highlight ? 'gradient-text' : ''}`}>{s.price}</div>
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

      {/* TESTIMONIALS */}
      <section className="section">
        <AnimSection>
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Agents Say</h2>
        </AnimSection>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <AnimSection key={i}>
              <div className={styles.testimonialCard}>
                <div className={styles.bigQuote}>&ldquo;</div>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.quote}>{t.quote}</p>
                <div>
                  <p className={styles.reviewer}>{t.name}</p>
                  <p className={styles.reviewerRole}>{t.role}</p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* CTA FULL WIDTH */}
      <AnimSection>
        <div className={styles.ctaFull}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaInner}>
            <p className={styles.ctaKicker}>Let's Work Together</p>
            <h2 className={styles.ctaTitle}>Ready to build your<br /><em className="gradient-text">real estate site?</em></h2>
            <p className={styles.ctaDesc}>Free 30-min discovery call. I typically respond within 4 hours.</p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn-primary">Book a Call →</Link>
              <Link to="/services" className="btn-ghost">View Pricing</Link>
            </div>
          </div>
        </div>
      </AnimSection>
    </>
  )
}
