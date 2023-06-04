import {
  MOVIE_GET_FAIL,
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../constants/movieConstants";

export const movieListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true };
    case MOVIE_LIST_SUCCESS:
      return { loading: false, movies: action.payload };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieGetReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_GET_REQUEST:
      return { loading: true };
    case MOVIE_GET_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
