import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown, FaCartShopping, FaAngleUp } from "react-icons/fa6";
import { FaBookmark, FaBell, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderLogIn() {
  return (
    <header className="flex justify-between items-center px-4 py-2 lg:px-10 lg:py-4 shadow-md">
        <div className="flex gap-4">
          <div>
            <Link to="/" className="">
              <img
                src="src\assets\HobbyCue Logo v2 1.svg"
                alt=""
                className="w-[32px] md:w-[60px]"
              />
            </Link>
          </div>
          <div className="w-full rounded-lg md:flex justify-between items-center text-[12px] my-2 hidden">
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-s-lg px-2 outline-none placeholder:text-[12px] bg-[#F8F9FA] w-full h-full border-[#EBEDF0] border-[1px]"
            />
            <button className="py-2 px-3 h-full rounded-e-lg bg-[#8064A2] text-white">
              <IoSearchOutline className="text-xl"/>
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div className="block lg:hidden">
          <ul className="flex gap-6">
            <li className="text-2xl text-[#8064A2] cursor-pointer">
              <IoSearch />
            </li>
            <li className="text-2xl text-[#8064A2] cursor-pointer">
              <FaBell />
            </li>
            <li className="text-2xl text-[#8064A2] cursor-pointer">
              <FaBars />
            </li>
          </ul>
        </div>

      <div className="hidden lg:flex lg:items-center gap-6 lg:justify-around">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="src\assets\Explore.svg" alt="" className="w-[25px]"/>
          <p>Explore</p>
          <FaAngleDown className="text-[#6D747A]" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="src\assets\Hobbies.svg" alt="" className="w-[25px]"/>
          <p>Hobbies</p>
          <FaAngleDown className="text-[#6D747A]" />
        </div>
        <div className="flex items-center gap-6">
            <FaBookmark className="text-[#8064A2] text-2xl cursor-pointer"/>
            <FaBell className="text-[#8064A2] text-2xl cursor-pointer"/>
            <FaCartShopping className="text-[#8064A2] text-2xl cursor-pointer"/>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="src\assets\Ellipse 23.svg" alt="" />
          <FaAngleDown className="text-[#6D747A]"/>
        </div>

      </div>
    </header>
  );
}

export default HeaderLogIn;
