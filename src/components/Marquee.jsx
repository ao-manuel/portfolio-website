import styles from './Marquee.module.css'

export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items]

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
