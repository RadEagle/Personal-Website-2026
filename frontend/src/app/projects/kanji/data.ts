// frontend/src/app/projects/kanji/data.ts

export const modes = ["Default", "Joyo", "JLPT", "WaniKani"];

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

interface AlgorithmEntry {
  intro: string;
  legend: LegendItem[];
}

interface LegendItem {
  label: string;
  complexity: number;
  textClass: string;
  borderClass: string;
}

export const kanjiAlgorithms: Record<string, AlgorithmEntry> = {
  Default: {
    intro:
      "The scoring is based on the grade level each kanji is taught in Japan. The complexity number is shown inside the parentheses.",
    legend: [
      {
        label: "Level 1",
        complexity: 1,
        textClass: "text-cyan-300",
        borderClass: "border-cyan-300",
      },
      {
        label: "Level 2",
        complexity: 2,
        textClass: "text-lime-300",
        borderClass: "border-lime-300",
      },
      {
        label: "Level 3",
        complexity: 3,
        textClass: "text-amber-300",
        borderClass: "border-amber-300",
      },
      {
        label: "Level 4",
        complexity: 4,
        textClass: "text-orange-300",
        borderClass: "border-orange-300",
      },
      {
        label: "Level 5",
        complexity: 5,
        textClass: "text-red-300",
        borderClass: "border-red-300",
      },
      {
        label: "Level 6",
        complexity: 6,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Level 7",
        complexity: 7,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Level 8",
        complexity: 8,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Level 9",
        complexity: 9,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Level 10",
        complexity: 10,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Level 11",
        complexity: 11,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Rare Kanji",
        complexity: 12,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
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
        textClass: "text-cyan-300",
        borderClass: "border-cyan-300",
      },
      {
        label: "2nd Grade",
        complexity: 2,
        textClass: "text-lime-300",
        borderClass: "border-lime-300",
      },
      {
        label: "3rd Grade",
        complexity: 3,
        textClass: "text-amber-300",
        borderClass: "border-amber-300",
      },
      {
        label: "4th Grade",
        complexity: 4,
        textClass: "text-orange-300",
        borderClass: "border-orange-300",
      },
      {
        label: "5th Grade",
        complexity: 5,
        textClass: "text-red-300",
        borderClass: "border-red-300",
      },
      {
        label: "6th Grade",
        complexity: 6,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Joyo Kanji",
        complexity: 7,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Jinmeiyo & Hyogai",
        complexity: 8,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
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
        textClass: "text-cyan-300",
        borderClass: "border-cyan-300",
      },
      {
        label: "JLPT 4",
        complexity: 2,
        textClass: "text-lime-300",
        borderClass: "border-lime-300",
      },
      {
        label: "JLPT 3",
        complexity: 3,
        textClass: "text-amber-300",
        borderClass: "border-amber-300",
      },
      {
        label: "JLPT 2",
        complexity: 4,
        textClass: "text-orange-300",
        borderClass: "border-orange-300",
      },
      {
        label: "JLPT 1",
        complexity: 5,
        textClass: "text-red-300",
        borderClass: "border-red-300",
      },
      {
        label: "Beyond JLPT",
        complexity: 6,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
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
        textClass: "text-cyan-300",
        borderClass: "border-cyan-300",
      },
      {
        label: "Levels 11-20",
        complexity: 2,
        textClass: "text-lime-300",
        borderClass: "border-lime-300",
      },
      {
        label: "Levels 21-30",
        complexity: 3,
        textClass: "text-amber-300",
        borderClass: "border-amber-300",
      },
      {
        label: "Levels 31-40",
        complexity: 4,
        textClass: "text-orange-300",
        borderClass: "border-orange-300",
      },
      {
        label: "Levels 41-50",
        complexity: 5,
        textClass: "text-red-300",
        borderClass: "border-red-300",
      },
      {
        label: "Levels 51-60",
        complexity: 6,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
      {
        label: "Beyond WaniKani",
        complexity: 7,
        textClass: "text-purple-500",
        borderClass: "border-purple-500",
      },
    ],
  },
};
