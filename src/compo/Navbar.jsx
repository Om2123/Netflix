import React from "react";
import "../styles/Navbar.css";
import logo from "../image/logo.png";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <nav
          className=" mx-auto "
          id="nav"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4" >
              <div className="flex items-center">
                <img
                  className="h-10 w-36"
                  id="logo"
                  src={logo}
                  alt="Netflix Logo"
                />
              </div>
              <div className="flex items-center" id="nav2">
                <div className="mr-4 flex items-center text-white">
                  <img
                    className="h-6 w-6"
                    src="earth-logo.png"
                    alt="Earth Logo"
                  />
                  <span className="ml-2">Eng</span>
                </div>
                <button className="bg-red-500 text-white py-2 px-4 rounded">
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
