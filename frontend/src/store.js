import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";
import {
  movieCreateReducer,
  movieDeleteReducer,
  movieGetReducer,
  movieListReducer,
  movieUpdateReducer,
} from "./reducers/movieReducers";
import {
  rentalCreateReducer,
  rentalListReducer,
} from "./reducers/rentalReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  movieList: movieListReducer,
  rentalList: rentalListReducer,
  rentalCreate: rentalCreateReducer,
  userList: userListReducer,
  movieGet: movieGetReducer,
  movieUpdate: movieUpdateReducer,
  movieDelete: movieDeleteReducer,
  movieCreate:movieCreateReducer
});

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
