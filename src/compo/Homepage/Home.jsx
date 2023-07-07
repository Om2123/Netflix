import React, { useEffect, useState } from "react";
import "X:/Netflix/Netflix/src/styles/Home.css";
import Navbar from "../others/Navbar";
import Footer from "../others/Footer";
import axios from "X:/Netflix/Netflix/src/api_data/axios";
import requests from "X:/Netflix/Netflix/src/api_data/request";
import Faq from "../../firebase/Faq";


const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setMovie(request.data);
    }

    fetchData();
  }, []);

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

      {/*  */}
      <div className="px-8 py-5 md:px-12">


        <div className="md:px-28 md:flex flex flex-col-reverse  md:flex-row-reverse  md:py-3">
       
          <div className=" md:w-1/2    ">
            <div className="    ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
                alt="Enjoy on your TV"
                className="    "
              />
            </div>
          </div>

          <div className="  md:w-1/2 flex items-center  ">
            <div className="    ">
              <div className="    ">
                <div className="mt-2 md:text-2xl font-bold text-white   ">
                  <p className=" text-3xl md:text-5xl font-bold md:font-black md:pb-3   ">Enjoy on your TV</p>
                </div>
                <div className="  md:text-xl text-white   mt-2">
                  <p className=" text-sm md:text-xl   ">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                    Blu-ray players and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="md:px-28  py-3 ">
          <div class=" opacity-10 border-solid border-slate-300 border-b-8"></div>
        </div>
        
        {/* 2nd start */}
        <div class="md:px-28 md:flex md:flex-row-reverse flex flex-col-reverse  md:py-3   ">   
          <div class=" md:w-1/2    ">
            <div class="    ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
                alt="Watch everywhere"
                class="    "
              />
            </div>
          </div>

          <div class=" md:w-1/2  flex items-center  ">
            <div class="    ">
              <div class="    ">
                <div class="  mt-2 md:text-2xl font-bold text-white     ">
                  <p class=" text-3xl md:text-5xl font-bold md:font-black   md:pb-3    ">Watch everywhere</p>
                </div>
                <div class="    md:text-xl text-white  mt-2    ">
                  <p class="   md:text-xl text-sm ">
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:px-28  py-3 ">
          <div class=" opacity-10 border-solid border-slate-300 border-b-8"></div>
        </div>
        {/* 3rd start */}
        <div class=" md:px-28 md:flex md:flex-row-reverse flex flex-col-reverse  md:py-3   ">
          <div class=" md:w-1/2    ">
            <div class="    ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png"
                alt="Create profiles for kids"
                class="    "
              />
            </div>
          </div>
          <div class=" md:w-1/2 flex items-center   ">
            <div class="    ">
              <div class="    ">
                <div class=" mt-2 md:text-2xl font-bold text-white      ">
                  <p class="text-3xl md:text-5xl font-bold md:font-black    md:pb-3     ">
                    Create profiles for kids
                  </p>
                </div>
                <div class="  md:text-xl text-white  mt-2      ">
                  <p class=" text-sm  md:text-xl       ">
                    Send children on adventures with their favourite characters
                    in a space made just for them—free with your membership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:px-28  py-3 ">
          <div class=" opacity-10 border-solid border-slate-300 border-b-8"></div>
        </div>
        {/* 4th start */}
        <div class=" md:px-28 md:flex flex flex-col-reverse md:flex-row-reverse    md:py-3  ">
          <div class=" md:w-1/2    ">
            <div class="    ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
                alt="Download your shows to watch offline"
                class="    "
              />
            </div>
          </div>
          <div class=" md:w-1/2  flex items-center  ">
            <div class="    ">
              <div class="    ">
                <div class="   mt-2 md:text-2xl font-bold text-white    ">
                  <p class="    text-3xl md:text-5xl font-bold md:font-black  md:pb-3    ">
                    Download your shows to watch offline
                  </p>
                </div>
                <div class=" md:text-xl text-white  mt-2      ">
                  <p class=" text-sm  md:text-xl       ">
                    Save your favourites easily and always have something to
                    watch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ends expertiese */}
      </div>
      {/* faq start here */}
      <Faq />
      {/* faq ends */}
      {/* footer start */}
      <Footer />
      {/* footer ends */}
    </div>
  );
};

export default Home;
