import React from 'react'
import { IoIosPlay } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import '../App.css'


function Testimonial() {
  return (
    <>
          {/* testimonial */}
          <section className="p-6 md:p-20 text-[12px]">
        <div className="bg-[#F7F5F9] rounded-lg p-4 md:p-10 w-10/12 mx-auto">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-4 my-2 md:my-8">
              <img
                src="\src\assets\Vector.svg"
                alt=""
                className="w-[32px] md:w-[40px]"
              />
              <h2 className="text-[18px] md:text-[24px] font-semibold">
                Testimonials
              </h2>
            </div>
            <p className="text-center md:text-start text-[12px] md:text-[18px] md:text-[#6D747A]">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
          </div>

          <div className="flex justify-between flex-col items-center lg:flex-row-reverse my-4 gap-4">
            <div className="flex justify-center items-center gap-2 md:gap-4 my-2">
              <img
                src="\src\assets\Ellipse 12.svg"
                alt=""
                className="w-[60px] md:w-[100px]"
              />
              <div>
                <p className="text-[#8064A2] text-[16px] md:text-[18px]">
                  Shubha Nagarajan
                </p>
                <p className="text-[#0096C8] text-[12px] md:text-[14px]">
                  Classic Dancer
                </p>
              </div>
            </div>
            {/*Voice player */}
            <div className="bg-[#CCC1DA] flex justify-evenly md:justify-around items-center w-full lg:w-8/12 my-4 p-2 md:p-4 rounded-md">
              <div className='md:w-[40px] md:h-[40px] w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center cursor-pointer'>
                <IoIosPlay className='text-md md:text-2xl text-[#8064A2]'/>
              </div>
              <div className='flex items-center justify-center gap-2 w-10/12 md:w-full'>
                <input type="range" min={0} max={100} className='range-slider appearance-none w-7/12 md:w-10/12 h-[2px] bg-gray-200 outline-none'/>
                <span className='text-[#8064A2] text-[8px] md:text-[12px] cursor-default'>00:00</span>
              </div>
              <div className='relative'>
                <img src="src\assets\Ellipse 12.svg" alt="" className='w-[40px] lg:w-[60px]'/>
                <FaMicrophone className='absolute bottom-0 text-lg md:text-2xl text-white'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial