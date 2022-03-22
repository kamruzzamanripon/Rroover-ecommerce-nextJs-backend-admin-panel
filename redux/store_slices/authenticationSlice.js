import { createSlice } from '@reduxjs/toolkit';
import { AdminUserListData, login } from '../data_fetch/authenticationDataFetch';

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
    
    // Login Reducer
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


        
    }
})



export default authenticationSlice.reducer;