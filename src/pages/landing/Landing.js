import React, {useState, useEffect} from 'react'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'
import "./main.css"
import axios from "axios"

const Landing = () => {
  const [movieList, setMovieList] = useState()

  useEffect(()=> {

    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a6b0a5e37d1cd50523e341dcf7406fb6")
      .then(response => setMovieList(response))
      .catch(err => console.log(err));

  },[])


  console.log(movieList);

  return (
    <div id='main_container'>

    <Sidebar />
    <Content />

    

    
    </div>
  )
}

export default Landing