import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const login = createAsyncThunk(
    'authenticationSlice/login',
    async(data)=>{
        try{
            const res = await axios.post(`${process.env.baseUrl}/login/`, data);
           
            if(res.data.token_info){
                const token = res.data.token_info
                const user_info = res.data.user_info
                Cookies.set("passport_backend",  token)
                Cookies.set("user_info",  JSON.stringify(user_info))
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                //console.log("token 02", token)   
            }
            //console.log("token", res)
            return res.data;

        }catch(e){

            //console.log("login usere ERror",e.response)
            return e.response;
        }
    }
)