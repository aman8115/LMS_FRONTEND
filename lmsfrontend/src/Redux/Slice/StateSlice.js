import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import axiosInstance from '../../Helpers/axiosintance'
const initialState = {
    allUserCount:0,
    
    subscribedUser:0
}
export const getStatsData = createAsyncThunk("getuserdetails", async()=>{
    try{
        const response = axiosInstance.get('/admin/states/user')
      toast.promise(response,{
        loading:"getting the user  details....",
        success:(data)=>{
            return data?.data?.message
        },
        error:'Faild load to data!!'

      })
      return (await response).data

    }catch(e){
        toast.error(e?.response?.data?.message)

    }
})
const StateSlice =  createSlice({
    name:"state",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getStatsData.fulfilled,(state,action)=>{
            
            state.allUserCount = action?.payload?.allUserCount
            state.subscribedUser = action?.payload?.subscribedUser
            console.log(state.subscribedUser)
        })
    }
})
export default StateSlice.reducer;