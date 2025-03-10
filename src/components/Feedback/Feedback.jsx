import styles from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.statistics}>
      <h2>Statistics</h2>
      {total > 0 ? (
        <>
          <p className={styles.statItem}>Good: {good}</p>
          <p className={styles.statItem}>Neutral: {neutral}</p>
          <p className={styles.statItem}>Bad: {bad}</p>
          <p className={styles.statItem}>Total: {total}</p>
          <p className={styles.statItem}>Positive Feedback: {positivePercentage}%</p>
        </>
      ) : (
        <p className={styles.noFeedback}>No feedback given yet</p>
      )}
    </div>
  );
}