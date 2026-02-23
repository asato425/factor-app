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
  },
  {
    question: "3x^2 - 12x",
    answer: 0,
    explanation: "3xを共通因数でくくると、3x(x-4)になります。"
  },
  {
    question: "x^2 + 8x + 16",
    answer: 1,
    explanation: "x^2+8x+16は (x+4)^2 の公式で因数分解できます。"
  },
  {
    question: "x^2 + x - 6",
    answer: 2,
    explanation: "積が-6、和が1になる2つの数は3と-2なので、たすき掛けで解けます。"
  },
  {
    question: "x^4 + x^2 - 12",
    answer: 3,
    explanation: "x^2をtと置くと t^2+t-12 になり、置換法で処理できます。"
  },
  {
    question: "5x^2 + 10x",
    answer: 0,
    explanation: "5xを共通因数でくくると、5x(x+2)になります。"
  },
  {
    question: "x^2 - 16",
    answer: 1,
    explanation: "x^2-16は平方差の公式で (x-4)(x+4) と因数分解できます。"
  },
  {
    question: "x^2 - 7x + 12",
    answer: 2,
    explanation: "積が12、和が-7になる2つの数は-3と-4なので、たすき掛けが有効です。"
  },
  {
    question: "x^4 - 10x^2 + 9",
    answer: 3,
    explanation: "x^2をtと置くと t^2-10t+9 となるため、置換法で解けます。"
  },
  {
    question: "4x^2 - 20x",
    answer: 0,
    explanation: "4xを共通因数でくくると、4x(x-5)になります。"
  },
  {
    question: "x^2 - 2x + 1",
    answer: 1,
    explanation: "x^2-2x+1は (x-1)^2 の公式で因数分解できます。"
  },
  {
    question: "x^2 + 9x + 20",
    answer: 2,
    explanation: "積が20、和が9になる2つの数は4と5なので、たすき掛けで解けます。"
  },
  {
    question: "x^4 - 13x^2 + 36",
    answer: 3,
    explanation: "x^2をtと置くと t^2-13t+36 になり、置換法が有効です。"
  },
  {
    question: "6x^2 + 18x",
    answer: 0,
    explanation: "6xを共通因数でくくると、6x(x+3)になります。"
  },
  {
    question: "x^2 - 25",
    answer: 1,
    explanation: "x^2-25は平方差の公式で (x-5)(x+5) と因数分解できます。"
  }
];
