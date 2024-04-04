
import {configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './Slice/Authslice.js'
import courseSlice from './Slice/courseSlice.js';
import razorpaySliceReducer from './Slice/RazorpaySlice.js'


const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSlice,
        razorpay:razorpaySliceReducer,
        
        
    },
    devTools:true
})
export default store;