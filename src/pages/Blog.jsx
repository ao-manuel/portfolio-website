import useScrollAnimation from '../hooks/useScrollAnimation'
import { blogPosts } from '../data/content'
import styles from './Blog.module.css'

function AnimSection({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="fade-up">{children}</div>
}

export default function Blog() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero-kicker">Blog</p>
        <h1>Real Estate WordPress <em>Insights</em></h1>
        <p>Articles for US real estate agents and fellow developers on WordPress, CRM integrations, and lead generation.</p>
      </div>

      <section className="section">
        <AnimSection>
          <p className="section-label">Latest Articles</p>
        </AnimSection>

        <div className={styles.list}>
          {blogPosts.map(post => (
            <AnimSection key={post.id}>
              <article className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span className={styles.postTag}>{post.tag}</span>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postRead}>{post.readTime}</span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read Article →</span>
              </article>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="info-note" style={{ marginTop: 32 }}>
            <strong>Publishing cadence:</strong> 1–2 articles per month covering WordPress development for real estate agents, CRM integration tutorials, and industry insights.
          </div>
        </AnimSection>
      </section>
    </>
  )
}
