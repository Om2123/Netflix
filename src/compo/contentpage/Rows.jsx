import React, { useEffect, useRef, useState } from 'react';
import axios from "X:/Netflix/Netflix/src/api_data/axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Rows.css";


const Rows = ({title , fetchUrl , isLargeRow= false}) => {
    const [movies , setMovies] = React.useState([]);
    const [loadedImages, setLoadedImages] = useState([]);

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

    return (
        <div className='row relative top-5 ml-5 text-lg'>
    <h2 className='text-2xl text-white ml-5'>{title}</h2>
    <div className='slider-container relative'>

      <Slider className='carousel flex h-42 overflow-x-hidden custom-scrollbar' ref={sliderRef} slidesToShow={5} slidesToScroll={4}>
      {movies.map((movie) => (
            <div className='carousel-item' key={movie.id}>
             
                <img
                  className={`h-[12rem] w-[40rem] rounded py-5 px-1 ${isLargeRow && "h-[19rem] p-5 transform w-[30rem] row_imgLarge"}`}
                  src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.title}
                />
             
            </div>
          ))}
      </Slider>
      <div className="carousel-buttons   absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full z-10">
          <button className="carousel-button left-10 relative border-2 hover:h-10 hover:w-10  hover:text-2xl transition-all  rounded-full border-white text-xl text-white h-8 w-8 font-black" onClick={previous}>
            &lt;
          </button>
          <button className="carousel-button relative right-10 text-xl hover:h-10 hover:w-10 hover:text-2xl transition-all border-2 border-white rounded-full text-white h-8 w-8 font-black" onClick={next}>
            &gt;
          </button>
        </div>
      </div>
    </div>
    );
}
 


export default Rows;
