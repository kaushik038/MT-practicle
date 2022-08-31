import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        defaultUser:{
            email:"test@gmail.com",
            password:"Test@123"
        },
        isLogin: false,
        restaurantList:[]
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = action.payload;

        },
        saveRestaurantList:(state,action)=>{
            state.restaurantList = action.payload
        },
        logoutSuccess: (state, action) => {
            state.user = null;
        },
    },
});

export const { loginSuccess, logoutSuccess, saveRestaurantList } = slice.actions

export default slice.reducer