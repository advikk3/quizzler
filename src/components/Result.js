import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "../style/result.css"

export default function Results({ total, correct, wrong, onRestart }) {
  const data = [
    { name: "Correct", value: correct || 0 },
    { name: "Wrong", value: wrong || 0 },
    { name: "Unanswered", value: total - (correct + wrong) || 0 },
  ];

  const COLORS = ["#28a745", "#dc3545", "#6c757d"]; // green, red, gray

  return (
    <div className="results-overlay">
      <div className="results-modal">
        <h2>Quiz Finished 🎉</h2>

        {/* Fixed size PieChart instead of ResponsiveContainer */}
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        <p className="results-stats total">📘 Total Questions: {total}</p>
        <p className="results-stats correct">✅ Correct Answers: {correct}</p>
        <p className="results-stats wrong">❌ Wrong Answers: {wrong}</p>

        <button className="nav-btn finish" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
