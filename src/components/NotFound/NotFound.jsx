import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-80">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
