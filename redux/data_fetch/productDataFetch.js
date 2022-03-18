import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/useAxios_auth_header';



//Product All with pagination
export const productAllWithPagiantion =  createAsyncThunk(
    'product/productAll',
      async (pageNumber)=>{
        
            try{
                const res = await axiosInstance().get(`${process.env.baseUrl}/product/all?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)




//Product Add/Store
export const productDataAdd =  createAsyncThunk(
    'product/productDataAdd',
      async (data)=>{
            try{
                //console.log('category axios data', data)
                const formData = new FormData();
                formData.append('name', data.name)
                formData.append('details', data.description)
                formData.append('category_id', data.category)
                formData.append('subcategorie_id', data.subCateogry)
                formData.append('brand_id', data.brand)
                formData.append('color', data.color)
                formData.append('size', data.size)
                formData.append('actual_price', data.actualPrice)
                formData.append('discount_price', data.discountPrice)
                formData.append('quantity', data.productQuantity)
                formData.append('best_selling', data.bestSelling ? 1 : 0)
                formData.append('featured', data.featured ? 1 : 0)
                formData.append('hot', data.topHot ? 1 : 0)
                formData.append('top_rating', data.topRating ? 1 : 0)
                formData.append('sale', data.topSale? 1 : 0)
                formData.append('video_link', data.videoLink)
                //console.log("axio data", [...formData])

                //Multiple Image convert for FormData
                const imageArray = data?.image
                for(let i = 0 ; i < imageArray.length ; i++){
                    formData.append('image[]', imageArray[i]);
                }
                
                const res = await axiosInstance().post(`${process.env.baseUrl}/product/store`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)



//Product Edit
export const productDataEdit =  createAsyncThunk(
    'product/productDataEdit',
      async (data)=>{
            try{
                const formData = new FormData();
                formData.append('name', data.name)
                formData.append('details', data.description)
                formData.append('category_id', data.category)
                formData.append('subcategorie_id', data.subCateogry)
                formData.append('brand_id', data.brand)
                formData.append('color', data.color)
                formData.append('size', data.size)
                formData.append('actual_price', data.actualPrice)
                formData.append('discount_price', data.discountPrice)
                formData.append('quantity', data.productQuantity)
                formData.append('best_selling', data.bestSelling ? 1 : 0)
                formData.append('featured', data.featured ? 1 : 0)
                formData.append('hot', data.topHot ? 1 : 0)
                formData.append('top_rating', data.topRating ? 1 : 0)
                formData.append('sale', data.topSale? 1 : 0)
                formData.append('video_link', data.videoLink)
                //console.log("axio data", [...formData])

                //Multiple Image convert for FormData
                const imageArray = data?.image
                for(let i = 0 ; i < imageArray.length ; i++){
                    formData.append('image[]', imageArray[i]);
                }

                const res = await axiosInstance().post(`${process.env.baseUrl}/product/single/${data.Id}`, formData);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)




//Product Delete
export const productDataDelete =  createAsyncThunk(
    'product/productDataDelete',
      async (data)=>{
            try{
               const res = await axiosInstance().delete(`${process.env.baseUrl}/product/single/${data.Id}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data
            }catch(e){
                console.log("server Error", e)
            }
        }
)