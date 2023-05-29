import React from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { createRental } from "../actions/rentalActions";

const MoviesCard = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const rent = async (e) => {
    e.preventDefault();
    if (userInfo) {
      dispatch(createRental(6, 7, userInfo.id));
    }
  };

  return (
    <div className="col col-12 col-md-4 col-lg-3">
      <div className="card">
        <img className="img-fluid" src={movie.img} alt={movie.img} />
        <div className="overlay center">
          <Rating rating={movie.rating} />
          <div className="movie-title">
            <h3>{movie.title}</h3>
          </div>
          <div className="movie-description">
            <p>{movie.description}</p>
          </div>
          <button className="btn" onClick={rent}>
            RENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
