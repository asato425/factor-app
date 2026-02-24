"use client";

import React, { useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { Question, questions } from "../data/questions";

const DEFAULT_QUIZ_COUNT = 5;
const difficultyOptions = ["かんたん", "ふつう", "むずかしい"] as const;
type Difficulty = (typeof difficultyOptions)[number];
const MAX_EASY_COEFFICIENT = 9;
const MAX_NORMAL_COEFFICIENT = 50;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const getMaxCoefficient = (expression: string) => {
  const numbers = expression.match(/-?\d+/g);
  if (!numbers) return 0;
  return Math.max(...numbers.map((value) => Math.abs(Number(value))));
};

const getQuestionsByDifficulty = (difficulty: Difficulty) => {
  return questions.filter((question) => {
    const maxCoefficient = getMaxCoefficient(question.question);
    if (difficulty === "かんたん") return maxCoefficient <= MAX_EASY_COEFFICIENT;
    if (difficulty === "ふつう") return maxCoefficient <= MAX_NORMAL_COEFFICIENT;
    return true;
  });
};

const selectRandomQuestions = (quizCount: number, difficulty: Difficulty) => {
  const filteredQuestions = getQuestionsByDifficulty(difficulty);
  const shuffled = [...filteredQuestions];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, clamp(quizCount, 1, filteredQuestions.length));
};

export default function HomePage() {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [quizCount, setQuizCount] = useState(DEFAULT_QUIZ_COUNT);
  const [difficulty, setDifficulty] = useState<Difficulty>("ふつう");
  const [hasStarted, setHasStarted] = useState(false);
  const maxQuizCount = getQuestionsByDifficulty(difficulty).length;

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

  const startQuiz = () => {
    setSelectedQuestions(selectRandomQuestions(quizCount, difficulty));
    setCurrentIndex(0);
    setScore(0);
    setShowExplanation(false);
    setAnswered(false);
    setHasStarted(true);
  };

  if (!hasStarted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">因数分解クイズ</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-5">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="quizCount">
              問題数
            </label>
            <input
              id="quizCount"
              type="number"
              min={1}
              max={maxQuizCount}
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={quizCount}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (Number.isNaN(value)) return;
                setQuizCount(clamp(value, 1, maxQuizCount));
              }}
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">難易度</p>
            <div className="flex gap-2">
              {difficultyOptions.map((option) => (
                <button
                  key={option}
                  className={`flex-1 py-2 rounded border transition-colors ${
                    difficulty === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setDifficulty(option);
                    setQuizCount((prev) => clamp(prev, 1, getQuestionsByDifficulty(option).length));
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
            onClick={startQuiz}
          >
            クイズを開始する
          </button>
        </div>
      </div>
    );
  }

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
            setHasStarted(false);
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
