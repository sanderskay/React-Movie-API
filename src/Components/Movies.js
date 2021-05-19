import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from '@material-ui/icons/Search';
import "./Movies.css"



function Movies() {
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("");


  const fetchPopular = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key={ADD API KEY}&language=en-US&page=1`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchPopular();
  }, []);



  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key={ADD API KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
      );
      setContent(data.results);

      
    } catch (error) { 
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, []);

  

  return (
    <div>
     <div className="search">
      
        
         <input type="text" placeholder='Search' className='searchBox'onChange={(e) => setSearchText(e.target.value)}/>

         <button onClick={fetchSearch}
          className="button">
          <SearchIcon color="primary" style={{backgroundColor: "white", marginBottom: '-5px'}}/>
          </button>
       
       
        
        </div>
        
        {content.length > 0 ? (<div className="movie-container">
          {content &&
            content.map((c) => (
              <MovieCard
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title}
                date={c.release_date}
                vote_average={c.vote_average}
              />
            ))}
          
        </div>): <h2 className="no-movie">No Movies Found...</h2>
          }
     
    </div>
  );
}

export default Movies;
