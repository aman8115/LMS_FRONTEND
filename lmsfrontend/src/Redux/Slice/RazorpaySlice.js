import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosintance";

const initialState = {
  key: "",
  subscription_id: "",
  isPaymentVerified: false,
  allPayments: {},
  finalMonths: {},
  monthlySalesRecord: [],
};

// function to get the api key
export const  getRazorPayId = createAsyncThunk("/getRazorpayid",async()=>{
  try{
      const response = await axiosInstance.get('/payments/getRazorpayId')
      return response.data
  }catch(e){
          toast.error(" faild to load key")
  }
})

// function to purchase the course bundle
export const purchaseCourseBundle = createAsyncThunk(
  "/purchaseCourse",
  async () => {
    try {
      const res = await axiosInstance.post("/payments/subscribe");
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// function to verify the user payment
export const verifyUserPayment = createAsyncThunk(
  "/verifyPayment",
  async (data) => {
    try {
      const res = await axiosInstance.post("/payments/verifypayments", {
        razorpay_payment_id:data.razorpay_payment_id,
        razorpay_subscription_id:data.razorpay_subscription_id,
        razorpay_signature:data.razorpay_signature
      });
     return res.data
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// function to get all the payment record
export const getPaymentRecord = createAsyncThunk("paymentrecord", async () => {
  try {
    const res = axiosInstance.get("/payments?count=100");
    toast.promise(res, {
      loading: "Getting the payments record...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to get payment records",
    });

    const response = await res;
    return response.data;
  } catch (error) {
    toast.error("Operation failed");
  }
});

// function to cancel the course bundle subscription
export const cancelCourseBundle = createAsyncThunk(
  "/cancelCourse",
  async () => {
    try {
      const res = axiosInstance.post("/payments/cancelsubscription");
      toast.promise(res, {
        loading: "Unsubscribing the bundle...",
        success: "Bundle unsubscibed successfully",
        error: "Failed to unsubscibe the bundle",
      });
      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorPayId.fulfilled,(state,action)=>{
        state.key = action?.payload?.key
     
      })
    
      .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
        state.subscription_id = action?.payload?.subscription_id;
      })
      .addCase(verifyUserPayment.fulfilled, (state, action) => {
        console.log(action)
        toast.success(action?.payload?.message)
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(verifyUserPayment.rejected, (state, action) => {
        console.log(action)
        toast.success(action?.payload?.message)
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(getPaymentRecord.fulfilled, (state, action) => {
        state.allPayments = action?.payload?.allPayments;
        state.finalMonths = action?.payload?.finalMonths;
        state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
      });
  },
});


export default razorpaySlice.reducer;


// function to purchase the course bundle







