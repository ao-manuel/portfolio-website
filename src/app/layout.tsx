import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FooterCTA from '@/components/FooterCTA'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Realtyfub — WordPress Real Estate Developer',
  description: 'WordPress websites for real estate agents, fully integrated with Follow Up Boss & kvCORE.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <FooterCTA />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
