import React, { useState } from "react";
import "../../scss/main.scss";
import "./Header.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='header h-100'>
      <div className='menuHolder'>
        <button
          className={`c-hamburger c-hamburger--htx ${
            menuOpen ? "is-active" : ""
          }`}
          id='open-button'
          onClick={toggleMenu}
        >
          <span>
            <span className='visually-hidden'>toggle menu</span>
          </span>
        </button>
      </div>

      <div className={`menu-wrap ${menuOpen ? "show-menu" : ""}`}>
        <nav className='menu'>
          <ul className='link-list'>
            <li className='pb-3'>
              <a
                className='hvr-underline-from-left text-uppercase'
                href='#home'
              >
                Home
              </a>
            </li>
            <li className='pb-3'>
              <a
                className='hvr-underline-from-left text-uppercase'
                href='#tech-skills'
              >
                Tech Skills
              </a>
            </li>
            <li className='pb-3'>
              <a
                className='hvr-underline-from-left text-uppercase'
                href='#soft-skills'
              >
                Soft Skills
              </a>
            </li>
            <li className='pb-3'>
              <a
                className='hvr-underline-from-left text-uppercase'
                href='#projects'
              >
                Projects
              </a>
            </li>
            <li className='pb-3'>
              <a
                className='hvr-underline-from-left text-uppercase'
                href='#contact'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
