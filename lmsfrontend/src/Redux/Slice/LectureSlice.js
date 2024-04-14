import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-hot-toast'

import axiosInstance from '../../Helpers/axiosintance'
const initialState = {
    lectures:[]
}
 export const getLecture = createAsyncThunk("getLecture",async(id)=>{
    try {
        const res = axiosInstance.get(`/course/${id}`);
      
  
        toast.promise(res, {
          loading: "Fetching the lectures...",
          success: "Lectures fetched successfully",
          error: "Failed to fetch lectures",
        });
  
        const response = await res;
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
 })
 export const addLecture = createAsyncThunk("addlecture",async(data)=>{
    try{
        let formData = new FormData()
        formData.append("title",data?.title)
        formData.append("description",data?.description)
        formData.append(" lecture",data?.lecture)
        const res = axiosInstance.post(`course${data.id}`,formData)
        toast.promise(res,{
            loading:" adding lecture in progerss",
            success:" lecture added successfylly",
            error:' faild to add lecture'
        })
        return (await res).data

    }catch(error){
        toast.error(error?.response?.data?.message)
    }
 })

 const lectureSlice = createSlice ({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
         builder.addCase(getLecture.fulfilled,(state,action)=>{
            console.log(action)
           state.lectures = action?.payload?.lectures
         
            
           
         })
         .addCase(addLecture.fulfilled,(state,action)=>{
            state.lectures = action?.payload?.course?.lectures
         })
    }
 }
)
export default lectureSlice.reducer