import React, { useState } from "react";
import "../../styles/Navbar.css"
import logo from "../../image/logo.png"
import SignIn from "../page/SignIn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [signIn, setSignIn] = useState(false);

  return (
  
       
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
      <Link  to={"/SignIn"} >
                <button
                 onClick={() => setSignIn(true)}
                 className={`bg-red-600  text-white px-4 h-8 md:font-thin py-1 rounded`}
                 >
                  Sign In
                </button>
                  </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
     
  );
};

export default Navbar;
