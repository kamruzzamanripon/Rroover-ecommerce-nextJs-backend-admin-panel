import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAll } from '../redux/data_fetch/categoryDataFetch';
import { resetCategoryItem } from '../redux/store_slices/categorySlice';
import CategoryTable from './category/CategoryTable';
import PageComponentTitle from './common/PageComponentTitle';

const Category = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const categoryData = useSelector((state)=>state.store.category.items)
  const confirmationMessage = useSelector((state)=>state.store.category.item.message)
  

  //console.log('category Data', categoryData)
  //console.log('category Data', pageNumber)
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
  },[confirmationMessage])
   
    return (
        <main className="p-6 sm:p-10 space-y-6">
         <Toaster />
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <PageComponentTitle 
                title='Category'
                titleDescription='List, view and edit'
                buttonTitle='Create new Category'
                pageNumber={pageNumber}
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <CategoryTable categoryData={categoryData} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default Category;