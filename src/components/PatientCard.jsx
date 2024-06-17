import React from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

const PatientCard = ({ data }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div>
          <img
            src={data?.profile_picture}
            alt=""
            className="h-12 w-12 object-cover rounded-full"
          />
        </div>
        <div className="text-sm">
          <h3>{data?.name}</h3>
          <p className="text-xs text-gray-500">
            {data?.gender} {data?.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
