import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import "./Popup.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';




 function Popup({ children, id }) {
  
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const IMG_API = "https://image.tmdb.org/t/p/w185"

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key={ADD API KEY}&language=en-US`
    );

    setContent(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className= "modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        
      >
        <Fade in={open}>
          {content && (
              
            <div className="paper">
              <h1 className="fade-header" onClick={handleClose}>{<ArrowBackIcon className="arrow"/>}Movie Details</h1>
              <div className="fade-container">
                
                <img
                  src={`${IMG_API}${content.poster_path}`}
                  alt={content.title}
                  className="fade-img"
                />
                <div className="about">
                  <span className="title">
                    {content.title} (
                    {(
                      
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  <span className='rating'>Rating: {content.vote_average}/10</span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <hr className="divider"/>
                  <span className="description">
                    {content.overview}
                  </span>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
export default Popup;
