import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Big CTA Banner */}
      <section className="relative bg-bg2 border-t border-border py-24 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
        <div className="relative wrap">
          <p className="section-num justify-center">— Ready to Start?</p>
          <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-semibold leading-[1.08] text-text mb-6">
            Let&apos;s Build Something<br /><em className="text-gold not-italic">Amazing.</em>
          </h2>
          <p className="text-muted text-[15px] mb-8 max-w-md mx-auto">Free 30-min discovery call. I typically respond within 4 hours.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Book a Free Call →</Link>
            <Link href="/work" className="btn-ghost">View My Work</Link>
          </div>
        </div>
      </section>

      <footer className="bg-bg border-t border-border">
        <div className="wrap py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="font-serif text-[24px] font-semibold mb-4">Realty<span className="text-gold">fub</span></div>
              <p className="text-muted text-[14px] leading-relaxed max-w-xs">
                WordPress websites for real estate agents — fully integrated with Follow Up Boss &amp; kvCORE.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-dim tracking-[0.14em] uppercase mb-4">Navigation</p>
              <nav className="flex flex-col gap-3">
                {(['/', '/work', '/services', '/about', '/blog', '/contact'] as const).map((href, i) => (
                  <Link key={href} href={href} className="text-[13px] text-muted hover:text-gold transition-colors">
                    {['Home', 'Work', 'Services', 'About', 'Blog', 'Contact'][i]}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-mono text-[10px] text-dim tracking-[0.14em] uppercase mb-4">Services</p>
              <div className="flex flex-col gap-3">
                {['WordPress Development', 'IDX Integration', 'Follow Up Boss', 'kvCORE Setup', 'Lead Funnels'].map(s => (
                  <span key={s} className="text-[13px] text-muted">{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-mono text-[10px] text-dim tracking-[0.1em]">© {new Date().getFullYear()} Realtyfub. All rights reserved.</span>
            <span className="font-mono text-[10px] text-dim">hello@realtyfub.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}
