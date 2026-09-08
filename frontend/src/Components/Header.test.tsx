import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Header } from "./Header";

test("renders the hamburger button", () => {
  render(<Header />);

  expect(
    screen.getByRole("button", { name: /open menu/i }),
  ).toBeInTheDocument();
});

test("mobile menu is hidden on load", () => {
  const mobileMenu = screen.getByRole("navigation", { name: /mobile/i })
    .parentElement as HTMLElement;

  expect(mobileMenu).toHaveClass("hidden");
});

test("mobile menu is visible on click", async () => {
  const user = userEvent.setup();
  const hamburger = screen.getByRole("button", { name: /open menu/i });
  const mobileMenu = screen.getByRole("navigation", { name: /mobile/i })
    .parentElement as HTMLElement;

  await user.click(hamburger);

  expect(mobileMenu).toHaveClass("flex");
});

test("hamburger click removes menu", async () => {
  const user = userEvent.setup();
  const hamburger = screen.getByRole("button", { name: /open menu/i });
  const mobileMenu = screen.getByRole("navigation", { name: /mobile/i })
    .parentElement as HTMLElement;

  await user.click(hamburger);

  expect(mobileMenu).toHaveClass("hidden");
});

test("clicking on mobile menu removes menu", async () => {
  const user = userEvent.setup();
  const hamburger = screen.getByRole("button", { name: /open menu/i });
  const mobileMenu = screen.getByRole("navigation", { name: /mobile/i })
    .parentElement as HTMLElement;

  await user.click(hamburger);

  expect(mobileMenu).toHaveClass("flex");

  await user.click(mobileMenu);

  expect(mobileMenu).toHaveClass("hidden");
});
