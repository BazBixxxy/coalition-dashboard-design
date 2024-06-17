import React from "react";
import Diagnosis from "./Diagnosis";
import DiagnosisList from "./DiagnosisList";

const Middle = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 rounded-xl shadow p-3 bg-white mb-6">
        <Diagnosis data={data} />
      </div>
      <div className="flex-1 rounded-xl shadow p-3 bg-white">
        <DiagnosisList data={data} />
      </div>
    </div>
  );
};

export default Middle;
