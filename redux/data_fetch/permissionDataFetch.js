import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';

//Permission All with pagination
export const permissionAllWithPagination =  createAsyncThunk(
    'permission/permissionAllWithPagination',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/permission/all/pagination?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data.Permission_info
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Permission Add/store
export const permissionDataAdd =  createAsyncThunk(
    'permission/permissionDataAdd',
      async (data)=>{
        
            try{
                 //console.log('category axios data', data)
                 const formData = new FormData();
                 formData.append('name', data.name)
                 formData.append('group_name', data.group_name)
                 //console.log("axio data", [...formData])
 
                 const res = await axiosInstance().post(`${process.env.baseUrl}/permission/store`, formData);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Permission Edit/Update
export const permissionDataEdit =  createAsyncThunk(
    'permission/permissionDataEdit',
      async (data)=>{
        
            try{
                 //console.log('category axios data', data)
                 const formData = new FormData();
                 formData.append('name', data.name)
                 formData.append('group_name', data.group_name)
                 //console.log("axio data", [...formData])
 
                 const res = await axiosInstance().post(`${process.env.baseUrl}/permission/update/${data.Id}`, formData);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Permission Delete
export const permissionDataDelete =  createAsyncThunk(
    'permission/permissionDataDelete',
      async (data)=>{
        
            try{
                 //console.log('category axios data', data)
                 const res = await axiosInstance().delete(`${process.env.baseUrl}/permission/delete/${data.Id}`);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)