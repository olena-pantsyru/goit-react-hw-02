import { useState, useEffect } from "react";
import "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const LS_KEY = "feedback-value";
  
  // Загружаем данные из localStorage или устанавливаем начальное состояние
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(LS_KEY);
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  // Сохраняем данные в localStorage при изменении feedback
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(feedback));
  }, [feedback]);

  // Функция обновления feedback
  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  // Функция сброса feedback
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // Подсчет статистики
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} onReset={resetFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  );
}

export default App;