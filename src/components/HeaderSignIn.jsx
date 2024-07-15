import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown, FaCartShopping, FaAngleUp } from "react-icons/fa6";
import { FaBookmark, FaBell, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import explore from '../assets/Explore.svg'
import hobbies from '../assets/Hobbies.svg'
import logo from '../assets/HobbyCue Logo.svg'



function HeaderSignIn() {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-2 lg:px-10 lg:py-4 shadow-md">
        <div className="flex gap-10">
          <div className="w-[150px] md:w-[400px]">
            <Link to="/" className="">
              <img
                src={logo}
                alt="logo"
                
              />
            </Link>
          </div>
          <div className="w-full  rounded-lg md:flex justify-between items-center text-[12px] my-2 hidden">
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-s-lg px-2 outline-none placeholder:text-[12px] bg-[#F8F9FA] w-full h-full border-[#EBEDF0] border-[1px]"
            />
            <button className="py-2 px-3 h-full rounded-e-lg bg-[#8064A2] text-white">
              <IoSearchOutline className="text-2xl"/>
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

        <div className="hidden lg:flex lg:items-center gap-4 lg:justify-around">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={explore} alt="explore-logo" className="w-[25px]" />
            <p>Explore</p>
            <FaAngleDown />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={hobbies} alt="hobbies-logo" className="w-[25px]" />
            <p>Hobbies</p>
            <FaAngleDown />
          </div>
          <div className="flex items-center gap-4">
            <FaBookmark className="text-[#8064A2] text-2xl cursor-pointer" />
            <FaBell className="text-[#8064A2] text-2xl cursor-pointer" />
            <FaCartShopping className="text-[#8064A2] text-2xl cursor-pointer" />
            <Link to='/userlogedin'>
            <button className="border-[#8064A2] border-[1px] px-4 py-2 rounded-lg hover:bg-[#8064A2] hover:text-white">
              Sign In
            </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSignIn;
