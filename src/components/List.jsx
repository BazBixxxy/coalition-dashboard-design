import React from "react";

const List = ({ data }) => {
  return (
    <div className="text-xs font-light flex gap-5 w-full justify-between">
      <p className="">{data.name}</p>
      <p className="">{data.description}</p>
      <p className="">{data.status}</p>
    </div>
  );
};

export default List;
