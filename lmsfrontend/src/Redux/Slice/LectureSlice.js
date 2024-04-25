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
 export const addLecture = 

 createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    const formData = new FormData();
    formData.append("lecture", data.lecture);
    formData.append("title", data.title);
    formData.append("description", data.description);

    try {
      const res =  axiosInstance.post(`/course/addlecture/${data.id}`, formData);
                        console.log(res)
      toast.promise(res, {
        loading: "Adding the lecture...",
        success: "Lecture added successfully",
        error: "Failed to add lecture",
      });
      const response = await res;

      return response.data;
    
    } catch (error) {
      toast.error(error?.response?.data?.message);
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