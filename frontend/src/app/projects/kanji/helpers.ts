import { kanjiAlgorithms } from "./data";
import kanjiDataset from "./kanji_jon.json";

const kanjiDictionary = kanjiDataset.Kanji as Record<string, KanjiEntry>;

export interface PaintedOutput {
  character: string;
  textClass: string;
}

interface KanjiEntry {
  "joyo-grade"?: number | string;
  "jlpt-level"?: number;
  "wk-level"?: number;
  "real-level"?: number;
}

function getAlgorithm(mode: string) {
  if (!kanjiAlgorithms[mode]) {
    throw new Error();
  }

  return kanjiAlgorithms[mode].legend;
}

function getDefaultLevel(character: string, maxLevel: number): number {
  const realLevel = kanjiDictionary[character]["real-level"];

  if (!realLevel) {
    return maxLevel;
  } else {
    return realLevel;
  }
}

function getJoyoLevel(character: string, maxLevel: number): number {
  const joyoLevel = kanjiDictionary[character]["joyo-grade"];

  if (!joyoLevel || typeof joyoLevel !== "number" || joyoLevel === 9) {
    return maxLevel;
  } else {
    return joyoLevel;
  }
}

function getJLPTLevel(character: string, maxLevel: number): number {
  const jlptLevel = kanjiDictionary[character]["jlpt-level"];

  if (!jlptLevel) {
    return maxLevel;
  }

  switch (jlptLevel) {
    case 5:
      return 1;
    case 4:
      return 2;
    case 3:
      return 3;
    case 2:
      return 4;
    case 1:
      return 5;
    default:
      return maxLevel;
  }
}

function getWaniKaniLevel(character: string, maxLevel: number): number {
  const wkLevel = kanjiDictionary[character]["wk-level"];

  if (!wkLevel) {
    return maxLevel;
  }

  // to map 1-10 to 1, divide by 10, then do a ceiling
  return Math.ceil(wkLevel / 10);
}

function getAlgorithmLevel(character: string, mode: string): number | null {
  if (!(character in kanjiDictionary)) {
    return null;
  }

  const maxLevel = getAlgorithm(mode).length;
  let level: number | null = null;
  switch (mode) {
    case "Default":
      level = getDefaultLevel(character, maxLevel);
      break;
    case "Joyo":
      level = getJoyoLevel(character, maxLevel);
      break;
    case "JLPT":
      level = getJLPTLevel(character, maxLevel);
      break;
    case "WaniKani":
      level = getWaniKaniLevel(character, maxLevel);
      break;
    default:
      return null;
  }

  return level;
}

function getAlgorithmIndex(character: string, mode: string): number | null {
  const level = getAlgorithmLevel(character, mode);

  // since maps are zero-indexed, decrement level by 1 to get its index
  return level ? level - 1 : null;
}

function getColor(
  character: string,
  mode: string,
  defaultClass: string = "text-white",
): string {
  const index = getAlgorithmIndex(character, mode);
  if (index === null) {
    return defaultClass;
  }

  const algorithm = getAlgorithm(mode);
  return algorithm[index].textClass;
}

function paintOutput(input: string, mode: string): PaintedOutput[] {
  if (!input) {
    return [];
  }

  const colorMap: PaintedOutput[] = [];

  for (const character of input) {
    const color = getColor(character, mode);

    colorMap.push({
      character: character,
      textClass: color,
    });
  }

  return colorMap;
}

export function calculateComplexity(input: string, mode: string): number {
  if (!input) {
    return 0;
  }

  let complexityMap: Record<number, number> = {};
  let totalKanji = 0;
  let maxLevel = getAlgorithm(mode).length;

  for (const character of input) {
    const level = getAlgorithmLevel(character, mode);
    if (level === null) {
      continue;
    }
    if (!(level in complexityMap)) {
      complexityMap[level] = 0;
    }

    complexityMap[level]++;
    totalKanji++;
  }

  // long text - take highest complexity that meets criteria
  const defaultOccurrencesThreshold = 5;
  const defaultShareThreshold = 10;

  for (let level = maxLevel; level > 0; level--) {
    const occurrences = complexityMap[level];
    const share = (occurrences / totalKanji) * 100;
    const occurrencesThreshold = getAlgorithm(mode)[level-1].occurrenceThreshold || defaultOccurrencesThreshold;
    const shareThreshold = getAlgorithm(mode)[level-1].shareThreshold || defaultShareThreshold;

    if (occurrences >= occurrencesThreshold && share >= shareThreshold) {
      return level;
    }
  }

  // short text - average complexities to determine reading level
  let sum = 0;
  for (let level = 1; level <= maxLevel; level++) {
    sum += level * complexityMap[level];
  }

  return Math.round(sum / totalKanji);
}

export { paintOutput };
