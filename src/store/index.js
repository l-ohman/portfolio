import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import dataReducer from "./reducer";

export default configureStore({
  reducer: {
    data: dataReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
});
