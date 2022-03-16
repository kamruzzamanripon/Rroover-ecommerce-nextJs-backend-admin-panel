import React from 'react';
import InputHeadingTitle from './InputHeadingTitle';

const BasicInformation = ({ register, errors }) => {
    return (
        <>
            <InputHeadingTitle title="Product Basic Information"/>
            
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Name</label>
                <input 
                  className="border-2 border-purple-600/50 w-[75%] " 
                  type="text" 
                  {...register("name", {
                    required: "required",
                  })}
                />
            </div>
            {errors.name && <p className="text-red-700 text-right font-semibold">This Upper Field is Required</p>}


            <div className="flex justify-between">
                <label className="font-semibold pr-2">Description</label>
                <textarea 
                  className="border-2 border-purple-600/50 w-[75%] " 
                  type="text" 
                  {...register("description")}
                />
            </div> 
        </>
    );
};

export default BasicInformation;