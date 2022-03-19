import { createSlice } from "@reduxjs/toolkit";
import { permissionAllWithPagination, permissionDataAdd, permissionDataDelete, permissionDataEdit } from "../data_fetch/permissionDataFetch";



const initialState = {
    loading:false,
    items: [],
    item:{}
}

const permissionSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetPermissionItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Permission All with Pagination
      [permissionAllWithPagination.pending]: (state) => {
        state.loading = true
      },
      [permissionAllWithPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [permissionAllWithPagination.rejected]: (state) => {
          state.loading = false
      },  
      
      
      // Permission ADD
      [permissionDataAdd.pending]: (state) => {
        state.loading = true
      },
      [permissionDataAdd.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [permissionDataAdd.rejected]: (state) => {
          state.loading = false
      },  
      
      
      // Permission Edit/Update
      [permissionDataEdit.pending]: (state) => {
        state.loading = true
      },
      [permissionDataEdit.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [permissionDataEdit.rejected]: (state) => {
          state.loading = false
      },  
      
      
      // Permission Delete
      [permissionDataDelete.pending]: (state) => {
        state.loading = true
      },
      [permissionDataDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [permissionDataDelete.rejected]: (state) => {
          state.loading = false
      },  
      
     

  }
});


export const {resetPermissionItem } = permissionSlice.actions;

export default permissionSlice.reducer;