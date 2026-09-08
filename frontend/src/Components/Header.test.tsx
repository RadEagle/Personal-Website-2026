import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Header } from "./Header";

test("renders the hamburger button", () => {
  render(<Header />);

  expect(
    screen.getByRole("button", { name: /open menu/i }),
  ).toBeInTheDocument();
});

test("mobile menu is hidden on load", () => {
    const mobileMenu = screen.getByRole("navigation", {name: /mobile/i}).parentElement as HTMLElement

    expect(
        mobileMenu
      ).toHaveClass("hidden");
});
