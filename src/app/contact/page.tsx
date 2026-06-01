'use client'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <div className="pt-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-bg2 border-b border-border">
        <div className="wrap">
          <AnimateIn>
            <p className="section-num">— Contact</p>
            <h1 className="font-serif text-[clamp(48px,6vw,80px)] font-semibold leading-[1.05] text-text mb-4">
              Let&apos;s Build<br /><em className="text-gold not-italic">Something Great.</em>
            </h1>
            <p className="text-muted text-[16px] max-w-lg">Free 30-min discovery call. I typically respond within 1 hr.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Split */}
      <section className="py-20">
        <div className="wrap grid md:grid-cols-2 gap-16 items-start">
          <AnimateIn direction="left">
            <h2 className="font-serif text-[32px] font-semibold text-text mb-6">Get in touch</h2>
            <p className="text-muted text-[15px] leading-relaxed mb-10">
              Whether you need a brand new site, a CRM overhaul, or just want to understand what&apos;s costing you leads — let&apos;s talk.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { label: 'Email', val: 'hello@realtyfub.com', icon: '✉' },
                { label: 'Response Time', val: 'Within 1 hr', icon: '⏱' },
                { label: 'Timezone', val: 'EST — available globally', icon: '🌍' },
                { label: 'Call Booking', val: 'Calendly (30-min free)', icon: '📅' },
              ].map(item => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="text-[20px] mt-0.5">{item.icon}</span>
                  <div>
                    <span className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-1">{item.label}</span>
                    <span className="text-[14px] text-text">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-bg3 border border-border-mid rounded-[16px] p-6">
              <p className="font-mono text-[10px] text-gold tracking-[0.14em] uppercase mb-2">Current Availability</p>
              <p className="text-text text-[14px]">Open for new projects — typically 1–2 slots per month.</p>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.1}>
            {sent ? (
              <div className="bg-bg3 border border-gold/30 rounded-[20px] p-12 text-center">
                <div className="text-[56px] mb-4">✓</div>
                <h3 className="font-serif text-[28px] text-gold mb-3">Message Sent!</h3>
                <p className="text-muted text-[15px]">I&apos;ll get back to you within 1 hr with next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg3 border border-border rounded-[20px] p-8 flex flex-col gap-5">
                <h3 className="font-serif text-[22px] font-semibold text-text">Send a Message</h3>
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
                  <label className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-2">Service Needed</label>
                  <select required className="w-full bg-bg4 border border-border rounded-lg px-4 py-3 text-[14px] text-text focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all">
                    <option value="">Select a service...</option>
                    <option>Agent Starter ($800)</option>
                    <option>Agent Pro ($1,500)</option>
                    <option>Team / Brokerage ($2,500)</option>
                    <option>CRM Integration Only</option>
                    <option>Maintenance / Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-2">Budget Range</label>
                  <select className="w-full bg-bg4 border border-border rounded-lg px-4 py-3 text-[14px] text-text focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all">
                    <option value="">Select budget...</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $2,000</option>
                    <option>$2,000 – $3,000</option>
                    <option>$3,000+</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-[0.12em] uppercase block mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your business, current tech stack, goals, and timeline..."
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
      </section>
    </div>
  )
}
