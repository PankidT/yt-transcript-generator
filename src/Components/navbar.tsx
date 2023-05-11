import Script from "next/script";
import React, { useState, useEffect } from "react";

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
        <a className="btn-ghost btn text-xl normal-case">daisyUI</a>
      </div>
      <div className="navbar-end">
        <button className="btn-ghost btn-circle btn">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn-ghost btn-circle btn">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge-primary badge badge-xs indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};
