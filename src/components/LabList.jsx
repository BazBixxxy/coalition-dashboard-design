import React from "react";
import { GoDownload } from "react-icons/go";
import { RiDownload2Fill } from "react-icons/ri";

const LabList = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs font-light">{data}</span>
      <RiDownload2Fill />
    </div>
  );
};

export default LabList;
