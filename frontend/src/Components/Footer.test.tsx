import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Footer } from "./Footer";
import { resumeLink } from "../Library/data";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  // Left Footer

  // Right Footer
  test("Email works", () => {
    const email = screen.getByRole("link", { name: /email/i });

    expect(email).toBeVisible();
    expect(email).toHaveAttribute("href", "mailto:jonathanqchau@gmail.com");
  });

  test("Resume works", () => {
    const resume = screen.getByRole("link", { name: /resume/i });

    expect(resume).toBeVisible();
    expect(resume).toHaveAttribute("href", resumeLink);
  });

  test("LinkedIn works", () => {
    const linkedin = screen.getByRole("link", { name: /linkedin/i });

    expect(linkedin).toBeVisible();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jonathanqchau/",
    );
  });

  test("GitHub works", () => {
    const github = screen.getByRole("link", { name: /github/i });

    expect(github).toBeVisible();
    expect(github).toHaveAttribute("href", "https://github.com/RadEagle");
  });
});
