import React from "react";
import InputHeadingTitle from "./InputHeadingTitle";

const Financialformation = ({ register, errors }) => {
  return (
    <>
      <InputHeadingTitle title="Product Financial Information"/>

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Actual Price</label>
        <input
          className="border-2 border-purple-600/50 w-[75%] "
          type="number"
          {...register("actualPrice", {
            required: "required",
          })}
        />
      </div>
      {errors.actualPrice && (
        <p className="text-red-700 text-right font-semibold">
          Select Field is required
        </p>
      )}

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Discount Price</label>
        <input
          className="border-2 border-purple-600/50 w-[75%] "
          type="number"
          {...register("discountPrice", {
            //required: "required",
          })}
        />
      </div>
      <div className="flex justify-between">
        <label className="font-semibold pr-2 -mt-3"></label>
        <label className="font-semibold text-gray-500 text-xs pr-2 -mt-3">
          Not Necessary type "%", just type number.
        </label>
      </div>
      {errors.discountPrice && (
        <p className="text-red-700 text-right font-semibold">
          Select Field is required
        </p>
      )}

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Product Quantity</label>
        <input
          className="border-2 border-purple-600/50 w-[75%] "
          type="number"
          {...register("productQuantity", {
            required: "required",
          })}
        />
      </div>
      {errors.productQuantity && (
        <p className="text-red-700 text-right font-semibold">
          Select Field is required
        </p>
      )}
    </>
  );
};

export default Financialformation;
