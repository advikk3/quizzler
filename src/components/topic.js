import React, { useState } from "react";
import "../style/topic.css";
import Mcq from "./mcq";

export default function Topic() {

  const [quizStarted, setQuizStarted] = useState(false);
 const [topic, setTopic] = useState("Photosynthesis");
  const [count, setCount] = useState(5);

   const topics = [
    "Photosynthesis",
    "Basic Algebra",
    "Light",
    "Motion",
    "Basic Organic Chemistry"
  ]
 const handleStart = () => {
  if (!topic) {
    alert("Please select a topic!");
    return;
  }
  if (count < 1) {
    alert("Number of questions must be at least 1");
    return;
  }
  setQuizStarted(true);
};


  if (quizStarted) {
    return <Mcq topic={topic} count={count} />;
  }

  return (
    <div className="topic-container">
      <h1>Quizzler</h1>

      <label>
        Select Topic:
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          {topics.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label>
        Number of Questions:
        <input
          type="number"
          min="1"
          max="50"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </label>

      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}
