import { createSlice } from '@reduxjs/toolkit';
import { AdminUserListData, AdminUserListWithOutPagination, login, logOutDataFetch } from '../data_fetch/authenticationDataFetch';

const initialState = {
    authLoading: false,
    userInfo:{},
    userList:[]
}


const authenticationSlice = createSlice({
    name:'authenticationSlice',
    initialState,
    reducers:{},
    extraReducers:{
        
    // Login Reducer
    [login.pending]: (state) => {
        state.authLoading = true
        },
    [login.fulfilled]: (state, { payload }) => {
        state.authLoading = false
        state.userInfo = payload
    },
    [login.rejected]: (state) => {
        state.authLoading = false
    },
    
    
    // LogOut Reducer
    [logOutDataFetch.pending]: (state) => {
        state.authLoading = true
        },
    [logOutDataFetch.fulfilled]: (state, { payload }) => {
        state.authLoading = false
        state.userInfo = payload
    },
    [logOutDataFetch.rejected]: (state) => {
        state.authLoading = false
    },
    

    //Admin User List with Pagination and related role and permission
    [AdminUserListData.pending]: (state) => {
        state.authLoading = true
        },
    [AdminUserListData.fulfilled]: (state, { payload }) => {
        state.authLoading = false
        state.userList = payload
    },
    [AdminUserListData.rejected]: (state) => {
        state.authLoading = false
    },
    
    //Admin User List with out Pagination 
    [AdminUserListWithOutPagination.pending]: (state) => {
        state.authLoading = true
        },
    [AdminUserListWithOutPagination.fulfilled]: (state, { payload }) => {
        state.authLoading = false
        state.userList = payload
    },
    [AdminUserListWithOutPagination.rejected]: (state) => {
        state.authLoading = false
    },


        
    }
})



export default authenticationSlice.reducer;