import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import styles from './About.module.css'

function Anim({ children, delay = 0 }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up" style={delay ? { transitionDelay: `${delay}ms` } : {}}>{children}</div>
}

const TOOLS = [
  { name: 'Follow Up Boss', tag: 'CRM', gold: true },
  { name: 'kvCORE', tag: 'CRM', gold: true },
  { name: 'IDX Broker', tag: 'IDX' },
  { name: 'Elementor Pro', tag: 'Builder' },
  { name: 'Astra Pro', tag: 'Theme' },
  { name: 'Zapier', tag: 'Automation' },
  { name: 'WPForms', tag: 'Forms' },
  { name: 'Rank Math', tag: 'SEO' },
  { name: 'LiteSpeed Cache', tag: 'Speed' },
  { name: 'Calendly', tag: 'Booking' },
]

const STATS = [
  { num: '15+', label: 'Sites Delivered' },
  { num: '3', label: 'US States (Primary)' },
  { num: '100%', label: '5-Star Reviews' },
  { num: '< 4h', label: 'Avg Response Time' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">About</p>
        <h1>The Developer Behind <em>Realtyfub</em></h1>
        <p>One specialization. One niche. WordPress websites that generate real leads for real estate agents across the US.</p>
      </div>

      {/* ── INTRO SPLIT ── */}
      <section className={styles.introSection}>
        <div className="wrap">
          <div className={styles.introGrid}>
            <Anim className={styles.photoCol}>
              <div className={styles.photoWrap}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                  alt="Developer"
                  className={styles.photo}
                />
                <div className={styles.photoBadge}>
                  <span className={styles.photoBadgeNum}>15+</span>
                  <span className={styles.photoBadgeLabel}>Sites Live</span>
                </div>
              </div>
              <div className={styles.statsCol}>
                {STATS.map(s => (
                  <div key={s.label} className={styles.statRow}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </Anim>

            <div className={styles.contentCol}>
              <Anim delay={80}>
                <p className="section-num">01 — Background</p>
                <h2 className="section-heading">
                  One Niche. Deep Expertise. <em>Real Results.</em>
                </h2>
              </Anim>
              <Anim delay={160}>
                <p className={styles.bodyText}>
                  I specialize in one thing: WordPress websites that generate real leads for real estate agents in Florida,
                  California, and Texas — connected to Follow Up Boss and kvCORE from day one.
                </p>
                <p className={styles.bodyText}>
                  Before I focused on real estate, I built WordPress sites for restaurants, salons, and e-commerce businesses.
                  But agents kept asking the same questions: "Can it connect to FUB? Will it work with IDX?" I went deep.
                  Every site I build now is designed around the tools agents actually use daily.
                </p>
                <p className={styles.bodyText}>
                  I work remotely with agents across all 50 US states. Most projects deliver in 2–3 weeks. Every client
                  gets a Loom walkthrough so they can manage their site without needing me long-term.
                </p>
              </Anim>

              <Anim delay={200}>
                <div className={styles.infoCards}>
                  {[
                    { k: 'Name', v: 'Realtyfub Dev' },
                    { k: 'Email', v: 'hello@realtyfub.com' },
                    { k: 'Availability', v: 'Open to Projects' },
                    { k: 'Based', v: 'US Remote' },
                  ].map(({ k, v }) => (
                    <div key={k} className={styles.infoCard}>
                      <span className={styles.infoKey}>{k}</span>
                      <span className={styles.infoVal}>{v}</span>
                    </div>
                  ))}
                </div>
              </Anim>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className={styles.toolsSection}>
        <div className="wrap">
          <Anim>
            <p className="section-num">02 — Tech Stack</p>
            <h2 className="section-heading">
              Tools I Master <em>Daily.</em>
            </h2>
          </Anim>
          <Anim delay={80}>
            <div className={styles.toolsGrid}>
              {TOOLS.map(t => (
                <div key={t.name} className={`${styles.toolCard} ${t.gold ? styles.toolGold : ''}`}>
                  <span className={styles.toolName}>{t.name}</span>
                  <span className={styles.toolTag}>{t.tag}</span>
                </div>
              ))}
            </div>
          </Anim>
        </div>
      </section>

      {/* ── STATES ── */}
      <section className={styles.statesSection}>
        <div className="wrap">
          <Anim>
            <p className="section-num">03 — Markets</p>
            <h2 className="section-heading">
              Primary US Markets <em>Served.</em>
            </h2>
          </Anim>
          <Anim delay={80}>
            <div className={styles.statesGrid}>
              {[
                { state: 'Florida', cities: 'Miami · Tampa · Orlando · Fort Lauderdale', img: 'https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?w=400&q=80' },
                { state: 'California', cities: 'Los Angeles · San Francisco · San Diego · Orange County', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&q=80' },
                { state: 'Texas', cities: 'Dallas · Houston · Austin · San Antonio', img: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&q=80' },
              ].map(s => (
                <div key={s.state} className={styles.stateCard}>
                  <div className={styles.stateImg} style={{ backgroundImage: `url(${s.img})` }} />
                  <div className={styles.stateBody}>
                    <h3 className={styles.stateName}>{s.state}</h3>
                    <p className={styles.stateCities}>{s.cities}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.statesNote}>+ All 50 US states served remotely.</p>
          </Anim>
        </div>
      </section>

      {/* ── CTA ── */}
      <Anim>
        <div className={styles.ctaWrap}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <p className="section-num" style={{ justifyContent: 'center' }}>Ready?</p>
            <h2 className={styles.ctaTitle}>
              Let's build your<br />
              <em className="gradient-text">real estate site.</em>
            </h2>
            <p className={styles.ctaSub}>Free 30-min discovery call. No pressure.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 8 }}>Book a Free Call →</Link>
          </div>
        </div>
      </Anim>
    </>
  )
}
