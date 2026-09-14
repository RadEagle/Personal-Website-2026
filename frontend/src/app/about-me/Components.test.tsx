import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { AboutMe } from "./Components";

vi.mock("./data.ts", () => ({
  identity: "Baseball player with over 150 career home runs",
  proof: "Tampa Bay Rays, Los Angeles Dodgers",
  story: "Mock story goes here",
  skills: ["Baserunning", "Resilience"],
  exploring: ["Ball catching", "Swinging curveballs"],
  interests: ["Anime", "Dogs", "Cooking Japanese cuisine"],
}));

describe("About Me Components", () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  test("Identity is displayed", () => {
    expect(
      screen.getByText("Baseball player with over 150 career home runs"),
    ).toBeInTheDocument();
  });
  test("Proof is displayed", () => {
    expect(
      screen.getByText("Tampa Bay Rays, Los Angeles Dodgers"),
    ).toBeInTheDocument();
  });
  test("Story is displayed", () => {
    expect(screen.getByText("Mock story goes here")).toBeInTheDocument();
  });
  test("Skills are displayed", () => {
    expect(screen.getByText("Baserunning")).toBeInTheDocument();
    expect(screen.getByText("Resilience")).toBeInTheDocument();
  });
  test("Exploring skills are displayed", () => {
    expect(screen.getByText("Ball catching")).toBeInTheDocument();
    expect(screen.getByText("Swinging curveballs")).toBeInTheDocument();
  });
  test("Interests are displayed", () => {
    expect(screen.getByText("Anime")).toBeInTheDocument();
    expect(screen.getByText("Dogs")).toBeInTheDocument();
    expect(screen.getByText("Cooking Japanese cuisine")).toBeInTheDocument();
  });
});
