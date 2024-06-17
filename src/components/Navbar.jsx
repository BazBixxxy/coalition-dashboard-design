import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="xl:flex justify-between p-7 font-light">
      <div className="flex justify-between p-3 w-full border rounded-full shadow bg-white mx-auto">
        <div>
          <h1 className="font-bold text-sky-600 lg:text-2xl text-xl p-3 cursor-pointer">
            Coalition Tech
          </h1>
        </div>
        <ul className="xl:flex gap-7 hidden">
          <li className="flex items-center gap-2 cursor-pointer p-2 py-1 bg-teal-200 rounded-full">
            <GoHome />
            Overview
          </li>
          <li className="flex items-center gap-2 cursor-pointer p-2">
            <LuUsers2 />
            Patients
          </li>
          <li className="flex items-center gap-2 cursor-pointer p-2">
            <IoCalendarOutline />
            Schedule
          </li>
          <li className="flex items-center gap-2 cursor-pointer p-2">
            <MdOutlineChatBubbleOutline />
            Message
          </li>
          <li className="flex items-center gap-2 cursor-pointer p-2">
            <FaRegAddressCard />
            Transactions
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center text-sm">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg"
                alt=""
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
              />
            </div>
            <div className="">
              <h2>Dr Chu Simmons</h2>
              <p className="text-gray-500">General Surgeon</p>
            </div>
          </div>
          <div className="h-8 border w-0 xl:inline hidden" />
          <div className="text-lg xl:flex items-center hidden">
            <CiSettings className="text-xl" />
            <IoEllipsisVertical />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
