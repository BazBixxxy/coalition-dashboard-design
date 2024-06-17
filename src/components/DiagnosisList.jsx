import React from "react";
import List from "./List";

const DiagnosisList = ({ data }) => {
  // console.log(data[0]?.diagnostic_list);
  return (
    <div className="w-full">
      <h2 className="capitalize font-medium text-xl mb-4">diagnosis list</h2>
      <ul className="flex w-full justify-between text-sm font-medium bg-gray-100 p-2 rounded-full mb-5 text-left">
        <li className="">Problem/Diagnosis</li>
        <li className="">Description</li>
        <li className="">Status</li>
      </ul>
      <div className="flex flex-col gap-5">
        {data[0]?.diagnostic_list?.map((list, index) => (
          <List data={list} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DiagnosisList;
