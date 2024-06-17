import React from "react";
import { IoSearch } from "react-icons/io5";
import PatientCard from "./PatientCard/";

const PatientsBar = ({ data }) => {
  return (
    <div className="w-60 p-5 rounded-xl shadow bg-white hidden xl:inline h-[500px]">
      <div className="w-full flex justify-between text-gray-800">
        <h1 className="font-medium ml-3">Patients</h1>
        <IoSearch className="text-xl" />
      </div>
      <div className="border my-3" />
      <div className="p-2 overflow-auto flex flex-col gap-5">
        {data.map((patient, index) => (
          <PatientCard data={patient} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PatientsBar;
