import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { KanjiProject } from "./Components";

vi.mock("./data", () => ({
  exampleKanji: ["武", "川", "絶対"],
  kanjiAlgorithms: {
    mode1: {
      intro: "test intro 1",
      legend: [
        {
          label: "Lv. 1",
          complexity: -1,
          textClass: "text-red-100",
          textBorder: "border-blue-950",
        },
        {
          label: "Lev 2",
          complexity: 200,
          textClass: "text-orange-600",
          textBorder: "border-green-900",
        },
      ],
    },
    mode2: {
      intro: "test intro 2",
      legend: [
        {
          label: "5th Dan",
          complexity: 5,
          textClass: "text-lime-500",
          textBorder: "border-lime-400",
        },
        {
          label: "3rd Dan",
          complexity: 3,
          textClass: "text-cyan-200",
          textBorder: "border-teal-400",
        },
      ],
    },
  },
  maxInputLength: 500,
  sources: [
    {
      label: "Label 1:",
      link: "www.mockexample1.us",
    },
    {
      label: "Label 2",
      link: "www.mockexample2.us/",
    },
  ],
}));

vi.mock("../../../Library/data", () => ({
  email: "stungunamotti@example.com",
}));

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe("Kanji Component Data", () => {
  beforeEach(() => {
    render(<KanjiProject />);
  });

  // Introduction
  test("Kanji tutorial list is parameterized", () => {
    expect(screen.getByText("武")).toBeInTheDocument();
    expect(screen.getByText("川")).toBeInTheDocument();
    expect(screen.getByText("絶対")).toBeInTheDocument();
  });

  // Mode
  test("Mode labels are parameterized", () => {
    expect(screen.getByRole("button", { name: "mode1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "mode2" })).toBeInTheDocument();
  });

  // Sources
  test("Sources list is parameterized", () => {
    const link1 = screen.getByText("www.mockexample1.us");
    const link2 = screen.getByText("www.mockexample2.us/");

    expect(screen.getByText("Label 1::")).toBeInTheDocument();
    expect(screen.getByText("Label 2:")).toBeInTheDocument();

    expect(link1).toBeInTheDocument();
    expect(link1).toHaveAttribute("href", "www.mockexample1.us");

    expect(link2).toBeInTheDocument();
    expect(link2).toHaveAttribute("href", "www.mockexample2.us/");
  });

  // Feedback
  test("Email works and is parameterized", () => {
    const email = screen.getByRole("link", {
      name: "stungunamotti@example.com",
    });

    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute("href", "mailto:stungunamotti@example.com");
  });
});

describe("Kanji Component UI", () => {
  beforeEach(() => {
    render(<KanjiProject />);
  });

  // Introduction
  test("Kanji can be copied and pasted into Kanji input", async () => {
    const user = userEvent.setup();
    const spy = vi.spyOn(navigator.clipboard, "writeText");

    await user.click(screen.getByRole("button", { name: "武" }));
    spy.mockResolvedValue(undefined);

    expect(spy).toHaveBeenCalledExactlyOnceWith("武");

    expect(screen.getByText(/text copied!/i)).not.toHaveClass("hidden");
    expect(screen.getByText(/text copied!/i)).toHaveClass(
      "animate-toast-fade-in",
    );
  });

  // Algorithm and Mode
  test("Default mode is the first key", () => {
    expect(screen.getByRole("button", { name: "mode1" })).toHaveClass(
      "text-teal-400",
    );
    expect(screen.getByRole("button", { name: "mode2" })).not.toHaveClass(
      "text-teal-400",
    );

    expect(screen.getByText(/test intro 1/).parentElement).not.toHaveClass(
      "invisible",
    );
    expect(screen.getByText(/test intro 2/).parentElement).toHaveClass(
      "invisible",
    );
  });

  test("Mode 2 shows mode 2 levels", async () => {
    const user = userEvent.setup();
    const mode2 = screen.getByRole("button", { name: "mode2" });
    await user.click(mode2);

    expect(screen.getByRole("button", { name: "mode1" })).not.toHaveClass(
      "text-teal-400",
    );
    expect(mode2).toHaveClass("text-teal-400");

    expect(screen.getByText(/test intro 1/).parentElement).toHaveClass(
      "invisible",
    );
    expect(screen.getByText(/test intro 2/).parentElement).not.toHaveClass(
      "invisible",
    );
  });

  // Complexity, Input, and Result
  test("Pasting into the textbox works", async () => {
    const user = userEvent.setup();
    const kanjiInput = screen.getByRole("textbox", { name: /kanji input/i });
    await user.click(kanjiInput);
    await user.paste("武");
    expect(kanjiInput).toHaveValue("武");
  });

  test("Typing updates complexity and result", () => {});
});
