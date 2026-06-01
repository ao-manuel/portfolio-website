'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Marquee from '@/components/Marquee'
import AnimateIn from '@/components/AnimateIn'
import { projects, pricingPlans, testimonials, serviceCards, skills } from '@/data/content'

// ─── Hero ────────────────────────────────────────────────────────────────────
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', handler)
    return () => el?.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-bg overflow-hidden pt-20">
      {/* BG Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, #3db89a 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none transition-all duration-300 ease-out w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)', left: mousePos.x - 250, top: mousePos.y - 250 }} />
      </div>

      <div className="wrap relative z-10 grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section-num">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            WordPress Real Estate Developer
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[clamp(40px,5vw,64px)] font-semibold leading-[1.08] text-text mb-6">
            I Build WordPress Sites That Turn Agents Into{' '}
            <em className="text-gold not-italic">Closers.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
            Fully integrated with Follow Up Boss &amp; kvCORE — your site becomes a 24/7 lead engine, not just an online business card.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex gap-4 flex-wrap mb-10">
            <Link href="/contact" className="btn-primary">Book a Free Call →</Link>
            <Link href="/work" className="btn-ghost">View My Work</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['1494790108377-be9c29b29330', '1500648767791-00dcc994a43e', '1580489944761-15a19d654956', '1507003211169-0a1dd7228f2d'].map((id, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg bg-bg4 overflow-hidden">
                  <Image src={`https://images.unsplash.com/photo-${id}?w=80&q=80`} alt="Client" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(s => <span key={s} className="text-gold text-[10px]">★</span>)}
              </div>
              <span className="font-mono text-[10px] text-muted tracking-[0.08em]">15+ agents trust Realtyfub</span>
            </div>
          </motion.div>
        </div>

        {/* Right — photo card */}
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-dashed border-gold/20 animate-spin" style={{ animationDuration: '40s' }} />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

          <div className="relative rounded-[20px] overflow-hidden border border-border-mid">
            <Image
              src="/images/developer.png"
              alt="Developer"
              width={600}
              height={700}
              className="object-cover w-full h-[480px]"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,18,9,0.7) 0%, transparent 50%)' }} />
          </div>

          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 top-1/4 glass rounded-[12px] px-4 py-3 shadow-xl">
            <span className="font-mono text-[10px] text-gold tracking-[0.1em] block mb-1">FOLLOW UP BOSS</span>
            <span className="font-serif text-[18px] font-semibold text-text">Certified Setup</span>
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute -right-6 bottom-1/4 glass rounded-[12px] px-4 py-3 shadow-xl">
            <span className="font-mono text-[10px] text-muted tracking-[0.1em] block mb-1">SITES BUILT</span>
            <span className="font-serif text-[28px] font-semibold gradient-text">15+</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────
function AboutSection() {
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section className="py-28 bg-bg2">
      <div className="wrap grid md:grid-cols-2 gap-16 items-center">
        <AnimateIn direction="left">
          <div ref={imgRef} className="relative">
            <div className="rounded-[20px] overflow-hidden border border-border-mid">
              <motion.div style={{ y }}>
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80"
                  alt="Luxury house"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[420px]"
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-[16px] overflow-hidden border-4 border-bg2 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80"
                alt="House interior"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-4 -left-4 glass rounded-[12px] px-4 py-3 shadow-xl">
              <span className="font-serif text-[22px] font-semibold gradient-text block">15+</span>
              <span className="font-mono text-[10px] text-muted tracking-[0.1em]">SITES BUILT</span>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn direction="right" delay={0.1}>
          <p className="section-num">01 — About Me</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text mb-6">
            The WordPress developer who <em className="text-gold not-italic">speaks real estate.</em>
          </h2>
          <p className="text-muted text-[15px] leading-relaxed mb-8">
            I specialise exclusively in WordPress for real estate — IDX integrations, Follow Up Boss automations, kvCORE embeds, and high-converting lead funnels. Every line of code is built with one goal: turning website visitors into booked appointments.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Name', value: 'Realtyfub' },
              { label: 'Email', value: 'hello@realtyfub.com' },
              { label: 'Availability', value: 'Open for projects' },
              { label: 'Response', value: 'Within 1 hr' },
            ].map(item => (
              <div key={item.label} className="bg-bg3 border border-border rounded-[12px] p-4">
                <span className="font-mono text-[9px] text-dim tracking-[0.14em] uppercase block mb-1">{item.label}</span>
                <span className="text-[13px] text-text">{item.value}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-primary">Learn More →</Link>
        </AnimateIn>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="py-28 bg-bg">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimateIn>
            <p className="section-num">02 — Services</p>
            <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text">
              Everything you need to <em className="text-gold not-italic">dominate online.</em>
            </h2>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.1} className="max-w-xs">
            <p className="text-muted text-[14px] leading-relaxed">From brand-new WordPress builds to complex CRM integrations — I handle the full stack.</p>
          </AnimateIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((svc, i) => (
            <AnimateIn key={svc.num} delay={i * 0.07} direction="up">
              <div className="group bg-bg3 border border-border rounded-[20px] p-6 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)] transition-all duration-300 cursor-default">
                <div className="font-serif text-[48px] font-semibold text-dim/40 leading-none mb-4">{svc.num}</div>
                <div className="text-[28px] mb-3 group-hover:rotate-[360deg] transition-transform duration-700 inline-block">{svc.icon}</div>
                <h3 className="font-sans text-[14px] font-semibold text-text mb-2">{svc.title}</h3>
                <p className="text-muted text-[12px] leading-relaxed">{svc.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
          alt="Luxury house"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(12,18,9,0.82)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
      </div>
      <div className="relative wrap text-center">
        <AnimateIn>
          <p className="section-num justify-center">— Ready?</p>
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.08] text-text mb-6">
            Stop losing leads to a site<br />that <em className="text-gold not-italic">doesn&apos;t convert.</em>
          </h2>
          <p className="text-muted text-[15px] mb-8 max-w-md mx-auto">Book a free 30-min call and I&apos;ll map out exactly what your site needs to start generating consistent leads.</p>
          <Link href="/contact" className="btn-primary">Book Free Discovery Call →</Link>
        </AnimateIn>
      </div>
    </section>
  )
}

// ─── Portfolio ───────────────────────────────────────────────────────────────
function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section className="py-28 bg-bg2">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimateIn>
            <p className="section-num">03 — Portfolio</p>
            <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text">
              Real sites, <em className="text-gold not-italic">real results.</em>
            </h2>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.1}>
            <Link href="/work" className="btn-outline">View All Projects →</Link>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {projects.slice(0, 5).map((proj, i) => (
            <AnimateIn key={proj.id} delay={i * 0.08} direction="up" className={i === 0 ? 'md:row-span-2' : ''}>
              <div
                className="group relative rounded-[20px] overflow-hidden border border-border cursor-pointer bg-bg3 hover:border-gold/40 transition-all duration-300 h-full"
                onClick={() => setSelectedProject(proj)}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* base overlay — lighter so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent group-hover:via-bg/60 transition-all duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="font-mono text-[9px] text-gold tracking-[0.16em] uppercase mb-2">{proj.tag}</span>
                  <h3 className="font-serif text-[20px] font-semibold text-text mb-2">{proj.title}</h3>
                  <p className="text-[#d0cdc6] text-[12px] mb-3 leading-relaxed translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 line-clamp-2">{proj.desc}</p>
                  <div className="flex items-center gap-2 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <span className="font-mono text-[10px] text-gold tracking-[0.1em] font-medium">View Project</span>
                    <span className="text-gold font-bold">→</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-bg3 border border-border-mid rounded-[20px] max-w-lg w-full overflow-hidden"
              onClick={e => e.stopPropagation()}>
              <div className="relative h-56">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <span className="font-mono text-[9px] text-gold tracking-[0.16em] uppercase">{selectedProject.tag}</span>
                <h3 className="font-serif text-[28px] font-semibold text-text mt-2 mb-3">{selectedProject.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed mb-4">{selectedProject.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="font-mono text-[10px] text-muted border border-border px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <button onClick={() => setSelectedProject(null)} className="btn-ghost w-full justify-center">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// ─── Skills ──────────────────────────────────────────────────────────────────
function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <AnimateIn delay={index * 0.07} direction="up">
      <div ref={ref} className="bg-bg3 border border-border rounded-[16px] p-5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {skill.icon ? (
              <img src={skill.icon} alt={skill.name} width={28} height={28} className="w-7 h-7 object-contain" />
            ) : (
              <div className="w-7 h-7 rounded-[6px] bg-gold/10 border border-gold/20 flex items-center justify-center">
                <span className="font-mono text-[8px] text-gold font-bold">{skill.name.slice(0, 2).toUpperCase()}</span>
              </div>
            )}
            <span className="font-sans text-[13px] font-semibold text-text">{skill.name}</span>
          </div>
          <span className="font-mono text-[13px] font-medium text-gold">{skill.pct} %</span>
        </div>
        <div className="h-[6px] bg-bg4 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #4ade80, #86efac)' }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${skill.pct}%` : 0 }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </AnimateIn>
  )
}

function SkillsSection() {
  return (
    <section className="py-28 bg-bg">
      <div className="wrap">
        <AnimateIn className="text-center mb-16">
          <p className="section-num justify-center">04 — Skills</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text mb-4">
            Explore the Core Skills Behind <em className="text-gold not-italic">My Work.</em>
          </h2>
          <p className="text-muted text-[15px] max-w-xl mx-auto">
            Years of focus on one niche means faster builds, fewer mistakes, and integrations that just work.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ─────────────────────────────────────────────────────────────────
const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We discuss your market, target clients, current tech stack, and conversion goals. 30-min call.' },
  { num: '02', title: 'Design & Strategy', desc: 'I map out the site architecture, wireframes, and integration plan before any code is written.' },
  { num: '03', title: 'Build & Integrate', desc: 'WordPress build, Elementor design, IDX setup, CRM connections — all tested thoroughly.' },
  { num: '04', title: 'Launch & Handover', desc: 'Go live checklist, DNS setup, walkthrough video, and 30 days of free support.' },
]

function ProcessSection() {
  return (
    <section className="py-28 bg-bg2">
      <div className="wrap">
        <AnimateIn className="text-center mb-16">
          <p className="section-num justify-center">05 — Process</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text">
            From call to <em className="text-gold not-italic">launch in 2–4 weeks.</em>
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 0.1}>
              <div className="bg-bg3 border border-border rounded-[20px] p-8 hover:border-gold/30 transition-all duration-300">
                <div className="font-serif text-[64px] font-semibold gradient-text leading-none mb-6">{step.num}</div>
                <h3 className="font-sans text-[16px] font-semibold text-text mb-3">{step.title}</h3>
                <p className="text-muted text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section className="py-28 bg-bg">
      <div className="wrap">
        <AnimateIn className="text-center mb-16">
          <p className="section-num justify-center">06 — Pricing</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text">
            Transparent pricing, <em className="text-gold not-italic">no surprises.</em>
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 0.1} direction="up">
              <div className={`rounded-[20px] p-8 border transition-all duration-300 hover:scale-[1.02] ${
                plan.highlight
                  ? 'bg-bg3 border-gold shadow-[0_0_40px_rgba(201,168,76,0.12)]'
                  : 'bg-bg3 border-border hover:border-gold/30'
              }`}>
                {plan.highlight && (
                  <div className="font-mono text-[9px] text-bg bg-gold px-3 py-1 rounded-full inline-block mb-4 tracking-[0.1em] uppercase">Most Popular</div>
                )}
                <div className="text-[32px] mb-3">{plan.icon}</div>
                <h3 className="font-serif text-[22px] font-semibold text-text mb-1">{plan.name}</h3>
                <div className="font-serif text-[40px] font-semibold gradient-text mb-3">{plan.price}</div>
                <p className="text-muted text-[13px] leading-relaxed mb-6">{plan.desc}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-[13px] text-muted">
                      <span className="text-gold text-[10px]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`${plan.highlight ? 'btn-primary' : 'btn-outline'} w-full justify-center`}>
                  Get Started
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials]
  return (
    <section className="py-28 bg-bg2 overflow-hidden">
      <div className="wrap mb-12">
        <AnimateIn className="text-center">
          <p className="section-num justify-center">07 — Testimonials</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text">
            Agents who took <em className="text-gold not-italic">the leap.</em>
          </h2>
        </AnimateIn>
      </div>
      <div style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => (
            <div key={i} className="w-80 flex-shrink-0 bg-bg3 border border-border rounded-[20px] p-6">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => <span key={s} className="text-gold text-[12px]">★</span>)}
              </div>
              <span className="font-serif text-[48px] text-gold/20 leading-none block -mt-2 mb-2">&ldquo;</span>
              <p className="text-[14px] text-muted leading-relaxed mb-4 -mt-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-border-mid flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-sans text-[13px] font-semibold text-text">{t.name}</div>
                  <div className="font-mono text-[10px] text-muted tracking-[0.08em]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <section className="py-28 bg-bg" id="contact">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <AnimateIn direction="left">
            <p className="section-num">08 — Contact</p>
            <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text mb-6">
              Let&apos;s build your <em className="text-gold not-italic">lead machine.</em>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-8">Free 30-min discovery call. I&apos;ll map out your site structure, integration plan, and give you an honest quote.</p>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Email', val: 'hello@realtyfub.com' },
                { label: 'Response Time', val: 'Within 1 hr' },
                { label: 'Timezone', val: 'EST / Available globally' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase w-28">{item.label}</span>
                  <span className="text-[13px] text-text">{item.val}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.1}>
            {sent ? (
              <div className="bg-bg3 border border-gold/30 rounded-[20px] p-12 text-center">
                <div className="text-[48px] mb-4">✓</div>
                <h3 className="font-serif text-[24px] text-gold mb-2">Message Sent!</h3>
                <p className="text-muted text-[14px]">I&apos;ll get back to you within 1 hr.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg3 border border-border rounded-[20px] p-8 flex flex-col gap-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Sarah Mitchell' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'sarah@mitchellrealty.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-bg4 border border-border rounded-lg px-4 py-3 text-[14px] text-text placeholder:text-dim focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-2">Service</label>
                  <select required className="w-full bg-bg4 border border-border rounded-lg px-4 py-3 text-[14px] text-text focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all">
                    <option value="">Select a service...</option>
                    <option>Agent Starter ($800)</option>
                    <option>Agent Pro ($1,500)</option>
                    <option>Team / Brokerage ($2,500)</option>
                    <option>Maintenance / Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your business, current tech stack, and goals..."
                    required
                    className="w-full bg-bg4 border border-border rounded-lg px-4 py-3 text-[14px] text-text placeholder:text-dim focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all resize-none"
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-primary justify-center disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee items={['Follow Up Boss', 'kvCORE', 'IDX Integration', 'Elementor Pro', 'WordPress', 'Zapier', 'WPForms', 'Rank Math', 'Calendly', 'Real Geeks', 'BoomTown', 'Astra Pro']} />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
    </>
  )
}
