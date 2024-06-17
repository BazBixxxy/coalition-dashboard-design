import React from "react";
import PatientViewCard from "./PatientViewCard";
import LabResults from "./LabResults";

const Right = ({ data }) => {
  return (
    <div className="lg:m-0 mt-5">
      <PatientViewCard data={data} />
      <LabResults data={data} />
    </div>
  );
};

export default Right;
