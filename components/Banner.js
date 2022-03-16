import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { bannerAllWithPagination } from '../redux/data_fetch/bannerDataFetch';
import { resetBannerItem } from '../redux/store_slices/bannerSlice';
import BannerTableView from './banner/BannerTableView';
import LoadingStatusBar from './common/LoadingStatusBar';
import PageComponentTitle from './common/PageComponentTitle';

const Banner = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const LoadingStatus = useSelector((state)=>state?.store?.banner?.loading);
    const bannerData = useSelector((state)=>state?.store?.banner?.items);
    const confirmationMessage = useSelector((state)=>state?.store?.banner?.item?.message);
    const serverError = useSelector((state)=>state?.store?.banner?.item?.errors);


   // console.log('bnner page', confirmationMessage)
  //Default Dispatch Banner All
  useEffect(()=>{
    dispatch(bannerAllWithPagination(pageNumber))
  },[pageNumber]) 

  //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'Banner Data Delete'){
      toast("Banner Delete Successfully")
      dispatch(resetBannerItem())
    }
    if(confirmationMessage === 'Banner Data Add'){
      toast("Banner Add Successfully")
      dispatch(resetBannerItem())
    }
    if(confirmationMessage === 'Banner Data Update'){
      toast("Banner Edit Successfully")
      dispatch(resetBannerItem())
    }
    if(serverError){
      toast.error(serverError.name[0])
      dispatch(resetBannerItem())
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
                title='Banner'
                titleDescription='List, view and edit'
                buttonTitle='Create new Brand'
                pageNumber={pageNumber}
                modalInputStatus='banner'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <BannerTableView tableDataInfo={bannerData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="banner"/>
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default Banner;