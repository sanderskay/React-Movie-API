import React from "react";
import Popup from "./Popup";

function MovieCard({ id, poster, title }) {
  const IMG_API = "https://image.tmdb.org/t/p/w185";

  return (
    <Popup id={id}>
      <img className="movie-img" src={`${IMG_API}${poster}`} alt={title} />
    </Popup>
  );
}

export default MovieCard;
