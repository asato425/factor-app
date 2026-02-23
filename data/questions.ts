export type Question = {
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    question: "x^2 - 9x + 20",
    choices: ["共通因数", "公式 a^2-b^2", "たすき掛け", "置換"],
    answer: 2, // 0-indexed
    explanation: "積が20、和が-9になるので、たすき掛けが最適です。"
  },
  {
    question: "x^2 - 4",
    choices: ["共通因数", "公式 a^2-b^2", "たすき掛け", "置換"],
    answer: 1,
    explanation: "x^2-4は平方差の公式で因数分解できます。"
  }
];