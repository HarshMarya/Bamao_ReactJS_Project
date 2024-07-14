import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function JoinInForm() {
  const [showEye, toggleEye] = useState(false);
  const [inputVal, setInputVal] = useState("");

  return (
    <>
      {/* Join In Form */}
      <form action="" className="flex flex-col">
        <div className="lg:flex items-center justify-between gap-4 hidden">
          <div className="w-[150px] h-[2px] bg-[#CED4DA]"></div>
          <p className="text-center my-2 text-[12px] font-semibold ">
            Or connect with
          </p>
          <div className="w-[150px] h-[2px] bg-[#CED4DA]"></div>
        </div>

        <div className="w-full bg-white my-4 p-2 rounded-lg">
          <input
            type="email"
            placeholder="Email"
            className=" outline-none w-full placeholder:text-[12px]"
            required
          />
        </div>
        <div className="flex w-full bg-white justify-between p-2 rounded-lg">
          <input
            // type="password"
            type={showEye ? "text" : "password"}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Password"
            className="outline-none w-full placeholder:text-[12px]"
            required
          />
          <div
            className="text-xl cursor-pointer"
            onClick={() => toggleEye(!showEye)}
          >
            {showEye ? (
              <FaEyeSlash className="text-[#6d747a]" />
            ) : (
              <FaEye className="text-[#6d747a]" />
            )}
          </div>
        </div>

        <div className="flex justify-between items-center my-4 text-[12px]">
          <div className="gap-2 flex">
            <div className="w-[60px] h-[4px] rounded-xl bg-white"></div>
            <div className="w-[60px] h-[4px] rounded-xl bg-white"></div>
            <div className="w-[60px] h-[4px] rounded-xl bg-white"></div>
          </div>
          <div className="text-[10px] text-[#939CA3] font-semibold">
            <p>Password strength</p>
          </div>
        </div>

        <p className="text-[12px] text-[#6D747A] my-2 md:my-4 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-black font-semibold">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-black font-semibold">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="text-center w-full hover:text-white p-2 hover:bg-[#8064A2] hover:border-[#8064A2] rounded-xl text-[12px] font-semibold border-[1px] border-black"
          onClick={(e)=>e.preventDefault()}
        >
          Agree and Continue
        </button>
      </form>
    </>
  );
}

export default JoinInForm;
