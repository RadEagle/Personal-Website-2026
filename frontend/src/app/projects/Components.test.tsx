import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { ProjectsList, OtherProjectsList } from "./Components";

vi.mock("./projectsList.json", async () => {
  const mockProjectsList = await import("./mockProjectsList.json");
  return mockProjectsList;
});

vi.mock("./otherProjectsList.json", async () => {
  const mockOtherProjectsList = await import("./mockOtherProjectsList.json");
  return mockOtherProjectsList;
});

describe("Projects List", () => {
  beforeEach(() => {
    render(<ProjectsList />);
  });

  test("Mock Project 1 is visible", () => {
    expect(screen.getByText("Mock Project 1")).toBeInTheDocument();
    expect(screen.getByText("August 2026")).toBeInTheDocument();
  });
  test("Mock Project 2 is visible", () => {
    expect(screen.getByText("Mock Project 2")).toBeInTheDocument();
    expect(screen.getByText("September 2026")).toBeInTheDocument();
  });
});

describe("Other Projects List", () => {
  beforeEach(() => {
    render(<OtherProjectsList />);
  });

  test("Mock Other Project 1 is visible", () => {
    expect(screen.getByText("Mock Other Project 1")).toBeInTheDocument();
    expect(screen.getByText("July - August 2025")).toBeInTheDocument();
  });
  test("Mock Other Project 2 is visible", () => {
    expect(screen.getByText("Mock Other Project 2")).toBeInTheDocument();
    expect(screen.getByText("April 2026")).toBeInTheDocument();
  });
  test("Mock Other Project 3 is visible", () => {
    expect(screen.getByText("Mock Other Project 3")).toBeInTheDocument();
    expect(screen.getByText("June 2026 - Present")).toBeInTheDocument();
  });
  test("Mock Other Project 4 is visible", () => {
    expect(screen.getByText("Mock Other Project 4")).toBeInTheDocument();
    expect(
      screen.getByText("December 2025 - January 2026"),
    ).toBeInTheDocument();
  });
});
