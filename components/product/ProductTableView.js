import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import ShortViewModal from '../common/ShortViewModal';


const ProductTableView = ({tableDataInfo, setPageNumber, pageNumber, tableMode}) => {
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
      if(tableMode === 'banner'){
        setModalMode('bannerView')
      }
    }

    // Table Edit Click Function
    const viewInfoEditHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'banner'){
        setModalMode('bannerEdit')
      }
      
    }

    //Table Delete Click Function
    const viewInfoDeleteHandler = (data)=>{
      setModal(true)
      setTableSingleColumnData(data)

      //set modal status
      if(tableMode === 'banner'){
        setModalMode('bannerDelete')
      }
      
    }

  
   
    //console.log('tableData', tableSingleColumnData)
    
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'Sub Title',
          dataIndex: 'sub_title',
          key: 'sub_title',
          width: 400,
          className:`text-white bg-gray-600 p-2 border-r-2 border-b-2`
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          render: (data) => <>
                                <img src={`${process.env.ImagebaseUrl + data}`} className='w-40 text-center m-auto' />
                            </>
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

export default ProductTableView;