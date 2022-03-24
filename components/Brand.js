import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { brandAllWithPagination } from '../redux/data_fetch/brandDataFetch';
import { resetBrandItem } from '../redux/store_slices/brandSlice';
import LoadingStatusBar from './common/LoadingStatusBar';
import PageComponentTitle from './common/PageComponentTitle';
import TableView from './common/TableView';


const Brand = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const brandData = useSelector((state)=>state?.store?.brand?.items);
    const LoadingStatus = useSelector((state)=>state?.store?.brand?.loading);
    const confirmationMessage = useSelector((state)=>state?.store?.brand?.item?.message);
    const serverError = useSelector((state)=>state?.store?.brand?.item?.errors);

    

  // console.log("userPermissionList", can("category.update"))
  //Default Dispatch BrandAll
  useEffect(()=>{
    dispatch(brandAllWithPagination(pageNumber))
  },[pageNumber])

  //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'Brand Data Delete'){
      toast("Brand Delete Successfully")
      dispatch(resetBrandItem())
    }
    if(confirmationMessage === 'Brand Data Add'){
      toast("Brand Add Successfully")
      dispatch(resetBrandItem())
    }
    if(confirmationMessage === 'Brand Data Edit'){
      toast("Brand Edit Successfully")
      dispatch(resetBrandItem())
    }
    if(serverError){
      toast.error(serverError.name[0])
      dispatch(resetBrandItem())
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
            <PageComponentTitle 
                title='Brand'
                titleDescription='List, view and edit'
                buttonTitle='Create new Brand'
                pageNumber={pageNumber}
                modalInputStatus='brand'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <TableView tableDataInfo={brandData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="brand"/>
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default Brand;