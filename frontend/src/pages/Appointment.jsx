import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors.jsx";

const Appointment = () => {
  const { docId } = useParams(); // Get doctor ID from route params
  const { doctors, currencySymbol } = useContext(AppContext); // Get doctors list from context
  const dayOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null); // State to hold doctor info
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    if (doctors) {
      const docInfo = doctors.find((doc) => doc._id === docId); // Find doctor by ID
      setDocInfo(docInfo); // Update state with doctor info
    }
  };

  const getAvailableSlots = async () => {
    const allSlots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }
    setDocSlots(allSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    console.log("Updated Slots:", docSlots);
  }, [docSlots]);

  if (!docInfo) {
    return <p>Loading doctor information...</p>; // Loading state
  }

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <img
              className="w-full rounded-lg bg-primary sm:max-w-72"
              src={docInfo.image}
              alt={docInfo.name || "Doctor"}
            />
          </div>
          <div className="flex-1 p-8 mx-2 bg-white border-gray-400 rounded-lg py-7 sm:mx-0 mt-[80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img src={assets.verified_icon} className="w-5" />
            </p>

            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
              <p className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>

            {/* Doctor about */}
            <div>
              <p className="flex items-center gap-1 mt-3 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>

            <p className="font-medium text-gray-500">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-4 font-medium text-gray-700 sm:ml-72 sm:pl-4">
          <p>Booking Slots</p>
          <div className="flex items-center w-full gap-3 mt-4 overflow-x-scroll">
            {docSlots.length > 0 ? (
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  } `}
                >
                  <p>{item[0] && dayOfWeeks[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            ) : (
              <p>No slots available</p>
            )}
          </div>

          <div className="flex items-center w-full gap-3 mt-4 overflow-x-scroll">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border-gray-300 "
                  } `}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button className="py-3 m-6 text-sm font-light text-white rounded-full bg-primary px-14">
            Book and appointment
          </button>
        </div>
        {/* Listing Related Doctors */}
        
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
