/* eslint-disable react/no-unescaped-entities */
import React from "react";
import InputHeadingTitle from "./InputHeadingTitle";

const AttributeInformation = ({ register, errors, watchAllFields, inputStatus, dataInfo }) => {
  const colorItem = dataInfo ? JSON.parse(dataInfo?.color) : '';
  const defaultColorItems = colorItem && colorItem.map((color, index) => ( color ))
  const availableSizes =  dataInfo ? JSON.parse(dataInfo?.size) : '';
  const defaultAvailableSizes = availableSizes && availableSizes.map((size, index) => ( size ))
  
  //console.log('attribute information', watchAllFields)
  //console.log("attribute information availableSizes",availableSizes)
  return (
    <>
      <InputHeadingTitle title="Product Attribute Information"/>
      <div className="flex justify-between">
        <label className="font-semibold pr-2">Colors</label>

        {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                  <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{colorItem.map((color, index) => ( <span key={index}>{color},</span> ))}</label> :
                  <input
                    defaultValue={defaultColorItems}
                    className="border-2 border-purple-600/50 w-[75%] "
                    type="text"
                    {...register("color")}
                  />
        }
      </div>
      <div className="flex justify-between">
        <label className="font-semibold pr-2 -mt-3"></label>
        <label className="font-semibold text-gray-500 text-xs pr-2 -mt-3">
          Write color Name Seperate (coma ",") Like as Red, Blue, Green
        </label>
      </div>


      <div className="flex justify-between">
        <label className="font-semibold pr-2">Sizes</label>

        {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                  <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{availableSizes.map((size, index) => ( <span key={index}>{size},</span> ))}</label> :

                  <input
                    defaultValue={defaultAvailableSizes}
                    className="border-2 border-purple-600/50 w-[75%] "
                    type="text"
                    {...register("size")}
                  />
      }
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
