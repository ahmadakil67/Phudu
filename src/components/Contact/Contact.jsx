import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Contact;
