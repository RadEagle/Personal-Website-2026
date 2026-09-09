import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { Hero } from "./Hero";

vi.mock("../Library/data", () => ({
  myName: "John Smith",
  headlineText: "Cutting trees since 1580.",
  projectCaptionText: "Amazing house tour!!!",
}));

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("name appears in hero", () => {
    expect(screen.getByText("I'm John Smith")).toBeInTheDocument();
  });

  test("headline appears in hero", () => {
    expect(screen.getByText("Cutting trees since 1580.")).toBeInTheDocument();
  });

  test("project caption appears in hero", () => {
    expect(screen.getByText("Amazing house tour!!!")).toBeInTheDocument();
  });
});
