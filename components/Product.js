import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageComponentTitle from './common/PageComponentTitle';
import TableView from './common/TableView';

const Product = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const productData = useSelector((state)=>state?.store?.brand?.items);
    return (
        <main className="p-6 sm:p-10 space-y-6">
            {/* {serverError && <h2 className='text-red-600 text-2xl'>{serverError.name[0]}</h2>}
            <Toaster />
            {LoadingStatus && 
                <LoadingStatusBar />
                } */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <PageComponentTitle 
                title='Product'
                titleDescription='List, view and edit'
                buttonTitle='Create new Brand'
                pageNumber={pageNumber}
                modalInputStatus='product'
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
            
            <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <TableView tableDataInfo={productData} setPageNumber={setPageNumber} pageNumber={pageNumber} tableMode="brand"/>
            </div>
                    
        </section>
      
     
        </main>
    );
};

export default Product;