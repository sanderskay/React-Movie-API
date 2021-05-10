import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a33dac8f4fdc5b588a242bf40de1b265&language=en-US&page=1`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchPopular();
  }, []);

  return (
    <div className="movie-container">
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
    </div>
  );
}

export default Movies;
