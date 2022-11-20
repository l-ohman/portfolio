import { configureStore } from "@reduxjs/toolkit";
// import loggerMiddleware from "redux-logger";
import { darkMode } from "./reducers";

export default configureStore({
  reducer: {
    isDark: darkMode,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()/*.concat(loggerMiddleware)*/,
});
