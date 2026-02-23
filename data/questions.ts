export type Question = {
  question: string;
  answer: number;
  explanation: string;
};

export const commonChoices = ["共通因数", "公式", "たすき掛け", "置換"];

export const questions: Question[] = [
  {
    question: "x^2 - 9x + 20",
    answer: 2, // 0-indexed
    explanation: "積が20、和が-9になるので、たすき掛けが最適です。"
  },
  {
    question: "x^2 - 4",
    answer: 1,
    explanation: "x^2-4は平方差の公式で因数分解できます。"
  }
];