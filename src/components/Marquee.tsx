'use client'
interface Props { items: string[] }

export default function Marquee({ items }: Props) {
  const doubled = [...items, ...items]
  return (
    <div className="border-y border-border bg-bg2 py-4 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-gold transition-colors">
            <span className="text-gold opacity-40">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
