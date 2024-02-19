
import {configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './Slice/Authslice.js'
import courseSlice from './Slice/courseSlice.js';
const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSlice
        
    },
    devTools:true
})
export default store;