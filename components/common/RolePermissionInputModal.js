/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch } from "react-redux";
import { permissionAllWithPagination, permissionDataAdd, permissionDataDelete, permissionDataEdit } from "../../redux/data_fetch/permissionDataFetch";

const RolePermissionInputModal = ({ modal, setModal, inputStatus, pageNumber, dataInfo }) => {
  
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

  console.log("inputModal a", inputStatus)
  //console.log("inputModal a", dataInfo)

  //From Handling for Product data Add/store
  const fromHandleSubmit = (data, e) => {
    
    //Permission Add, Edit, Delete and View form handle
    if(inputStatus === 'permissionAdd'){
      dispatch(permissionDataAdd(data))
      dispatch(permissionAllWithPagination(pageNumber))
      setModal(false)
      reset()
      //console.log(data)
     }else if(inputStatus === 'permissionEdit'){
      dispatch(permissionDataEdit(data))
      dispatch(permissionAllWithPagination(pageNumber))
      setModal(false)
      reset()
      //console.log(data)
     }else if(inputStatus === 'permissionDelete'){
      dispatch(permissionDataDelete(data))
      dispatch(permissionAllWithPagination(pageNumber))
      setModal(false)
      reset()
      //console.log(data)
     }else if(inputStatus === 'permissionView'){
      setModal(false)
      reset()
      //console.log(data)
     }
    
    //console.log("product form", data);
  };


  useEffect(()=>{
    if(!modal){
        reset()
      }
},[modal])
  

 
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

          <div className="bg-purple-600 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                {inputStatus === 'permissionView' || inputStatus === 'permissionEdit' || inputStatus === 'permissionDelete' ? <p>Permission Information</p> : ''}
                {inputStatus === 'permissionAdd' && <p>New Permission Add</p>}
               
          </div>

          {/* Product Id insert for Edit and Delete */}
          {inputStatus === 'permissionEdit' || inputStatus === 'permissionDelete'  ?
                    (<input 
                    className="border-2 border-purple-600/50 w-[75%] "
                    defaultValue={dataInfo?.id}
                    type="hidden" 
                    {...register("Id")}
                  />) : ''
          }
         
          <div className="flex justify-between">
                <label className="font-semibold pr-2">Name</label>
                {inputStatus === 'permissionView' || inputStatus === 'permissionDelete' ? 
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


           <div className="flex justify-between">
                <label className="font-semibold pr-2">Group Name</label>
                {inputStatus === 'permissionView' || inputStatus === 'permissionDelete' ? 
                        <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{dataInfo.group_name}</label> :

                        <input 
                        className="border-2 border-purple-600/50 w-[75%] "
                        defaultValue={dataInfo?.group_name}
                        type="text" 
                        {...register("group_name", {
                            required: "required",
                        })}
                        />
                    }   
          </div>   

            <div className="flex justify-between">
           
              {inputStatus === 'permissionAdd' && <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg"> Submit</button> }
              {inputStatus === 'permissionView' && <button className="bg-green-700 text-white p-3 w-full mt-5 text-lg"> Ok</button> }
              {inputStatus === 'permissionEdit' && <button className="bg-yellow-500 text-white p-3 w-full mt-5 text-lg"> Update</button>}
              {inputStatus === 'permissionDelete' && <button className="bg-red-500 text-white p-3 w-full mt-5 text-lg"> Delete</button>}
             
             
            </div>
            
          </div>
        </form>
      </PureModal>
    </>
  );
};

export default RolePermissionInputModal;
