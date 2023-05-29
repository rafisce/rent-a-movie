import {
  RENTAL_CREATE_FAIL,
  RENTAL_CREATE_REQUEST,
  RENTAL_CREATE_SUCCESS,
  RENTAL_LIST_FAIL,
  RENTAL_LIST_REQUEST,
  RENTAL_LIST_SUCCESS,
} from "../constants/rentalConstants";

export const rentalListReducer = (state = { rentals: [] }, action) => {
  switch (action.type) {
    case RENTAL_LIST_REQUEST:
      return { loading: true };
    case RENTAL_LIST_SUCCESS:
      return { loading: false, rentals: action.payload };
    case RENTAL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const rentalCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RENTAL_CREATE_REQUEST:
      return { loading: true };
    case RENTAL_CREATE_SUCCESS:
      return { loading: false, rental: action.payload };
    case RENTAL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
