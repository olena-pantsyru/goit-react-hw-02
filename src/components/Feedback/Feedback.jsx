import styles from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.statistics}>
      <h2>Statistics</h2>
      <p className={styles.statItem}>Good: {good}</p>
      <p className={styles.statItem}>Neutral: {neutral}</p>
      <p className={styles.statItem}>Bad: {bad}</p>
      <p className={styles.statItem}>Total: {total}</p>
      <p className={styles.statItem}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}