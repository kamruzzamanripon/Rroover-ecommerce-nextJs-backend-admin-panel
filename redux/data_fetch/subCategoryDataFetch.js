import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';

//Sub-category add
export const subCategoryAdd =  createAsyncThunk(
    'subCategory/subCategoryAdd',
      async (data)=>{
            try{

                const formData = new FormData();
                formData.append('name', data.name);
                formData.append('description', data.description);
                formData.append('category_id', data.selectItem);
                formData.append('image', data.image ? data?.image[0] : '');

                const res = await axiosInstance().post(`${process.env.baseUrl}/sub-category/add`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)

//Sub-category all with pagination
export const subCategoryAll =  createAsyncThunk(
    'subCategory/subCategoryAll',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/sub-category?page=${pageNumber}`);
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//Sub-category Edit
export const subCategoryDataEdit =  createAsyncThunk(
    'subCategory/subCategoryDataEdit',
      async (alldata)=>{
            try{
                const formData = new FormData();
                formData.append('name', alldata.name)
                formData.append('description', alldata.description)
                formData.append('image', alldata.image ? alldata?.image[0] : '')
                //console.log("axio data", [...formData])

                const res = await axiosInstance().post(`${process.env.baseUrl}/sub-category/${alldata.Id}`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)


//sub-category Delete
export const subCategoryDataDelete =  createAsyncThunk(
    'subCategory/subCategoryDataDelete',
      async (id)=>{
            try{
                const res = await axiosInstance().delete(`${process.env.baseUrl}/sub-category/${id}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)
