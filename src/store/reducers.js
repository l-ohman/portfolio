import { createSlice } from "@reduxjs/toolkit";
// importing the data directly from the json here instead of using the db,
// since the quantity of data is very small and not regularly updated.
// will move to firestore later, but seems unnecessary for now.
import { projects, skills, bio } from "../portfolio.json";

export const _projects = createSlice({
  name: "projects",
  initialState: projects,
  reducers: {
    setData: (state, action) => action.payload,
  },
}).reducer;

export const _skills = createSlice({
  name: "skills",
  initialState: skills,
  reducers: {
    setData: (state, action) => action.payload,
  },
}).reducer;

export const _bio = createSlice({
  name: "bio",
  initialState: bio,
  reducers: {
    setData: (state, action) => action.payload,
  },
}).reducer;
