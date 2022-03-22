/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch, useSelector } from "react-redux";
import { AdminUserListData } from "../../redux/data_fetch/authenticationDataFetch";
import { roleAllWithOutPagination, roleAssignByUserId, roleAssignChangeByUserId } from "../../redux/data_fetch/roleDataFetch";

const RoleAssignInputModal = ({ modal, setModal, inputStatus, pageNumber, dataInfo }) => {
 

  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const dispatch = useDispatch();
  const roleListData = useSelector((state)=>state.store.role.items);
  const userListData = useSelector((state)=>state.store.userinfo.userList.data);
  const watchAllFields = watch();
  

  //console.log("inputModal a", inputStatus)
  //console.log("inputModal a", roleListData)

  //From Handling for Product data Add/store
  const fromHandleSubmit = (data, e) => {
    
    //Permission Add, Edit, Delete and View form handle
    if(inputStatus === 'roleAssign'){
         dispatch(roleAssignByUserId(data))
         dispatch(AdminUserListData(pageNumber))
         setModal(false)
         reset()
        //console.log(data)
     }else if(inputStatus === 'roleAssignEdit'){
        dispatch(roleAssignChangeByUserId(data))
        dispatch(AdminUserListData(pageNumber))
        setModal(false)
        reset()
      //console.log(data)
     }else if(inputStatus === 'roleAssignView'){
      setModal(false)
      reset()
      //console.log(data)
     }


    
    //console.log("product form", data); roleChangeWithPermissionAssign
  };


  useEffect(()=>{
    if(!modal){
        reset()
      }
},[modal])
  
//Default Role List Dispatch
useEffect(() => {
    if(inputStatus === 'roleAssignEdit'){
        dispatch(roleAllWithOutPagination());
    }
    if(inputStatus === 'roleAssign'){
        dispatch(roleAllWithOutPagination());
    }
    
      
  }, [dispatch, inputStatus]);

  

 
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
          <div className="bg-purple-600 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                
                {inputStatus === 'roleAssignView' || inputStatus === 'roleAssignEdit' ? <p>{dataInfo?.name} __ [ {dataInfo?.roles ? dataInfo?.roles[0]?.name : ''}  ]</p> : ''}
                {inputStatus === 'roleAssign'  ? <p>User Role Assign</p> : ''}
           </div>


          {/*User Id insert for Edit*/}
          {inputStatus === 'roleAssignEdit' ?
              (<input 
              className="border-2 border-purple-600/50 w-[75%] "
              defaultValue={dataInfo?.roles ? dataInfo?.roles[0]?.id : ''}
              type="hidden" 
              {...register("Id")}
            />) : ''
          }
          {/*User Id insert for Edit*/}

                  
          {/* User Name Field */}
          {inputStatus === 'roleAssignView' || inputStatus === 'roleAssignEdit' ?
            <div className="flex justify-between">
                    <label className="font-semibold pr-2">Name</label>
                    
                        <label className="border-b-2 border-purple-600/50 w-[75%] text-right">{dataInfo.name}</label >    
            </div> 
            : "" 
           }

            {inputStatus === 'roleAssign' ?
            <div className="flex justify-between">
                    <label className="font-semibold pr-2">Name List</label>
                    <select
                        className="border-2 border-purple-600/50 w-[75%] text-right"
                        {...register("userId", {
                            required: "required",
                        })}
                        >
                        <option value="">Choose User</option>
                        {userListData && userListData.length > 0 && (
                            userListData.map((user, index)=>(
                            <option value={user.id} key={index}>{user.name}</option>
                            ))
                        )}
                    </select>   
            </div> 
            : "" 
           }


           {/* Role List */}
           <div className="flex justify-between">
            <label className="font-semibold pr-2 w-1/4">Role</label>
            {inputStatus === 'roleAssignEdit' || inputStatus === 'roleAssign'  ? (
                

                <select
                className="border-2 border-purple-600/50 w-[75%] text-right"
                defaultValue={dataInfo?.roles ? dataInfo?.roles[0]?.name : ''}
                {...register("roleName", {
                    required: "required",
                })}
                >
                <option value="">Choose Role</option>
                {roleListData && roleListData.length > 0 && (
                    roleListData.map((role, index)=>(
                    <option value={role.name} key={index}>{role.name}</option>
                    ))
                )}
                </select>
                ) : 
                (
                    <p>{dataInfo?.roles ? dataInfo?.roles[0]?.name : ''}</p>
                )
             }      
           </div> 



            {/* Submit/Update/Delete Button */}
            <div className="flex justify-between">
                                          
              {inputStatus === 'roleAssign' && <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg"> Submit</button> }
              {inputStatus === 'roleAssignView' && <button className="bg-green-700 text-white p-3 w-full mt-5 text-lg"> Ok</button> }
              {inputStatus === 'roleAssignEdit' && <button className="bg-yellow-500 text-white p-3 w-full mt-5 text-lg"> Update</button>}
              
            </div>
            
          </div>
        </form>
      </PureModal>
    </>
  );
};

export default RoleAssignInputModal;
