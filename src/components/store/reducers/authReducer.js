import {
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/actiontypes";

const initialState = {
  authError: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, authError: null };
    case SIGNIN_ERROR:
      return { ...state, authError: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      return { ...state, authError: action.payload };
    case SIGNOUT_SUCCESS:
      console.log("Signed out sucessfully");
      return state;
    case SIGNOUT_ERROR:
      console.log("something went wrong");
      return state;
    default:
      return state;
  }
};
