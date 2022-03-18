/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const VideoAndImageInformation = ({ register, errors, imageModalStatus, watchAllFields, reset, inputStatus, dataInfo }) => {
    const [selectedImage, setSelectedImage] = useState();
    const productImages = dataInfo?.image ? JSON.parse( dataInfo?.image) : [];

    //console.log("VideoAndImageInformation modal", productImages)

    //Total Form rest and Image reset
    useEffect(()=>{
        if(!imageModalStatus){
            setSelectedImage();
            reset()
          }
    },[imageModalStatus])

    //when image choose, these image show on page instantly
    useEffect(()=>{
        if( watchAllFields){
          setSelectedImage(watchAllFields.image);
        }
      },[watchAllFields])

  return (
    <>
      <hr className="bg-gradient-to-r from-purple-500 via-purple-500 to-white-500 h-1" />
      <p className="text-center text-xl font-semibold bg-lime-500 product-title">
        Product Image and Video Information
      </p>

      <div className="flex justify-between">
        <label className="font-semibold pr-2">Video Link</label>

        {inputStatus === 'productView' || inputStatus === 'productDelete' ? 
                  <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{dataInfo.video_link}</label> :

                  <input
                    className="border-2 border-purple-600/50 w-[75%] "
                    defaultValue={dataInfo?.video_link}
                    type="text"
                    {...register("videoLink")}
                  />
        }
      </div>


      <div className="flex-row justify-between">
        {/* Images Input Field */}
        <label className="font-semibold pr-2 ">Picture</label>
        <input
          className="border-2"
          type="file"
          accept="image/*"
          name="user[image]"
          multiple={true}
          {...register("image")}
        />
        {/* End Images Input Field */}

        {/* Data Base Save Images */}
        {productImages && productImages.length > 0 && (
         <>
             <hr className="bg-gradient-to-r from-purple-500 via-purple-500 to-white-500 h-1 m-0 mt-3"/>
             <h3 className="text-center font-semibold text-lg">Data Base Images</h3>
             <div className="flex overflow-auto my-2 p-2">
              {productImages.map((image, index)=>(
                <img 
                  key={index} 
                  src={`${process.env.ImagebaseUrl + image}`} 
                  className="w-32 h-32 mr-1 rounded-sm border-4"
                />
              ))}
            </div>
            <hr className="bg-gradient-to-r from-purple-500 via-purple-500 to-white-500 h-1 m-0"/>
         </>
        )}
        {/* End Data Base Save Images */}


        {/* Recent Selected Images */}
        {selectedImage && <h3 className="text-center font-semibold text-lg block mt-3">Selected Images</h3> } 
        <div className="flex overflow-auto my-2 p-2">
          {selectedImage &&
            [...selectedImage].map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                className="w-32 h-32 mr-1 rounded-sm border-4"
              />
            ))
          }
        </div>
        {/* End Recent Selected Images */}


      </div>
    </>
  );
};

export default VideoAndImageInformation;
