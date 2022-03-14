import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { subCategoryAll } from '../redux/data_fetch/subCategoryDataFetch';
import { resetSubCategoryItem } from '../redux/store_slices/subCategorySlice';
import PageComponentTitle from './common/PageComponentTitle';
import SubCategoryTable from './sub-category/SubCategoryTable';

const SubCategory = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const serverError = useSelector((state)=>state?.store?.subcategory?.item?.errors);
  const confirmationMessage = useSelector((state)=>state?.store?.subcategory?.item?.message);
  const subCategoryData = useSelector((state)=>state?.store?.subcategory?.items);
  const dispatch = useDispatch();

  //console.log("subcategory component s", serverError)

  //Default Dispatch subCategoryAll
  useEffect(()=>{
    dispatch(subCategoryAll(pageNumber))
  },[pageNumber])

  //Confirmation toaster message
  useEffect(()=>{
    if(confirmationMessage === 'sub-Category Data Add'){
      toast("Sub Category Add Successfully")
      dispatch(resetSubCategoryItem())
    }
    if(confirmationMessage === 'sub-Category Data Update'){
      toast("Sub Category Edit Successfully")
      dispatch(resetSubCategoryItem())
    }
    if(confirmationMessage === 'sub-Category Data Delete'){
      toast("Sub Category Delete Successfully")
      dispatch(resetSubCategoryItem())
    }
    if(serverError){
      toast.error(serverError.name[0])
      dispatch(resetSubCategoryItem())
     
    }
  },[confirmationMessage], serverError)
    return (
        <main className="p-6 sm:p-10 space-y-6">
          <Toaster />
          {serverError && <h2 className='text-red-600 text-2xl'>{serverError.name[0]}</h2>}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <PageComponentTitle 
                title='Sub Category'
                titleDescription='List, view and edit'
                buttonTitle='Create new Sub-category'
                modalInputStatus='subCategory'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <SubCategoryTable subCategoryData={subCategoryData} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default SubCategory;