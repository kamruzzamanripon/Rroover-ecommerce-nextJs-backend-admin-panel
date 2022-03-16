/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch, useSelector } from "react-redux";
import { categoryAllWithoutPagination } from "../../redux/data_fetch/categoryDataFetch";
import AttributeInformation from "./sort/AttributeInformation";
import BasicInformation from "./sort/BasicInformation";
import FeaturesInformation from "./sort/FeaturesInformation";
import Financialformation from "./sort/Financialformation";
import FormTitle from "./sort/FormTitle";
import SpecificInformation from "./sort/SpecificInformation";
import VideoAndImageInformation from "./sort/VideoAndImageInformation";

const ProductInputModal = ({ modal, setModal, inputStatus, pageNumber }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state?.store?.category?.items);
  const serverError = useSelector(
    (state) => state?.store?.subcategory?.item?.errors
  );
  const [imageModalStatus, setImageModalStatus] = useState();
  //watch function show react-from-hook onChange function
  const watchAllFields = watch();

  //console.log("inputModal a", modal)

  const fromHandleSubmit = (data, e) => {
    //Category form dispatch
    // if(inputStatus === 'category'){
    //   dispatch(categoryAdd(data))
    //   dispatch(categoryAll(pageNumber))
    // }

    // setModal(false)
    // reset()
    console.log("product form", data);
  };

  //for VideoAndImageInformation component Total form and image reset if click outside or close button.
  useEffect(() => {
    modal ? setImageModalStatus(true) : setImageModalStatus(false);
  }, [modal]);

  //if inputStatus == subCategory than run
  useEffect(() => {
    if (inputStatus === "subCategory") {
      dispatch(categoryAllWithoutPagination());
    }
  }, [inputStatus, serverError]);

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
            <FormTitle title="Add Product" />

            {/* Basic Information */}
            <BasicInformation register={register} errors={errors} />

            {/* Product Specific Information      */}
            <SpecificInformation register={register} errors={errors} />

            {/* Product Attribute Information      */}
            <AttributeInformation register={register} errors={errors} />

            {/* Product Financialformation Information */}
            <Financialformation register={register} errors={errors} />

            {/* Product Features Information */}
            <FeaturesInformation register={register} errors={errors} />

            {/* Product Image and Video Information */}
            <VideoAndImageInformation
              register={register}
              errors={errors}
              imageModalStatus={imageModalStatus}
              reset={reset}
              watchAllFields={watchAllFields}
            />

            <div className="flex justify-between">
              <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg">
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </PureModal>
    </>
  );
};

export default ProductInputModal;
