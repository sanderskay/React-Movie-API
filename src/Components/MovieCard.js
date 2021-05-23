import React from "react";
import { IMG_API } from '../lib/constants';
import "./MovieCard.css";

function MovieCard({ poster, title }) {
  return (
    <img className="movie-img" src={`${IMG_API}${poster}`} alt={title} />
  );
}

export default MovieCard;
