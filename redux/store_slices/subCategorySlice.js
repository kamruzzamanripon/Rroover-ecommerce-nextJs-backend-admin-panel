import { createSlice } from "@reduxjs/toolkit";
import { subCategoryAdd, subCategoryAll, subCategoryDataDelete, subCategoryDataEdit } from '../data_fetch/subCategoryDataFetch';

const initialState = {
    loading:false,
    items: [],
    item:{}
}

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    resetSubCategoryItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Sub-Category Add
      [subCategoryAdd.pending]: (state) => {
        state.loading = true
      },
      [subCategoryAdd.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [subCategoryAdd.rejected]: (state) => {
          state.loading = false
      },
      
      
      // Sub-Category Add
      [subCategoryAll.pending]: (state) => {
        state.loading = true
      },
      [subCategoryAll.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [subCategoryAll.rejected]: (state) => {
          state.loading = false
      },
      
      // Sub-Category Edit
      [subCategoryDataEdit.pending]: (state) => {
        state.loading = true
      },
      [subCategoryDataEdit.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [subCategoryDataEdit.rejected]: (state) => {
          state.loading = false
      }, 
      
      
      // Sub-Category Edit
      [subCategoryDataDelete.pending]: (state) => {
        state.loading = true
      },
      [subCategoryDataDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [subCategoryDataDelete.rejected]: (state) => {
          state.loading = false
      },
  }
});

export const { resetSubCategoryItem } = subCategorySlice.actions;

export default subCategorySlice.reducer;
