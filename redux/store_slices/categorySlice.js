import { createSlice } from "@reduxjs/toolkit";
import { categoryAll } from '../data_fetch/categoryDataFetch';

const initialState = {
    loading:false,
    items: [],
}

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers:{
      // Main Slider Reducer
      [categoryAll.pending]: (state) => {
        state.loading = true
      },
      [categoryAll.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [categoryAll.rejected]: (state) => {
          state.loading = false
      },
  }
});

//export const {  } = slice.actions;

export default slice.reducer;
