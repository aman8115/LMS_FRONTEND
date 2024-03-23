import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosintance"

const initialState = {
    key:"",
    subscription_id:"",
    isPaymentVerfied:false,
    allPayment:{},
    finalMonths:{},
    monthSalesRecord:{}

}
export const getRazorpayId = createAsyncThunk('/razorpay/getId', async()=>{
    try{
     const res = axiosInstance.get('/payments/razropay_key')
     return (await res).data
    }catch(error){
        toast.error(" faild to load data!!")
    }
   
})
export const purchaseCourse = createAsyncThunk('/razorpay/purchasecourse',async()=>{
    try{
         const res = axiosInstance.post('/payments/subscribe')
         return (await res).data
    }catch(e){
        toast.error(e?.res?.data?.message)
    }

    
})
export const verifyUserPayments = createAsyncThunk('/razorpay/verifyPayments',async(data)=>{
  try{
    const response = axiosInstance.post('/payments/verify',{
        razorPay_payment_id:data.razorPay_payment_id,
        razorpay_subscription_id:data.razorpay_subscription_id,
        razorPay_signature:data.razorPay_signature
    })
    return (await response).data
    
  }catch(e){
    toast.error(e?.response?.data?.message)
  }
})
export const getPaymentRecord = createAsyncThunk('/razorpay/getPaymentRecord',async()=>{
    try{
      const response = axiosInstance.get('/payments/viewpayment')
      toast.promise(response,{
        loading:" Getting the User payments",
        success:(data)=>{
            return data?.data?.message
        }
      })
      return (await response).data
    }catch(error){
        toast.error("Operation Failed!!")

    }
})
export const cancelCourseSubscription = createAsyncThunk('/razorpay/cancelcourseSubscription',async()=>{
    try{
        const response = axiosInstance.post('payments/unsubscribe')
        toast.promise(response,{
            loading:" Wait!! subscription  cancle in progress",
            success:(data)=>{
                return data?.data?.message
            }
        })
        return (await response).data
    }catch(e){
            toast.error(e?.response?.data?.message)
    }
})
const RazorPaySlice = createSlice({
    name:"razorpay",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            builder
            .addCase(getRazorpayId.fulfilled,(state,action)=>{
           state.key = action?.payload?.key
            })
            .addCase(purchaseCourse.fulfilled,(state,action)=>{
                state.subscription_id = action.payload.subscription_id
            })
            .addCase(verifyUserPayments.fulfilled,(state,action)=>{
                toast.success(action?.payload?.message)
                state.isPaymentVerfied = action?.payload?.success
            })
            .addCase(verifyUserPayments.rejected,(state,action)=>{
                toast.success(action?.payload?.message)
                state.isPaymentVerfied = action?.payload?.success
            })
            .addCase(getPaymentRecord.fulfilled,(state,action)=>{
                state.allPayment = action?.payload?.allPayment
                state.finalMonths = action?.payload?.finalMonths
                state.monthSalesRecord = action?.payload?.monthSalesRecord
            })
    }

})
export default RazorPaySlice.reducer;