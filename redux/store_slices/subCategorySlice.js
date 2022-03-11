import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    items: [],
}

const slice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},
  extraReducers:{
     
  }
});

//export const {  } = slice.actions;

export default slice.reducer;
