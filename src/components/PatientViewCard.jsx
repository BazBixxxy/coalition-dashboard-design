import React from "react";
import { CiCalendar } from "react-icons/ci";
import { BsGenderFemale } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

const PatientViewCard = ({ data }) => {
  // ! I used chatGPT to me configure the date
  const dateString = data[0]?.date_of_birth;

  if (dateString) {
    const DOB = new Date(dateString); // Directly use the date string in the correct format

    const options = { year: "numeric", month: "long", day: "numeric" };
    var formattedDate = DOB.toLocaleDateString("en-US", options);

    // console.log(formattedDate); // Outputs: August 19, 2006
  } else {
    console.log("Date of birth missing.");
  }

  return (
    <div className="w-72 p-5 rounded-xl shadow bg-white">
      <div className="w-full flex flex-col items-center gap-4 mb-5">
        <img
          // src="https://cdn.pixabay.com/photo/2022/12/24/21/14/portrait-7676482_1280.jpg"
          src={data[0]?.profile_picture}
          alt=""
          className="w-32 h-32 object-cover rounded-full"
        />
        <h1 className="text-xl font-medium">{data[0]?.name}</h1>
      </div>
      <div className="border my-3" />
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-200 inline-block rounded-full">
            <CiCalendar />
          </div>
          <div className="text-xs">
            <h3 className="font-light">Date of Birth</h3>
            <p className="font-medium">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-200 inline-block rounded-full">
            <BsGenderFemale />
          </div>
          <div className="text-xs">
            <h3 className="font-light">Gender</h3>
            <p className="font-medium">{data[0]?.gender}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-200 inline-block rounded-full">
            <FiPhone />
          </div>
          <div className="text-xs">
            <h3 className="font-light mb-1">Contact no.</h3>
            <p className="font-medium">{data[0]?.phone_number}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-200 inline-block rounded-full">
            <FiPhone />
          </div>
          <div className="text-xs">
            <h3 className="font-light">Emergency Contact</h3>
            <p className="font-medium">{data[0]?.emergency_contact}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-200 inline-block rounded-full">
            <LuShieldCheck />
          </div>
          <div className="text-xs">
            <h3 className="font-light">Insurance Provider</h3>
            <p className="font-medium">{data[0]?.insurance_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientViewCard;
