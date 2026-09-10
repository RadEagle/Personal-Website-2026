import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  const getHeader = () =>
    screen.getByRole("navigation", { name: /desktop header/i })
      .parentElement as HTMLElement;

  const getDesktopMenu = () =>
    screen.getByRole("navigation", { name: /desktop header/i }) as HTMLElement;

  const getMobileMenu = () =>
    screen.getByRole("navigation", { name: /mobile/i })
      .parentElement as HTMLElement;

  const getHamburger = () => screen.getByRole("button", { name: /open menu/i });

  test("renders the hamburger button", () => {
    expect(getHamburger()).toBeInTheDocument();
  });

  test("mobile menu is hidden on load", () => {
    expect(getMobileMenu()).toHaveClass("hidden");
  });

  test("mobile menu is visible on click", async () => {
    const user = userEvent.setup();

    await user.click(getHamburger());

    expect(getMobileMenu()).toHaveClass("flex");
  });

  test("hamburger click removes menu", async () => {
    const user = userEvent.setup();

    await user.click(getHamburger());

    expect(getMobileMenu()).toHaveClass("flex");

    await user.click(getHamburger());

    expect(getMobileMenu()).toHaveClass("hidden");
  });

  test("mobile menu click removes menu", async () => {
    const user = userEvent.setup();

    await user.click(getHamburger());

    expect(getMobileMenu()).toHaveClass("flex");

    await user.click(getMobileMenu());

    expect(getMobileMenu()).toHaveClass("hidden");
  });

  test("header title works", () => {
    const headerTitle = within(getHeader()).getByRole("link", {
      name: /jon's homepage/i,
    });

    expect(headerTitle).toHaveAttribute("href", "/");
  });

  test("header links work", () => {
    expect(
      within(getDesktopMenu()).getByRole("link", { name: /home/i }),
    ).toHaveAttribute("href", "/");

    expect(
      within(getDesktopMenu()).getByRole("link", { name: /about me/i }),
    ).toHaveAttribute("href", "/about-me");

    expect(
      within(getDesktopMenu()).getByRole("link", { name: /projects/i }),
    ).toHaveAttribute("href", "/projects");
  });

  test("mobile links work", () => {
    expect(
      within(getMobileMenu()).getByRole("link", { name: /home/i }),
    ).toHaveAttribute("href", "/");

    expect(
      within(getMobileMenu()).getByRole("link", { name: /about me/i }),
    ).toHaveAttribute("href", "/about-me");

    expect(
      within(getMobileMenu()).getByRole("link", { name: /projects/i }),
    ).toHaveAttribute("href", "/projects");
  });
});
