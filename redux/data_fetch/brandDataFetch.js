import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';

//brand All with pagination
export const brandAllWithPagination =  createAsyncThunk(
    'brand/brandAllWithPagination',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/brand/all?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//brand Edit
export const brandDataEdit =  createAsyncThunk(
    'brand/brandEdit',
      async (alldata)=>{
            try{
                const formData = new FormData();
                formData.append('name', alldata.name)
                formData.append('description', alldata.description)
                formData.append('image', alldata.image ? alldata?.image[0] : '')
                //console.log("axio data", [...formData])

                const res = await axiosInstance().post(`${process.env.baseUrl}/brand/edit/${alldata.catId}`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//brand Edit
export const brandDataDelete =  createAsyncThunk(
    'brand/brandDataDelete',
      async (id)=>{
            try{
               const res = await axiosInstance().delete(`${process.env.baseUrl}/brand/delete/${id}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//brand Add
export const brandDataAdd =  createAsyncThunk(
    'brand/brandDataAdd',
      async (data)=>{
            try{
                //console.log('category axios data', data)
                const formData = new FormData();
                formData.append('name', data.name)
                formData.append('description', data.description)
                formData.append('image', data.image ? data?.image[0] : '')

                const res = await axiosInstance().post(`${process.env.baseUrl}/brand/store`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)