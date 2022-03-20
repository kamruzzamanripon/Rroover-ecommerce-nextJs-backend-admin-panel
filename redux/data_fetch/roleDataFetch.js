import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';

//Role All with pagination
export const roleAllWithPagination =  createAsyncThunk(
    'role/roleAllWithPagination',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/role/all/pagination?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data.roles
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Role Create with permission Assign
export const roleCreateWithPermissionAssign =  createAsyncThunk(
    'role/roleCreateWithPermissionAssign',
      async (data)=>{
        
            try{
                              
                  const res = await axiosInstance().post(`${process.env.baseUrl}/role/create`, data);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Role Create with permission Assign
export const roleChangeWithPermissionAssign =  createAsyncThunk(
    'role/roleChangeWithPermissionAssign',
      async (data)=>{
        
            try{
                              
                const res = await axiosInstance().post(`${process.env.baseUrl}/role/update/${data.Id}`, data);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Role Delete
export const roleDelete =  createAsyncThunk(
    'role/roleDelete',
      async (data)=>{
        
            try{
                              
                const res = await axiosInstance().delete(`${process.env.baseUrl}/role/delete/${data.Id}`);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)
