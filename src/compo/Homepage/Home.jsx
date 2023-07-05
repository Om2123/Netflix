import React, { useEffect, useState } from "react";
import "X:/Netflix/Netflix/src/styles/Home.css";
import Navbar from "../others/Navbar";
import Footer from "../others/Footer";
import axios from "X:/Netflix/Netflix/src/api_data/axios";
import requests from "X:/Netflix/Netflix/src/api_data/request";
import Faq from "../../firebase/Faq";

const Home = () => {
 const [movie, setMovie] = useState([])

  useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
        request.data.results[Math.floor(Math.random()*request.data.results.length -1)]  
        )
        setMovie(request.data)
    }

    fetchData()
  },[])

   console.log(movie);
  return (
    <div>
      <Navbar />


      {/* Banner Starts */}
      <div className="banner flex flex-col items-start justify-center bg-cover bg-center rounded-2xl mx-4 md:mx-16">
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
            className="px-2  md:px-6 py-2 md:py-2 my-2 md:my-5 text-2xl md:text-2xl font-bold bg-red-600 text-white rounded-md
                      md:pb-3 md:pt-3 md:pl-5 md:pr-6 md:h-auto"
          >
            Restart your membership
          </button>
        </div>
      </div>
      {/* End Banner */}


      <div className="py-24">

      </div>

      <Faq/>
      {/* footer start */}
      <Footer />
      {/* footer ends */}
    </div>
  );
};

export default Home;
