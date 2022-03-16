import React from "react";
import InputHeadingTitle from "./InputHeadingTitle";

const FeaturesInformation = ({ register, errors }) => {
  return (
    <>
      <InputHeadingTitle title="Product Features Information"/>

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Click Features</label>

        <div className="flex space-x-5">
          <div>
            <label className="block">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                {...register("featured")}
              />
              <span className="text-sm">Featured</span>
            </label>
            <label className="block">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                {...register("bestSelling")}
              />
              <span className="text-sm">Best Selling</span>
            </label>
            <label className="block">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                {...register("topRating")}
              />
              <span className="text-sm">Top Rating</span>
            </label>
          </div>
          <div>
            <label className="block">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                {...register("topHot")}
              />
              <span className="text-sm">Top Hot</span>
            </label>
            <label className="block">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                {...register("topSale")}
              />
              <span className="text-sm">Top sale</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesInformation;
