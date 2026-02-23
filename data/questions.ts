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
  },
  {
    question: "2x^2 + 6x",
    answer: 0,
    explanation: "2xを共通因数でくくると、2x(x+3)になります。"
  },
  {
    question: "x^2 + 2x + 1",
    answer: 1,
    explanation: "x^2+2x+1は (x+1)^2 の公式で因数分解できます。"
  },
  {
    question: "x^2 + 5x + 6",
    answer: 2,
    explanation: "積が6、和が5になる2つの数は2と3なので、たすき掛けで解けます。"
  },
  {
    question: "x^4 - 5x^2 + 4",
    answer: 3,
    explanation: "x^2をtと置くと t^2-5t+4 になり、置換法が有効です。"
  }
];
