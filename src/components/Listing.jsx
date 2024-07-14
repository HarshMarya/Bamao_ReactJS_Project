import React from "react";
import { IoIosPeople } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";

function Listing() {
  return (
    <>
      <section className="p-6 md:p-10">
        {/* <div className="flex gap-10 flex-col md:flex-row items-center justify-center"> */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2 items-center justify-center lg:w-9/12 mx-auto">
          {/* box 1 */}
          <div className="border-[1px] border-[#CED4DA] p-2 rounded-md md:p-6 text-[12px] md:text-[18px] ">
            <div className="flex gap-2 my-4 items-center justify-center md:justify-start">
              <IoIosPeople className="text-3xl text-[#8064A2] " />
              <p className="text-[18px] md:text-[24px] font-semibold">People</p>
            </div>
            <p className="text-[12px] md:text-[18px] md:text-start text-center font-light">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="w-full md:w-fit border-[1px] rounded-lg p-1 md:px-6 md:py-2 my-2 md:my-6 border-[#8064A2] text-[#8064A2] text-[12px] md:text-[14px] hover:bg-[#8064A2] hover:text-white">
              Connect
            </button>
          </div>

          {/* box 2 */}
          <div className="border-[1px] border-[#CED4DA] p-2 rounded-md md:p-6 text-[12px] md:text-[18px]">
            <div className="flex gap-2 my-4 items-center justify-center md:justify-start">
              <MdPlace className="text-3xl text-[#77933C] " />
              <p className="text-[18px] md:text-[24px] font-semibold">Place</p>
            </div>
            <p className="text-[12px] md:text-[18px] md:text-start text-center font-light">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <button className="w-full md:w-fit border-[1px] rounded-lg p-1 md:px-6 md:py-2 my-2 md:my-6 border-[#8064A2] text-[#8064A2] text-[12px] md:text-[14px] hover:bg-[#8064A2] hover:text-white">
              Meet up
            </button>
          </div>

          {/* box 3 */}
          <div className="border-[1px] border-[#CED4DA] p-2 rounded-md md:p-6 text-[12px] md:text-[18px]">
            <div className="flex gap-2 my-4 items-center justify-center md:justify-start">
              <IoCart className="text-3xl text-[#C0504D] " />
              <p className="text-[18px] md:text-[24px] font-semibold">Product</p>
            </div>
            <p className="text-[12px] md:text-[18px] md:text-start text-center font-light">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <button className="w-full md:w-fit border-[1px] rounded-lg p-1 md:px-6 md:py-2 my-2 md:my-6 border-[#8064A2] text-[#8064A2] text-[12px] md:text-[14px] hover:bg-[#8064A2] hover:text-white">
              Get it
            </button>
          </div>

          {/* box 4 */}
          <div className="border-[1px] border-[#CED4DA] p-2 rounded-md md:p-6 text-[12px] md:text-[18px]">
            <div className="flex gap-2 my-4 items-center justify-center md:justify-start">
              <MdEventAvailable className="text-3xl text-[#0096C8] " />
              <p className="text-[18px] md:text-[24px] font-semibold">Program</p>
            </div>
            <p className="text-[12px] md:text-[18px] md:text-start text-center font-light">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button className="w-full md:w-fit border-[1px] rounded-lg p-1 md:px-6 md:py-2 my-2 md:my-6 border-[#8064A2] text-[#8064A2] text-[12px] md:text-[14px] hover:bg-[#8064A2] hover:text-white">
              Attend
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Listing;
