import {kanjiAlgorithms} from "./data"
import kanjiDataset from "./kanji_jon.json"

const kanjiDictionary = kanjiDataset.Kanji as Record<string, KanjiEntry> 

export interface PaintedOutput {
    character: string,
    textClass: string
}

interface KanjiEntry {
    "joyo-grade"?: number | string,
    "jlpt-level"?: number,
    "wk-level"?: number,
    "real-level"?: number
}

function getAlgorithm(mode: string) {
    if (!kanjiAlgorithms[mode]) {
        throw new Error;
    }

    return kanjiAlgorithms[mode].legend;
}

function getDefaultLevel(character: string, maxLevel: number): number {
    const realLevel = kanjiDictionary[character]["real-level"]

    if (!realLevel) {
        return maxLevel;
    }
    else {
        return realLevel;
    }
}

function getJoyoLevel(character: string, maxLevel: number): number {
    const joyoLevel = kanjiDictionary[character]["joyo-grade"]
    
    if (!joyoLevel || typeof(joyoLevel) !== "number" || joyoLevel === 9) {
        return maxLevel;
    }
    else {
        return joyoLevel;
    }
}

function getJLPTLevel(character: string, maxLevel: number): number {
    const jlptLevel = kanjiDictionary[character]["jlpt-level"]
    
    if (!jlptLevel) {
        return maxLevel;
    }

    switch(jlptLevel) {
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
    const wkLevel = kanjiDictionary[character]["wk-level"]

    if (!wkLevel) {
        return maxLevel;
    }

    // to map 1-10 to 1, divide by 10, then do a ceiling
    return Math.ceil(wkLevel / 10)

}

function getAlgorithmIndex(character: string, mode: string): number | null {
    if (!(character in kanjiDictionary)) { return null; }
    
    const maxLevel = getAlgorithm(mode).length;
    let level: number | null = null
    switch(mode) {
        case "Default":
            level = getDefaultLevel(character, maxLevel)
            break
        case "Joyo":
            level = getJoyoLevel(character, maxLevel)
            break
        case "JLPT":
            level = getJLPTLevel(character, maxLevel)
            break
        case "WaniKani":
            level = getWaniKaniLevel(character, maxLevel)
            break
        default:
            return null
    }

    if (!level) { return null; }
    
    // since maps are zero-indexed, decrement level by 1 to get its index
    return level - 1
}

function getColor(character: string, mode: string, defaultClass: string = "text-white"): string {
    const index = getAlgorithmIndex(character, mode)
    if (!index) {
        return defaultClass;
    }

    const algorithm = getAlgorithm(mode)
    return algorithm[index].textClass;
}

function paintOutput(input: string, mode: string): PaintedOutput[] {
    if (!input) {
        return [];
    }
    
    const colorMap: PaintedOutput[] = [];

    for (const character of input) {
        const color = getColor(character, mode)

        colorMap.push({
            character: character,
            textClass: color
        })
    }

    return colorMap;
}

function calculateComplexity(input: string, mode: string): number {
    return 0
}

export {paintOutput}