import styles from './Marquee.module.css'

export default function Marquee({ items = [] }) {
  // Render items twice for seamless infinite loop
  const renderItems = (items) =>
    items.map((item, i) => (
      <span key={i} className={styles.item}>
        {item}
        <span className={styles.dot}> · </span>
      </span>
    ))

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {renderItems(items)}
        {renderItems(items)}
      </div>
    </div>
  )
}
