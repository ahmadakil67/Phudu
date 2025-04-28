import React from "react";
import { Link } from "react-router";
import { FaRegRegistered } from "react-icons/fa6";

const Doctor = ({ singleDoctor }) => {
  const { doctorImage, registration_number, name, speciality, education } =
    singleDoctor;

  return (
    <div className="card border-2 border-gray-300 w-76 mb-3">
      <figure className="p-6 bg-gray-200 m-3">
        <img className="h-[160px] w-[130px]" src={doctorImage} alt="Doctor" />
      </figure>
      <h1 className="pl-6 font-bold text-lg">{name}</h1>
      <p className="pl-6 font-bold text-gray-500">
        {education}-{speciality}
      </p>
      <div className="p-6 flex items-center gap-3">
        <FaRegRegistered />
        <p className="font-bold text-gray-500">{registration_number}</p>
      </div>
      <Link to={`/doctorDetails/${registration_number}`}>
        <div className="">
          <button className="w-[80%] btn rounded-full ml-7 mb-2 border-blue-500 text-blue-600">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Doctor;
