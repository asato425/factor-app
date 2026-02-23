import React from "react";
import { Question, commonChoices } from "../data/questions";


type Props = {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
};

export const QuestionCard: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      {commonChoices.map((choice, index) => (
        <button
          key={index}
          className="block w-full my-2 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-colors"
          onClick={() => onAnswer(index === question.answer)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};