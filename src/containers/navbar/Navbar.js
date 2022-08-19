import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import './Navbar.css';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Bookstore CMS
      </a>
      <button
        type="button"
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          viewBox="0 0 20 20"
          fill="#86c232"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
            className="HamburgerLines"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li id="books">
            <Link to="/">BOOKS</Link>
          </li>
          <li id="categories">
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <button
          type="button"
          className="user-icon"
        >
          <ImUser />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
