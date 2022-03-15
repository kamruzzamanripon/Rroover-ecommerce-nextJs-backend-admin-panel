import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAll } from '../redux/data_fetch/categoryDataFetch';
import { resetCategoryItem } from '../redux/store_slices/categorySlice';
import LoadingStatusBar from './common/LoadingStatusBar';
import PageComponentTitle from './common/PageComponentTitle';
import TableView from './common/TableView';

const Category = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const categoryData = useSelector((state)=>state.store.category.items);
  const confirmationMessage = useSelector((state)=>state.store.category.item.message);
  const serverError = useSelector((state)=>state?.store?.category?.item?.errors);
  const LoadingStatus = useSelector((state)=>state?.store?.category?.loading);
  

  //console.log('category Data', categoryData)
  //console.log('category Data', pageNumber)

  //Default Dispatch categoryAll
  useEffect(()=>{
    dispatch(categoryAll(pageNumber))
  },[pageNumber])


  //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'Category Data Delete'){
      toast("Category Delete Successfully")
      dispatch(resetCategoryItem())
    }
    if(confirmationMessage === 'Category Data Add'){
      toast("Category Add Successfully")
      dispatch(resetCategoryItem())
    }
    if(confirmationMessage === 'Category Data Edit'){
      toast("Category Edit Successfully")
      dispatch(resetCategoryItem())
    }
    if(serverError){
      toast.error(serverError.name[0])
      dispatch(resetCategoryItem())
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
                title='Category'
                titleDescription='List, view and edit'
                buttonTitle='Create new Category'
                pageNumber={pageNumber}
                modalInputStatus='category'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <TableView tableDataInfo={categoryData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="category"/>
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default Category;