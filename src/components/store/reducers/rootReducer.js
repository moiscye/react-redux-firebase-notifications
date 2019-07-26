import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { projectReducer } from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export const rootReducer = combineReducers({
  project: projectReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
