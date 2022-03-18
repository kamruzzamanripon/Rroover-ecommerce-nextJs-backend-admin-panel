import React from 'react';
import InputHeadingTitle from './InputHeadingTitle';

const BasicInformation = ({ register, errors, inputStatus, dataInfo, watchAllFields}) => {
  //console.log("basic product info", dataInfo)
  
    return (
        <>
            <InputHeadingTitle title="Product Basic Information"/>
            
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Name</label>


                {/* Product Id insert for Edit and Delete */}
                {inputStatus === 'productEdit' || inputStatus === 'productDelete' ?
                    (<input 
                    className="border-2 border-purple-600/50 w-[75%] "
                    defaultValue={dataInfo?.id}
                    type="hidden" 
                    {...register("Id")}
                  />) : ''
                }
                
                
                {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                  <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{dataInfo.name}</label> :
                <input 
                  className="border-2 border-purple-600/50 w-[75%] "
                  defaultValue={dataInfo?.name}
                  type="text" 
                  {...register("name", {
                    required: "required",
                  })}
                />
              }

             


            </div>
            {errors.name && <p className="text-red-700 text-right font-semibold">This Upper Field is Required</p>}


            <div className="flex justify-between">
                <label className="font-semibold pr-2">Description</label>
                { inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                  <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{dataInfo.details}</label> :
                  <textarea 
                    className="border-2 border-purple-600/50 w-[75%] " 
                    defaultValue={dataInfo?.details}
                    type="text" 
                    {...register("description")}
                  />
                }  
            </div> 
        </>
    );
};

export default BasicInformation;