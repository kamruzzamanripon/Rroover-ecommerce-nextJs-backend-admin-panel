import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAll } from '../redux/data_fetch/categoryDataFetch';
import CategoryTable from './category/CategoryTable';
import PageComponentTitle from './common/PageComponentTitle';

const Category = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const categoryData = useSelector((state)=>state.store.category.items)

  //console.log('category Data', categoryData)
  //console.log('category Data', pageNumber)
  useEffect(()=>{
    dispatch(categoryAll(pageNumber))
  },[pageNumber])
   
    return (
        <main className="p-6 sm:p-10 space-y-6">
        
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <PageComponentTitle 
                title='Category'
                titleDescription='List, view and edit'
                buttonTitle='Create new Category'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <CategoryTable categoryData={categoryData} setPageNumber={setPageNumber}/>
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default Category;