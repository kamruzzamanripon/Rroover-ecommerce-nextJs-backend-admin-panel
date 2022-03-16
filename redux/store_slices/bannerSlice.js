import { createSlice } from "@reduxjs/toolkit";
import { bannerAdd, bannerAllWithPagination, bannerDelete, bannerEdit } from "../data_fetch/bannerDataFetch";


const initialState = {
    loading:false,
    items: [],
    item:{}
}

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    resetBannerItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Banner All
      [bannerAllWithPagination.pending]: (state) => {
        state.loading = true
      },
      [bannerAllWithPagination.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [bannerAllWithPagination.rejected]: (state) => {
          state.loading = false
      },   
      
      
      // Banner Add
      [bannerAdd.pending]: (state) => {
        state.loading = true
      },
      [bannerAdd.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [bannerAdd.rejected]: (state) => {
          state.loading = false
      },  
      
      // Banner Edit
      [bannerEdit.pending]: (state) => {
        state.loading = true
      },
      [bannerEdit.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [bannerEdit.rejected]: (state) => {
          state.loading = false
      },  
      
      // Banner Delete
      [bannerDelete.pending]: (state) => {
        state.loading = true
      },
      [bannerDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [bannerDelete.rejected]: (state) => {
          state.loading = false
      },  
      
    

  }
});


export const {resetBannerItem } = bannerSlice.actions;

export default bannerSlice.reducer;