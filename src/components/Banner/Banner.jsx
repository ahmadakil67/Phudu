import React from "react";

const Banner = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-16">
        Dependable Care, Backed by Trusted <br /> Professionals.
      </h1>
      <p className=" text-center mt-4 text-gray-700">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />{" "}
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>

      <div className=" py-4 flex justify-center">
        <div className="bg-white rounded-full shadow-md flex items-center">
          <input
            type="search"
            className="pl-4 pr-2 py-2 text-gray-700 focus:outline-none w-90"
            placeholder="Search any doctor..."
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none ml-5">
            Search Now
          </button>
      </div>

      <div className="flex justify-center gap-8">
        <img className="w-[450px] h-[280px]" src="/C001-assets/banner-img-1.png" alt="" />
        <img className="w-[450px] h-[280px]" src="/C001-assets/banner-img-1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
