import { useState } from "react";
import toast from "react-hot-toast";
import {  useDispatch } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";

import Home from "../Layouts/HomeLayout";
import { LoginAccount } from "../Redux/Slice/Authslice";

function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[loginData,SetloginData] = useState({
        email:'',
        password:''
    })
    function handelUserinput(e){
        const {name,value}  = e.target;
        SetloginData({
            ...loginData,
           [name]:value
        })
    }
     async function loginAccount(event){
        event.preventDefault()
        if(!loginData.email||!loginData.password){
            toast.error(" please enter all details")
            return
            
        }
        const res = await dispatch(LoginAccount(loginData))
       
        if(res?.payload?.success) navigate('/')
        
        SetloginData({
            email:'',
            password:''
        })
    }
    return(
        <>
        <Home>
            <div className="flex flex-col items-center justify-center h-[90vh]">
                <form noValidate onSubmit ={loginAccount} className="w-96 flex flex-col items-center justify-center
                 rounded-xl shadow-2xl gap-3 p-4 ">
                    <h1 className="text-3xl ">Log in</h1>
                    <label className="font-semibold" htmlFor="email">Email</label>
                    <input className="px-2 py-2 rounded-lg bg-transparent border text-center "
                     type="email" 
                    name="email" 
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={loginData.email}
                    onChange={handelUserinput}

                    
                    />
                    <label className="font-semibold" htmlFor="password">Password</label>
                    <input  className ="px-2 py-2  text-center rounded-lg bg-transparent border"
                    
                    type="password" 
                    name="password" 
                    id="password"
                    required 
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handelUserinput}
                    />
                    <button className="w-fit px-2 py-2  bg-yellow-600 rounded-xl
                    text-center text-xl font-semibold transition-all ease-in-out duration-200 hover:bg-yellow-500 hover:text-white 
                    ">SignIn in account</button>
                    <Link to="/signup">
                        <p className="link link-hover link-primary">Donot have an account</p>
                    </Link>

                </form>
            </div>


        </Home>
         
        </>
    )

}
export default Login;