import axios from "axios";
import {
  MOVIE_DELETE_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_UPDATE_FAIL,
  MOVIE_UPDATE_REQUEST,
  MOVIE_UPDATE_SUCCESS,
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

export const updateMovie = (movieId,movie) => async (dispatch,getState) => {
  dispatch({
    type: MOVIE_UPDATE_REQUEST,
  });

  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.put(
      `http://localhost:8000/api/movie/${movieId}`,
      movie,
      {
        headers: {
          Authorization: `Bearer ${userInfo.access}`,
        },
      }
    );

    dispatch({
      type: MOVIE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_UPDATE_FAIL,
      payload: error.message,
    });
  }
};

export const deleteMovie = (movieId, movie) => async (dispatch, getState) => {
  dispatch({
    type: MOVIE_DELETE_REQUEST,
  });

  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.delete(
      `http://localhost:8000/api/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.access}`,
        },
      }
    );

    dispatch({
      type: MOVIE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DELETE_FAIL,
      payload: error.message,
    });
  }
};

export const createMovie = (movie) => async (dispatch, getState) => {
  dispatch({
    type: MOVIE_DELETE_REQUEST,
  });

  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.post(
      `http://localhost:8000/api/movie/0`,{},
      {
        headers: {
          Authorization: `Bearer ${userInfo.access}`,
        },
      }
    );

    dispatch({
      type: MOVIE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DELETE_FAIL,
      payload: error.message,
    });
  }
};

export const uploadMovies = async (access) => {
  //bulk movies upload from tmdb api
  // access: bearer access token

    for (let i = 1; i < 21; i++) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?adult=false?language=en-US&page=${i}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
               TMDB,
            },
          }
        )
        .then(async (res) => {
          const results = res.data.results;
          const updated = results.map(
            ({
              title,
              popularity,
              vote_average: rating,
              release_date,
              overview: description,
              poster_path: img,
            }) => ({
              title,
              popularity,
              rating: rating / 2,
              release_date,
              description,
              img: "https://image.tmdb.org/t/p/original" + img,
              active:true
            })
          );

         
          await axios.post("http://localhost:8000/api/movies", updated, {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          });
        });
    }
    };
    