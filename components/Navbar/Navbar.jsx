"use client"
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { MdLightMode, MdNightlight, MdMenu, MdClose } from "react-icons/md";
import React, { useState } from "react";
import "./Navbar.css";

const MobileMenu = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="mobile-menu">
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <MdMenu size={30} />
      </div>
      {isOpen && (
        <div className="mobile-menu-content" onClick={toggleMenu}>
          <ul>
            <li>
              <div className="mobile-menu-toggle-close">
                <MdClose size={30} />
              </div>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/#experience">Experience</Link>
            </li>
            <li>
              <Link href="/#skills">Skills</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
            <li>
              <a onClick={toggleTheme}>
                {theme === "light" ? (
                  <MdNightlight className="icon" size={30} />
                ) : (
                  <MdLightMode className="icon" size={30} />
                )}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const logo = "{#}";

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>{logo}</h1>
        </div>
        <MobileMenu />
        {/* Desktop Menu */}
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <a onClick={toggleTheme}>
              {theme === "light" ? (
                <MdNightlight className="icon" size={30} />
              ) : (
                <MdLightMode className="icon" size={30} />
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
