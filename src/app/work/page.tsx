'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from '@/components/AnimateIn'
import { projects } from '@/data/content'

export default function WorkPage() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  return (
    <div className="pt-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-bg2 border-b border-border">
        <div className="wrap">
          <AnimateIn>
            <p className="section-num">— Portfolio</p>
            <h1 className="font-serif text-[clamp(48px,6vw,80px)] font-semibold leading-[1.05] text-text mb-4">
              Real Sites,<br /><em className="text-gold not-italic">Real Results.</em>
            </h1>
            <p className="text-muted text-[16px] max-w-lg">Every project is built to generate leads, not just look good.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <AnimateIn key={proj.id} delay={i * 0.08}>
                <div
                  className="group bg-bg3 border border-border rounded-[20px] overflow-hidden cursor-pointer hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setSelected(proj)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[9px] text-gold tracking-[0.16em] uppercase block mb-2">{proj.tag}</span>
                    <h3 className="font-serif text-[20px] font-semibold text-text mb-2">{proj.title}</h3>
                    <p className="text-muted text-[13px] leading-relaxed mb-4 line-clamp-2">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map(t => (
                        <span key={t} className="font-mono text-[9px] text-muted border border-border px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-xl"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-bg3 border border-border-mid rounded-[20px] max-w-lg w-full overflow-hidden"
              onClick={e => e.stopPropagation()}>
              <div className="relative h-56">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <span className="font-mono text-[9px] text-gold tracking-[0.16em] uppercase">{selected.tag}</span>
                <h3 className="font-serif text-[28px] font-semibold text-text mt-2 mb-3">{selected.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed mb-4">{selected.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map(t => (
                    <span key={t} className="font-mono text-[10px] text-muted border border-border px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <button onClick={() => setSelected(null)} className="btn-ghost w-full justify-center">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
