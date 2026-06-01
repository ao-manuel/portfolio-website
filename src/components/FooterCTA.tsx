'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FooterCTA() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <section className="relative bg-bg2 border-t border-border py-20 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
      <div className="relative wrap">
        <p className="section-num justify-center">— Ready to Start?</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] text-text mb-5">
          Let&apos;s Build Something<br /><em className="text-gold not-italic">Amazing.</em>
        </h2>
        <p className="text-muted text-[15px] mb-8 max-w-md mx-auto">Free 30-min discovery call. I typically respond within 1 hr.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="btn-primary">Book a Free Call →</Link>
          <Link href="/work" className="btn-ghost">View My Work</Link>
        </div>
      </div>
    </section>
  )
}
