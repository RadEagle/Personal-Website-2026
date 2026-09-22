// frontend/src/app/projects/kanji/data.ts

export const exampleKanji = [
  "孫悟空",
  "ジョジョの奇妙な冒険",
  "四宮かぐや",
  "千本桜",
  "神風",
  "麒麟",
  "狐",
  "胡桃",
  "東京",
];

// #region Algorithm
interface AlgorithmEntry {
  intro: string;
  legend: LegendItem[];
}

export interface LegendItem {
  label: string;
  complexity: number;
  textClass: string;
  borderClass: string;
}

export const kanjiAlgorithms: Record<string, AlgorithmEntry> = {
  Default: {
    intro:
      "The scoring is based on perceived difficulty, relevance, and exposure. The complexity number is shown inside the parentheses.",
    legend: [
      {
        label: "Level 1",
        complexity: 1,
        textClass: "text-sky-400",
        borderClass: "border-sky-400",
      },
      {
        label: "Level 2",
        complexity: 2,
        textClass: "text-cyan-400",
        borderClass: "border-cyan-400",
      },
      {
        label: "Level 3",
        complexity: 3,
        textClass: "text-aquamarine",
        borderClass: "border-aquamarine",
      },
      {
        label: "Level 4",
        complexity: 4,
        textClass: "text-green-400",
        borderClass: "border-green-400",
      },
      {
        label: "Level 5",
        complexity: 5,
        textClass: "text-yellowgreen",
        borderClass: "border-yellowgreen",
      },
      {
        label: "Level 6",
        complexity: 6,
        textClass: "text-acid",
        borderClass: "border-acid",
      },
      {
        label: "Level 7",
        complexity: 7,
        textClass: "text-yellow-300",
        borderClass: "border-yellow-300",
      },
      {
        label: "Level 8",
        complexity: 8,
        textClass: "text-orange-400",
        borderClass: "border-orange-400",
      },
      {
        label: "Level 9",
        complexity: 9,
        textClass: "text-orangered",
        borderClass: "border-orangered",
      },
      {
        label: "Level 10",
        complexity: 10,
        textClass: "text-red-500",
        borderClass: "border-red-500",
      },
      {
        label: "Level 11",
        complexity: 11,
        textClass: "text-red-300",
        borderClass: "border-red-300",
      },
      {
        label: "Rare Kanji",
        complexity: 12,
        textClass: "text-fuchsia-500",
        borderClass: "border-fuchsia-500",
      },
    ],
  },
  Joyo: {
    intro:
      "The scoring is based on the grade level each kanji is taught in Japan. The complexity number is shown inside the parentheses.",
    legend: [
      {
        label: "1st Grade",
        complexity: 1,
        textClass: "text-sky-400",
        borderClass: "border-sky-400",
      },
      {
        label: "2nd Grade",
        complexity: 2,
        textClass: "text-teal-400",
        borderClass: "border-teal-400",
      },
      {
        label: "3rd Grade",
        complexity: 3,
        textClass: "text-green-400",
        borderClass: "border-green-400",
      },
      {
        label: "4th Grade",
        complexity: 4,
        textClass: "text-lime-400",
        borderClass: "border-lime-400",
      },
      {
        label: "5th Grade",
        complexity: 5,
        textClass: "text-yellow-300",
        borderClass: "border-yellow-300",
      },
      {
        label: "6th Grade",
        complexity: 6,
        textClass: "text-orange-400",
        borderClass: "border-orange-400",
      },
      {
        label: "Joyo Kanji",
        complexity: 7,
        textClass: "text-red-500",
        borderClass: "border-red-500",
      },
      {
        label: "Jinmeiyo & Hyogai",
        complexity: 8,
        textClass: "text-fuchsia-500",
        borderClass: "border-fuchsia-500",
      },
    ],
  },
  JLPT: {
    intro:
      "The scoring is based on the level each kanji appears in the Japanese Language Proficiency Test (JLPT). The complexity number is shown inside the parentheses.",
    legend: [
      {
        label: "JLPT 5",
        complexity: 1,
        textClass: "text-sky-400",
        borderClass: "border-sky-400",
      },
      {
        label: "JLPT 4",
        complexity: 2,
        textClass: "text-green-400",
        borderClass: "border-green-400",
      },
      {
        label: "JLPT 3",
        complexity: 3,
        textClass: "text-amber-400",
        borderClass: "border-amber-400",
      },
      {
        label: "JLPT 2",
        complexity: 4,
        textClass: "text-orange-400",
        borderClass: "border-orange-400",
      },
      {
        label: "JLPT 1",
        complexity: 5,
        textClass: "text-red-500",
        borderClass: "border-red-500",
      },
      {
        label: "Beyond JLPT",
        complexity: 6,
        textClass: "text-fuchsia-500",
        borderClass: "border-fuchsia-500",
      },
    ],
  },
  WaniKani: {
    intro:
      "The scoring is based on the level each kanji appears in WaniKani. The complexity number is shown inside the parentheses.",
    legend: [
      {
        label: "Levels 1-10",
        complexity: 1,
        textClass: "text-sky-400",
        borderClass: "border-sky-400",
      },
      {
        label: "Levels 11-20",
        complexity: 2,
        textClass: "text-green-400",
        borderClass: "border-green-400",
      },
      {
        label: "Levels 21-30",
        complexity: 3,
        textClass: "text-amber-400",
        borderClass: "border-amber-400",
      },
      {
        label: "Levels 31-40",
        complexity: 4,
        textClass: "text-orange-400",
        borderClass: "border-orange-400",
      },
      {
        label: "Levels 41-50",
        complexity: 5,
        textClass: "text-red-500",
        borderClass: "border-red-500",
      },
      {
        label: "Levels 51-60",
        complexity: 6,
        textClass: "text-red-300",
        borderClass: "border-red-300",
      },
      {
        label: "Beyond WaniKani",
        complexity: 7,
        textClass: "text-fuchsia-500",
        borderClass: "border-fuchsia-500",
      },
    ],
  },
};

// #endregion

export const maxInputLength: number = 2500;

interface Source {
  label: string;
  link: string;
}

export const sources: Source[] = [
  {
    label: "Grade Kanji",
    link: "https://www.kanji-link.com/en/kanji/grade/",
  },
  {
    label: "JLPT Kanji",
    link: "https://www.kanshudo.com/collections/jlpt_kanji",
  },
  {
    label: "Wanikani",
    link: "https://www.wanikani.com/kanji",
  },
];
