import { createSlice } from "@reduxjs/toolkit";
import db from "../firebase";

const dataSlice = createSlice({
  name: "data",
  initialState: {},
  reducers: {
    setData: (state, action) => action.payload,
  },
});

const { setData } = dataSlice.actions;

export const getAllData = () => async (dispatch) => {
  try {
    const data = await db.collection("data").get();
    dispatch(setData(data));
    // alert("Data successfully set");
    return true;
  } catch (error) {
    // alert("Error getting data");
    return false;
  }
};

export default dataSlice.reducer;
