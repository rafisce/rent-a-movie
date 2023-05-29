import React, { useEffect } from "react";

import MoviesCard from "../components/MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { listMovies } from "../actions/movieActions";

const HomeScreen = (props) => {
  const { query } = props;
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { movies } = movieList;

  useEffect(() => {
    dispatch(listMovies({}));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        {movies && query
          ? movies
              .filter((movie) =>
                movie.title
                  .toLowerCase()
                  .startsWith(query ? query.toLowerCase() : null)
              )
              .map((movie, index) => <MoviesCard movie={movie} key={index} />)
          : movies
          ? movies.map((movie, index) => (
              <MoviesCard movie={movie} key={index} />
            ))
          : null}
      </div>
    </div>
  );
};

export default HomeScreen;
