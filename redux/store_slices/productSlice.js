import { createSlice } from "@reduxjs/toolkit";
import { productDataAdd } from "../data_fetch/productDataFetch";

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


      
  }
});


export const {resetProductItem } = productSlice.actions;

export default productSlice.reducer;
