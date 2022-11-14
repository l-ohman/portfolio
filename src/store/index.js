import { configureStore } from "@reduxjs/toolkit";
// import loggerMiddleware from "redux-logger";
import { _projects, _skills, _bio } from "./reducers";

export default configureStore({
  reducer: {
    projects: _projects,
    skills: _skills,
    bio: _bio
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()/*.concat(loggerMiddleware)*/
});
