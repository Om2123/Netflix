import React, { useEffect, useState } from "react";
import "X:/Netflix/Netflix/src/styles/Navbar.css";
import logo from "X:/Netflix/Netflix/src/image/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize(); // Initial check
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <>
      <div id="navbar">
        <nav className=" mx-auto " id="nav">
          <div className="container mx-auto px-4">
            <div className="flex lg:h-20 items-center justify-between py-4">
              <div className="flex items-center">
                <img
                  className="lg:h-10 lg:w-36 h-10 w-36 ml-1"
                  id="logo"
                  src={logo}
                  alt="Netflix Logo"
                />
              </div>

              <div className="flex items-center  " id="nav2">
                <button class="flex justify-center items-center bg-slate-900 md:bg-black md:w-56 md:w-28 text-white h-7 sm:rounded-none m-2 mr-3 border rounded">
                  <span class="hidden sm:inline">English</span>
                  <img
                    class="w-4 mx-1 sm:hidden"
                    src="./assets/globe (1).png"
                    alt=""
                  />
                  
                  <img
                    class="w-4 mx-1 sm:hidden"
                    src="./assets/down-filled-triangular-arrow.png"
                    alt=""
                  />
                </button>

                <button
                  className={`bg-red-600  text-white px-4 h-8 md:font-thin py-1 rounded`}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
