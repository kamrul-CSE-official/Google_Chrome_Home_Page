import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { themeChange } from "theme-change";

const Navbar: React.FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="relative text-center">
      <div className="navbar bg-base-200 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-2 rounded-md border border-gradient-to-br from-purple-500 to-pink-500 overflow-hidden sm:hidden md:hidden lg:block hidden">
        <Marquee speed={35}>
          তোমরা তোমাদের চোখকে নিচু করে রাখ এবং লজ্জাস্থানের হেফজত করো{" "}
          <span className="text-orange-400">(মুসনাদে আহমাদ)</span> । হে আলি! বার
          বার দৃষ্টি ক্ষেপণ করো না। কারণ হঠাৎ দৃষ্টিতে তোমার কোনো দোষ নেই। তবে
          ইচ্ছাকৃত দ্বিতীয় দৃষ্টি অবশ্যই দোষের{" "}
          <span className="text-orange-400">(আবু দাউদ)</span> । দৃষ্টি নিয়ন্ত্রণ
          ছাড়া পাপ নিয়ন্ত্রণ অসম্ভব।
        </Marquee>
      </div>
      {/* <h1 className="text-4xl text-center font-bold text-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-75 animate-neon"></div>
      </h1> */}
    </div>
  );
};

export default Navbar;
