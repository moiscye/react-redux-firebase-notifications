import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/actiontypes";

const initialState = {
  projects: [
    { id: "1", title: "my Title 1", content: "blah, blah, blah" },
    { id: "2", title: "my Title 2", content: "blah, blah, blah" },
    { id: "3", title: "my Title 3", content: "blah, blah, blah" }
  ]
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("created project", action.payload);
      return state;
    case CREATE_PROJECT_ERROR:
      console.log(CREATE_PROJECT_ERROR, action.payload);
      return state;

    default:
      return state;
  }
};
