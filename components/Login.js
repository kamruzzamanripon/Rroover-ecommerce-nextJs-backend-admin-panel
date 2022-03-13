import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/data_fetch/authenticationDataFetch';
import CompanyInfo from './login/CompanyInfo';
import LoginBySocialMedia from './login/LoginBySocialMedia';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const dispatch = useDispatch();
    const router = useRouter();
    const authLoading = useSelector( state=> state?.store?.userinfo.authLoading)
    const success = useSelector( state=> state?.store?.userinfo)
    const token_info = useSelector( state=> state?.store?.userinfo?.userInfo?.token_info)

    //console.log("login auth", authLoading)
    const fromHandleSubmit = (data)=>{
        dispatch(login(data))
      // console.log(data)
    }

    useEffect(()=>{
        if(success && token_info){
            toast("Successfully Log In.")
            router.replace('/')
        } 
        
    },[success])
    return (
        <>
           <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <Toaster />
                <CompanyInfo />
            
            <div className="p-5 bg-white md:flex-1">
                <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>

                <form action="#" className="flex flex-col space-y-5" onSubmit={handleSubmit(fromHandleSubmit)}>
                
                <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" 
                        {...register("email", {
                            required: "required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Entered value does not match email format"
                            }
                          })}
                    />
                    {errors.email && <span className='text-red-500 font-semibold mt-1' role="alert">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                    <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                    </div>
                    <input 
                        type="password" 
                        id="password" 
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" 
                        {...register("password", {
                            required: "required",
                            minLength: {
                              value: 8,
                              message: "min length is 8"
                            }
                          })}
                    />
                    {errors.password && <span className='text-red-500 font-semibold mt-1' role="alert">{errors.password.message}</span>}
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                    <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                         {authLoading ? "Loading..." : "Log In"}
                    </button>
                </div>
                
                 <LoginBySocialMedia />
                </form>
            </div>
            </div>
        </div> 
        </>
    );
};

export default Login;