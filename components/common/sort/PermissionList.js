/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { permissionAllWithOutPagination } from '../../../redux/data_fetch/permissionDataFetch';

const PermissionList = ({register, errors, watchAllFields, inputStatus, dataInfo}) => {
    const permissionList = useSelector(state=> state?.store?.permission?.items);
    const dispatch = useDispatch();

    //console.log(dataInfo)
    //if inputStatus == subCategory than run
useEffect(()=>{
    if(inputStatus === 'roleEdit'|| inputStatus === 'roleAdd'){
      dispatch(permissionAllWithOutPagination())
    }
  },[inputStatus])
    return (
        <div className="flex items-center justify-between">
              <label className="font-semibold pr-2">Permissions</label>
              
              {inputStatus === 'roleView' || inputStatus === 'roleDelete' ? 
                    <div className='text-right'>
                        <p className="text-2xl font-semibold underline">Total Permission {dataInfo.permissions.length}</p>
                        <label className="border-b-2 border-purple-600/50 w-[75%] text-right">
                        {dataInfo?.permissions.map((permission, index)=>(
                        <p className="text-lg " key={index}>  {permission.name} <span className="ml-2">{index + 1}</span></p>
                        ))}
                        </label> 
                    </div> :
                    
                    <div className='flex-col w-4/5'>
                       
                        {permissionList.length > 0  && permissionList.map((permissionArray, index)=>{
                            //console.log(permissionArray)
                            //console.log(permissionArray.permissions[0].name)
                           return ( 
                           <div className='flex-col items-center justify-center border' key={index}>
                                
                                
                                <div className='relative'>
                                {permissionArray.permissions && permissionArray.permissions?.map((item, indexTwo)=> {
                                    //Role has permission Check
                                    const defaultValue = dataInfo?.permissions.length > 0 ? dataInfo.permissions.filter((defaultItem)=> defaultItem.id === item.id ) : false
                                    const defaultId = defaultValue[0]?.id
                                    //console.log("defaultValue",  defaultValue[0]?.id)
                                   return <label className="flex-col items-center" key={indexTwo}>
                                     
                                        <input
                                        className="border-2 border-purple-600/50 w-[75%] "
                                        defaultChecked={defaultId === item.id ? true : false }
                                        value={item.name}
                                        type="checkbox"
                                        {...register("permissions[]")} />
                                        
                                        <span className="text-sm">{item.name}</span>
                                        {/* <span className="text-sm">{item.id}</span> */}
                                    </label>
                                } )}
                               
                                <p className='absolute -top-8 pl-5'>{permissionArray.groupName}</p>
                                </div>
                                   
                                
                           </div>
                            
                          )
                           
                        })}
       
                 
                        
                    </div>
                    
              }   
        </div> 
    );
};

export default PermissionList;