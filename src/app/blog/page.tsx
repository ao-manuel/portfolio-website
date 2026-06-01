import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { blogPosts } from '@/data/content'

export default function BlogPage() {
  return (
    <div className="pt-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-bg2 border-b border-border">
        <div className="wrap">
          <AnimateIn>
            <p className="section-num">— Blog</p>
            <h1 className="font-serif text-[clamp(48px,6vw,80px)] font-semibold leading-[1.05] text-text mb-4">
              Real Estate<br /><em className="text-gold not-italic">Dev Notes.</em>
            </h1>
            <p className="text-muted text-[16px] max-w-lg">Tutorials, comparisons, and strategy for agents who want sites that actually work.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <AnimateIn key={post.id} delay={i * 0.1}>
                <div className="group bg-bg3 border border-border rounded-[20px] p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[9px] text-bg bg-gold px-2 py-1 rounded tracking-[0.1em] uppercase">{post.tag}</span>
                    <span className="font-mono text-[10px] text-dim">{post.date}</span>
                    <span className="font-mono text-[10px] text-dim">·</span>
                    <span className="font-mono text-[10px] text-dim">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-semibold text-text mb-3 leading-[1.2] group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-muted text-[14px] leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-gold tracking-[0.1em] uppercase">
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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
