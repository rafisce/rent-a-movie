import {
  MOVIE_CREATE_FAIL,
  MOVIE_CREATE_REQUEST,
  MOVIE_CREATE_SUCCESS,
  MOVIE_DELETE_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_GET_FAIL,
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_UPDATE_FAIL,
  MOVIE_UPDATE_REQUEST,
  MOVIE_UPDATE_SUCCESS,
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

export const movieUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_UPDATE_REQUEST:
      return { loading: true };
    case MOVIE_UPDATE_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_DELETE_REQUEST:
      return { loading: true };
    case MOVIE_DELETE_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_CREATE_REQUEST:
      return { loading: true };
    case MOVIE_CREATE_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
