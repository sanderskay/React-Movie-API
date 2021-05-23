import React, { useEffect, useState } from "react";
import Header from './Header';
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";
import SearchIcon from '@material-ui/icons/Search';
import "./Movies.css"
import { fetchSearch, usePopularMovies } from "../lib/api";



function Movies() {
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loading, error, data: movies } = usePopularMovies();

  const handleFetchSearch = async () => {
    const data = fetchSearch(searchText);
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }
  
  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      <Header />
     <div className="search">
      <input type="text" placeholder='Search' className='searchBox'onChange={(e) => setSearchText(e.target.value)}/>
      <button onClick={fetchSearch}
      className="button">
      <SearchIcon color="primary" style={{backgroundColor: "white", marginBottom: '-5px'}}/>
      </button>
    </div>
    <div className="movie-container">
      {movies &&
        movies.map((c) => (
          <Link to={`/movies/${c.id}`}>
            <MovieCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title}
              date={c.release_date}
              vote_average={c.vote_average}
            />
          </Link>
        ))
      } 
    <h2 className="no-movie">No Movies Found...</h2>
    </div>
    </div>
  );
}

export default Movies;
