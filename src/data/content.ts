export interface Project {
  id: number
  tag: string
  title: string
  location: string
  desc: string
  tags: string[]
  color: string
  image: string
}

export interface Service {
  icon: string
  name: string
  price: string
  desc: string
  features: string[]
  highlight: boolean
}

export interface Testimonial {
  stars: number
  quote: string
  name: string
  role: string
  avatar: string
}

export interface BlogPost {
  id: number
  date: string
  readTime: string
  tag: string
  title: string
  excerpt: string
}

export interface FAQ {
  q: string
  a: string
}

export const projects: Project[] = [
  {
    id: 1,
    tag: 'INDIVIDUAL AGENT · FLORIDA',
    title: 'Sarah Mitchell Realty',
    location: 'Miami, FL',
    desc: 'Luxury agent site with IDX integration, Follow Up Boss automation, and seller lead funnels. Generating 40+ leads/month.',
    tags: ['IDX', 'Follow Up Boss', 'Elementor'],
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
  },
  {
    id: 2,
    tag: 'TEAM SITE · TEXAS',
    title: 'The Rodriguez Group',
    location: 'Dallas, TX',
    desc: 'Multi-agent brokerage site with kvCORE embed, team pages, and custom lead routing to individual agents.',
    tags: ['kvCORE', 'Multi-agent', 'Astra Pro'],
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
  },
  {
    id: 3,
    tag: 'LEAD PAGE · CALIFORNIA',
    title: 'LA Home Valuation',
    location: 'Los Angeles, CA',
    desc: 'High-converting seller lead funnel connected directly to Follow Up Boss via Zapier. 18% conversion rate.',
    tags: ['Lead Gen', 'Zapier', 'FUB'],
    color: 'default',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80',
  },
  {
    id: 4,
    tag: 'INDIVIDUAL AGENT · FLORIDA',
    title: 'Broward Luxury Homes',
    location: 'Fort Lauderdale, FL',
    desc: 'Luxury condo specialist site with custom IDX search, MLS integration, and neighbourhood landing pages.',
    tags: ['IDX', 'Elementor Pro', 'WPForms'],
    color: 'default',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80',
  },
  {
    id: 5,
    tag: 'TEAM SITE · CALIFORNIA',
    title: 'Bay Area Realty Group',
    location: 'San Francisco, CA',
    desc: 'Full team site for a 12-agent office — individual agent profiles, shared CRM, and automated lead distribution.',
    tags: ['Follow Up Boss', 'kvCORE', 'GeneratePress'],
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
  },
  {
    id: 6,
    tag: 'LEAD PAGE · TEXAS',
    title: 'Houston Homes Direct',
    location: 'Houston, TX',
    desc: 'Buyer and seller lead pages with automated CRM sequences, SMS follow-up triggers, and Calendly booking.',
    tags: ['Lead Gen', 'FUB', 'Calendly'],
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=700&q=80',
  },
]

export const pricingPlans: Service[] = [
  {
    icon: '🏠',
    name: 'Agent Starter',
    price: '$800',
    desc: '5-page WordPress site, contact form, mobile optimized, SSL, 1 round of revisions.',
    features: ['5-page WordPress build', 'Mobile-first design', 'Contact form setup', 'SSL & hosting config', 'Google Analytics', '1 revision round'],
    highlight: false,
  },
  {
    icon: '⭐',
    name: 'Agent Pro',
    price: '$1,500',
    desc: 'Everything in Starter, plus IDX integration, Follow Up Boss setup, and lead funnels.',
    features: ['Everything in Starter', 'IDX integration', 'Follow Up Boss setup', 'Lead funnel pages', 'Zapier automation', '2 revision rounds'],
    highlight: true,
  },
  {
    icon: '🏢',
    name: 'Team / Brokerage',
    price: '$2,500',
    desc: 'Multi-agent site with kvCORE embed, custom branding, blog, and 3 revision rounds.',
    features: ['Multi-agent profiles', 'kvCORE / FUB embed', 'Custom brand system', 'Blog setup + 3 posts', 'SEO configuration', '3 revision rounds'],
    highlight: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote: "Best investment I made — leads started coming in the first week. The FUB setup saved me hours every day.",
    name: 'Jennifer Walsh',
    role: 'Realtor · Miami, FL',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    stars: 5,
    quote: "Finally someone who understands Follow Up Boss. My site actually works as a lead machine now.",
    name: 'Marcus Chen',
    role: 'Team Lead · Dallas, TX',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    stars: 5,
    quote: "The IDX integration alone paid for the site in the first month. Incredibly professional work.",
    name: 'Diane Torres',
    role: 'Broker · Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
  },
  {
    stars: 5,
    quote: "I'd tried two other developers before. Nobody understood the real estate tech stack like Realtyfub.",
    name: 'Robert Hayes',
    role: 'Agent · Houston, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: 'May 2025',
    readTime: '6 min read',
    tag: 'TUTORIAL',
    title: 'How to Connect Your Real Estate WordPress Site to Follow Up Boss',
    excerpt: 'A step-by-step walkthrough of the Zapier workflow that routes every form submission from your WordPress site directly into FUB with the right tags.',
  },
  {
    id: 2,
    date: 'Apr 2025',
    readTime: '8 min read',
    tag: 'COMPARISON',
    title: 'IDX vs kvCORE: What Real Estate Agents Actually Need to Know',
    excerpt: "Two very different tools that agents often confuse. Here's when to use IDX integration on your WordPress site, and when kvCORE is the better fit.",
  },
  {
    id: 3,
    date: 'Mar 2025',
    readTime: '5 min read',
    tag: 'GUIDE',
    title: '5 Pages Every US Real Estate Website Needs (and What Goes On Each)',
    excerpt: 'Most agent sites are missing 2–3 of these. The pages that get skipped are usually the ones that convert the most leads.',
  },
  {
    id: 4,
    date: 'Feb 2025',
    readTime: '7 min read',
    tag: 'STRATEGY',
    title: 'Why Real Estate Agents Pay More for Specialist WordPress Developers',
    excerpt: 'The economics of specialization in web development — and why your positioning as a real estate specialist is worth at least $500 more per project.',
  },
]

export const faqs: FAQ[] = [
  { q: 'Do you work with agents outside FL, CA, and TX?', a: 'Yes — I focus on those three states for SEO purposes but work with agents across all 50 US states. Remote-only, fully async.' },
  { q: 'How long does a typical project take?', a: 'Agent Starter: 7–10 days. Agent Pro: 14–18 days. Team/Brokerage: 3–4 weeks. Timeline starts after content is received.' },
  { q: 'Do you need my Follow Up Boss login?', a: 'For FUB setup, yes — read-only API access is enough. I never need admin credentials, and all access is revoked after delivery.' },
  { q: 'Can I update the site myself after launch?', a: 'Yes. All sites are built on WordPress + Elementor. I record a 15-minute walkthrough video showing you how to update listings, photos, and copy.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes — $150/month covers plugin updates, security monitoring, uptime checks, and 1 hour of minor edits per month.' },
  { q: "What if I don't have demo sites ready?", a: "I can build a fully functional demo site for a fictional US agent ($200 add-on) that you can use in your portfolio and pitch to clients." },
]

export const serviceCards = [
  { num: '01', icon: '🏗️', title: 'WordPress Development', desc: 'Custom WordPress builds from scratch, optimised for real estate agents and teams.' },
  { num: '02', icon: '🎨', title: 'Elementor Design', desc: 'Pixel-perfect page designs using Elementor Pro with custom widgets and layouts.' },
  { num: '03', icon: '🔗', title: 'CRM Integration', desc: 'Full Follow Up Boss and kvCORE setup, connected to your website forms and lead sources.' },
  { num: '04', icon: '🏠', title: 'IDX & Lead Funnels', desc: 'IDX property search integration plus high-converting buyer and seller lead funnels.' },
  { num: '05', icon: '🛒', title: 'WooCommerce', desc: 'E-commerce solutions for courses, digital products, and service-based offerings.' },
  { num: '06', icon: '📚', title: 'LearnDash LMS', desc: 'Online training courses for agents — onboarding portals, certification tracks.' },
  { num: '07', icon: '📈', title: 'SEO Setup', desc: 'Rank Math configuration, schema markup, local SEO for city/neighbourhood pages.' },
  { num: '08', icon: '🛡️', title: 'Website Maintenance', desc: '$150/mo — plugin updates, security, uptime monitoring, and 1 hr edits/month.' },
]

export const skills = [
  { name: 'WordPress', pct: 95 },
  { name: 'Elementor', pct: 93 },
  { name: 'IDX Integration', pct: 90 },
  { name: 'CRM Setup (FUB/kvCORE)', pct: 88 },
  { name: 'UI Design', pct: 85 },
  { name: 'SEO', pct: 82 },
  { name: 'WooCommerce', pct: 80 },
  { name: 'LearnDash', pct: 75 },
]
