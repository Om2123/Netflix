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

              <button class="flex justify-center items-center bg-black md:w-56 w-28 text-white h-8 sm:rounded-none m-2 mr-6 border rounded">
                {/* <img class="w-4 mx-1 " src="./assets/globe (1).png" alt="globe"/> */}
                English
                {/* <img class="w-3 mx-1 pt-1" src="./assets/down-filled-triangular-arrow.png" alt="drop-down"/> */}
                </button>




                <button className={`bg-red-600 text-lg text-white px-4 h-8 md:font-bold py-1 rounded`} id="signBtn">
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
