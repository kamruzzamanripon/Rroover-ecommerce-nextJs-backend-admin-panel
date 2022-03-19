/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { permissionAllWithOutPagination } from '../../../redux/data_fetch/permissionDataFetch';

const PermissionList = ({register, errors, watchAllFields, inputStatus, dataInfo}) => {
    const permissionList = useSelector(state=> state?.store?.permission?.items);
    const dispatch = useDispatch();

    console.log(dataInfo)
    //if inputStatus == subCategory than run
useEffect(()=>{
    if(inputStatus === 'roleEdit'){
      dispatch(permissionAllWithOutPagination())
    }
  },[inputStatus])
    return (
        <div className="flex items-center">
              <label className="font-semibold pr-2">Permissions</label>
              {inputStatus === 'roleView' || inputStatus === 'roleDelete' ? 
                    <div>
                        <p className="text-2xl font-semibold underline">Total Permission {dataInfo.permissions.length}</p>
                        <label className="border-b-2 border-purple-600/50 w-[75%] text-right">
                        {dataInfo.permissions.map((permission, index)=>(
                        <p className="text-lg " key={index}>  {permission.name} <span className="ml-2">{index + 1}</span></p>
                        ))}
                        </label> 
                    </div> :
                    
                    <div className='grid grid-cols-4  grid-column:auto gap-2'>
                        {permissionList.map((permission, index)=>(
                             <label className="flex">
                                <input 
                                    className="border-2 border-purple-600/50 w-[75%] "
                                    //defaultValue={dataInfo?.group_name}
                                    name="permissions[]"
                                    type="checkbox"
                                    {...register}
                                />
                                <span className="text-sm">{permission.name}</span>
                            </label>   
                        ))}
                        

                        

                       
                        
                    </div>
                    
              }   
        </div> 
    );
};

export default PermissionList;