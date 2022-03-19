import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { roleAllWithPagination } from '../redux/data_fetch/roleDataFetch';
import { resetPermissionItem } from '../redux/store_slices/permissionSlice';
import LoadingStatusBar from './common/LoadingStatusBar';
import RolePermissionComponentTitle from './common/RolePermissionComponentTitle';
import RolePermissionTableView from './common/RolePermissionTableView';

const Role = () => {
  const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const roleData = useSelector((state)=>state.store.role.items);
    const confirmationMessage = useSelector((state)=>state.store.role.item.message);
    const serverError = useSelector((state)=>state?.store?.role?.item?.errors);
    const LoadingStatus = useSelector((state)=>state?.store?.role?.loading);

    //console.log("role data", roleData)
    
   //Default Dispatch PermissionAll
  useEffect(()=>{
    dispatch(roleAllWithPagination(pageNumber))
  },[pageNumber])


  //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'Permission Data Add'){
      toast("Permission Data Add")
      dispatch(resetPermissionItem())
    }
    if(confirmationMessage === 'Permission Data Update'){
      toast("Permission Data Update")
      dispatch(resetPermissionItem())
    }
    if(confirmationMessage === 'Permission Data Delete'){
      toast("Permission Data Delete Successfully")
      dispatch(resetPermissionItem())
    }
    if(serverError){
      toast.error(serverError.name[0])
      dispatch(resetPermissionItem())
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
            title='Role'
            titleDescription='List, view and edit'
            buttonTitle='Create new Role'
            pageNumber={pageNumber}
            modalInputStatus='roleAdd'
        />
    </div>

    <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
      
      <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
        <RolePermissionTableView tableDataInfo={roleData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="role"/>
      </div>
                
    </section>
    
   
  </main>
    );
};

export default Role;