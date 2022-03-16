import React from "react";
import InputHeadingTitle from "./InputHeadingTitle";

const SpecificInformation = ({ register, errors }) => {
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
          <option value="1">Choose any Category</option>
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
          <option value="1">Choose any Sub-Category</option>
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
          <option value="1">Choose any Brand</option>
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
