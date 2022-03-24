import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { AdminUserListData } from '../redux/data_fetch/authenticationDataFetch';
import { resetRoleSliceItem } from '../redux/store_slices/roleSlice';
import LoadingStatusBar from './common/LoadingStatusBar';
import RolePermissionComponentTitle from './common/RolePermissionComponentTitle';
import RoleAssignTableView from './roleAssign/RoleAssignTableView';

const RoleAssign = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const roleData = useSelector((state)=>state.store.userinfo.userList);
    const confirmationMessage = useSelector((state)=>state?.store?.role?.item?.message);
    const serverError = useSelector((state)=>state?.store?.role?.item?.errors);
    const LoadingStatus = useSelector((state)=>state?.store?.role?.loading);

     //Default Dispatch PermissionAll
  useEffect(()=>{
    dispatch(AdminUserListData(pageNumber))
  },[pageNumber])


  //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'Role succesfully Assign'){
      toast("Role succesfully Assign")
      dispatch(resetRoleSliceItem())
    }
    if(confirmationMessage === 'Role Assign Change succesfully'){
      toast("Role Assign Change succesfully")
      dispatch(resetRoleSliceItem())
    }
    
    if(serverError){
      toast.error(serverError.name[0])
      dispatch(resetRoleSliceItem())
    }
  },[confirmationMessage,serverError])
    return (
        <main className="p-6 sm:p-10 space-y-6">
        {serverError && <h2 className='text-red-600 text-2xl'>{serverError.name[0]}</h2>}
       <Toaster />
       {LoadingStatus && 
          <LoadingStatusBar />
        }
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <RolePermissionComponentTitle 
              title='User List and Role Assign'
              titleDescription='List, view and edit'
              buttonTitle='New Role Assign'
              pageNumber={pageNumber}
              modalInputStatus='roleAssign'
          />
      </div>
  
      <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
        
        <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
          <RoleAssignTableView tableDataInfo={roleData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="role"/>
        </div>
                  
      </section>
      
     
    </main>
    );
};

export default RoleAssign;