import { createSlice } from '@reduxjs/toolkit';
import { login } from '../data_fetch/authenticationDataFetch';

const initialState = {
    authLoading: false,
    userInfo:{}
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


        
    }
})



export default authenticationSlice.reducer;