import { createSlice } from "@reduxjs/toolkit";
import { roleAllWithOutPagination, roleAllWithPagination, roleAssignByUserId, roleAssignChangeByUserId, roleChangeWithPermissionAssign, roleCreateWithPermissionAssign, roleDelete } from "../data_fetch/roleDataFetch";



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
      
      // Role All withOut Pagination
      [roleAllWithOutPagination.pending]: (state) => {
        state.loading = true
      },
      [roleAllWithOutPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [roleAllWithOutPagination.rejected]: (state) => {
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
      

      //Role Assign by User Id
      [roleAssignByUserId.pending]: (state) => {
        state.loading = true
      },
      [roleAssignByUserId.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [roleAssignByUserId.rejected]: (state) => {
          state.loading = false
      },  
      
      
      //Role Assign Change by User Id
      [roleAssignChangeByUserId.pending]: (state) => {
        state.loading = true
      },
      [roleAssignChangeByUserId.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [roleAssignChangeByUserId.rejected]: (state) => {
          state.loading = false
      },  
      
      
     
      
     

  }
});


export const {resetRoleSliceItem } = roleSlice.actions;

export default roleSlice.reducer;