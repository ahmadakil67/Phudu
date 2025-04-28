import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center gap-2">
        <img src="/C001-assets/logo.png" alt="" />
        <h1 className="font-bold text-3xl">Phudu</h1>
      </div>
      <div className="flex gap-5 my-5">
        <Link to={'/'}>
          <li className="list-none no-underline font-bold text-xl text-gray-600">Home</li>
        </Link>
        <Link to={'/my-bookings'}>
          <li className="list-none no-underline font-bold text-xl text-gray-600">My-Bookings</li>
        </Link>
        <Link to={'/blogs'}>
          <li className="list-none no-underline font-bold text-xl text-gray-600">Blogs</li>
        </Link>
        <Link to={'/contact'}>
          <li className="list-none no-underline font-bold text-xl text-gray-600">Contact Us</li>
        </Link>
      </div>
      <div className="border-1 w-full mb-5 border-gray-400"></div>
      <div className="flex gap-3">
        <img className="h-10 w-10" src="/C001-assets/icons8-facebook.svg" alt="" />
        <img className="h-10 w-10" src="/C001-assets/icons8-x.svg" alt="" />
        <img className="h-10 w-10" src="/C001-assets/icons8-github.svg" alt="" />
        <img className="h-10 w-10" src="/C001-assets/icons8-youtube.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
