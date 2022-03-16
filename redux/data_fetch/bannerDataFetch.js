import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';

//brand All with pagination
export const bannerAllWithPagination =  createAsyncThunk(
    'banner/bannerAllWithPagination',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/banner/all?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Banner Add
export const bannerAdd =  createAsyncThunk(
    'banner/bannerAdd',
    async (data)=>{
        try{
            //console.log('category axios data', data)
            const formData = new FormData();
            formData.append('title', data.name)
            formData.append('sub_title', data.description)
            formData.append('image', data.image ? data?.image[0] : '')
             //console.log("axio data", [...formData])

            const res = await axiosInstance().post(`${process.env.baseUrl}/banner/store`, formData);
            //console.log("Hello")
            //console.log("mainslider server", res)
            return res.data
        }catch(e){
            console.log("server Error", e)
        }
    }
)


//Banner Edit
export const bannerEdit =  createAsyncThunk(
    'banner/bannerEdit',
    async (alldata)=>{
        try{
            //console.log('category axios data', alldata)
            const formData = new FormData();
            formData.append('title', alldata.name)
            formData.append('sub_title', alldata.description)
            formData.append('image', alldata.image ? alldata?.image[0] : '')

            const res = await axiosInstance().post(`${process.env.baseUrl}/banner/single/${alldata.Id}`, formData);
            //console.log("Hello")
            //console.log("mainslider server", res)
            return res.data
        }catch(e){
            console.log("server Error", e)
        }
    }
)


//Banner Delete
export const bannerDelete =  createAsyncThunk(
    'banner/bannerEdit',
    async (id)=>{
        try{
            const res = await axiosInstance().delete(`${process.env.baseUrl}/banner/single/${id}`);
            //console.log("Hello")
            //console.log("mainslider server", res)
            return res.data
        }catch(e){
            console.log("server Error", e)
        }
    }
)