import styles from './ConfirmSettings.module.css'

export default function ConfirmSettings () {
  return (
    <div className={styles["confirm-settings-wrapper"]}>
      <button className={styles["confirm-button"]}>Start meditation</button>
    </div>
  )
}