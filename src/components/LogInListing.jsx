import React from "react";
import { IoIosPeople } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import GoToTop from "./GoToTop";

function LogInListing() {
  return (
    <>
      <section className="p-2 md:p-10">
        <div className=" p-2 rounded-md bg-white w-full md:w-10/12 mx-auto md:p-10">
          <div className="flex justify-center items-center text-[20px] md:text-[24px] font-semibold my-4 gap-2 md:gap-4">
            <IoIosAddCircle className="text-3xl md:text-5xl cursor-pointer text-[#0096C8]" />
            <h2>Add Your Listing</h2>
          </div>

          {/* List Items */}
          <section className="p-2 md:p-10">
            {/* <div className="flex gap-10 flex-col md:flex-row items-center justify-center"> */}
            <div className="grid grid-cols-1 gap-4 md:gap-10 sm:grid-cols-2 xl:grid-cols-2 items-center justify-center lg:w-9/12 mx-auto">
              {/* box 1 */}
              <div className="border-[2px] border-[#8064A2] p-2 rounded-md md:p-5 text-[12px] md:text-[18px] hover:bg-[#8064A2] hover:text-white">
                <div className="flex gap-2 my-4 items-center justify-start">
                  <IoIosPeople className="text-5xl " />
                  <p className="text-[18px] md:text-[24px] font-semibold">
                    People
                  </p>
                </div>
                <p className="text-[12px] md:text-[18px] md:text-start font-light">
                  Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator.
                </p>
              </div>

              {/* box 2 */}
              <div className="border-[2px] border-[#77933C] p-2 rounded-md md:p-6 text-[12px] md:text-[18px] hover:bg-[#77933C] hover:text-white">
                <div className="flex gap-2 my-4 items-center justify-start">
                  <MdPlace className="text-3xl" />
                  <p className="text-[18px] md:text-[24px] font-semibold">
                    Place
                  </p>
                </div>
                <p className="text-[12px] md:text-[18px] md:text-start font-light">
                  Find a class, school, playground, auditorium, studio, shop or
                  an event venue. Book a slot at venues that allow booking
                  through hobbycue.
                </p>
              </div>

              {/* box 3 */}
              <div className="border-[2px] border-[#c0504d] p-2 rounded-md md:p-4 text-[12px] md:text-[18px] hover:bg-[#c0504d] hover:text-white">
                <div className="flex gap-2 my-4 items-center justify-start">
                  <IoCart className="text-3xl" />
                  <p className="text-[18px] md:text-[24px] font-semibold">
                    Product
                  </p>
                </div>
                <p className="text-[12px] md:text-[18px] md:text-start font-light">
                  Find equipment or supplies required for your hobby. Buy, rent
                  or borrow from shops, online stores or from community members.
                </p>
              </div>

              {/* box 4 */}
              <div className="border-[2px] border-[#0096c8] p-2 rounded-md md:p-7 text-[12px] md:text-[18px] hover:bg-[#0096c8] hover:text-white">
                <div className="flex gap-2 my-4 items-center justify-start">
                  <MdEventAvailable className="text-3xl" />
                  <p className="text-[18px] md:text-[24px] font-semibold">
                    Program
                  </p>
                </div>
                <p className="text-[12px] md:text-[18px] md:text-start font-light">
                  Find events, meetups and workshops related to your hobby.
                  Register or buy tickets online.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
          <div className="fixed bottom-10 right-4 md:right-10">
        <GoToTop/>
          </div>
    </>
  );
}

export default LogInListing;
