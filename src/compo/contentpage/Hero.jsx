import React from "react";
import MovieBox from "./MovieBox";
import Rows from "./Rows";
import Navbar from "../others/Navbar";
import Footer from "../others/Footer";

const Hero = () => {
  return (
    <div>
       <Navbar/>
{/*     
      <header class="header bg-[#141414] hover:bg-[#141414]">
        <div class="flex items-center space-x-2 md:space-x-10">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width="120"
            height="120"
            class="cursor-pointer object-contain"
          />
          <ul class="hidden md:space-x-4 md:flex cursor-pointer">
            <li class="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              Home
            </li>
            <li class="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              TV Shows
            </li>
            <li class="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              Movies
            </li>
            <li class="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              People
            </li>
            <li class="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              Favorite
            </li>
            <li class="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              About
            </li>
          </ul>
        </div>
        <div class="font-light flex items-center space-x-4 text-sm">
          <div class="hidden md:flex justify-center items-center text-center">
            <div class="bg-transparent hover:bg-gray-900 px-4 rounded-xl items-center text-center flex">
              <input
                placeholder="Search Movie"
                class="bg-transparent text-lg font-medium hover:bg-gray-900 w-[400px] h-[50px] px-4 py-2 rounded-xl placeholder:text-lg font-md text-white outline-none focus:bg-gray-900"
                value=""
              />
              <button class="px-2.5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  class="hidden sm:inline sm:w-6 sm:h-6 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </button>
            </div>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="h-6 w-6 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="h-6 w-6 cursor-pointer text-red-800"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill-rule="nonzero"
                d="M11.29 3.814l2.02 5.707.395 1.116.007-4.81.01-4.818h4.27L18 11.871c.003 5.98-.003 10.89-.015 10.9-.012.009-.209 0-.436-.027-.989-.118-2.29-.236-3.34-.282a14.57 14.57 0 0 1-.636-.038c-.003-.004-.273-.762-.776-2.184v-.004l-2.144-6.061-.34-.954-.008 4.586c-.006 4.365-.01 4.61-.057 4.61-.163 0-1.57.09-2.04.136-.308.027-.926.09-1.37.145-.446.051-.816.085-.823.078C6.006 22.77 6 17.867 6 11.883V1.002h.005V1h4.288l.028.08c.007.016.065.176.157.437l.641 1.778.173.496-.001.023z"
              ></path>
            </g>
          </svg>
         
        </div>
      </header> */}
      {/* end nav */}
      <Rows typeOfContent={"Trending"} noOfShow={8}></Rows>
      <Rows typeOfContent={"Popular"} noOfShow={8}></Rows>
      <Rows typeOfContent={"Horror Movies"} noOfShow={8}></Rows>
      <Rows typeOfContent={"Kdrama"} noOfShow={8}></Rows>
      <Footer/>
    </div>
  );
};

export default Hero;
