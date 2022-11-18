import { createSlice } from "@reduxjs/toolkit";

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
