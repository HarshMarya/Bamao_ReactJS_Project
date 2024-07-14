import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


function GoToTop() {
    const topBtn = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
  return (
    <div className='flex items-center justify-center flex-col ' >
        <div onClick={topBtn} className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full shadow-xl flex items-center justify-center cursor-pointer my-2 bg-white hover:bg-[#8064A2] hover:text-white'>
        <IoIosArrowUp/>
        </div>
        <p className='text-[#8064A2] bg-white p-1 shadow-lg text-[10px] hidden md:block'>Go to top (Ctrl+Home)</p>
    </div>
  )
}

export default GoToTop