import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import ShortViewModal from '../common/ShortViewModal';


const CategoryTable = ({categoryData, setPageNumber, pageNumber}) => {
    const [paginationInfo, setPaginationInfo] = useState();
    const [tableData, setTableData] = useState();
    const [modal, setModal] = useState(false);
    const [categoryInfo, setCategoryInfo] = useState('');
    const [mode, setMode] = useState('');

    const categoryInfoHandler = (data)=>{
      setModal(true)
      setCategoryInfo(data)
      setMode('view')
    }

    const categoryInfoEditHandler = (data)=>{
      setModal(true)
      setCategoryInfo(data)
      setMode('edit')
    }

    const categoryInfoDeleteHandler = (data)=>{
      setModal(true)
      setCategoryInfo(data)
      setMode('delete')
    }
   
    //console.log('tableData', categoryInfo)
    
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
                          <a href="#" onClick={()=>categoryInfoEditHandler(data)}>Edit</a> | 
                          <a href="#" onClick={()=>categoryInfoDeleteHandler(data)}>Delete</a>
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
          dataInfo={categoryInfo}
          mode={mode}
          pageNumber={pageNumber}
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