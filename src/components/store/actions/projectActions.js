import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./actiontypes";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    const authotId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authotId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT, payload: project });
      })
      .catch(err => {
        dispatch({ type: CREATE_PROJECT_ERROR, payload: err });
      });
  };
};
