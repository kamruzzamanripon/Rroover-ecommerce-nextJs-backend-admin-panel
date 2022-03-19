import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';

//Permission All with pagination
export const roleAllWithPagination =  createAsyncThunk(
    'role/roleAllWithPagination',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/role/all/pagination?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("permissionAllWithPagination server", res.data.Permission_info)
                return res.data.Permission_info
            }catch(e){
                console.log("server Error", e)
            }
        }
)
