import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import MovieCard from './components/MovieCard'




// 874df1b0
const API_URL = "https://www.omdbapi.com?apikey=874df1b0"

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(data.Search)
  }
  useEffect(() => {
    searchMovies("Avengers")
  }, [])
  
  return (
   <div className="flex flex-col justify-center items-center p-16
   max-sm:px-4">
    <h1 className="text-3xl tracking-[0.9px]
     bg-gradient-to-r from-[rgb(249,211,180)] to-[rgba(249,211,180,0)] 
     bg-clip-text text-transparent w-fit max-sm:text-[2rem]">
      MovieLand
    </h1>
    <div className="w-[71%] mt-16 mb-8 flex items-center justify-center
    py-6 px-7 rounded-[3rem] bg-[#1f2123] shadow-custom-dual max-sm:w-full">
      <input 
        className="flex-1 border-none text-2xl font-medium pr-4 outline-none
        text-[#a1a1a1] bg-[#1f2123]"
        type="text" 
        placeholder="Search for movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass}
      className="w-8 h-8 cursor-pointer text-[#f9d3b4]"
      onClick={() => searchMovies(searchTerm)} />
    </div>
    {
      movies?.length > 0 
      ?(
        <div className="w-full mt-12 flex justify-center items-center
          flex-wrap max-sm:mt-8">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
        </div>
      ):(
        <div className="w-full mt-12 flex justify-center items-center">
          <h2 className="text-[1.25rem] text-[#f9d3b4] font-raleway">
            No movies found
          </h2>
        </div>
      )
    }
    
   </div>
    
  )
}

export default App;


