/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const ShortViewModal = ({modal, setModal, categoryInfo, mode}) => {
     //For Image Preview
     const [selectedImage, setSelectedImage] = useState();

     // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };   

    useEffect(()=>{
        if(!modal){
            setSelectedImage();
            }
    },[modal])
  //console.log('modal modal', modal)
  return (
    <>
      <PureModal
        //header={<div className="bg-purple-600 p-2 font-bold text-lg text-center text-white">Category</div>}
        isOpen={modal}
        width="800px"
        onClose={() => {
          setModal(false);
          return true;
        }}
  
      >
        <div className="flex-row space-y-3 relative">
            
            <div className="bg-purple-600 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                <p>{categoryInfo.name}</p>
            </div>

            <div className="flex justify-between">
                <label className="font-semibold pr-2">Name</label>
                <p>{categoryInfo.name}</p>
            </div>

            <div className="flex justify-between">
                <label className="font-semibold pr-2">Description</label>
                <p>{categoryInfo.description}</p>
            </div>
            
            { mode !== 'view' &&
                <div className="flex-row justify-between">
                    <label className="font-semibold pr-2">Picture</label>
                    <input 
                        className="border-2" 
                        type="file" 
                        accept="image/*"
                        name="user[image]" 
                        onChange={imageChange}
                    />
                
                <div className="flex overflow-auto my-2 p-2">
                    {
                    selectedImage && [...selectedImage].map((file, index)=><img key={index} src={URL.createObjectURL(file)}  className="w-32 h-32 mr-1 rounded-sm border-4"/>)
                    }
                    
                </div>

                {selectedImage && 
                    <button onClick={removeSelectedImage}  className='bg-orange-400 p-2 rounded-md text-white'>
                        Remove This Image
                    </button>
                }
                </div>
            }
            

            <div className="flex  justify-evenly">
                <img src={!(categoryInfo.image) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + categoryInfo.image)}  height="150"
                    width="150" alt="" className="text-center"/>
            </div>
            
            
            <div className="flex justify-between">
                <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg" onClick={()=>setModal(false)}>{mode === 'view' ? "ok" : "Submit"}</button>
            </div>
        </div>
      </PureModal>
      ;
    </>
  );
};

export default ShortViewModal;
