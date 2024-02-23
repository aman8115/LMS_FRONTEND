import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import Home from "../../Layouts/HomeLayout";


function Coursedescription(){
    const {state} = useLocation()
    const{role,data} = useSelector((state)=>state.auth)
    useEffect(()=>{

    },[])
    return(
        <Home>
           <div className="grid  place-content-center h-[100vh]" >
           <div className="h-[90vh] w-full pt-20 px-12 flex flex-col items-center justify-center text-white">

<div className="grid grid-cols-2 px-10 py-10 relative">
    <div className="space-y-4">
        <img
        className="w-full h-64 "
       
        src={state?.thumbnail?.secure_url} alt="thumbnail" />

         <div className="space-y-4 space-x-4">
            <div className="flex flex-col gap-4 items-center justify-center
        ">
            <p className="text-yellow-500 tracking-widest text-xl">
            TotalLecture:{""}
            <span className="text-xl text-white font-semibold mx-3">
                {state?.numberofLecture}
            </span>
        </p>
        <p className="text-yellow-500 tracking-widest tex-xl">Title:{""}
        <span className="text-xl text-white font-semibold">{state?.title}</span>
        </p>
        <p className="text-yellow-500 tracking-widest text-xl ">
          courseType:{""}
          <span className="text-xl text-white font-semibold">{state?.description}</span>
        </p>
        <p className="text-yellow-500 tracking-widest text-xl ">Instructor:{""}
        <span className="text-xl font-semibold text-white">{state?.createdBy}</span></p>


        {role === "ADMIN" || data?.subscription?.status  ==="ACTIVE" ?(
       <button className=" pt-2 pb-2 rounded-xl text-center transition-all duration-300 ease-in-out bg-yellow-600 w-1/2 text-lg font-serif tracking-widest"> Watch Lecture</button>
    ):(
        <button className="pt-2 pb-2 text-center rounded-xl  transition-all duration-300 ease-in-out bg-yellow-600 border w-1/2 font-serif  tracking-widest ">subscribe</button>
    ) }
            </div>
         
       

    </div>
    
    </div>
    
     
    </div>
</div>

           </div>
        </Home>
    )

}
export default Coursedescription;