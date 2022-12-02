import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Sidebar = ({movieList, showDetails}) => {
const [checkHover, setCheckHover] = useState([false, ""]);
const [query, setQuery] = useState("")
const [queryResponseList, setQueryResponseList] = useState([])


let splitQuery = query.split(" ").join("+")


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a6b0a5e37d1cd50523e341dcf7406fb6&query=${splitQuery}`)
        .then(response => setQueryResponseList(response.data.results))
        .catch(err => console.log(err) )

    }, [query])
 
 


    return (
        <div>
    <SearchBar setQuery={setQuery} />
    
    <section id="movie_list">

    

      {  query === "" && 
        movieList.map(movie => {return <div key={movie.id}> 
        <h2
        onMouseEnter={() => setCheckHover([true, movie.id])}
        onMouseLeave={() => setCheckHover([false, ""])}
        onClick={()=> showDetails(movie.id)}
        >
        
        {checkHover[0] && checkHover[1] === movie.id  ? "Vote Average: " + movie.vote_average : movie.title}
        </h2>
     
      </div>})
      }

      {queryResponseList && 
        queryResponseList?.map(movie => {return <div key={movie.id}> 
        <h2
        onMouseEnter={() => setCheckHover([true, movie.id])}
        onMouseLeave={() => setCheckHover([false, ""])}
        onClick={()=> showDetails(movie.id)}
        >
        
        {checkHover[0] && checkHover[1] === movie.id  ? "Vote Average: " + movie.vote_average : movie.title}
        </h2>
     
      </div>})
      }
    </section>
      
    </div>
  );
};

export default Sidebar;
