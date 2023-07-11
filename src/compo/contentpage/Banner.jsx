import React from "react";

const Banner = (props) => {
  // console.log(props.movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="object-contain  h-[82vh] max-sm:w-screen  text-white relative "
    >
      <div className="ml-20 pt-32 h-48">
        <h1 className="text-7xl font-bold pb-1">
          {props.movie?.title || props.movie?.name || props.movie?.originalname}
        </h1>
        <h1 className="pt-4 max-w-sm text-lg ml-2 h-20 w-96">
          {truncate(props.movie?.overview, 100)}
        </h1>

        <div className="pt-8">
          <button className="text-black hover:opacity-0.25 bg-white hover:transition-all py-3 font-bold text-xl rounded px-8 font-bolder mr-4 pointer border-none outline-none ">
            Play
          </button>
          <button className="text-white opacity-0.75 bg-slate-600 w- hover:transition-all py-3 text-xl rounded px-10 font-bolder mr-4 pointer border-none outline-none ">
            My List
          </button>
        </div>
        
      </div>

      <div
        className="h-80 "
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
        }}
      />
    </div>
  );
};

export default Banner;
