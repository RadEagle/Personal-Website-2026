import { useState } from "react";

interface DropdownProps {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function HamburgerMenu(props: DropdownProps) {
  return (
    <button
      id="hamburger-button"
      className={`text-3xl md:hidden focus:outline-none cursor-pointer relative w-8 h-8  ${props.active ? "toggle-btn" : ""}`}
      onClick={props.onClick}
    >
      <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
    </button>
  );
}

function DesktopNavBar() {
  return (
    <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
      <a href="<?php echo $append ?>" className="nav-text">
        Home
      </a>
      <a href="<?php echo $append ?>about-me" className="nav-text">
        About Me
      </a>
      <a href="<?php echo $append ?>projects" className="nav-text">
        Projects
      </a>
      {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-text">Donate</a> */}

      {/* <a href="javascript:void(0);" className="dropdown" onClick="dropDown()">
                <img height="30" src="<?php echo $append ?>img/menu.png" alt="Menu" />
            </a> */}
    </nav>
  );
}

function DesktopHeader(props: DropdownProps) {
  return (
    <section
      id="desktop-header"
      className="max-w-4xl mx-auto p-4 grid justify-between items-center"
    >
      <HamburgerMenu active={props.active} onClick={props.onClick} />
      <DesktopNavBar />
    </section>
  );
}

function MobileMenu(props: DropdownProps) {
  return (
    <section
      id="mobile-menu"
      className={`absolute top-16 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu text-white ${!props.active ? "hidden" : "flex"}`}
      onClick={props.onClick}
    >
      <nav
        className="flex flex-col min-h-screen items-center py-8"
        aria-lavel="mobile"
      >
        <a
          href="<?php echo $append ?>"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Home
        </a>
        <a
          href="<?php echo $append ?>about-me"
          className="w-full text-center py-6 hover:opacity-90"
        >
          About Me
        </a>
        <a
          href="<?php echo $append ?>projects"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Projects
        </a>
      </nav>
    </section>
  );
}

function Header() {
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
}

export { Header };
