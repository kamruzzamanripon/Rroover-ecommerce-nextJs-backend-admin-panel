/* eslint-disable react/no-unescaped-entities */
import React from "react";
import InputHeadingTitle from "./InputHeadingTitle";

const AttributeInformation = ({ register, errors }) => {
  return (
    <>
      <InputHeadingTitle title="Product Attribute Information"/>
      <div className="flex justify-between">
        <label className="font-semibold pr-2">Colors</label>
        <input
          className="border-2 border-purple-600/50 w-[75%] "
          type="text"
          {...register("color")}
        />
      </div>
      <div className="flex justify-between">
        <label className="font-semibold pr-2 -mt-3"></label>
        <label className="font-semibold text-gray-500 text-xs pr-2 -mt-3">
          Write color Name Seperate (coma ",") Like as Red, Blue, Green
        </label>
      </div>

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Sizes</label>
        <input
          className="border-2 border-purple-600/50 w-[75%] "
          type="text"
          {...register("size")}
        />
      </div>
      <div className="flex justify-between">
        <label className="font-semibold pr-2 -mt-3"></label>
        <label className="font-semibold text-gray-500 text-xs pr-2 -mt-3">
          Write color Name Seperate (coma ",") Like as XL, M, L
        </label>
      </div>
    </>
  );
};

export default AttributeInformation;
