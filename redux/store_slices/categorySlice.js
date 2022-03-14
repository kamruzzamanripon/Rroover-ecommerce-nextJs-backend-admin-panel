import { createSlice } from "@reduxjs/toolkit";
import { categoryAdd, categoryAll, categoryDelete, categoryEdit, categoryAllWithoutPagination } from '../data_fetch/categoryDataFetch';

const initialState = {
    loading:false,
    items: [],
    item:{}
}

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetCategoryItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Category All
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


      // Category All Without Pagination
      [categoryAllWithoutPagination.pending]: (state) => {
        state.loading = true
      },
      [categoryAllWithoutPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [categoryAllWithoutPagination.rejected]: (state) => {
          state.loading = false
      }, 
      
      
      // Category Add
      [categoryAdd.pending]: (state) => {
        state.loading = true
      },
      [categoryAdd.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [categoryAdd.rejected]: (state) => {
          state.loading = false
      },


      // Category Edit
      [categoryEdit.pending]: (state) => {
        state.loading = true
      },
      [categoryEdit.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [categoryEdit.rejected]: (state) => {
          state.loading = false
      },
      
      
      // Category Delete
      [categoryDelete.pending]: (state) => {
        state.loading = true
      },
      [categoryDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [categoryDelete.rejected]: (state) => {
          state.loading = false
      },
  }
});


export const {resetCategoryItem } = slice.actions;

export default slice.reducer;
