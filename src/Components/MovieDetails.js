import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { MOVIE_DB_API_KEY } from '../lib/config';
import { IMG_API } from '../lib/constants';
import "./MovieDetails.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams } from "react-router";

function MovieDetails({ children }) {
  const [content, setContent] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
    );

    setContent(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movie-details-container">
      {content && (
        <div className="paper">
          <Link to='/'>
            <h1 className="fade-header">
              {<ArrowBackIcon className="arrow" />}Movie Details
            </h1>
          </Link>
          <div className="fade-container">
            <img
              src={`${IMG_API}${content.poster_path}`}
              alt={content.title}
              className="fade-img"
            />
            <div className="about">
              <span className="title">
                {content.title} (
                {(content.release_date || "-----").substring(0, 4)})
              </span>
              <span className="rating">
                Rating: {content.vote_average}/10
              </span>
              {content.tagline && (
                <i className="tagline">{content.tagline}</i>
              )}
              <hr className="divider" />
              <span className="description">{content.overview}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieDetails;
