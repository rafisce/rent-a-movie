import axios from "axios";
import {
  RENTAL_CREATE_FAIL,
  RENTAL_CREATE_REQUEST,
  RENTAL_CREATE_SUCCESS,
  RENTAL_LIST_FAIL,
  RENTAL_LIST_REQUEST,
  RENTAL_LIST_SUCCESS,
} from "../constants/rentalConstants";

export const createRental =
  (movieId, duration, userId, movieTitle) => async (dispatch, getState) => {
    dispatch({
      type: RENTAL_CREATE_REQUEST,
      payload: { movieId, duration, userId, movieTitle },
    });

    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await axios.post(
        "http://localhost:8000/api/rentals",
        { movie_id: movieId, duration, user: userId, movie_title: movieTitle },
        {
          headers: {
            Authorization: `Bearer ${userInfo.access}`,
          },
        }
      );
      dispatch({ type: RENTAL_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RENTAL_CREATE_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const listRentals = (user_id) => async (dispatch, getState) => {
  dispatch({ type: RENTAL_LIST_REQUEST, payload: { user_id } });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await axios.get("http://localhost:8000/api/rentals", {
      headers: {
        Authorization: `Bearer ${userInfo.access}`,
      },
    });

    dispatch({ type: RENTAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RENTAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listRentalsAdmin = (user_id) => async (dispatch, getState) => {
  dispatch({ type: RENTAL_LIST_REQUEST, payload: { user_id } });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await axios.get(`http://localhost:8000/api/rentals/${user_id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.access}`,
      },
    });

    dispatch({ type: RENTAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RENTAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
