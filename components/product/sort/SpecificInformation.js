import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brandAllWithOutPagination } from "../../../redux/data_fetch/brandDataFetch";
import { categoryAllWithoutPagination, categorySingle } from "../../../redux/data_fetch/categoryDataFetch";
import InputHeadingTitle from "./InputHeadingTitle";

const SpecificInformation = ({ register, errors, watchAllFields }) => {
  const [subCategoryIdDependCatId, setSubCategoryIdDependCatId] = useState();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state?.store?.category?.items);
  const subCategoryListByCatId = useSelector((state) => state?.store?.category?.item?.data?.subcategory);
  const brandList = useSelector((state) => state?.store?.brand?.items);

  //console.log('product category list', subCategoryListByCatId)
  

  //Default Category Dispatch
  useEffect(() => {
    dispatch(categoryAllWithoutPagination());
    dispatch(brandAllWithOutPagination());
  }, [categoryAllWithoutPagination, brandAllWithOutPagination]);

  //if category Select Box change then change subCategoryIdDependCatId data
  useEffect(()=>{
    if( watchAllFields){
      setSubCategoryIdDependCatId(watchAllFields.category);
    }
  },[watchAllFields])

  //When subCategoryIdDependCatId data change then dispatch Selected Id category which has sub-cateogry and products items
  useEffect(()=>{
    if(subCategoryIdDependCatId){
      dispatch(categorySingle(subCategoryIdDependCatId));
    }
  },[subCategoryIdDependCatId])
  return (
    <>
      <InputHeadingTitle title="Product Specific Information"/>

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Category</label>
        <select
          className="border-2 border-purple-600/50 w-[75%] text-right"
          {...register("category", {
            required: "required",
          })}
        >
          <option value="">Choose any Category</option>
          {categoryList && categoryList.length > 0 && (
            categoryList.map((category, index)=>(
              <option value={category.id} key={index}>{category.name}</option>
            ))
          )}
        </select>
      </div>
      {errors.category && (
        <p className="text-red-700 text-right font-semibold">
          Select Field is required
        </p>
      )}

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Sub-Category</label>
        <select
          className="border-2 border-purple-600/50 w-[75%] text-right"
          {...register("subCateogry", {
            required: "required",
          })}
        >
          <option value="">Choose any Sub-Category</option>
          {subCategoryListByCatId && subCategoryListByCatId.length > 0 && (
            subCategoryListByCatId.map((subCategory, index)=>(
              <option value={subCategory.id} key={index}>{subCategory.name}</option>
            ))
          )}
        </select>
      </div>
      {errors.subCateogry && (
        <p className="text-red-700 text-right font-semibold">
          Select Field is required
        </p>
      )}

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Brand</label>
        <select
          className="border-2 border-purple-600/50 w-[75%] text-right"
          {...register("brand", {
            required: "required",
          })}
        >
          <option value="">Choose any Brand</option>
          {brandList && brandList.length > 0 && (
            brandList.map((brand, index)=>(
              <option value={brand.id} key={index}>{brand.name}</option>
            ))
          )}
        </select>
      </div>
      {errors.brand && (
        <p className="text-red-700 text-right font-semibold">
          Select Field is required
        </p>
      )}
    </>
  );
};

export default SpecificInformation;
