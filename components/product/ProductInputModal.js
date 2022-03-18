/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch } from "react-redux";
import { productAllWithPagiantion, productDataAdd, productDataDelete, productDataEdit } from "../../redux/data_fetch/productDataFetch";
import AttributeInformation from "./sort/AttributeInformation";
import BasicInformation from "./sort/BasicInformation";
import FeaturesInformation from "./sort/FeaturesInformation";
import Financialformation from "./sort/Financialformation";
import FormTitle from "./sort/FormTitle";
import SpecificInformation from "./sort/SpecificInformation";
import VideoAndImageInformation from "./sort/VideoAndImageInformation";

const ProductInputModal = ({ modal, setModal, inputStatus, pageNumber, dataInfo }) => {
  
  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const dispatch = useDispatch();
  const [imageModalStatus, setImageModalStatus] = useState();
  //watch function show react-from-hook onChange function
  const watchAllFields = watch();

  //console.log("inputModal a", inputStatus)
  //console.log("inputModal a", dataInfo)

  //From Handling for Product data Add/store
  const fromHandleSubmit = (data, e) => {
    
    if(inputStatus === 'productAdd'){
      dispatch(productDataAdd(data))
      dispatch(productAllWithPagiantion(pageNumber))
      setModal(false)
      reset()
     }else if(inputStatus === 'productView'){
      setModal(false)
      reset()
     }else if(inputStatus === 'productEdit'){
      dispatch(productDataEdit(data))
      dispatch(productAllWithPagiantion(pageNumber))
      setModal(false)
      reset()
      //console.log(data)
     }else if(inputStatus === 'productDelete'){
      dispatch(productDataDelete(data))
      dispatch(productAllWithPagiantion(pageNumber))
      setModal(false)
      reset()
      //console.log(data)
     }
    
    //console.log("product form", data);
  };


 

  //for VideoAndImageInformation component Total form and image reset if click outside or close button.
  useEffect(() => {
    modal ? setImageModalStatus(true) : setImageModalStatus(false);
  }, [modal]);
  

 
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
        <form action="#" onSubmit={handleSubmit(fromHandleSubmit)}>
          <div className="flex-row space-y-3 relative">
         
            {/* Form Title */}
            <FormTitle title="Add Product" inputStatus={inputStatus} dataInfo={dataInfo} />

            {/* Basic Information */}
            <BasicInformation register={register} errors={errors} inputStatus={inputStatus} dataInfo={dataInfo} watchAllFields={watchAllFields} />

            {/* Product Specific Information      */}
            <SpecificInformation register={register} errors={errors} watchAllFields={watchAllFields} inputStatus={inputStatus} dataInfo={dataInfo}/>

            {/* Product Attribute Information      */}
            <AttributeInformation register={register} errors={errors} watchAllFields={watchAllFields} inputStatus={inputStatus} dataInfo={dataInfo} />

            {/* Product Financialformation Information */}
            <Financialformation register={register} errors={errors} watchAllFields={watchAllFields} inputStatus={inputStatus} dataInfo={dataInfo} />

            {/* Product Features Information */}
            <FeaturesInformation register={register} errors={errors} watchAllFields={watchAllFields} inputStatus={inputStatus} dataInfo={dataInfo} />

            {/* Product Image and Video Information */}
            <VideoAndImageInformation
              register={register}
              errors={errors}
              imageModalStatus={imageModalStatus}
              inputStatus={inputStatus} 
              dataInfo={dataInfo}
              reset={reset}
              watchAllFields={watchAllFields}
            />

            <div className="flex justify-between">
              {inputStatus === 'productAdd' && <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg"> Submit</button>}
              {inputStatus === 'productView' && <button className="bg-green-700 text-white p-3 w-full mt-5 text-lg"> Ok</button> }
              {inputStatus === 'productEdit' && <button className="bg-yellow-500 text-white p-3 w-full mt-5 text-lg"> Update</button>}
              {inputStatus === 'productDelete' && <button className="bg-red-500 text-white p-3 w-full mt-5 text-lg"> Delete</button>}
             
            </div>
            
          </div>
        </form>
      </PureModal>
    </>
  );
};

export default ProductInputModal;
