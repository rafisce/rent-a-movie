import axios from "axios";
import {
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../constants/movieConstants";

export const listMovies = () => async (dispatch) => {
  dispatch({
    type: MOVIE_LIST_REQUEST,
  });

  try {
    const { data } = await axios.get("http://localhost:8000/api/movies");

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const getMovie = (movieId) => async (dispatch) => {
  dispatch({
    type: MOVIE_GET_REQUEST,
  });

  try {
    const { data } = await axios.get(`http://localhost:8000/api/movie/${movieId}`);

    dispatch({
      type: MOVIE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: error.message,
    });
  }
};