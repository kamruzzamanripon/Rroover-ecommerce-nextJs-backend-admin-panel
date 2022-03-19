import { combineReducers } from "@reduxjs/toolkit";
import userinfo from './authenticationSlice';
import bannerReducer from './bannerSlice';
import brandReducer from './brandSlice';
import categoryReducer from './categorySlice';
import permissionReducer from './permissionSlice';
import productReducer from './productSlice';
import roleReducer from './roleSlice';
import subcategoryReducer from './subCategorySlice';


const reducers = combineReducers({
    category:categoryReducer,
    subcategory:subcategoryReducer,
    brand:brandReducer,
    banner:bannerReducer,
    product:productReducer,
    permission:permissionReducer,
    role:roleReducer,
    userinfo
  })

export default reducers