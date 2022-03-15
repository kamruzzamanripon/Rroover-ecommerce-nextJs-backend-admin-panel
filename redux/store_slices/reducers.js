import { combineReducers } from "@reduxjs/toolkit";
import userinfo from './authenticationSlice';
import brandReducer from './brandSlice';
import categoryReducer from './categorySlice';
import subcategoryReducer from './subCategorySlice';


const reducers = combineReducers({
    category:categoryReducer,
    subcategory:subcategoryReducer,
    brand:brandReducer,
    userinfo
  })

export default reducers