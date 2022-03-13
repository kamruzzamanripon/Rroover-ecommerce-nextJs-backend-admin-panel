import { combineReducers } from "@reduxjs/toolkit";
import userinfo from './authenticationSlice';
import categoryReducer from './categorySlice';
import subcategoryReducer from './subCategorySlice';


const reducers = combineReducers({
    category:categoryReducer,
    subcategory:subcategoryReducer,
    userinfo
  })

export default reducers