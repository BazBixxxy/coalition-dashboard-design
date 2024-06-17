import React from "react";
import Chart from "./Chart";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Diagnosis = ({ data }) => {
  // console.log(data[0]?.diagnosis_history[0]?.heart_rate?.value);
  return (
    <div className="">
      <h1 className="font-medium text-xl mb-2">Diagnosis History</h1>
      <div className="bg-purple-100 p-3 rounded-2xl">
        <h2 className="font-medium ml-16">Blood Pressure</h2>
        <div className="flex">
          <Chart info={data} />
          <div className="p-5">
            <div>
              <div className="text-sm flex items-center gap-2">
                <div className="h-3 w-3 bg-purple-300 rounded-full" />
                Systolic
              </div>
              <div className="">
                <span className="text-xl">
                  {
                    data[0]?.diagnosis_history[0]?.blood_pressure?.systolic
                      ?.value
                  }
                </span>
                <span className="text-xs flex items-center">
                  <IoMdArrowDropup className="text-lg" />
                  {
                    data[0]?.diagnosis_history[0]?.blood_pressure?.systolic
                      ?.levels
                  }
                </span>
              </div>
            </div>
            <div className="border my-3" />
            <div>
              <div className="text-sm flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full" />
                Diastolic
              </div>
              <div className="">
                <span className="text-xl">
                  {
                    data[0]?.diagnosis_history[0]?.blood_pressure?.diastolic
                      ?.value
                  }
                </span>
                <span className="text-xs fle items-center">
                  <IoMdArrowDropdown className="text-lg" />
                  {
                    data[0]?.diagnosis_history[0]?.blood_pressure?.diastolic
                      ?.levels
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="p-3 bg-sky-100 rounded-2xl">
          <h3 className="">Respiratory Rate</h3>
          <p className="text-2xl font-bold">
            {data[0]?.diagnosis_history[0]?.blood_pressure?.diastolic?.value}{" "}
            bpm
          </p>
          <p className="text-sm font-light">
            {data[0]?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels}
          </p>
        </div>
        <div className="p-3 bg-red-200 rounded-2xl">
          <h3 className="">Temperature</h3>
          <p className="text-2xl font-bold">
            {data[0]?.diagnosis_history[0]?.temperature?.value} F
          </p>
          <p className="text-sm font-light">Normal</p>
        </div>
        <div className="p-3 bg-pink-200 rounded-2xl">
          <h3 className="">Heart Rate</h3>
          <p className="text-2xl font-bold">
            {data[0]?.diagnosis_history[0]?.heart_rate?.value} bpm
          </p>
          <p className="text-sm font-light flex items-center">
            <IoMdArrowDropdown />
            {data[0]?.diagnosis_history[0]?.heart_rate?.levels}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
