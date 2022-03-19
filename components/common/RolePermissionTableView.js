/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import RolePermissionInputModal from './RolePermissionInputModal';


const RolePermissionTableView = ({tableDataInfo, setPageNumber, pageNumber, tableMode}) => {
    const [paginationInfo, setPaginationInfo] = useState();
    const [tableImagePreview, setTableImagePreview] = useState();
    const [tableData, setTableData] = useState();
    const [modal, setModal] = useState(false);
    const [tableSingleColumnData, setTableSingleColumnData] = useState('');
    const [modalMode, setModalMode] = useState('');

    //console.log("table modal modalMode", tableData)
   
    // Table View Click Function
    const viewInfoHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'permission'){
        setModalMode('permissionView')
      }else if(tableMode === 'role'){
        setModalMode('roleView')
      }
    }

    // Table Edit Click Function
    const viewInfoEditHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'permission'){
        setModalMode('permissionEdit')
      }else if(tableMode === 'role'){
        setModalMode('roleEdit')
      }
    }

    //Table Delete Click Function
    const viewInfoDeleteHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

        //set modal status
        if(tableMode === 'permission'){
        setModalMode('permissionDelete')
        }else if(tableMode === 'role'){
          setModalMode('roleDelete')
        }
    }

    const prissionData = (data)=>{
      console.log(data)
    } 
  
   
   
    //Table Columns Data Show
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
          title: 'Group Name',
          dataIndex: 'group_name',
          key: 'group_name',
          width: 400,
          className:`${tableMode === 'role' ? 'hidden' : ''} text-white bg-gray-600 p-2 border-r-2 border-b-2`
        },
        {
          title: 'Permissions',
          dataIndex: 'permissions',
          key: 'permissions',
          width: 400,
          className:`${tableMode === 'permission' ? 'hidden' : ''} text-white bg-gray-600 p-2 border-r-2 border-b-2`,
          render: (data) =>{
            return (
              <span className='flex flex-col'>
               {data?.map(book => (<span className='bg-purple-600 px-1  mr-2 mb-2 rounded-md'>{book.name} </span>))}
              </span>)
                  }
        },
        {
          title: 'Operations',
          dataIndex: '',
          key: 'operations',
          className:"text-white bg-gray-600 p-2 border-b-2",
          render: (data) => <>
                          <a href="#" onClick={()=>viewInfoHandler(data)}>View</a> | 
                          <a href="#" onClick={()=>viewInfoEditHandler(data)}>Edit</a> | 
                          <a href="#" onClick={()=>viewInfoDeleteHandler(data)}>Delete</a>
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
        <Table columns={columns} data={tableData} rowKey='id'  className='bg-purple-700 p-4 w-full text-center rc-table-custom font-semibold '/>
        
        {/* product view, edit and Delect Modal */}
        <RolePermissionInputModal 
          modal={modal} 
          setModal={setModal} 
          inputStatus={modalMode}
          pageNumber={pageNumber}
          dataInfo={tableSingleColumnData}
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

export default RolePermissionTableView;