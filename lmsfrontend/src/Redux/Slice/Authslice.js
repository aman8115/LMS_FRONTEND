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
        let res = axiosInstance.post("user/rgister", data);
          toast.promise(res,{
            loading:'wait! creating your account',
            success:(data)=>{
                return data?.data?.message
            },
            error:"Faild to create account"
          })
          return (await res).data
    }catch(error){
        toast.error(error?.data?.response?.message)
    }
})
export const LoginAccount = createAsyncThunk('/auth/login',
async(data)=>{
    try{
      const res = axiosInstance.post('/user/singIn',data);
      toast.promise(res,{
        loading:'wait! authentication in process',
        success:(data)=>{
            return data?.data?.message
        },
        error:'atheuntcation has faild!'
      })
      return (await res).data
    }catch(e){
        toast.error(e?.data?.response?.message)

    }
})
    
       
    

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(LoginAccount.fulfilled,(state,action)=>{
            localStorage.setItem('data',JSON.stringify(action?.payload?.user))
            localStorage.setItem('isLoggdIn',true)
            localStorage.setItem('role',action?.payload?.user?.role)
           state.isLoggdIn = true
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
    }
})

export default authSlice.reducer