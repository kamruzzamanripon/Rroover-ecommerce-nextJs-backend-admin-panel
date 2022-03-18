import { CheckIcon } from '@heroicons/react/solid';
import React from "react";
import InputHeadingTitle from "./InputHeadingTitle";

const FeaturesInformation = ({ register, errors,  watchAllFields, inputStatus, dataInfo }) => {
  //console.log(" FeaturesInformation", watchAllFields)
  return (
    <>
      <InputHeadingTitle title="Product Features Information"/>

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Click Features</label>

        <div className="flex space-x-5">
          <div>
            
            <label className="flex">
              {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                 '' :
                  <input
                    className="mr-2 leading-tight"
                    defaultChecked={dataInfo?.featured === 1 ? true : false}
                    type="checkbox"
                    {...register("featured")}
                  />
              }
              <div className='flex'>
                {inputStatus === 'productView' || inputStatus === 'productDelete' ? (dataInfo?.featured === 1 && <CheckIcon className='h-5 flex' />) : ''} 
                <span className="text-sm">Featured</span>
              </div>
            </label>


            <label className="flex">
              {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                  '' :
                <input
                  className="mr-2 leading-tight"
                  defaultChecked={dataInfo?.best_selling === 1 ? true : false}
                  type="checkbox"
                  {...register("bestSelling")}
                />
              }
              <div className='flex'>
                {inputStatus === 'productView' || inputStatus === 'productDelete' ? (dataInfo?.best_selling === 1 && <CheckIcon className='h-5 flex' />) : ''} 
                <span className="text-sm">Best Selling</span>
              </div>
            </label>



            <label className="flex">
              {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                    '' :
                <input
                  className="mr-2 leading-tight"
                  defaultChecked={dataInfo?.top_rating === 1 ? true : false}
                  type="checkbox"
                  {...register("topRating")}
                />
              }
              <div className='flex'>
                {inputStatus === 'productView' || inputStatus === 'productDelete' ? (dataInfo?.top_rating === 1 && <CheckIcon className='h-5 flex' />) : ''} 
                <span className="text-sm">Top Rating</span>
              </div>
            </label>
          </div>


          <div>
            <label className="flex">
            {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                    '' :
              <input
                className="mr-2 leading-tight"
                defaultChecked={dataInfo?.hot === 1 ? true : false}
                type="checkbox"
                {...register("topHot")}
              />
            } 
            <div className='flex'>
                {inputStatus === 'productView' || inputStatus === 'productDelete' ? (dataInfo?.hot === 1 && <CheckIcon className='h-5 flex' />) : ''} 
                <span className="text-sm">Top Hot</span>
            </div>
            </label>

            <label className="flex">
              {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                      '' :
                <input
                  className="mr-2 leading-tight"
                  defaultChecked={dataInfo?.sale === 1 ? true : false}
                  type="checkbox"
                  {...register("topSale")}
                />
              }
              <div className='flex'>
                {inputStatus === 'productView' || inputStatus === 'productDelete' ? (dataInfo?.sale === 1 && <CheckIcon className='h-5 flex' />): ''} 
                <span className="text-sm">Top sale</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesInformation;
