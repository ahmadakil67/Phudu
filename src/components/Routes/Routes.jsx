import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blogs from "../Blogs/Blogs";
import Bookings from "../Bookings/Bookings";
import Home from "../Home/Home";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import Connect from "../Contact/Contact";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () => fetch("doctorsDetails.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/blogs",
        loader: () => fetch("blogData.json"),
        Component: Blogs,
      },
      {
        path: "/my-bookings",
        loader: () => fetch("/doctorsDetails.json"),
        Component: Bookings,
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch("/doctorsDetails.json"),
        Component: DoctorDetails,
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "*",
        Component: NotFound
      }
    ],
  },
]);
