import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosintance";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') !== undefined ? JSON.parse(localStorage.getItem('data')) : {}
};

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
export const Logout = createAsyncThunk('/auth/logout',async()=>{
    try{
        const res = axiosInstance.get('/user/logout');
        toast.promise(res,{
            loading:' logout in process',
            success:(data) =>{
                 return data?.data?.message
            },
            error:' logout faild'
        })
        return (await res).data
    }catch (e){
        toast.error(e?.data?.response?.message)
    }
})

export const getUserDtails = createAsyncThunk('/auth/details',async()=>{
   try{
    const res =  axiosInstance.get('/user/me');
    
    return (await res).data

   }catch(e){
    toast.error(e?.data?.res?.message)

   }
})

export const UpdateUser = createAsyncThunk("/user/update/profile", async ( data ) => {
    try {
        const res = axiosInstance.put(`user/update/${data[0]} `,data[1]);
        toast.promise(res, {
            loading: "Wait! profile update in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update profile"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

  
       
    

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(LoginAccount.fulfilled,(state,action)=>{
            localStorage.setItem('data',JSON.stringify(action?.payload?.user))
            localStorage.setItem('isLoggedIn',true)
            localStorage.setItem('role',action?.payload?.user?.role)
           state.isLoggedIn = true
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
        .addCase(Logout.fulfilled,(state)=>{
            localStorage.clear()
            
            state.isLoggedIn = false
            state.data = {}
            state.role = ""
        })
        .addCase(getUserDtails.fulfilled,(action,state)=>{
            if(!action?.payload?.user) return;
            console.log("This is auth payload",action?.payload)
            localStorage.setItem("data",JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn",true)
            localStorage.setItem('role',action?.payload?.user?.role)
            state.isLoggedIn = true
             state.data = action?.payload?.user
             
             state.role = action?.payload?.user?.role
             
         })
        
          
    }
})

export default authSlice.reducer