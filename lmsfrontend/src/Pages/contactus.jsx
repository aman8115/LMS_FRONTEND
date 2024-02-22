import { useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../Helpers/axiosintance";
import Home from "../Layouts/HomeLayout";

function Contact(){
    const [userInput, setuserInput] = useState({
        name:'',
        email:'',
        message:''
    })
    function handleUserinput(e){
        const {name,value} = e.target;
        console.log(name,value)
        setuserInput({
            ...userInput,
            [name]:value
        })
    }
    async function onSubmit(e){
        e.preventDefault();
        if(!userInput.name||!userInput.email||!userInput.message){
            toast.error(' please fill the all field')
            return
        }
        try{
            const res = axiosInstance.post('/message/contact',userInput)
            toast.promise(res,{
                loading:'your message is submitting',
                success:"your message submitted successfully",
                error:' Failed to submitting'
            })
            const contacResponse =  (await res).data
            if(contacResponse?.data?.success){
                setuserInput({
                    name:'',
                    email:'',
                    message:''
                })
            }

        }catch(e){
            toast.error(` failed to operation${e.message}`)
        }
    }
    return(
        <>
     <Home>

     <div className="flex flex-col items-center justify-center h-[100vh]">
        <form noValidate onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-3 shadow-[0_0_10px_black] w-[22rem] px-2 py-2">
        <h1 className="text-2xl text-lime-400 rounded-lg">ContactForm</h1>
        <label className="text-xl font-semibold" htmlFor="name">Name</label>
        <input 
        className="text-xl text-center py-1 px-2 bg-transparent border rounded-sm"
        type="text"
         name="name"
         id="name" 
         onChange={handleUserinput}
         value={userInput.name}
         placeholder="Enter your name"/>
         <label className="text-xl font-semibold"
         htmlFor="email"
         >email</label>
         <input 
          className="text-xl text-center bg-transparent border text-white py-1 px-2"

         type="email"
         id="email"
         name="email"
         placeholder="Enter your email"
         value={userInput.email}
         onChange={handleUserinput}
        

          />
          <label
          className="text-xl font-semibold"
           htmlFor="message"
           >Message</label>
           <textarea
           name="message" 
           id="message" 
           placeholder="Enter your message"
           onChange={handleUserinput}
           value={userInput.message}
           className="text-xl text-center bg-transparent border px-2 py-1
           "
           ></textarea>
           <button type="submit" className="pb-1 pt-3 bg-amber-600 text-white w-1/2 rounded-lg text-lg hover:bg-amber-500 transition-all ease-in-out duration-300 font-semibold cursor-pointer ">Submit</button>
        </form>
           
        </div>
     </Home>
        
        </>
    )

}
export default Contact;
