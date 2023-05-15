import Script from "next/script";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [navbarColor, setNavbarColor] = useState<string>("transparent");

  //   const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //     const currentScrollPos: number = e.currentTarget.scrollTop;
  //     const headerHeight: number = 50;
  //     if (currentScrollPos > headerHeight) {
  //       setNavbarColor("bg-base-100");
  //     } else {
  //       setNavbarColor("bg-transparent");
  //     }
  //   };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 30) {
        setNavbarColor("bg-base-100");
      } else {
        setNavbarColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`navbar fixed left-0 top-0 z-[999] w-full transition-colors duration-300 ${navbarColor}`}
      //   onScroll={handleScroll}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a href="./">Homepage</a>
            </li>
            <li>
              <a href="./transcribe">Transcribe</a>
            </li>
            <li>
              <a href="./about">About</a>
            </li>
            <li>
              <a>Sign in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">PlayTS</a>
      </div>
      <div className="navbar-end">
        <button className="btn-ghost btn-circle btn">
          <FaUserCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};
