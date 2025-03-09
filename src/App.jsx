import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options />
      <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
    </div>
  );
}