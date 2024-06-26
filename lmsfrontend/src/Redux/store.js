
import {configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './Slice/Authslice.js'
import courseSlice from './Slice/courseSlice.js';
import lectureSliceReducer from  './Slice/LectureSlice.js';
import razorpaySliceReducer from './Slice/RazorpaySlice.js'
import StateSlice from './Slice/StateSlice.js';


const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSlice,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer,
        StateSlice:StateSlice
        
        
    },
    devTools:true
})
export default store;