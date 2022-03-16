import { combineReducers } from "@reduxjs/toolkit";
import userinfo from './authenticationSlice';
import bannerReducer from './bannerSlice';
import brandReducer from './brandSlice';
import categoryReducer from './categorySlice';
import productReducer from './productSlice';
import subcategoryReducer from './subCategorySlice';


const reducers = combineReducers({
    category:categoryReducer,
    subcategory:subcategoryReducer,
    brand:brandReducer,
    banner:bannerReducer,
    product:productReducer,
    userinfo
  })

export default reducers