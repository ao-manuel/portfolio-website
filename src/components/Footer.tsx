import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    name: 'Fiverr',
    href: 'https://fiverr.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.990.995.995 0 0 0-.002 1.990zm-.996-3.705h-1.242c-.86 0-1.57.348-2.072.996v-.9H17.38v6.647h1.314v-3.74c0-.907.498-1.63 1.444-1.63.857 0 1.253.573 1.253 1.494v3.876h1.314v-4.111c0-1.494-.784-2.632-2.697-2.632zM13.43 9.218H12v2.386h-1.286v1.154H12v3.89c0 1.444.585 2.25 2.17 2.25.498 0 1.02-.1 1.394-.274l-.348-1.104a2.25 2.25 0 0 1-.96.224c-.548 0-.826-.274-.826-.87v-3.116h1.978V11.6H13.43V9.218zm-5.84 2.386H6.278v6.647h1.314v-6.647zM6.702 9.23a.826.826 0 1 0 0 1.652.826.826 0 0 0 0-1.652zM.996 13.73C.448 13.73 0 14.178 0 14.726s.448.996.996.996.996-.448.996-.996-.448-.996-.996-.996zm3.318-2.112H3.07v6.647h1.244V11.618z"/>
      </svg>
    ),
  },
  {
    name: 'Upwork',
    href: 'https://upwork.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <>
      <footer className="bg-bg border-t border-border">
        <div className="wrap py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand + social */}
            <div className="md:col-span-2">
              <div className="font-serif text-[24px] font-semibold mb-3">Realty<span className="text-gold">fub</span></div>
              <p className="text-muted text-[14px] leading-relaxed max-w-xs mb-6">
                WordPress websites for real estate agents — fully integrated with Follow Up Boss &amp; kvCORE.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-[10px] bg-bg3 border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
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
