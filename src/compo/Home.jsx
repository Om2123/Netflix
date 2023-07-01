import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
// import banner from "../styles/banner.jpg";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="banner flex flex-col items-start justify-center bg-cover bg-center rounded-lg mx-4 md:mx-16">
        <div className="text-white ml-4 md:ml-24">
          <h1 className="text-4xl md:text-6xl font-black my-2 md:my-5 mb-2 md:mb-4">
            Unlimited movies, TV <br />
          </h1>
          <h1 className="text-4xl md:text-6xl font-black my-2 md:my-5 mb-2 md:mb-4">
            shows and more
          </h1>
          <p className="text-xl md:text-2xl mb-4 md:mb-8f my-2 md:my-5 font-bold">
            Watch anywhere. Cancel anytime.
          </p>
          <button
            className="px-4 md:px-6 py-2 md:py-2 my-2 md:my-5 text-3xl md:text-2xl font-bold bg-red-600 text-white rounded-md
                      md:pb-3 md:pt-3 md:pl-5 md:pr-6 md:h-auto"
          >
            Restart your membership
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
