import React from 'react'
import Form from './Form'

function MainSection() {
  return (
    <>
          <main className="bg-[#F7F5F9] px-6 pt-6 flex flex-col lg:flex-row lg:justify-around items-center md:px-20 md:pt-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div>
            <h1 className=" text-[18px] md:text-[36px] font-semibold ">
              Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
              <span className="text-[#8064A2]">passion</span>
            </h1>
            <p className="leading-[22px] text-[12px] md:text-[14px] md:leading-[30px] my-2">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.
            </p>
            <p className="leading-[22px] text-[12px] md:text-[14px] md:leading-[30px] my-2">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          {/* Explore Bottom Images */}
          <div className="lg:flex mt-10 hidden">
            <img src="\src\assets\5793404 1.svg" alt="" />
            <img src="\src\assets\5793401 1.svg" alt="" />
          </div>
        </div>
        <Form />
        {/*Form Bottom Images */}
        <div className="flex lg:hidden mt-10">
          <img
            src="\src\assets\5793404 1.svg"
            alt=""
            className="w-[160px] sm:w-full"
          />
          <img
            src="\src\assets\5793401 1.svg"
            alt=""
            className="w-[160px] sm:w-full"
          />
        </div>
      </main>
    </>
  )
}

export default MainSection