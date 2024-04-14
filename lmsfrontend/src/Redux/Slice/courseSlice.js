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

    
        
          try {
            // creating the form data from user data
            let formData = new FormData();
            formData.append("title", data?.title);
            formData.append("description", data?.description);
            formData.append("category", data?.category);
            formData.append("createdBy", data?.createdBy);
            formData.append("thumbnail", data?.thumbnail);
      
            const res = axiosInstance.post("/course/createcourse", formData);
      
            toast.promise(res, {
              loading: "Creating the course...",
              success: "Course created successfully",
              error: "Failed to create course",
            });
      
           
            return (await res).data
          } catch (error) {
            toast.error(error?.response?.data?.message);
          }
        }
 )
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