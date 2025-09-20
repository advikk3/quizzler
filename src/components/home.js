import React, { useState, useEffect } from "react";
import Topic from "./topic"; 
import "../style/home.css"; 

const Home = () => {
  const [showTopic, setShowTopic] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Making learning fun and interactive....";


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (showTopic) return <Topic />;

  return (
    <div style={styles.container}>
     
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape square"></div>
        <div className="shape star"></div>
      </div>
 
<div className="floating-shapes">
  <div className="shape circle" style={{ top: "10%", left: "5%" }}></div>
  <div className="shape triangle" style={{ top: "30%", right: "10%" }}></div>
  <div className="shape square" style={{ bottom: "20%", left: "20%" }}></div>
  <div className="shape star" style={{ bottom: "10%", right: "25%" }}></div>
  <div className="shape circle" style={{ top: "70%", left: "80%" }}></div>
</div>


      <button style={styles.loginButton}>Login</button>

  
      <h1 style={styles.title}>Quizzler.ai</h1>


      <p style={styles.typedText}>{typedText}</p>


      <p style={styles.description}>Learn and challenge yourself with fun quizzes</p>
 
      <p style={{...styles.description, fontStyle: "italic"}}>helps you track your progress and get better</p>

      <button
        style={styles.startButton}
        onClick={() => setShowTopic(true)}
      >
        Start Quiz
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    padding: "0 20px",
    overflow: "hidden",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "800",
    color: "#ff6b6b",
    textShadow: "3px 3px 10px rgba(0,0,0,0.3)",
    marginBottom: "1rem",
  },
  typedText: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontWeight: "500",
    color: "#ffd700",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    maxWidth: "600px",
    lineHeight: "1.5",
  },
  startButton: {
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00bfff",
    color: "#fff",
    boxShadow: "0 4px 15px rgba(0,191,255,0.4)",
    marginTop: "1.5rem",
  },
  loginButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#1e3c72",
    fontWeight: "600",
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
  },
};

export default Home;
