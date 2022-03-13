/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { categoryAll, categoryDelete, categoryEdit } from "../../redux/data_fetch/categoryDataFetch";
import { resetCategoryItem } from "../../redux/store_slices/categorySlice";

const ShortViewModal = ({modal, setModal, dataInfo, mode, pageNumber}) => {
     const [selectedImage, setSelectedImage] = useState();
     const [name, setName] = useState();
     const [description, setDescription] = useState();
     const [id, setId] = useState();
     const dispatch = useDispatch();
     const deleteConfirm = useSelector(state=>state?.store?.category?.item?.success)
     

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

    const updateFormHandle = ()=>{
        const alldata={
            name,
            description,
            image: selectedImage,
            catId:id
        }
        dispatch( categoryEdit( alldata) )
        dispatch(resetCategoryItem())
        dispatch(categoryAll(pageNumber))
        setModal(false)
       // console.log(alldata)
    }

    const deleteFormHandle = ()=>{
        dispatch(categoryDelete(id))
        dispatch(categoryAll(pageNumber))
        setModal(false)
    }

    useEffect(()=>{
        if(deleteConfirm === true){
            dispatch(categoryAll(pageNumber))
        }
    },[deleteConfirm])

    useEffect(()=>{
        setName(dataInfo.name)
        setDescription(dataInfo.description)
        setId(dataInfo.id)
    },[dataInfo] )

    useEffect(()=>{
        if(!modal){
            setSelectedImage();
            }
    },[modal])
  //console.log('modal modal', modal)
  return (
    <>
      <PureModal
        isOpen={modal}
        width="800px"
        onClose={() => {
          setModal(false);
          return true;
        }}
  
      >
        <div className="flex-row space-y-3 relative">
            
            <div className="bg-purple-600 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                <p>{dataInfo.name}</p>
            </div>

            <div className="flex justify-between">
                <label className="font-semibold pr-2">Name</label>
                {mode === 'view' ?
                    <p>{dataInfo.name}</p> :
                    <input className="border-2 border-purple-600/50 w-[75%] " type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                }
            </div>


            <div className="flex justify-between">
                <label className="font-semibold pr-2">Description</label>
                {mode === 'view' ?
                    <p>{dataInfo.description}</p> :
                    <textarea className="border-2 border-purple-600/50 w-[75%] " type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                }
            </div>
            

            {/* Image upload button and image Preview */}
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
                <img src={!(dataInfo.image) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + dataInfo.image)}  height="150"
                    width="150" alt="" className="text-center"/>
            </div>
            
            {/* Submit, Update and Delete Button */}
            <div className="flex justify-between">
                {mode === 'view' &&
                <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg" onClick={()=>setModal(false)}>OK</button>
                }
                {mode === 'edit' &&
                <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg" onClick={updateFormHandle}>Update</button>
                }
                {mode === 'delete' &&
                <button className="bg-red-700 text-white p-3 w-full mt-5 text-lg" onClick={deleteFormHandle}>Delete</button>
                }
            </div>
        </div>
      </PureModal>
      ;
    </>
  );
};

export default ShortViewModal;
