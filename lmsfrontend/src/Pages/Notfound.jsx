import {  useNavigate } from "react-router-dom";
function Notfound(){
    const navigate = useNavigate()
 return(
 
     <>
        <div className="h-screen w-full flex flex-col items-center
        justify-center
        ">
            <h className="text-8xl text-amber-800 tracking-widest">404</h>
            <div className=" bg-black text-white text-sm rounded px-2 rotate-12 absolute "> page not found ...</div>
            <button className="mt-4">
               <a className="  inline-block relative text-sm font-medium group active:text-yellow-600 focus:outline-none focus:ring">
                   <span onClick={()=>navigate(-1)} className="relative block py-3 px-4   bg-[#1A2238] border border-current">Go back</span>
               </a>
            </button>

        </div>
      
    </>
)
}
export default Notfound;