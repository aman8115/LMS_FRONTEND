
import toast from "react-hot-toast";
import {  useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

import Home from "../Layouts/HomeLayout"
import { getUserDtails } from "../Redux/Slice/Authslice";
import { cancelCourseBundle } from "../Redux/Slice/RazorpaySlice";


function Profile(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
    
 
    const userData = useSelector((state)=> state?.auth?.data);
    async function canclSubscription(){
      await dispatch(cancelCourseBundle())
      await dispatch(getUserDtails())
         toast.success(" course cancellation successfully")
         navigate('/')
    }
    
    return(
        <Home>
             <div className="min-h-[90vh] flex items-center justify-center">
        <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-80 shadow-[0_0_10px_black]">
          <img
            className="w-40 m-auto rounded-full border border-black"
            src={userData?.avatar?.secure_url}
            alt="user profile image"
          />

          <h3 className="text-xl font-semibold text-center capitalize">
            FullName:
            {userData?.fullName}
          </h3>

          <div className="grid grid-cols-2">
            <p>Email :</p>
            <p>{userData?.email}</p>
            <p>Role :</p>
            <p>{userData?.role}</p>
            <p>subscription:</p>
            <p>{userData?.subscription?.status=='active'?"Active":"Inactive"}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Link 
              to='/changepassword'
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500  hover:rounded-none transition-all ease-in-out duration-300 pb-1 pt-1 text-center rounded-lg tracking-widest font-semibold ">
              <button>Change Password</button>
              </Link>
              <Link
                    to='/user/editprofile'
                    className="w-1/2 bg-yellow-600 hover:bg-yellow-500 hover:rounded-none transition-all ease-in-out duration-300 pb-1 pt-1 tracking-widest font-semibold text-center rounded-lg"
              >
              <button>Edit Profile</button></Link>

            </div>
            {userData?.subscription?.status == 'active'&&(
              <button
              onClick={canclSubscription}
              className="w-full bg-red-600 hover:bg-red-500 hover:rounded-none transition-all ease-in-out duration-300 text-center font-semibold tracking-widest rounded-lg pt-1 pb-1">
                Cancel Subscription
              </button>
            )}
            </div>
           
            </div>
            
        </Home>
    )

}
export default Profile