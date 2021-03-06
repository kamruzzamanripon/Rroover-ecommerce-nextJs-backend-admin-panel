import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { can } from '../../utils/permissionHook';
import ShortViewModal from './ShortViewModal';


const TableView = ({tableDataInfo, setPageNumber, pageNumber, tableMode}) => {
    const [paginationInfo, setPaginationInfo] = useState();
    const [tableData, setTableData] = useState();
    const [modal, setModal] = useState(false);
    const [tableSingleColumnData, setTableSingleColumnData] = useState('');
    const [modalMode, setModalMode] = useState('');

    //console.log("table modal modalMode", modalMode)
   
    // Table View Click Function
    const viewInfoHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'category'){
        setModalMode('categoryView')
      }
      if(tableMode === 'subCategory'){
        setModalMode('subCategoryView')
      }
      if(tableMode === 'brand'){
        setModalMode('brandView')
      }
    }

    // Table Edit Click Function
    const viewInfoEditHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'category'){
        setModalMode('categoryEdit')
      }
      if(tableMode === 'subCategory'){
        setModalMode('subCategoryEdit')
      }
      if(tableMode === 'brand'){
        setModalMode('brandEdit')
      }
      
    }

    //Table Delete Click Function
    const viewInfoDeleteHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'category'){
        setModalMode('categoryDelete')
      }
      if(tableMode === 'subCategory'){
        setModalMode('subCategoryDelete')
      }
      if(tableMode === 'brand'){
        setModalMode('brandDelete')
      }
      
    }
   
    //console.log('tableData', tableSingleColumnData)
    
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
          className:`${tableMode === 'brand' || tableMode === 'subCategory' ? 'hidden' : ''} text-white bg-gray-600 p-2 border-r-2 border-b-2`
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
                          <a href="#" onClick={()=>viewInfoHandler(data)}>View</a>  
                          {can('brand.update') || can('subcategory.update') ? <> | <a href="#" onClick={()=>viewInfoEditHandler(data)}>Edit</a> </> : ''}
                          {can('brand.delete') || can('subcategory.delete') ? <> | <a href="#" onClick={()=>viewInfoDeleteHandler(data)}>Delete</a> </> : ''}
                        </>,
          
        },
      ];
      
      //Table Data insert
      useEffect(()=>{
        setTableData(tableDataInfo ? tableDataInfo.data : [])
        setPaginationInfo(tableDataInfo ? tableDataInfo : [])
      },[tableDataInfo])
      //console.log(' cat able', )
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
          dataInfo={tableSingleColumnData}
          modalMode={modalMode}
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

export default TableView;