import { createSlice } from "@reduxjs/toolkit";
import { productAllWithPagiantion, productDataAdd, productDataDelete, productDataEdit } from "../data_fetch/productDataFetch";

const initialState = {
    loading:false,
    items: [],
    item:{}
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProductItem: (state, {payload}) =>{
      state.loading = false
      state.item = {}
    }
  },
  extraReducers:{
      // Product Data All with pagination
      [productAllWithPagiantion.pending]: (state) => {
        state.loading = true
      },
      [productAllWithPagiantion.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.items = payload
      },
      [productAllWithPagiantion.rejected]: (state) => {
          state.loading = false
      }, 
      
      
      // Product Data Add/Store
      [productDataAdd.pending]: (state) => {
        state.loading = true
      },
      [productDataAdd.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [productDataAdd.rejected]: (state) => {
          state.loading = false
      },  
      
      
      // Product Data Edit/Update
      [productDataEdit.pending]: (state) => {
        state.loading = true
      },
      [productDataEdit.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [productDataEdit.rejected]: (state) => {
          state.loading = false
      },
      
      
      // Product Data Delete
      [productDataDelete.pending]: (state) => {
        state.loading = true
      },
      [productDataDelete.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.item = payload
      },
      [productDataDelete.rejected]: (state) => {
          state.loading = false
      }, 


      
  }
});


export const {resetProductItem } = productSlice.actions;

export default productSlice.reducer;
