import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { KanjiProject } from "./Components";

describe("Kanji Component", () => {
  beforeEach(() => {
    render(<KanjiProject />);
  });

  // Introduction
  test("Kanji tutorial list is parameterized", () => {});
  test("Kanji can be copied and pasted into Kanji input", () => {});

  // Algorithm and Mode
  test("Default mode shows user's assigned levels", () => {});
  test("Joyo mode shows joyo levels", () => {});
  test("JLPT mode shows JLPT levels", () => {});
  test("WaniKani mode shows WK levels", () => {});

  // Complexity, Input, and Result
  test("Typing updates complexity and result", () => {});

  // Sources
  test("Sources list is parameterized", () => {});

  // Feedback
  test("Email works and is parameterized", () => {});
});

describe("Kanji Scanner", () => {});
