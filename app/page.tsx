"use client";

import { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (correct: boolean) => {
    setIsCorrect(correct);
    setShowExplanation(true);
    if (correct) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setCurrentIndex((i) => i + 1);
  };

  if (currentIndex >= questions.length) {
    return <h1>終了！スコア: {score}/{questions.length}</h1>;
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <QuestionCard question={questions[currentIndex]} onAnswer={handleAnswer} />
      {showExplanation && (
        <div style={{ marginTop: "10px" }}>
          <p>{isCorrect ? "正解！" : "不正解…"}</p>
          <p>{questions[currentIndex].explanation}</p>
          <button onClick={nextQuestion}>次の問題</button>
        </div>
      )}
      <p>スコア: {score}</p>
    </div>
  );
}