import React, { useEffect, useRef, useState } from "react";
import axios from "../../api_data/axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const sliderRef = useRef(null); // Reference to the Slider component
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  const [sts, setSlidesToShow] = useState(5);

  // Function to handle resizing and update slidesToShow based on screen width
  const handleResize = () => {
    if (window.innerWidth <= 640) {
      // If the screen width is less than or equal to 640px (mobile), show 3 slides
      setSlidesToShow(3);
    } else {
      // Otherwise, show 5 slides
      setSlidesToShow(5);
    }
  };

  // useEffect hook to add and remove the resize event listener
  useEffect(() => {
    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="row relative top-5 ml-5 text-lg">
      <h2 className="text-2xl text-white ml-5">{title}</h2>
      <div className="slider-container relative">
        <Slider
          className="carousel flex h-42 overflow-x-hidden custom-scrollbar"
          ref={sliderRef}
          slidesToShow={sts}
          slidesToScroll={4}
        >
              {movies.map((movie) => (
                <div className="carousel-item" key={movie.id}>
                  <img
                    className={`md:h-[12rem] md:w-[40rem] h-40 rounded py-5 px-1 ${
                      isLargeRow && "md:h-[19rem] p-5 transform w-36 md:w-[30rem] row_imgLarge"
                    }`}
                    src={`${process.env.REACT_APP_IMAGE_BASE_URL}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.title}
                  />
                </div>
              ))}
        </Slider>
        <div className="carousel-buttons   absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full z-10">
          <button
            className="carousel-button left-10 relative border-2 hover:h-10 hover:w-10  hover:text-2xl transition-all  rounded-full border-white text-xl text-white h-8 w-8 font-black"
            onClick={previous}
          >
            &lt;
          </button>
          <button
            className="carousel-button relative right-10 text-xl hover:h-10 hover:w-10 hover:text-2xl transition-all border-2 border-white rounded-full text-white h-8 w-8 font-black"
            onClick={next}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rows;
