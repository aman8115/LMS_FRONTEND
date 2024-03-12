import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosintance"
const initialState={
    courseData:[]
}

 export const getCourses =  createAsyncThunk("/course/get", async ()=>{
 try{
    const response = axiosInstance.get('course/getallcourse');
    toast.promise(response,{
        loading:'loading courses',
        success:'course loading successfully',
        error:' faild to load course'
    }


    )
    return (await response).data.course

 } catch(e){
    toast.error(e?.response?.data?.message)
 }

 })
  export const createCourse = createAsyncThunk('/course/create',async(data)=>{
    try{
        let formData = new FormData()
        formData.append("title",data?.title)
        formData.append("description",data?.description)
        formData.append("title",data?.category)
        formData.append("title",data?.createdBy)
        formData.append("thumbnail",data?.thumbnail)

        const response = axiosInstance.post('/course/createcourse',formData);
        toast.promise(response,{
            loading:" ! Wait course creating",
            success:"Course created successfully!",
            error:" course creation faild"
        });
        return  (await response).data
    }catch(e){
        toast.error(e?.response?.data?.message)
    }
 })
const courseSlice = createSlice({
    name:'courses',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getCourses.fulfilled,(state,action)=>{
            if(action.payload){
                console.log(action.payload)
                state.courseData = [...action.payload]
            }
        })

    }
})
export default courseSlice.reducer