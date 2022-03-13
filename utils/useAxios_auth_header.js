import axios from 'axios';
import { parseCookies } from 'nookies';

export const axiosInstance =  () =>{
    const cookies = parseCookies()
    const {passport_backend} = parseCookies() ? parseCookies() : ""
    const token = passport_backend ? passport_backend : ""
    //console.log({ cookies })
    //console.log("Token", token)
    
    const axiosClient = axios.create({
        withCredentials: true,
        headers:{
            'Authorization': `Bearer ${token}`
          }
     });    
     return axiosClient    
  }