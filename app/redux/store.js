import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import user from "./reducer/LoginReducer"

const store =configureStore({
    reducer: {
        user
    }
})

export default store