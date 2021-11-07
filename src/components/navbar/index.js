/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./styles/navbar.css";
import logo from "../../images/logo-smd.png";

export default function Navbar({ children, ...restProps }) {
  const [toggleMenu, setToggleMenu] = useState(0);

  useEffect(() => {
    console.log(toggleMenu);
  }, [toggleMenu]);

  return (
    <>
      <button onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div id="menu" className={toggleMenu ? "hidden" : ""}>
        <p>Hello Too</p>
        <p>HelloWorld</p>
      </div>
    </>
  );
}
