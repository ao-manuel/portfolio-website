import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { services, testimonials } from '../data/content'
import styles from './Home.module.css'

const MARQUEE_ITEMS = [
  'Follow Up Boss', 'kvCORE Integration', 'IDX Integration', 'Elementor Pro',
  'WordPress', 'Zapier', 'Astra Pro', 'WPForms', 'Rank Math', 'Calendly',
  'Lead Funnels', 'MLS Integration',
]

const SKILLS = [
  { label: 'WordPress Development', pct: 95 },
  { label: 'IDX Integration', pct: 90 },
  { label: 'Follow Up Boss Setup', pct: 88 },
  { label: 'Elementor Pro', pct: 93 },
  { label: 'kvCORE Integration', pct: 85 },
  { label: 'Lead Funnel Design', pct: 91 },
]

const STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We talk through your real estate business, CRM setup, goals, and what a successful site looks like for you.' },
  { num: '02', title: 'Design & Strategy', desc: 'I design the site structure, page layouts, and brand system — all tailored to converting real estate visitors into leads.' },
  { num: '03', title: 'Build & Integrate', desc: 'WordPress build with IDX, FUB/kvCORE, Zapier automations, and all lead capture forms fully connected.' },
  { num: '04', title: 'Launch & Handover', desc: 'Live launch, PageSpeed check, a Loom walkthrough video, and 30 days of support included.' },
]

const PORTFOLIO = [
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', title: 'Sarah Mitchell Realty', tag: 'FLORIDA · INDIVIDUAL AGENT' },
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', title: 'The Rodriguez Group', tag: 'TEXAS · TEAM SITE' },
  { img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80', title: 'LA Home Valuation', tag: 'CALIFORNIA · LEAD PAGE' },
]

function Anim({ children, className = '', delay = 0, tag: Tag = 'div' }) {
  const ref = useScrollAnimation()
  return (
    <Tag ref={ref} className={`fade-up ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>
      {children}
    </Tag>
  )
}

function SkillBar({ label, pct, delay = 0 }) {
  const barRef = useRef(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.width = pct + '%'; obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillLabel}>{label}</span>
        <span className={styles.skillPct}>{pct}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div ref={barRef} className={styles.skillFill} style={{ width: 0, transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}ms` }} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={`wrap ${styles.heroGrid}`}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <p className={styles.heroKicker}>
              <span className={styles.kickerDot} />
              WordPress Real Estate Specialist
            </p>
            <h1 className={styles.heroTitle}>
              I Build WordPress<br />
              Sites That Turn<br />
              Agents Into<br />
              <span className="gradient-text">Closers.</span>
            </h1>
            <p className={styles.heroSub}>
              Lead-generating WordPress websites for US real estate agents — fully
              integrated with Follow Up Boss &amp; kvCORE from day one.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/work" className="btn-primary">View My Work →</Link>
              <Link to="/services" className="btn-ghost">See Packages</Link>
            </div>
            <p className={styles.trustStrip}>
              <span className={styles.trustStars}>★★★★★</span>
              <span className={styles.trustText}>15+ agents · FL · CA · TX</span>
            </p>
          </div>

          {/* Right — image card */}
          <div className={styles.heroRight}>
            <div className={styles.heroRing} />
            <div className={styles.heroImgCard}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Realtyfub Developer"
                className={styles.heroImg}
              />
              <div className={styles.heroBadgeFUB}>
                <span className={styles.badgeCheck}>✓</span>
                Follow Up Boss
              </div>
              <div className={styles.heroBadgeSites}>
                <span className={styles.badgeSitesNum}>15+</span>
                <span className={styles.badgeSitesLabel}>Sites Built</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <Marquee items={MARQUEE_ITEMS} />

      {/* ── ABOUT ── */}
      <section className={styles.aboutSection}>
        <div className={`wrap ${styles.aboutGrid}`}>
          <Anim className={styles.aboutImages}>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" alt="Luxury house" className={styles.aboutImgMain} />
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80" alt="House 2" className={styles.aboutImgSub} />
            <div className={styles.aboutBadge}>
              <span className={styles.aboutBadgeNum}>15+</span>
              <span className={styles.aboutBadgeLabel}>Sites Built</span>
            </div>
          </Anim>
          <Anim className={styles.aboutContent} delay={100}>
            <p className="section-num">01 — About</p>
            <h2 className="section-heading">
              Helping Real Estate Agents Win{' '}<em>Online.</em>
            </h2>
            <p className={styles.aboutDesc}>
              I specialize in one thing: WordPress websites that generate real leads for US real estate
              agents — connected to Follow Up Boss and kvCORE from day one. Before specializing, I built
              sites for many industries. But agents kept asking the same questions: Can it connect to
              FUB? Will it work with IDX? I went deep. Every site I build now is designed around the
              tools agents actually use.
            </p>
            <div className={styles.infoGrid}>
              {[['Name', 'Realtyfub Dev'], ['Email', 'hello@realtyfub.com'], ['Availability', 'Open to Projects'], ['Response', '< 4 hours']].map(([k, v]) => (
                <div key={k} className={styles.infoCard}>
                  <span className={styles.infoKey}>{k}</span>
                  <span className={styles.infoVal}>{v}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline">Learn More →</Link>
          </Anim>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection}>
        <div className="wrap">
          <div className={styles.servicesHeader}>
            <Anim className={styles.servicesLeft}>
              <p className="section-num">02 — Services</p>
              <h2 className="section-heading">Delivering Excellence <em>Through Experience.</em></h2>
            </Anim>
            <div className={styles.servicesRight}>
              <p className={styles.servicesDesc}>
                Every service is designed around how real estate agents work — the CRMs they
                rely on, the tools they trust, and the leads they need.
              </p>
              <Link to="/services" className="btn-outline">View All →</Link>
            </div>
          </div>
          <div className={styles.svcGrid}>
            {[
              { icon: '🏠', title: 'WordPress Development', desc: 'Custom WordPress sites built for speed, conversion, and mobile. Every site optimized for US real estate search.' },
              { icon: '⭐', title: 'CRM Integration', desc: 'Full Follow Up Boss & kvCORE setup — forms, tags, automations, and lead routing from day one.' },
              { icon: '🏢', title: 'IDX & Lead Funnels', desc: 'IDX Broker integration, seller lead pages, buyer funnels, and Zapier automations that work while you sleep.' },
            ].map((svc, i) => (
              <Anim key={svc.title} className={styles.svcCard} delay={i * 80}>
                <div className={styles.svcIconBox}>{svc.icon}</div>
                <h3 className={styles.svcTitle}>{svc.title}</h3>
                <p className={styles.svcDesc}>{svc.desc}</p>
                <span className={styles.svcArrow}>→</span>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerOverlay} />
        <Anim className={styles.ctaBannerContent}>
          <p className={styles.ctaBannerLabel}>Ready to grow?</p>
          <h2 className={styles.ctaBannerHeading}>Let's Build Your Real Estate Lead Machine.</h2>
          <Link to="/contact" className="btn-primary">Contact Now →</Link>
        </Anim>
      </div>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolioSection}>
        <div className="wrap">
          <Anim className={styles.portHead}>
            <div>
              <p className="section-num">03 — Portfolio</p>
              <h2 className="section-heading">Where Design Meets <em>Function.</em></h2>
            </div>
            <div className={styles.portHeadRight}>
              <p className={styles.portHeadDesc}>Real sites built for real agents — each one connected to the tools that matter.</p>
              <Link to="/work" className="btn-outline">View All →</Link>
            </div>
          </Anim>
          <div className={styles.portGrid}>
            {PORTFOLIO.map((card, i) => (
              <Anim key={card.title} delay={i * 80}>
                <div className={styles.portCard} style={{ backgroundImage: `url(${card.img})` }}>
                  <div className={styles.portOverlay} />
                  <div className={styles.portInfo}>
                    <p className={styles.portTag}>{card.tag}</p>
                    <h3 className={styles.portTitle}>{card.title}</h3>
                    <span className={styles.portArrow}>→</span>
                  </div>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className={styles.skillsSection}>
        <div className="wrap">
          <div className={styles.skillsGrid}>
            <Anim className={styles.skillsLeft}>
              <p className="section-num">04 — Skills</p>
              <h2 className="section-heading">Explore the Core Skills Behind <em>My Work.</em></h2>
              <p className={styles.skillsDesc}>
                Years of real estate web development distilled into the tools and integrations
                that drive agent success across the US market.
              </p>
            </Anim>
            <div className={styles.skillsRight}>
              {SKILLS.map((s, i) => <SkillBar key={s.label} {...s} delay={i * 80} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={styles.processSection}>
        <div className="wrap">
          <Anim className={styles.processHead}>
            <p className="section-num">05 — Process</p>
            <h2 className="section-heading">Step-by-Step Process Behind Every <em>Great Project.</em></h2>
          </Anim>
          <div className={styles.processGrid}>
            {STEPS.map((s, i) => (
              <Anim key={s.num} delay={i * 80}>
                <div className={styles.processCard}>
                  <span className={styles.processNum}>{s.num}</span>
                  <h3 className={styles.processTitle}>{s.title}</h3>
                  <p className={styles.processDesc}>{s.desc}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricingSection}>
        <div className="wrap">
          <div className={styles.pricingHeader}>
            <Anim className={styles.pricingLeft}>
              <p className="section-num">06 — Pricing</p>
              <h2 className="section-heading">Affordable Plans for <em>Every Need.</em></h2>
            </Anim>
            <p className={styles.pricingDesc}>
              Transparent pricing with no hidden fees. Each plan is purpose-built for a
              different stage of your real estate business.
            </p>
          </div>
          <div className={styles.pricingGrid}>
            {services.map((plan, i) => (
              <Anim key={plan.name} delay={i * 100}>
                <div className={`${styles.pricingCard} ${plan.highlight ? styles.pricingHL : ''}`}>
                  {plan.highlight && <div className={styles.popularTag}>Most Popular</div>}
                  <p className={styles.planName}>{plan.name}</p>
                  <p className={`${styles.planPrice} ${plan.highlight ? 'gradient-text' : ''}`}>{plan.price}</p>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  <ul className={styles.planFeatures}>
                    {plan.features.map(f => (
                      <li key={f}><span className={styles.checkmark}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={plan.highlight ? 'btn-primary' : 'btn-ghost'} style={{ display: 'block', textAlign: 'center' }}>
                    Get Started
                  </Link>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testiSection}>
        <div className="wrap">
          <div className={styles.testiGrid}>
            <Anim className={styles.testiLeft}>
              <p className="section-num">07 — Testimonials</p>
              <h2 className="section-heading">Trusted by clients <em>worldwide.</em></h2>
              <p className={styles.testiSubtext}>
                Real results and heartfelt feedback from happy clients who trusted my work to
                build their online presence.
              </p>
              <div className={styles.testiQuoteBlock}>
                <span className={styles.bigQ}>&ldquo;</span>
                <p className={styles.testiQuote}>{testimonials[0].quote}</p>
                <div className={styles.testiAuthor}>
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&q=80" alt={testimonials[0].name} className={styles.testiAvatar} />
                  <div>
                    <p className={styles.testiName}>{testimonials[0].name}</p>
                    <p className={styles.testiRole}>{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
              <div className={styles.googleBadge}>
                <span className={styles.gRating}>5.0</span>
                <span className={styles.gStars}>★★★★★</span>
                <span className={styles.gLabel}>Google Rating</span>
              </div>
            </Anim>

            <Anim className={styles.testiRight} delay={100}>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" alt="Real estate" className={styles.testiImg} />
              <div className={styles.testiFloatCard}>
                <div className={styles.floatStars}>{'★'.repeat(testimonials[1].stars)}</div>
                <p className={styles.floatQuote}>{testimonials[1].quote}</p>
                <div className={styles.floatAuthor}>
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80" alt={testimonials[1].name} className={styles.floatAvatar} />
                  <div>
                    <p className={styles.testiName}>{testimonials[1].name}</p>
                    <p className={styles.testiRole}>{testimonials[1].role}</p>
                  </div>
                </div>
              </div>
            </Anim>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ── */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaStripGlow} />
        <Anim className={styles.ctaStripContent}>
          <p className={styles.ctaStripLabel}>Ready to Start?</p>
          <h2 className={styles.ctaStripHeading}>Let's build something great.</h2>
          <p className={styles.ctaStripSub}>Free 30-min discovery call. I typically respond within 4 hours.</p>
          <div className={styles.ctaStripBtns}>
            <Link to="/contact" className="btn-primary">Book a Call →</Link>
            <Link to="/services" className="btn-ghost">View All Services</Link>
          </div>
        </Anim>
      </section>
    </>
  )
}
