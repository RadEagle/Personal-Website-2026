import { describe, expect, test } from "vitest";
import { paintOutput, calculateComplexity } from "./helpers";
import {
  fantasyExcerpt,
  jlpt1Excerpt,
  jlpt2Excerpt,
  jlpt3Excerpt,
  jlpt4Excerpt,
  jlpt5Excerpt,
  goldDefaultResult,
  goldJoyoResult,
  goldJLPTResult,
  goldWaniKaniResult,
} from "./fixtures";

describe("Paint Output", () => {
  const input = "Aあア们 木動険湿輝蜜";

  test("Default Algorithm", () => {
    expect(paintOutput(input, "Default")).toEqual(goldDefaultResult);
  });

  test("Joyo Algorithm", () => {
    expect(paintOutput(input, "Joyo")).toEqual(goldJoyoResult);
  });

  test("JLPT Algorithm", () => {
    expect(paintOutput(input, "JLPT")).toEqual(goldJLPTResult);
  });

  test("WaniKani Algorithm", () => {
    expect(paintOutput(input, "WaniKani")).toEqual(goldWaniKaniResult);
  });
});

describe("Calculate Complexity", () => {
  const mode = "JLPT";

  test("JLPT 5", () => {
    expect(calculateComplexity(jlpt5Excerpt, mode)).toEqual(1);
  });

  test("JLPT 4", () => {
    expect(calculateComplexity(jlpt4Excerpt, mode)).toEqual(2);
  });

  test("JLPT 3", () => {
    expect(calculateComplexity(jlpt3Excerpt, mode)).toEqual(3);
  });

  test("JLPT 2", () => {
    expect(calculateComplexity(jlpt2Excerpt, mode)).toEqual(4);
  });

  test("JLPT 1", () => {
    expect(calculateComplexity(jlpt1Excerpt, mode)).toEqual(5);
  });

  test("Fantasy", () => {
    expect(calculateComplexity(fantasyExcerpt, mode)).toEqual(6);
  });
});
