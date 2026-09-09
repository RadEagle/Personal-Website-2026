import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { Footer } from "./Footer";

vi.mock("../Library/data", () => ({
  email: "arnold@example.com",
  resumeLink:
    "https://drive.google.com/file/d/mockup-resume-link/view?usp=sharing",
  linkedInUsername: "shenbelton",
  githubUsername: "DreadRavenous",
}));

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  // Left Footer

  // Right Footer
  test("Email works", () => {
    const email = screen.getByRole("link", { name: /email/i });

    expect(email).toBeVisible();
    expect(email).toHaveAttribute("href", "mailto:arnold@example.com");
  });

  test("Resume works", () => {
    const resume = screen.getByRole("link", { name: /resume/i });

    expect(resume).toBeVisible();
    expect(resume).toHaveAttribute(
      "href",
      "https://drive.google.com/file/d/mockup-resume-link/view?usp=sharing",
    );
  });

  test("LinkedIn works", () => {
    const linkedin = screen.getByRole("link", { name: /linkedin/i });

    expect(linkedin).toBeVisible();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/shenbelton",
    );
  });

  test("GitHub works", () => {
    const github = screen.getByRole("link", { name: /github/i });

    expect(github).toBeVisible();
    expect(github).toHaveAttribute("href", "https://github.com/DreadRavenous");
  });
});
