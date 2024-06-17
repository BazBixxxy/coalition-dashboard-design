import React from "react";
import LabList from "./LabList";

const LabResults = ({ data }) => {
  // console.log(data[0]?.lab_results);
  return (
    <div className="w-full border p-5 rounded-xl shadow bg-white mt-7">
      <h3 className="font-medium mb-5">Lab Results</h3>
      <div className="flex flex-col gap-5">
        {data[0]?.lab_results?.map((result, index) => (
          <LabList data={result} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LabResults;
