import React from 'react';

const Footer = () => {
    return (
        <div class="flex bg-[#141414] font-bold flex-col text-[#737373] px-14 md:px-28 lg:px-40 xl:px-64 mt-14">
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-4">
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            FAQ
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Investor Relations
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Privacy
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Speed Test
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Help Centre
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Jobs
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Cookie Preferences
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Legal Notices
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Account
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Ways to Watch
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Corporate Information
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Only on Netflix
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Media Centre
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Terms of Use
          </li>
          <li class="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            {" "}
            <a href="https://www.linkedin.com/in/naveen-polasa/">
              Contact Us
            </a>{" "}
          </li>
        </ul>
        <button class="flex justify-center items-center font-medium h-12 w-36 border border-[#737373]">
          <img
            class="w-4 m-3 "
            src="https://drive.google.com/uc?export=download&amp;id=1XZOSXtzEIp_7qhCN3vVnFEXroUaR-qfr"
            alt="globe"
          />
          English
         
        </button>
        <p class="my-4 text-xs font-medium">Netflix</p>
        <p class="my-4 text-xs font-medium">omvakhare150@gmail.com</p>
      </div>
    );
}

export default Footer;
