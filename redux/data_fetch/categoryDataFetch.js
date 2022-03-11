import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const categoryAll =  createAsyncThunk(
    'category/categoryAll',
      async (pageNumber)=>{
        
            try{
                const res = await axios.get(`${process.env.baseUrl}/category?page=${pageNumber}`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("mainslider server", e.response)
            }
    }
    
)
