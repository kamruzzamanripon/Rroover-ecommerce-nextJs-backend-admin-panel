import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';


export const categoryAll =  createAsyncThunk(
    'category/categoryAll',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/category?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("mainslider server", e.response)
            }
        }
)


export const categoryAdd =  createAsyncThunk(
    'category/categoryAdd',
      async (data)=>{
          try{
                console.log('category axios data', data)
                const formData = new FormData();
                formData.append('name', data.name)
                formData.append('description', data.description)
                formData.append('image', data.image ? data?.image[0] : '')

                const res = await axiosInstance().post(`${process.env.baseUrl}/category/add`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("mainslider server", e)
            }
        }
)


export const categoryEdit =  createAsyncThunk(
    'category/categoryEdit',
      async (alldata)=>{
            try{
                const formData = new FormData();
                formData.append('name', alldata.name)
                formData.append('description', alldata.description)
                formData.append('image', alldata.image ? alldata?.image[0] : '')
                //console.log("axio data", [...formData])

                const res = await axiosInstance().post(`${process.env.baseUrl}/category/${alldata.catId}`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("mainslider server", e)
            }
        }
)


export const categoryDelete =  createAsyncThunk(
    'category/categoryDelete',
      async (id)=>{
            try{
                const res = await axiosInstance().delete(`${process.env.baseUrl}/category/${id}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("mainslider server", e)
            }
        }
)
