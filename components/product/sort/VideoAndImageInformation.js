/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const VideoAndImageInformation = ({ register, errors, imageModalStatus, watchAllFields, reset }) => {
    const [selectedImage, setSelectedImage] = useState();

    //console.log("image modal", imageModalStatus)

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
        <input
          className="border-2 border-purple-600/50 w-[75%] "
          type="text"
          {...register("videoLink")}
        />
      </div>

      <div className="flex-row justify-between">
        <label className="font-semibold pr-2 ">Picture</label>
        <input
          className="border-2"
          type="file"
          accept="image/*"
          name="user[image]"
          multiple={true}
          {...register("image")}
        />
        <div className="flex overflow-auto my-2 p-2">
          {selectedImage &&
            [...selectedImage].map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                className="w-32 h-32 mr-1 rounded-sm border-4"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default VideoAndImageInformation;
