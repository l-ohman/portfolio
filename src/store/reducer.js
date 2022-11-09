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
    const fetchedData = await db.collection("data").get();
    const data = [];
    fetchedData.forEach(itm => data.push(itm.data()));
    
    // data.forEach(doc => console.log(`${doc.id} => ${doc.data()}`));
    dispatch(setData(data));
    console.log("success");
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export default dataSlice.reducer;
