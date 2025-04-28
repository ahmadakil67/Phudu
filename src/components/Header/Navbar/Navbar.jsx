import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to={'/'}><li className="m-2 text-gray-500 font-bold text-lg">Home</li></Link>
      <Link to={'/my-bookings'}><li className="m-2 text-gray-500 font-bold text-lg">My-Bookings</li></Link>
      <Link to={'/blogs'}><li className="m-2 text-gray-500 font-bold text-lg">Blogs</li></Link>
      <Link to={'/contact'}><li className="m-2 text-gray-500 font-bold text-lg">Contact Us</li></Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl m-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <img src="/C001-assets/logo.png" alt="" />
        <a className="btn btn-ghost text-xl">Phudu</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn m-2 bg-[#176AE5] text-white px-5 rounded-full">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;