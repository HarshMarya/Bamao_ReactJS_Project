import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEyeSlash } from "react-icons/fa";
import JoinInForm from "./JoinInForm";
import SignInForm from "./SignInForm";

function Form() {
  const [showEye, toggleEye] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [active, setActive] = useState(true);

  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <section className="w-full lg:w-1/3">
        <div className="flex justify-evenly items-center gap-4 text-[16px] font-semibold my-2 md:my-4">
          <p
            className={`${
              active
                ? "text-[#8064A2] border-b-[2px] border-[#8064A2]"
                : "text-[#939CA3]"
            } cursor-pointer`}
            onClick={handleActive}
          >
            Sign In{" "}
          </p>
          <p
            className={`${
              active
                ? "text-[#939CA3]"
                : "text-[#8064A2] border-b-[2px] border-[#8064A2]"
            } cursor-pointer`}
            onClick={handleActive}
          >
            Join In{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-col-reverse">
          {active ? <SignInForm /> : <JoinInForm />}

          <div className="text-[12px] font-semibold relative">
            {/* <div>
              <div className="h-[2px] w-[150px] bg-[#CED4DA]"></div>
            </div> */}
            <div className="flex items-center justify-between gap-4 lg:hidden my-2">
          <div className="w-[100px] h-[2px] bg-[#CED4DA]"></div>
          <p className="text-center my-2 text-[12px] font-semibold ">
            Or connect with
          </p>
          <div className="w-[100px] h-[2px] bg-[#CED4DA]"></div>
        </div>
            <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdF4I74EZKk-myEErm2-ZgQsHkaETa6JGorCZzjnaz52NjBSi_RxaxlYuXzIF2fHtvoigf-l2pz1pg&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1107720707%3A1720957921465484&ddm=0" target="_blank" className="flex items-center p-2 border-[1px] border-black rounded-xl my-2 gap-2 justify-center">
              <FcGoogle className="text-2xl" />Continue with Google
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" className="flex items-center p-2 border-[1px] border-black rounded-xl my-2 gap-2 justify-center">
              <FaFacebook className="text-2xl text-[#1877F2]" />Continue with Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
