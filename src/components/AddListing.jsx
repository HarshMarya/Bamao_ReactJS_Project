import React from 'react'
import { IoIosAddCircle } from "react-icons/io";


function AddListing() {
  return (
  <>
        <section className="p-6 md:p-20 bg-[#F7FDFF]">
        <div className="border-[1px] border-[#CED4DA] p-2 rounded-md bg-white w-10/12 mx-auto md:p-10">
          <div className="flex justify-center md:justify-start items-center text-[20px] md:text-[24px] font-semibold my-4 gap-2 md:gap-4">
            <IoIosAddCircle className="text-3xl md:text-5xl cursor-pointer text-[#0096C8]" />
            <h2>Add Your Listing</h2>
          </div>
          <div>
            <p className="text-[12px] md:text-[18px] text-center md:text-start my-6">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <button className="w-full md:w-fit md:px-6 md:py-2 border-[1px] rounded-xl p-1 my-2 border-[#8064A2] text-[#8064A2] hover:bg-[#8064A2] hover:text-white">
              Add new
            </button>
          </div>
        </div>
      </section>
  </>
  )
}

export default AddListing