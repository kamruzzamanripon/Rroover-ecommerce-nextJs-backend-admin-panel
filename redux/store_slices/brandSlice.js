import { createSlice } from "@reduxjs/toolkit";
import { brandAllWithOutPagination, brandAllWithPagination, brandDataAdd, brandDataDelete, brandDataEdit } from "../data_fetch/brandDataFetch";


const initialState = {
    loading:false,
    items: [],
    item:{}
}

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetBrandItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Brand All with Pagination
      [brandAllWithPagination.pending]: (state) => {
        state.loading = true
      },
      [brandAllWithPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [brandAllWithPagination.rejected]: (state) => {
          state.loading = false
      },  
      
      
      // Brand All With Out pagination
      [brandAllWithOutPagination.pending]: (state) => {
        state.loading = true
      },
      [brandAllWithOutPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [brandAllWithOutPagination.rejected]: (state) => {
          state.loading = false
      },  
      
      
      // Brand Edit
      [brandDataEdit.pending]: (state) => {
        state.loading = true
      },
      [brandDataEdit.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [brandDataEdit.rejected]: (state) => {
          state.loading = false
      }, 
      
      // Brand Delete
      [brandDataDelete.pending]: (state) => {
        state.loading = true
      },
      [brandDataDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [brandDataDelete.rejected]: (state) => {
          state.loading = false
      },
      
      // Brand Add
      [brandDataAdd.pending]: (state) => {
        state.loading = true
      },
      [brandDataAdd.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [brandDataAdd.rejected]: (state) => {
          state.loading = false
      }, 

  }
});


export const {resetBrandItem } = brandSlice.actions;

export default brandSlice.reducer;