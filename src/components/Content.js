import React from 'react'

const Content = ({chosenMovie}) => {

  return (
    <div>
    {!chosenMovie &&
    <div id='First_Load'>
        <h1>Welcome to Search a Movie</h1>
        <p>To start please select a movie from the sidebar, or try to look for your favorite movie via the searchbar!</p>    
    </div>
    }
    
    {chosenMovie &&
    <div> 
    <section id='content_First_Section'>
        <h1>{chosenMovie.title}</h1>
        <h2>{chosenMovie.tagline}</h2>

            <img src={`https://image.tmdb.org/t/p/original/${chosenMovie.poster_path}`} alt="movie poster" />
            
            <div id='content_Movie_Genres'>
            { chosenMovie?.genres?.map(element =>{
                return <div key={element.id}><p>{element.name}</p></div>
            })
            }
            </div>

            <p> <span>Release Date:</span> {chosenMovie.release_date}</p>

    </section>
    
    <section id="content_Second_Section">
        <p>{chosenMovie.overview}</p>
    </section>
    </div>
    }
    
    </div>
  )
}

export default Content