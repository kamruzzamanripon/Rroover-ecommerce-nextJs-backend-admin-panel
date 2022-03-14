/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { categoryAdd, categoryAll, categoryAllWithoutPagination } from "../../redux/data_fetch/categoryDataFetch";
import { subCategoryAdd, subCategoryAll } from "../../redux/data_fetch/subCategoryDataFetch";



const InputModal = ({modal, setModal, inputStatus,pageNumber}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState();
    const categoryList = useSelector(state=> state?.store?.category?.items)
    const serverError = useSelector((state)=>state?.store?.subcategory?.item?.errors);

    //console.log("inputModal", categoryList)

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

    //if modal de-select then reset all data
    useEffect(()=>{
        if(!modal){
            setSelectedImage();
            reset()
            }
    },[modal])
  //console.log('modal modal', modal)


  //Form Handle
  const fromHandleSubmit = (data)=>{
    //Category form dispatch
    if(inputStatus === 'category'){
      dispatch(categoryAdd(data))
      dispatch(categoryAll(pageNumber))
    }

    //Sub-category form dispath
    if(inputStatus === 'subCategory'){
      dispatch(subCategoryAdd(data))
      dispatch(subCategoryAll(pageNumber))
    }
    
    setModal(false)
    reset()
    //console.log(data)
  }

  //if inputStatus == subCategory than run
  useEffect(()=>{
      if(inputStatus === 'subCategory'){
        dispatch(categoryAllWithoutPagination())
      }
  },[inputStatus, serverError])
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
        <form action="#"  onSubmit={handleSubmit(fromHandleSubmit)}>
       
        <div className="flex-row space-y-3 relative">
            <div className="bg-purple-600 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                {inputStatus === 'category' && <p>Add Category</p>}
                {inputStatus === 'subCategory' && <p>Add sub-category</p>}
                
            </div>
            
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
            {errors.name && <p className="text-red-700 text-right font-semibold">Name is Required</p>}


            <div className="flex justify-between">
                <label className="font-semibold pr-2">Description</label>
                <textarea 
                  className="border-2 border-purple-600/50 w-[75%] " 
                  type="text" 
                  {...register("description")}
                />
            </div>


            {inputStatus === 'subCategory' && 
              <>
              <div className="flex justify-between">
                <label className="font-semibold pr-2">Category</label>
                <select 
                  className="border-2 border-purple-600/50 w-[75%] " 
                  {...register("selectItem", {
                    required: "required",
                  })}
                >
                    
                    <option value="">Choose any Category</option>
                    {categoryList && categoryList.length > 0 && (
                      categoryList.map((category, index)=>(
                        <option value={category.id} key={index}>{category.name}</option>
                      ))
                    )}
                    
                    
                </select>
                <br />
              </div>
                {errors.selectItem && <p className="text-red-700 text-right font-semibold">Select Category is required</p>}
              </>
            }
            
            
            <div className="flex-row justify-between">
                <label className="font-semibold pr-2">Picture</label>
                <input 
                    className="border-2" 
                    type="file" 
                    accept="image/*"
                    name="user[image]" 
                    multiple={false}
                    onChange={imageChange}
                    {...register("image")}
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



            <div className="flex justify-between">
                <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg">Submit</button>
            </div>
            
        </div>
        </form>
      </PureModal>
      
    </>
  );
};

export default InputModal;
