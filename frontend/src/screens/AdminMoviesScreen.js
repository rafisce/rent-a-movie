import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, deleteMovie, listMovies } from "../actions/movieActions";
import { Link } from "react-router-dom";

const AdminMoviesScreen = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { movies, loading, error } = movieList;
  const [update, setUpdate] = useState(false);

  const handleCreate = () => {
    dispatch(createMovie());
    setUpdate(!update);
  };
  const handleDelete = (movie) => {
    if (window.confirm(`למחוק את ${movie.title}`)) {
      dispatch(deleteMovie(movie.id));
      setUpdate(!update);
    }
  };

  const saveMovie = (movie) => {
    localStorage.setItem(
      "movie",
      JSON.stringify({
        title: movie.title,
        description: movie.description,
        rating: movie.rating,
        popularity: movie.popularity,
        release_date: movie.release_date,
        img: movie.img,
        active: movie.active,
      })
    );
  };

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch,update]);
  return (
    <div className="container table_">
      <button className="btn" onClick={handleCreate}>
        צור סרט חדש
      </button>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table table-striped table-dark" dir="rtl">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">שם סרט</th>
              <th scope="col">פופולאריות </th>
              <th scope="col">ציון</th>
              <th scope="col">תאריך יציאה</th>
              <th scope="col">פעיל</th>
              <th scope="col">עריכה</th>
              <th scope="col">מחיקה</th>
            </tr>
          </thead>
          <tbody>
            {movies
              ? movies.map((movie, index) => (
                  <tr
                    key={movie.id}
                    className={movie.active ? "active" : "inactive"}
                  >
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.popularity}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.active ? "כן" : "לא"}</td>
                    <td>
                      <Link
                        className="btn"
                        to={`/edit-movie/${movie.id}`}
                        onClick={() => saveMovie(movie)}
                      >
                        ערוך
                      </Link>
                    </td>
                    <td>
                      <Link className="btn" onClick={() => handleDelete(movie)}>
                        מחק
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminMoviesScreen;
