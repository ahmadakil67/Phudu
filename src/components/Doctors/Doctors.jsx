import React, { Suspense, useState } from "react";
import Spinner from "../Spinner/Spinner";
import Doctor from "../Doctor/Doctor";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Doctors = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };
  const doctorsToDisplay = showAll ? data : data.slice(0, 6);
  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold mt-16">Our Best Doctors</h1>
      <p className=" text-center mt-4 text-gray-700">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />{" "}
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 m-auto">
          {doctorsToDisplay.map((singleDoctor) => (
            <Doctor
              key={singleDoctor.registration_number}
              singleDoctor={singleDoctor}
            ></Doctor>
          ))}
        </div>
      </Suspense>
      {!showAll && (
        <div className="text-center mt-6">
          <button
            className="btn bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            onClick={handleViewAll}
          >
            View All Doctors
          </button>
        </div>
      )}

      <h1 className="font-bold text-4xl text-center mt-8">
        We Provide Best Medical Services
      </h1>
      <p className="text-gray-500 text-center mt-5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-12 max-w-6xl mx-auto gap-6">
      <motion.div
        className="h-50 w-50 bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src="/medical-appointment-booking-application/C001-assets/success-doctor.png" alt="" className="h-12 w-12 mb-4" />
        <h2 className="text-4xl font-bold">
          <CountUp end={199} enableScrollSpy duration={5} />+
        </h2>
        <p className="text-gray-600 mt-2">Total Doctors</p>
      </motion.div>

      <motion.div
        className="h-50 w-50 bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src="/medical-appointment-booking-application/C001-assets/success-patients.png" alt="" className="h-12 w-12 mb-4" />
        <h2 className="text-4xl font-bold">
          <CountUp end={467} enableScrollSpy duration={5} />+
        </h2>
        <p className="text-gray-600 mt-2">Total Reviews</p>
      </motion.div>

      <motion.div
        className="h-50 w-50 bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img src="/medical-appointment-booking-application/C001-assets/success-review.png" alt="" className="h-12 w-12 mb-4" />
        <h2 className="text-4xl font-bold">
          <CountUp end={1900} enableScrollSpy duration={5} />+
        </h2>
        <p className="text-gray-600 mt-2">Patients</p>
      </motion.div>

      <motion.div
        className="h-50 w-50 bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <img src="/medical-appointment-booking-application/C001-assets/success-staffs.png" alt="" className="h-12 w-12 mb-4" />
        <h2 className="text-4xl font-bold">
          <CountUp end={300} enableScrollSpy duration={5} />+
        </h2>
        <p className="text-gray-600 mt-2">Total Staffs</p>
      </motion.div>
    </div>
    </div>
  );
};

export default Doctors;
