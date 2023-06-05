import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { getMovie, updateMovie } from "../actions/movieActions";

const EditMovieScreen = () => {
  const params = useParams();
  const navigate = useNavigate()
  const { id: movieId } = params;
  const dispatch = useDispatch();
  const movieGet = useSelector((state) => state.movieGet);
  const { movie } = movieGet;
  const [title, setTitle] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).title
      : ""
  );
  const [description, setDescription] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).description
      : ""
  );
  const [rating, setRating] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).rating
      : 0
  );
  const [popularity, setPopularity] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).popularity
      : 0
  );
  const [release_date, setRelease] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).release_date
      : ""
  );
  const [img, setImg] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).img
      : ""
  );
  const [active, setActive] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie")).active
      : false
  );

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateMovie(movieId, { title, description, rating, popularity, release_date, img, active }))
    navigate('/movies')
    
  };

  useEffect(() => {
    dispatch(getMovie(movieId));

    localStorage.setItem(
      "movie",
      JSON.stringify({
        title: title,
        description: description,
        rating: rating,
        popularity: popularity,
        release_date: release_date,
        img: img,
        active: active,
      })
    );
  }, [
    active,
    description,
    dispatch,
    img,
    movieId,
    popularity,
    rating,
    release_date,
    title,
  ]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center movie-edit">
      {movie ? (
        <form className="edit-form">
          <h1>ערוך סרט</h1>
          <div className="field">
            <label htmlFor="title">שם הסרט</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="הכנס שם סרט"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="description">תקציר</label>
            <textarea
              rows={5}
              type="text"
              name="description"
              id="description"
              required
              placeholder="הכנס שם תקציר"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="rating">ציון</label>
            <input
              type="number"
              name="rating"
              id="rating"
              required
              placeholder="הכנס ציון"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="popularity">פופולאריות</label>
            <input
              type="number"
              name="popularity"
              id="popularity"
              required
              placeholder="הכנס פופולאריות"
              value={popularity}
              onChange={(e) => setPopularity(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="date">תאריך יציאה</label>
            <input
              type="date"
              name="date"
              id="date"
              required
              placeholder="הכנס תאריך יציאה"
              value={release_date}
              onChange={(e) => setRelease(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="img">תמונה</label>
            <input
              type="text"
              name="img"
              id="img"
              required
              placeholder="הכנס תמונה"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column active">
            <label htmlFor="active" className="act">
              פעיל
            </label>
            <input
              type="checkbox"
              name="active"
              id="active"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
          </div>

          <button className="btn" onClick={handleUpdate}>
            עדכן
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default EditMovieScreen;
