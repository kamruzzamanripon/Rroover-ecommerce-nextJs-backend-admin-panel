import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { productAllWithPagiantion } from '../redux/data_fetch/productDataFetch';
import { resetProductItem } from '../redux/store_slices/productSlice';
import LoadingStatusBar from './common/LoadingStatusBar';
import PageComponentTitle from './common/PageComponentTitle';
import ProductTableView from './product/ProductTableView';

const Product = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const productData = useSelector((state)=>state?.store?.product?.items);
    const confirmationMessage = useSelector((state)=>state?.store?.product?.item?.message);
    const serverError = useSelector((state)=>state?.store?.product?.item?.errors);
    const LoadingStatus = useSelector((state)=>state?.store?.product?.loading);

   //Default Dispatch Banner All
    useEffect(()=>{
        dispatch(productAllWithPagiantion(pageNumber))
    },[pageNumber]) 

     //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'Product Data Delete'){
      toast("Product Delete Successfully")
      dispatch(resetProductItem())
    }
    if(confirmationMessage === 'Product Data Add'){
      toast("Product Add Successfully")
      dispatch(resetProductItem())
    }
    if(confirmationMessage === 'Product Data Update'){
      toast("Product Edit Successfully")
      dispatch(resetProductItem())
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
                title='Product'
                titleDescription='List, view and edit'
                buttonTitle='Create new Brand'
                pageNumber={pageNumber}
                modalInputStatus='productAdd'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
            
            <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <ProductTableView tableDataInfo={productData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="product"/>
            </div>
                    
        </section>
      
     
        </main>
    );
};

export default Product;