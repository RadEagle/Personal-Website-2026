"use client";
import { useState } from "react";

interface DropdownProps {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NavTitle = () => {
  return (
    <h1 id="nav-title" className="text-3xl font-medium">
      <a href="/">🌌 Jon's Homepage</a>
    </h1>
  );
};

const HamburgerMenu = (props: DropdownProps) => {
  return (
    <button
      id="hamburger-button"
      className={`text-3xl md:hidden focus:outline-none cursor-pointer relative w-8 h-8  ${props.active ? "toggle-btn" : ""}`}
      onClick={props.onClick}
      aria-label="Open menu"
    >
      <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-300 before:content-[''] before:bg-white before:w-8 before:h-1 before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-300 after:content-[''] after:bg-white after:w-8 after:h-1 after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-300"></div>
    </button>
  );
};

const DesktopNavBar = () => {
  return (
    <nav
      className="hidden md:block space-x-8 text-xl"
      aria-label="desktop header"
    >
      <a href="/" className="nav-text">
        Home
      </a>
      <a href="/about-me" className="nav-text">
        About Me
      </a>
      <a href="/projects" className="nav-text">
        Projects
      </a>
      {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-text">Donate</a> */}
      {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-text">Contact</a> */}
    </nav>
  );
};

const DesktopHeader = (props: DropdownProps) => {
  return (
    <section
      id="desktop-header"
      className="max-w-4xl mx-auto p-4 flex justify-between items-center"
    >
      <NavTitle />
      <HamburgerMenu active={props.active} onClick={props.onClick} />
      <DesktopNavBar />
    </section>
  );
};

const MobileMenu = (props: DropdownProps) => {
  return (
    <section
      id="mobile-menu"
      className={`absolute top-16 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu text-white ${!props.active ? "hidden" : "flex"}`}
      onClick={props.onClick}
    >
      <nav
        className="flex flex-col min-h-screen items-center py-8"
        aria-label="mobile"
      >
        <a href="/" className="w-full text-center py-6 hover:opacity-90">
          Home
        </a>
        <a
          href="/about-me"
          className="w-full text-center py-6 hover:opacity-90"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Projects
        </a>
      </nav>
    </section>
  );
};

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownActive((prev) => !prev);
  };

  return (
    <header className="bg-indigo-950 text-white sticky top-0 z-10">
      <DesktopHeader active={dropdownActive} onClick={handleToggleDropdown} />
      <MobileMenu active={dropdownActive} onClick={handleToggleDropdown} />
    </header>
  );
};

export { Header };
