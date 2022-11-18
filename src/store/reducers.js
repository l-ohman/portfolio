import { createSlice } from "@reduxjs/toolkit";

// may not need this (depends on structure of ProjectListContainer)
const selectedProjectSlice = createSlice({
  name: "selectedProject",
  initialState: 0,
  reducers: {
    selectProject: (state, action) => action.payload,
    unselectProject: (state, action) => 0,
  },
});
export const selectedProject = selectedProjectSlice.reducer;
export const { selectProject, unselectProject } = selectedProjectSlice.actions;

// ... because why not
const darkModeSlice = createSlice({
  name: "isDark",
  initialState: false,
  reducers: {
    setDarkMode: (state, action) => action.payload,
  }
})
export const darkMode = darkModeSlice.reducer;
export const { setDarkMode } = darkModeSlice.actions;
