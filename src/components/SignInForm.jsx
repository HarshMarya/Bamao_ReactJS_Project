import React, {useState} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";


function SignInForm() {
    const [showEye, toggleEye] = useState(false);
    const [inputVal, setInputVal] = useState("");
  return (
    <>
      {/* Sign In Form */}
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
            {showEye ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="flex justify-between items-center my-4 text-[12px]">
          <div className="gap-2 flex">
            <input type="checkbox" className="text-4xl cursor-pointer" />
            <label htmlFor="">Remember me</label>
          </div>
          <div className="flex items-center gap-2">
            <IoIosLock className="text-xl" />
            <a href="#" className="hover:underline">
              Forget password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="text-center w-full hover:text-white p-2 hover:bg-[#8064A2] hover:border-[#8064A2] rounded-xl text-[12px] font-semibold border-[1px] border-black"
          onClick={(e)=>e.preventDefault()}
        >
          Continue
        </button>
      </form>
    </>
  );
}

export default SignInForm;
