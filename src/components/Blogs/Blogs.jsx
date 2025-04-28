import React from "react";
import { Link, useLoaderData } from "react-router";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Blogs</h2>
      <p className="font-bold text-gray-500 text-center">Let's clear some basic concepts in ReactJS and be a good web developer </p>
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="card w-full shadow-md bg-base-100">
            <div className="card-body">
              <h3 className="card-title">{blog.question}</h3>
              <p className="text-green-800 text-lg">Answer</p>
              <p className="text-lg text-gray-600">{blog.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
