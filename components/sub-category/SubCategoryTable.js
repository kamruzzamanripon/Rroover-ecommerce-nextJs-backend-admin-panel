import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import ShortViewModal from '../common/ShortViewModal';

const SubCategoryTable = ({pageNumber, setPageNumber, subCategoryData}) => {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState('');
  const [singleSubCategoryInfo, setSingleSubCategoryInfo] = useState('');
  const [tableData, setTableData] = useState();
  const [paginationInfo, setPaginationInfo] = useState();

  // Table View Click Function
  const subCategoryInfoHandler = (data)=>{
    setModal(true)
    setSingleSubCategoryInfo(data)
    setMode('subCategoryView')
  }
 
  // Table Edit Click Function
  const subCategoryInfoEditHandler = (data)=>{
    setModal(true)
    setSingleSubCategoryInfo(data)
    setMode('subCategoryEdit')
  }

  //Table Delete Click Function
  const subCategoryInfoDeleteHandler = (data)=>{
    setModal(true)
    setSingleSubCategoryInfo(data)
    setMode('subCategoryDelete')
  }

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
          title: 'Category',
          dataIndex: 'subCount',
          key: 'subCount',
          width: 400,
          className:"text-white bg-gray-600 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Total Product',
          dataIndex: 'productCount',
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
                              <a href="#" onClick={()=>subCategoryInfoHandler(data)}>View</a> | 
                              <a href="#" onClick={()=>subCategoryInfoEditHandler(data)}>Edit</a> | 
                              <a href="#" onClick={()=>subCategoryInfoDeleteHandler(data)}>Delete</a>
                            </>,
          
        },
      ];
      
     
       //Data insert into table and pagination.
       useEffect(()=>{
        setTableData(subCategoryData ? subCategoryData.data : [])
        setPaginationInfo(subCategoryData ? subCategoryData : [])
      },[subCategoryData])

      //Pagination
      //const [activePage, setActivePage] = useState(15)
      const handlePageChange = (pageNumber)=>{
        setPageNumber(pageNumber)
      }

      //console.log('sub cat able', )
    return (
        <>
        <Table columns={columns} data={tableData} rowKey='id'  className='bg-purple-700 p-4 w-full text-center rc-table-custom font-semibold '/>
        <ShortViewModal 
          modal={modal} 
          setModal={setModal} 
          dataInfo={singleSubCategoryInfo}
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

export default SubCategoryTable;