
import {configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './Slice/Authslice.js'
const store = configureStore({
    reducer:{
        auth:authSliceReducer
        
    },
    devTools:true
})
export default store;