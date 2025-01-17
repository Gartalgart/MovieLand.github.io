import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="group w-[310px] h-[460px] m-6 relative rounded-[12px]
        overflow-hidden border-none transition-all duration-400
        ease-[cubic-bezier(0.175,0.885,0,1)] shadow-custom
        max-sm:w-full max-sm:m-4 hover:shadow-customHover hover:transform 
        hover:scale-105">
        <div className="absolute p-4 w-full opacity-0 top-0 text-[#f9d3b4]
        group-hover:opacity-100">
            <p>{movie.Year}</p>
        </div>
        <div className="w-full h-full group-hover:opacity-[0.3]">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'} 
        alt={movie.Title}
        className="h-full w-full"/>   
        </div>
        <div className="z-[2] bg-[rgb(52,55,57,0.8)] px-6 pt-4 pb-6 absolute bottom-0
        right-0 left-0 group-hover:bg-transparent">
        <span className="font-raleway uppercase text-sm tracking-[2px] font-medium
        text-[#f0f0F0]">
            {movie.Type}
        </span>
        <h3 className="font-roboto-slab mt-[5px] text-[#f9d3b4]">
            {movie.Title}
        </h3>
        </div>
    </div>
  )
}

export default MovieCard
