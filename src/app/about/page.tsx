import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'

interface Tool {
  name: string
  logo: string | null
  logohover: string | null
  letter: string | null
  color: string | null
}

const tools: Tool[] = [
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/8a9985', logohover: 'https://cdn.simpleicons.org/wordpress/c9a84c', letter: null, color: null },
  { name: 'Elementor Pro', logo: 'https://cdn.simpleicons.org/elementor/8a9985', logohover: 'https://cdn.simpleicons.org/elementor/c9a84c', letter: null, color: null },
  { name: 'Follow Up Boss', logo: null, logohover: null, letter: 'FUB', color: '#c9a84c' },
  { name: 'kvCORE', logo: null, logohover: null, letter: 'kv', color: '#3db89a' },
  { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/8a9985', logohover: 'https://cdn.simpleicons.org/zapier/c9a84c', letter: null, color: null },
  { name: 'IDX Broker', logo: null, logohover: null, letter: 'IDX', color: '#c9a84c' },
  { name: 'WPForms', logo: 'https://cdn.simpleicons.org/wpforms/8a9985', logohover: 'https://cdn.simpleicons.org/wpforms/c9a84c', letter: null, color: null },
  { name: 'Rank Math', logo: null, logohover: null, letter: 'RM', color: '#e85b4a' },
  { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce/8a9985', logohover: 'https://cdn.simpleicons.org/woocommerce/c9a84c', letter: null, color: null },
  { name: 'LearnDash', logo: null, logohover: null, letter: 'LD', color: '#e98c2a' },
]

const states = [
  { name: 'Florida', desc: 'Miami, Orlando, Tampa — luxury agents and high-volume teams.', image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=500&q=80' },
  { name: 'California', desc: 'LA, SF Bay Area, San Diego — luxury condo and tech-savvy buyers.', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&q=80' },
  { name: 'Texas', desc: 'Dallas, Houston, Austin — fast-growing markets, team sites.', image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=500&q=80' },
]

export default function AboutPage() {
  return (
    <div className="pt-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-bg2 border-b border-border">
        <div className="wrap">
          <AnimateIn>
            <p className="section-num">— About</p>
            <h1 className="font-serif text-[clamp(48px,6vw,80px)] font-semibold leading-[1.05] text-text mb-4">
              The Developer Who <br /><em className="text-gold not-italic">Speaks Real Estate.</em>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-20">
        <div className="wrap grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn direction="left">
            <div className="rounded-[20px] overflow-hidden border border-border-mid">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
                alt="Developer"
                width={600}
                height={600}
                className="object-cover w-full h-[480px]"
              />
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.1}>
            <p className="section-num">01 — My Story</p>
            <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-semibold leading-[1.1] text-text mb-6">
              100% focused on<br /><em className="text-gold not-italic">real estate WordPress.</em>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              I started building WordPress sites for real estate agents after noticing how many of them were stuck with outdated, bloated websites that couldn&apos;t connect to their CRM — leaving hundreds of leads on the table every month.
            </p>
            <p className="text-muted text-[15px] leading-relaxed mb-8">
              Today I work exclusively in this niche: WordPress + Elementor, deep integrations with Follow Up Boss and kvCORE, IDX property search, and high-converting lead funnels. No generalist work. Just real estate.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Speciality', value: 'Real Estate WordPress' },
                { label: 'Experience', value: '4+ years' },
                { label: 'Sites Built', value: '15+' },
                { label: 'Focus States', value: 'FL, CA, TX' },
              ].map(item => (
                <div key={item.label} className="bg-bg3 border border-border rounded-[12px] p-4">
                  <span className="font-mono text-[9px] text-dim tracking-[0.14em] uppercase block mb-1">{item.label}</span>
                  <span className="text-[13px] text-text">{item.value}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">Work With Me →</Link>
          </AnimateIn>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-bg2">
        <div className="wrap">
          <AnimateIn className="text-center mb-12">
            <p className="section-num justify-center">02 — Tools</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-text">
              My <em className="text-gold not-italic">tech stack.</em>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool, i) => (
              <AnimateIn key={tool.name} delay={i * 0.05}>
                <div className="group bg-bg3 border border-border rounded-[16px] p-6 text-center hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                    {tool.logo ? (
                      <img
                        src={tool.logohover ?? tool.logo}
                        alt={tool.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    ) : (
                      <span className="font-mono text-[11px] font-bold tracking-wide" style={{ color: tool.color ?? undefined }}>
                        {tool.letter}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase">{tool.name}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* States */}
      <section className="py-20">
        <div className="wrap">
          <AnimateIn className="text-center mb-12">
            <p className="section-num justify-center">03 — Focus Markets</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-text">
              Primary <em className="text-gold not-italic">US markets.</em>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {states.map((state, i) => (
              <AnimateIn key={state.name} delay={i * 0.1}>
                <div className="group bg-bg3 border border-border rounded-[20px] overflow-hidden hover:border-gold/40 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={state.image} alt={state.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-bg/50" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-serif text-[24px] font-semibold text-text">{state.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted text-[13px] leading-relaxed">{state.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
