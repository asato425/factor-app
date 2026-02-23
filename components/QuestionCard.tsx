import { Question } from "../data/questions";

type Props = {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
};

export default function QuestionCard({ question, onAnswer }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <h2>{question.question}</h2>
      <div style={{ marginTop: "10px" }}>
        {question.choices.map((choice, index) => (
          <button
            key={index}
            style={{ display: "block", margin: "5px 0" }}
            onClick={() => onAnswer(index === question.answer)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}