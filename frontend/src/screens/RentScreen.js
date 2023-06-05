import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../actions/movieActions";
import { createRental } from "../actions/rentalActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RentScreen = ({ props }) => {
  const [duration, setDuration] = useState(1);
  const params = useParams();
  const { movieId } = params;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const movieGet = useSelector((state) => state.movieGet);
  const { movie, loading, error } = movieGet;
  const navigate = useNavigate()

  useEffect(() => {
    if (movieId) {
      dispatch(getMovie(movieId));
    }
  }, [dispatch, movieId]);

  const rent = () => {
    if (userInfo) {
      if (movie) {
        dispatch(createRental(movieId, duration, userInfo.id, movie.title));
        navigate('/rentals')
      }
    } else {
      alert("אינך מחובר! אנא התחבר כדי להשכיר");
    }
  };

  return (
    <div className="rent-movie container h-100 p-5">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : movie ? (
        <div className="rent-container col-sm-8 d-flex flex-column align-items-center justify-content-center">
          <div className="card">
                <img className="img-fluid" src={movie.img} alt={movie.id}></img>
                </div>
          
          <label htmlFor="ren">תקופת השכרה</label>
              <select onChange={(e) => setDuration(e.target.value)} name="ren" id="ren">
            <option value={1}>24 שעות</option>
            <option value={7}>7 ימים</option>
            <option value={30}>30 ימים</option>
                </select>
                
          <button className="btn" onClick={rent}>
            אישור השכרה
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RentScreen;
