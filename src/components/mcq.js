import React, { useState, useEffect } from "react";
import Results from "./Result";
import questionsData from "./questions.json"; // local JSON
import { api } from "./api"; // API fetcher
import "../style/mcq.css";

export default function Mcq({ topic, count, isApi = false, onRestart }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      if (isApi) {
        try {
          const q = await api(topic, count);
          setQuestions(Array.isArray(q) ? q : []);
        } catch (err) {
          console.error("API fetch failed:", err);
          setQuestions([]);
        }
      } else {
        const filtered = questionsData[topic] || [];
        setQuestions(filtered.slice(0, count));
      }
    }
    loadQuestions();
  }, [topic, count, isApi]);

  const handleSelect = (option) => {
    if (answers[current]) return;
    setAnswers({ ...answers, [current]: option });
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  const total = questions.length;
  const correct = Object.entries(answers).filter(
    ([i, ans]) => questions[i].answer === ans
  ).length;
  const wrong = Object.keys(answers).length - correct;
  const unattempted = total - Object.keys(answers).length;

  const q = questions[current];
  const selected = answers[current];

  if (finished) {
    return (
      <Results
        total={total}
        correct={correct}
        wrong={wrong}
        unattempted={unattempted}
        onRestart={onRestart}
      />
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Quizzler</h1>
      <h2 className="quiz-title">Quiz on {topic}</h2>

      <div className="question-card">
        <h3>
          {current + 1}. {q.question}
        </h3>
        {q.options.map((opt, j) => {
          let optionClass = "option";
          if (selected) {
            if (q.answer === opt) optionClass += " correct";
            else if (selected === opt) optionClass += " wrong";
          }

          return (
            <label key={j} className={optionClass}>
              <input
                type="radio"
                name={`q-${current}`}
                value={opt}
                checked={selected === opt}
                disabled={!!selected}
                onChange={() => handleSelect(opt)}
              />
              {opt}
            </label>
          );
        })}
      </div>

      <div className="nav-buttons">
        {current > 0 && (
          <button className="nav-btn" onClick={() => setCurrent(current - 1)}>
            Previous
          </button>
        )}

        {current < questions.length - 1 ? (
          <button className="nav-btn" onClick={() => setCurrent(current + 1)}>
            Next
          </button>
        ) : (
          <button className="nav-btn finish" onClick={() => setFinished(true)}>
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
}
