/*
Created by Sunil Park.
This page uses HashLink to perform movement between pages.

Feature:
Color the navbar when the window scrollY is higher than 20 through a scroll event.
*/

import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./components.css";
import logo from "../assets/kayagarden_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // True when scrollY is higher than 20.
  const [hasMoved, setMoved] = useState(false);

  // Use toggle btn to display the link menu (useful only when the max-width meets the condition).
  const [displayMenu, setMenu] = useState(false);

  const unmounted = useRef(true);
  useEffect(() => {
    if (!unmounted.current) {
      window.addEventListener("scroll", resizeNavbar);
    } else {
      resizeNavbar();
    }
    return () => {
      unmounted.current = false;
      window.removeEventListener("scroll", resizeNavbar);
      console.log("scroll");
    };
  }, []);

  const resizeNavbar = (e) => {
    let windowHeight = window.scrollY;
    console.log("resize");
    windowHeight > 20 ? setMoved(true) : setMoved(false);
  };

  const menuClickHandler = () => {
    setMenu(!displayMenu);
  };

  return (
    <nav className={`navbar ${hasMoved && "navbar--resize"}`}>
      <div className={`wrapper ${displayMenu && "navbar__menu-display"}`}>
        <Link smooth to="#" className="navbar__logo" title="scroll to home">
          <img src={logo} alt="logo" />
        </Link>
        {displayMenu ? (
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            className="navbar__menu-icon"
            onClick={menuClickHandler}
            title="hide the menu"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleChevronDown}
            className="navbar__menu-icon"
            onClick={menuClickHandler}
            title="open the menu"
          />
        )}
        <ul>
          <li>
            <Link smooth to="#menu" title="scroll to menu">
              MENU
            </Link>
          </li>
          <li>
            <Link smooth to="#about" title="scroll to about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link smooth to="#location" title="scroll to location">
              LOCATION
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
