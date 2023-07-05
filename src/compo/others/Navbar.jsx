import React, { useEffect, useState } from "react";
import "X:/Netflix/Netflix/src/styles/Navbar.css";
import logo from "X:/Netflix/Netflix/src/image/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div id="navbar">
        <nav
          className=" mx-auto "
          id="nav"
        >
          <div className="container mx-auto px-4">
            <div className="flex lg:h-20 items-center justify-between py-4" >
              <div className="flex items-center">
                <img
                  className="lg:h-10 lg:w-36 h-10 w-36 ml-1"
                  id="logo"
                  src={logo}
                  alt="Netflix Logo"
                />
              </div>


              <div className="flex items-center  " id="nav2">

                <div className={`mr-4 flex lg:h-8 h-5  items-center ${isMobile ? "" : "border"}   lg:px-5 lg:py-0 text-white `} id="langB">
                  <img
                    className="h-6 w-6"
                    src=""
                    alt=""
                  />
                  <span className="ml-2" id="langC">Eng</span>
                </div>




                <button className={`bg-red-500 text-white lg:py-2 py-2 px-1 lg:px-4 rounded`} id="signBtn">
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
