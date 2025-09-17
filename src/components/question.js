// localApi.js
// This mimics the API file but uses predefined JSON instead

const localQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Which gas do plants absorb for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    answer: "Albert Einstein"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Ozone", "Oxide"],
    answer: "Oxygen"
  }
];

/**
 * Local replacement for API call
 * @param {string} topic - quiz topic (ignored in local mode)
 * @param {number} count - number of questions
 * @returns {Promise<Array>} array of questions
 */
export async function api(topic, count = 5) {
  try {
    // just slice local questions
    const questions = localQuestions.slice(0, count);

    console.log("📝 Local Questions:", questions);
    return questions;
  } catch (err) {
    console.error("❌ Local error:", err);
    return [];
  }
}
