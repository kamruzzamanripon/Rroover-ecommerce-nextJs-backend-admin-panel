import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import ShortViewModal from '../common/shortViewModal';


const CategoryTable = ({categoryData, setPageNumber}) => {
    const [paginationInfo, setPaginationInfo] = useState();
    const [tableData, setTableData] = useState();
    const [modal, setModal] = useState(false);
    const [categoryInfo, setCategoryInfo] = useState('');

    const categoryInfoHandler = (data)=>{
      setModal(true)
      setCategoryInfo(data)
    }
   
    console.log('tableData', categoryInfo)
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'Total Subcategory',
          dataIndex: 'totalSubcategory',
          key: 'subCount',
          width: 400,
          className:"text-white bg-gray-600 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Total Product',
          dataIndex: 'totalProduct',
          key: 'productCount',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Operations',
          dataIndex: '',
          key: 'operations',
          className:"text-white bg-gray-600 p-2 border-b-2",
          render: (data) => <>
                          <a href="#" onClick={()=>categoryInfoHandler(data)}>View</a> | 
                          <a href="#">Edit</a> | 
                          <a href="#">Delete</a>
                        </>,
          
        },
      ];
      
      

      useEffect(()=>{
        setTableData(categoryData ? categoryData.data : [])
        setPaginationInfo(categoryData ? categoryData : [])
      },[categoryData])

      //Pagination
      const handlePageChange = (pageNumber)=>{
        setPageNumber(pageNumber)
      }

    return (
        <>
        <Table columns={columns} data={tableData} rowKey='id' className='bg-purple-700 p-4 w-full text-center rc-table-custom font-semibold '/>
        <ShortViewModal 
          modal={modal} 
          setModal={setModal} 
          categoryInfo={categoryInfo}
          mode='view'
        />
        <Pagination
          activePage={paginationInfo?.meta?.current_page}
          itemsCountPerPage={paginationInfo?.meta?.per_page}
          totalItemsCount={paginationInfo?.meta ? paginationInfo?.meta?.total : 0}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          nextPageText={'Next'}
          prevPageText={'Prev'}
          firstPageText={'First'}
          lastPageText={'Last'}
          innerClass="js-ul"
          itemClass='js-li'
          linkClass='page-link'
        />
        </>
        
    );
};

export default CategoryTable;