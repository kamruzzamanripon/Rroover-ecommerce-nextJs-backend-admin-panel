import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from './categorySlice';
import subcategoryReducer from './subCategorySlice';


const reducers = combineReducers({
    category:categoryReducer,
    subcategory:subcategoryReducer
  })

export default reducers