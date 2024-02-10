import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosintance";
const initialState = {
    isLoggdIn:localStorage.getItem('isLoggdIn')||false,
    role:localStorage.getItem('role')||'',
    data:localStorage.getItem('data')||{}
}

export const createAccount = createAsyncThunk("/auth/rgister" , async (data) =>{
    try{
          const res = axiosInstance.post('user/rgister',data);
          toast.promise(res,{
            loading:'wait! creating your account',
            success:(data)=>{
                return data?.data.message;
            },
            error:"Faild to create account"
          })
          return (await res).data
    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
    
       
    

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{}
})
export default authSlice.reducer