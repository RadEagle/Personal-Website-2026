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

function getDefaultLevel(character: string): number {
    const realLevel = kanjiDictionary[character]["real-level"]

    if (!realLevel) {
        return 12
    }
    else {
        return realLevel;
    }
}

function getJoyoLevel(character: string): number {
    const joyoLevel = kanjiDictionary[character]["joyo-grade"]
    
    if (!joyoLevel || typeof(joyoLevel) !== "number" || joyoLevel === 9) {
        return 8;
    }
    else {
        return joyoLevel;
    }
}

function getJLPTLevel(character: string): number {
    const jlptLevel = kanjiDictionary[character]["jlpt-level"]
    
    if (!jlptLevel) {
        return 6;
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
            return 6;
    }
}

function getWaniKaniLevel(character: string): number {
    const wkLevel = kanjiDictionary[character]["wk-level"]

    if (!wkLevel) {
        return 7;
    }

    // to map 1-10 to 1, divide by 10, then do a ceiling
    return Math.ceil(wkLevel / 10)

}

function getColor(mode: string, character: string, defaultClass: string = "text-white"): string {
    if (!(character in kanjiDictionary)) {
        return defaultClass
    }

    let level: number | null = null
    switch(mode) {
        case "Default":
            level = getDefaultLevel(character)
            break
        case "Joyo":
            level = getJoyoLevel(character)
            break
        case "JLPT":
            level = getJLPTLevel(character)
            break
        case "WaniKani":
            level = getWaniKaniLevel(character)
            break
        default:
            return defaultClass
    }

    if (!level) {
        return defaultClass
    }

    // since maps are zero-indexed, decrement level by 1 to get its index
    const algorithm = getAlgorithm(mode);
    if (level > algorithm.length || level < 1) {
        return defaultClass
    }

    return algorithm[level-1].textClass;
}

function paintOutput(mode: string, input: string): PaintedOutput[] {
    if (!input) {
        return [];
    }
    
    const colorMap: PaintedOutput[] = [];

    for (const character of input) {
        const color = getColor(mode, character)

        colorMap.push({
            character: character,
            textClass: color
        })
    }

    return colorMap;
}

export {paintOutput}