"use client";

import React, { useEffect, useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { questions } from "../data/questions";

const QUIZ_COUNT = 100;

const selectRandomQuestions = () => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, QUIZ_COUNT);
};

export default function HomePage() {
  const [selectedQuestions, setSelectedQuestions] = useState(questions.slice(0, QUIZ_COUNT));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedQuestions(selectRandomQuestions());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (correct: boolean) => {
    if (answered) return; // すでに回答済みなら無視
    setAnswered(true);
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowExplanation(false);
    setAnswered(false);// 次の問題に進むときに回答状態をリセット
  };

  // 終了画面
  if (currentIndex >= selectedQuestions.length) {
    return (
      <div className="max-w-md mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">おつかれさまでした！</h1>
        <p className="mb-4 text-lg">
          スコア: {score} / {selectedQuestions.length}
        </p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors"
          onClick={() => {
            setSelectedQuestions(selectRandomQuestions());
            setCurrentIndex(0);
            setScore(0);
            setShowExplanation(false);
            setAnswered(false);
          }}
        >
          最初からやり直す
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">因数分解クイズ</h1>

      <QuestionCard
        question={selectedQuestions[currentIndex]}
        onAnswer={handleAnswer}
      />

      {showExplanation && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
          <p className="mb-2 font-semibold">{isCorrect ? "正解！🎉" : "不正解…😢"}</p>
          <p className="mb-4">{selectedQuestions[currentIndex].explanation}</p>
          {currentIndex < selectedQuestions.length - 1 ? (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
              onClick={nextQuestion}
            >
              次の問題
            </button>
            ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
              onClick={() => setCurrentIndex(selectedQuestions.length)}
            >
              スコアを見る
            </button>
          )}
        </div>
      )}
    </div>
  );
}
