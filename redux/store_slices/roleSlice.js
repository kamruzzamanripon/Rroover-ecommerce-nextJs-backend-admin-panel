import { createSlice } from "@reduxjs/toolkit";
import { roleAllWithPagination } from "../data_fetch/roleDataFetch";



const initialState = {
    loading:false,
    items: [],
    item:{}
}

const roleSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetroleSliceItem: (state, {payload}) =>{
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
      
      
     
      
     

  }
});


export const {resetroleSliceItem } = roleSlice.actions;

export default roleSlice.reducer;