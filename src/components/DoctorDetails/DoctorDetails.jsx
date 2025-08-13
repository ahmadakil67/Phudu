import { FaRegRegistered } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router";
import {toast, ToastContainer } from "react-toastify";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const details = data.find((item) => item.registration_number == id);
  console.log(details.name);
  const {
    doctorImage,
    registration_number,
    name,
    speciality,
    education,
    works_at,
    available_days,
    consultation_fee,
  } = details;


  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleBookAppointment = () => {
  const bookedDoctors = JSON.parse(localStorage.getItem("bookedDoctors")) || [];
  const alreadyBooked = bookedDoctors.find(
    (doc) => doc.registration_number === registration_number
  );

  if (alreadyBooked) {
    toast.error("Appointment Already Scheduled!", {
      position: "top-center",
      autoClose: 2000,
    });
  } else {
    bookedDoctors.push({
      registration_number,
      name,
      consultation_fee,
    });
    localStorage.setItem("bookedDoctors", JSON.stringify(bookedDoctors));
    window.location.href = `/my-bookings`; 
  }
};
  

  return (
    
    <div className="bg-gray-100 mb-5">
      <ToastContainer></ToastContainer>
      <div className="w-6xl bg-white m-auto rounded-3xl shadow-2xl p-6">
        <h1 className="font-bold text-4xl text-center">
          Doctor’s Profile Details
        </h1>
        <p className="text-center mt-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br />{" "}
          facilisis turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="w-7xl m-auto mt-5 flex">
        <img
          className="h-[420px] w-[360px] ml-8 rounded-3xl shadow-2xl"
          src={doctorImage}
          alt=""
        />
        <div className="mt-5 ml-5">
          <h1 className="font-bold text-4xl mb-3">{name}</h1>
          <h1 className="mb-3 font-bold text-xl text-gray-500">{education}</h1>
          <h1 className="mb-3 font-bold text-xl text-gray-500">{speciality}</h1>
          <h1 className="mb-3 font-bold text-xl text-gray-500">
            Working at: <span className="text-black">{works_at}</span>
          </h1>
          <div className="border border-dashed border-gray-500 my-2"></div>
          <div className="flex items-center gap-3 font-medium text-xl text-gray-500">
            <FaRegRegistered />
            Reg No: {registration_number}
          </div>
          <div className="border border-dashed border-gray-500 my-2"></div>

          <p>
            Available:{" "}
            {available_days &&
              available_days.map((day, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold mr-2 my-2"
                >
                  {day}
                </span>
              ))}
          </p>
          <p className="my-2 font-black">
            Consultation Fee:{" "}
            <span className="text-[#176AE5]">
              Taka {consultation_fee}{" "}
              <span className="text-gray-500">(incl. Vat)</span>{" "}
              <span className="text-[#176AE5]">Per consultation</span>
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white w-6xl m-auto mt-5 rounded-3xl">
        <h1 className="font-bold text-3xl text-center p-6">
          Book an Appointment
        </h1>
        <div className="border border-dashed border-gray-500 my-2"></div>
        <div className="flex justify-between items-center mx-3">
          <span className="text-gray-700 font-bold">Availability:</span>
          {details.available_days.includes(today) ? (
            <p className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              Doctor Available Today
            </p>
          ) : (
            <p className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
              Doctor is Not Available Today
            </p>
          )}
        </div>

        <div className="border border-dashed border-gray-500 my-2"></div>

        <button 
  className="btn bg-[#176AE5] w-full mx-3 rounded-full text-lg text-white"
  onClick={() => handleBookAppointment()}
>
  Book Appointment Now
</button>

        
      </div>
    </div>
  );
};

export default DoctorDetails;
