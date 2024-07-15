import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import GoToTop from "./GoToTop";
import bottomImg1 from '../assets/F1.svg'
import bottomImg2 from '../assets/F2.svg'
import fb from '../assets/facebook_icon 1.svg'
import yt from '../assets/youtube_icon 1.svg'
import insta from '../assets/instagram logo_icon 1.svg'
import tel from '../assets/telegram.svg'
import mail from '../assets/message_icon 1.svg'
import gPlus from '../assets/google+_plus_icon 1.svg'
import x from '../assets/twitter logo_icon 3.svg'
import pint from '../assets/pinterest logo_icon 1.svg'

function Footer() {
  const [show, setShow] = useState(true);
  return (
    <footer>
      <div className="p-4 md:p-20 bg-[#F7FDFF]">

        <div className="flex justify-between items-center">
          <div>
          <p className="text-[18px] md:text-[36px] my-6">
            Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
            <span className="text-[#0096C8]">Community...</span>
          </p>
          <button className="py-1 px-3 md:px-6 md:py-2 bg-[#8064A2] rounded-lg text-[14px] md:text-[20px] font-semibold text-white hover:bg-white hover:text-[#8064A2] border-[#8064A2] border-[1px]">
            Get Started
          </button>
          </div>
          {/*Go-To-Top Button */}
          <GoToTop/>
        </div>

        <div className="flex justify-between items-center mt-6">
          <img src={bottomImg1} alt="foote-image-1 " className="w-full" />
          <img src={bottomImg2} alt="footer-image-2 " className="w-full" />
        </div>
      </div>
      {/* Links */}
      <div className="outter p-6 flex justify-between flex-col md:flex-row md:px-20">
        <div className="flex flex-col md:flex-row gap-4 justify-evenly w-full">
          {/* Link Box 1*/}
          <div className="flex justify-between">
            <div className=" ">
              <p className="font-semibold text-[12px] md:text-[14px]">Hobbycue</p>
              <ul
                className={`${show ? "block" : "hidden"} my-4 transition: 'max-height 0.3s ease-out`}
              >
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">About Us</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">our Services</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Work With Us</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">FAQ</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Contact Us</li>
              </ul>
            </div>
            <div onClick={() => setShow(!show)} className="block md:hidden cursor-pointer">
              {show ? (
                <FaChevronUp className="text-md" />
              ) : (
                <FaChevronDown className="text-md" />
              )}
            </div>
          </div>

          {/* Link Box 2*/}
          <div className="flex justify-between">
            <div className="">
              <p className="font-semibold text-[12px] md:text-[14px]">How Do I</p>
              <ul
                className={`${
                  show ? "block" : "hidden"
                } my-4 transition: 'max-height 0.3s ease-out`}
              >
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Sign Up</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">
                  Add a Listing
                </li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">
                  Claim Listing
                </li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Post a Query</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">
                  Add a Blog Post
                </li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">
                  Other Queries
                </li>
              </ul>
            </div>
            <div onClick={() => setShow(!show)} className="block md:hidden cursor-pointer">
              {show ? (
                <FaChevronUp className="text-md" />
              ) : (
                <FaChevronDown className="text-md" />
              )}
            </div>
          </div>

          {/* Link Box 3*/}
          <div className="flex justify-between">
            <div className=" ">
              <p className="font-semibold text-[12px] md:text-[14px]">Quick Links</p>
              <ul
                className={`${
                  show ? "block" : "hidden"
                } my-4 transition: 'max-height 0.3s ease-out`}
              >
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Listing</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">blog Posts</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Shop / Store</li>
                <li className="my-2 text-[9px] md:text-[14px] text-[#6D747A] md:text-black">Community</li>
              </ul>
            </div>
            <div onClick={() => setShow(!show)} className="block md:hidden cursor-pointer">
              {show ? (
                <FaChevronUp className="text-md" />
              ) : (
                <FaChevronDown className="text-md" />
              )}
            </div>
          </div>
        </div>
        <div>
          {/* Social Links */}
          <div>
            <p className="text-[12px] md:text-[14px] font-bold my-4">Social Media</p>
            <div>
              <ul className="flex gap-4">
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://www.facebook.com/" target="_blank"><img
                    className="p-1"
                    src={fb}
                    alt="social-media-links-icon"
                  /></a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://x.com/?lang=en" target="_blank"><img
                    className="p-1"
                    src={x}
                    alt="social-media-links-icon"
                  /></a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                <a href="https://www.instagram.com/" target="_blank"><img
                    className="p-1"
                    src={insta}
                    alt="social-media-links-icon"
                  /></a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://in.pinterest.com/" target="_blank">
                  <img
                    className="p-1"
                    src={pint}
                    alt="social-media-links-icon"
                  />
                  </a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://www.google.com/" target="_blank">
                  <img
                    className="p-1"
                    src={gPlus}
                    alt="social-media-links-icon"
                  />
                  </a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://www.youtube.com/" target="_blank">
                  <img
                    className="p-1"
                    src={yt}
                    alt="social-media-links-icon"
                  />
                  </a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://telegram.org/" target="_blank">
                  <img
                    className="p-1"
                    src={tel}
                    alt="social-media-links-icon"
                  />
                  </a>
                </li>
                <li className="bg-[#EBEDF0] rounded-full w-[25px] h-[25px]">
                  <a href="https://www.google.com/intl/en/gmail/about/" target="_blank">
                  <img
                    className="p-1"
                    src={mail}
                    alt="social-media-links-icon"
                  />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Invite Form */}
          <div className="my-4">
            <p className="text-[12px] md:text-[14px] font-bold">Invite Friends</p>
            <div className="w-full border-[#8064A2] border-[1px] rounded-lg flex justify-between text-[12px] md:text-[14px] my-2">
              <input
                type="email"
                placeholder="Email ID"
                className="rounded-s-lg px-2 w-full outline-none placeholder:text-[12px] md:text-[14px]"
              />
              <button className="py-2 px-3 rounded-e-lg bg-[#8064A2] text-white">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-[#F7F5F9]"><p className="text-[12px] md:text-[14px] font-medium text-center p-4 md:p-8 cursor-default">© Purple Cues Private Limited</p></div>
    </footer>
  );
}

export default Footer;
