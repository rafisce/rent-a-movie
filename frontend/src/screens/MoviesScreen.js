import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../actions/movieActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

const MoviesScreen = (props) => {
     const { query } = props;
     const dispatch = useDispatch();
     const movieList = useSelector((state) => state.movieList);
     const { movies, error, loading } = movieList;

     useEffect(() => {
       dispatch(listMovies({}));
     }, [dispatch]);
  return (
    <div className="container table_">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table table-striped table-dark" dir="rtl">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">שם הסרט</th>
              <th scope="col">שנת יציאה</th>
              <th scope="col">ציון</th>
              <th scope="col">עריכה</th>
              <th scope="col">מחיקה</th>
            </tr>
          </thead>
          <tbody>
            {movies && query
              ? movies
                  .filter((movie) =>
                    movie.title
                      .toLowerCase()
                      .startsWith(query ? query.toLowerCase() : null)
                  )
                  .map((movie, index) => (
                    <tr key={index}>
                      <td>#</td>
                          <td >{movie.title}</td>
                      <td >{movie.release_date} </td>
                          <td >{ movie.rating}</td>
                      <td ><button>ערוך</button></td>
                      <td ><button>מחק</button></td>
                    </tr>
                  ))
              : movies
              ? movies.map((movie, index) => (
                  <tr key={index}>
                    <td>#</td>
                    <td >שם הסרט</td>
                    <td >שנת יציאה</td>
                    <td >ציון</td>
                    <td >עריכה</td>
                    <td >מחיקה</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MoviesScreen
