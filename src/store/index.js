import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import { selectedProject, darkMode } from "./reducers";

export default configureStore({
  reducer: {
    selectedProject,
    isDark: darkMode,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
