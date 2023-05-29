import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";
import { movieListReducer } from "./reducers/movieReducers";
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
});

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
