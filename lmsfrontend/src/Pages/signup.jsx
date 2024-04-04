import { useState } from "react";
import   { toast} from 'react-hot-toast'
import{BsPersonCircle, } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Home from "../Layouts/HomeLayout";
import { createAccount } from "../Redux/Slice/Authslice";
function Signup(){
    const [previewImage , setpreviewImage ] = useState('')
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const [signupData , SetsignupData ] = useState({
      fullName :'',
      email:'',
      password:'',
      avatar:''
    })
    function handelUserInput(e){
      const{name,value} = e.target;
      SetsignupData({
         ...signupData,
        [ name]:value
      })
      

    }
    function getImage(event){
      event.preventDefault()
      const uploadImage = event.target.files[0];
      if(uploadImage){
        SetsignupData({
          ...signupData,
          avatar:uploadImage
        })
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadImage);
        fileReader.addEventListener('load',function(){
          setpreviewImage(this.result);
          console.log(this.result)
        })
      }
    }
   async function createnewAccount(event){
      event.preventDefault()
      if(!signupData.email ||! signupData.password ||! signupData.fullName ||!signupData.avatar){
        toast.error(' please fiil all details')
        return

      }
      // checking the length of name 
      if(signupData.fullName.length<5){
        toast.error('Name should be of 5 character')
        return;
      }
      // checking the vaild email
      if(!signupData.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
  )){
        toast.error(' invaild Email Id')
        return;
      }
      // ckecking th epasword
      if(!signupData.password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/)){
        toast.error("password should be 6 - 10 with a number an special character ")
        return;
      }
      const formData = new FormData()
      formData.append('fullName', signupData.fullName);
      formData.append('email',signupData.email);
      formData.append('password',signupData.password);
      formData.append('avatar',signupData.avatar);
     const res = await dispatch(createAccount(formData));
    
     if (res?.payload?.success) navigate("/");
     
      SetsignupData({
        fullName:'',
        email:'',
        password:'',
        avatar:''
      })
     setpreviewImage('')
    }
return(
   <Home>
      <div className="flex items-center flex-col justify-center h-[90vh]">
     
        <form noValidate onSubmit={createnewAccount} className="w-96 flex flex-col items-center justify-center gap-3 p-4 rounded-xl text-xl shadow-2xl ">
        <h1 className=' text-2xl font-thin'>Registration Page</h1>

        <label htmlFor="image_uploads" className="cursor-pointer ">
            {previewImage?(<img className="h-24 w-24 rounded-full m-auto" src={previewImage}/>):(<BsPersonCircle className="h-24 w-24 rounded-full m-auto text-white"/>)}
        </label>
        <input onChange={getImage} type="file" name="image_uploads" id="image_uploads" 
           accept=".png,.jpef,.svg,.jpg"
           className="hidden"
        />
         <div className="flex flex-col gap-2">

         <label htmlFor="fullName" className="font-semibold">fullName</label>
            <input type="text" name="fullName" id="fullName" 
                   required
                   placeholder="Enter your Name..."
                   className="px-2 py-1 bg-transparent border
                   text-center rounded-lg"
                   onChange={handelUserInput}
                   value={signupData.fullName}
            />
            <label htmlFor="email" className="font-semibold">email</label>
            <input type="email" name="email" id="email" 
                   required
                   placeholder="Enter your Email..."
                   className="px-2 py-1 bg-transparent border text-center rounded-lg"
                   onChange={handelUserInput}
                   value={signupData.email}
            />
            <label htmlFor="password" className="font-semibold"> 
              password
                
            </label>
            <input
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter your password"
                required
                className="px-2 py-2 border bg-transparent text-center rounded-xl"
                onChange={handelUserInput}
                value={signupData.password}
                />
                <button type="submit" className="w-full bg-yellow-600 py-2 px-1 text-center  font-semibold rounded-lg transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white hover:rounded-sm ">Create account</button>
               <Link to='/login' className="link link-hover link-secondary text-lg">
                <p >Already have an account ?</p>
               </Link>
           </div>
        </form>
          

      </div>
    </Home>
  
)
}
export default Signup;