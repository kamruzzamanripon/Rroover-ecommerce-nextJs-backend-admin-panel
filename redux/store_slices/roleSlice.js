import { createSlice } from "@reduxjs/toolkit";
import { roleAllWithPagination, roleChangeWithPermissionAssign, roleCreateWithPermissionAssign, roleDelete } from "../data_fetch/roleDataFetch";



const initialState = {
    loading:false,
    items: [],
    item:{}
}

const roleSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetRoleSliceItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Role All with Pagination
      [roleAllWithPagination.pending]: (state) => {
        state.loading = true
      },
      [roleAllWithPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [roleAllWithPagination.rejected]: (state) => {
          state.loading = false
      },   
      
      // Role Create with permission Assign
      [roleCreateWithPermissionAssign.pending]: (state) => {
        state.loading = true
      },
      [roleCreateWithPermissionAssign.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [roleCreateWithPermissionAssign.rejected]: (state) => {
          state.loading = false
      }, 
      
      
      // Role Create with permission Assign
      [roleChangeWithPermissionAssign.pending]: (state) => {
        state.loading = true
      },
      [roleChangeWithPermissionAssign.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [roleChangeWithPermissionAssign.rejected]: (state) => {
          state.loading = false
      }, 

      
      // Role Delete
      [roleDelete.pending]: (state) => {
        state.loading = true
      },
      [roleDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [roleDelete.rejected]: (state) => {
          state.loading = false
      },  
      
      
     
      
     

  }
});


export const {resetRoleSliceItem } = roleSlice.actions;

export default roleSlice.reducer;