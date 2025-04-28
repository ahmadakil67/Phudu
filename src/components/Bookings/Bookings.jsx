import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Bookings = () => {
  const location = useLocation();
  const bookedDoctors = JSON.parse(localStorage.getItem("bookedDoctors")) || [];
  const chartData = bookedDoctors.map((doctor) => ({
    name: doctor.name,
    uv: doctor.consultation_fee,
  }));
  const handleCancelAppointment = (registration_number) => {
    const updatedDoctors = bookedDoctors.filter(
      (doctor) => doctor.registration_number !== registration_number
    );
    localStorage.setItem("bookedDoctors", JSON.stringify(updatedDoctors));
    toast.error("Appointment Cancelled!", {
      position: "top-center",
      autoClose: 2000,
    });
    // window.location.reload(); // simple way to reload the page and reflect changes
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("showToast")) {
      toast.success("Appointment Booked Successfully!");
    }
  }, [location]);

  return (
    <div>
      <ToastContainer />
      {bookedDoctors.length > 0 ? (
        <>
          <BarChart width={1200} height={350} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
          </BarChart>
          <h1 className="font-bold text-4xl text-center mt-3">
            My Today Appointments{" "}
          </h1>
          <p className="text-center text-gray-600 mt-5">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
          {bookedDoctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-md p-4 mb-8 mt-5"
            >
              <div className="flex justify-between items-center">
                <div className="mx-5">
                  <h2 className="font-semibold text-lg">Dr. {doctor.name}</h2>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    Appointment Fee: {doctor.consultation_fee} Taka + Vat
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  handleCancelAppointment(doctor.registration_number)
                }
                className="bg-white text-red-500 btn border-red-500 hover:text-white hover:bg-red-500 w-full text-xl font-bold py-2 px-4 rounded-full mt-2"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <h1 className="text-3xl font-bold text-gray-600 text-center">
            You Have Not Booked Any Appointment Yet
          </h1>
          <Link to={'/'}><button className="btn btn-primary mt-8">Book an Appointment</button></Link>
        </div>
      )}
    </div>
  );
};
export default Bookings;
