import  { useEffect } from "react";
import { toast } from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Home from "../Layouts/HomeLayout";
import { getRazorPayId,purchaseCourseBundle,verifyUserPayment } from "../Redux/Slice/RazorpaySlice";

 function Checkout  ()  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorPayKey = useSelector((state)=>state?.razorpay?. key)
  
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id
  );
  const userData = useSelector((state) => state?.auth?.data);
  const  isPaymentVerified  = useSelector((state) => state?.razorpay?.isPaymentVerified);

  // for storing the payment details after successfull transaction
  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };
  console.log(paymentDetails)

  const handleSubscription = async (event) => {
    event.preventDefault();
    if(!razorPayKey||!subscription_id){
      toast.error(" somthing went wrong!!")
    }
    const options = {
      key:razorPayKey,
      subscription_id:subscription_id,
      name:" Coursify pvt lmt",
      description:" subscription",
      theme:{color:'#012652'},
      prefill:{ fullname:userData.fullname,email:userData.email},
      handler: async function(response) {
        console.log(response); // Log the entire response object
        // Extract payment and subscription IDs from response
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
        toast.success("Payments successfully!!");
       const res  =  await dispatch(verifyUserPayment(paymentDetails));
       console.log(res)
        
     res?.payload?.success?navigate('/checkout/success'):navigate('/checkout/fail')
          
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  
   


  };

   async function load(){
   await dispatch(getRazorPayId())
   await dispatch(purchaseCourseBundle())
   }

useEffect(()=>{
 load()
},[])

  return (
    <Home>
      {/* checkout page container */}
      <form
        onSubmit={handleSubscription}
        className="min-h-[90vh] flex items-center justify-center text-white"
      >
        {/* checkout card */}
        <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
          <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Subscription Bundle
          </h1>

          <div className="px-4 space-y-5 text-center">
            <p className="text-[17px]">
              This purchase will allow you to access all the available courses
              of our platform for{" "}
              <span className="text-yellow-500 font-bold">1 Year Duration</span>
              . <br />
              All the existing and new launched courses will be available to you
              in this subscription bundle
            </p>

            <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
              <BiRupee /> <span>499</span>only
            </p>

            <div className="text-gray-200">
              <p>100% refund at cancellation</p>
              <p>* Terms & Condition Applied</p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
            
          >
            Buy Now
          </button>
        </div>
      </form>
    </Home>
  )
 }
 



export default Checkout;