'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from '@/components/AnimateIn'
import { pricingPlans, serviceCards, faqs } from '@/data/content'

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-bg2 border-b border-border">
        <div className="wrap">
          <AnimateIn>
            <p className="section-num">— Services</p>
            <h1 className="font-serif text-[clamp(48px,6vw,80px)] font-semibold leading-[1.05] text-text mb-4">
              Everything Your<br /><em className="text-gold not-italic">Site Needs.</em>
            </h1>
            <p className="text-muted text-[16px] max-w-lg">From the initial WordPress build to live CRM connections that bring leads in on autopilot.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((svc, i) => (
              <AnimateIn key={svc.num} delay={i * 0.07}>
                <div className="group bg-bg3 border border-border rounded-[20px] p-6 hover:-translate-y-2 hover:border-gold/50 transition-all duration-300">
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

      {/* Pricing */}
      <section className="py-20 bg-bg2">
        <div className="wrap">
          <AnimateIn className="text-center mb-16">
            <p className="section-num justify-center">— Pricing</p>
            <h2 className="font-serif text-[clamp(36px,4vw,52px)] font-semibold leading-[1.1] text-text">
              Transparent pricing, <em className="text-gold not-italic">no surprises.</em>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <AnimateIn key={plan.name} delay={i * 0.1}>
                <div className={`rounded-[20px] p-8 border transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight ? 'bg-bg3 border-gold shadow-[0_0_40px_rgba(201,168,76,0.12)]' : 'bg-bg3 border-border hover:border-gold/30'
                }`}>
                  {plan.highlight && <div className="font-mono text-[9px] text-bg bg-gold px-3 py-1 rounded-full inline-block mb-4 tracking-[0.1em] uppercase">Most Popular</div>}
                  <div className="text-[32px] mb-3">{plan.icon}</div>
                  <h3 className="font-serif text-[22px] font-semibold text-text mb-1">{plan.name}</h3>
                  <div className="font-serif text-[40px] font-semibold gradient-text mb-3">{plan.price}</div>
                  <p className="text-muted text-[13px] leading-relaxed mb-6">{plan.desc}</p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-[13px] text-muted">
                        <span className="text-gold text-[10px]">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`${plan.highlight ? 'btn-primary' : 'btn-outline'} w-full justify-center`}>Get Started</Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="wrap">
          <AnimateIn className="mb-12">
            <p className="section-num">— Add-Ons</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-text mb-3">
              Extras to Supercharge <em className="text-gold not-italic">Your Site.</em>
            </h2>
            <p className="text-muted text-[14px] max-w-lg">Add any of these to your package at checkout — priced separately, no bundles required.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { price: '+$200', title: 'Demo Site Build', desc: 'A fully functional demo for a fictional real estate agent — use it in your portfolio and pitches.' },
              { price: '+$150', title: 'Monthly Maintenance', desc: 'Plugin updates, security scans, uptime monitoring, and 1 hr of minor edits/month.' },
              { price: '+$300', title: 'Google Ads Landing Page', desc: 'High-converting PPC landing page wired to FUB with A/B-ready structure.' },
              { price: '+$250', title: 'Neighbourhood Pages (×5)', desc: 'Five SEO-optimised city or neighbourhood pages with IDX property feeds.' },
              { price: '+$100', title: 'Zapier Automation Setup', desc: 'Custom Zaps connecting your forms to FUB, SMS, email sequences, and more.' },
              { price: '+$200', title: 'Blog Setup + 3 Posts', desc: 'Blog section with 3 keyword-targeted posts for your market.' },
              { price: '+$150', title: 'Seller Lead Funnel', desc: 'Dedicated home valuation / seller lead page with FUB or kvCORE integration.' },
              { price: '+$100', title: 'Speed Optimisation', desc: 'Image compression, caching setup, CDN config — targeting 90+ PageSpeed score.' },
            ].map((addon, i) => (
              <AnimateIn key={addon.title} delay={i * 0.06}>
                <div className="group bg-bg3 border border-border rounded-[20px] p-6 hover:-translate-y-1 hover:border-gold/30 transition-all duration-300">
                  <div className="font-serif text-[22px] font-semibold text-gold mb-2">{addon.price}</div>
                  <h3 className="font-sans text-[14px] font-semibold text-text mb-2">{addon.title}</h3>
                  <p className="text-muted text-[12px] leading-relaxed">{addon.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg2">
        <div className="wrap max-w-2xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <p className="section-num justify-center">— FAQ</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-semibold text-text">
              Common <em className="text-gold not-italic">Questions.</em>
            </h2>
          </AnimateIn>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="bg-bg3 border border-border rounded-[16px] overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-bg4 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-sans text-[14px] font-medium text-text">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="text-gold text-[18px] flex-shrink-0">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-muted text-[14px] leading-relaxed border-t border-border pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
