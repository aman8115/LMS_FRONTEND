import { AiFillCheckCircle} from "react-icons/ai"
import { Link } from "react-router-dom"

import Home from "../Layouts/HomeLayout"

function CheckoutSuccess(){

    return(
        <Home>

            <div className=" h-[90vh] flex items-center justify-center text-white">
                <div
                className="w-80 h-[26rem] flex flex-col items-center justify-center shadow-[0_0_10px_black] rounded-xl relative"
                >
                    <h1 className= "bg-green-500 w-full text-xl font-bold text-center px-3 py-3 tracking-widest transition-all ease-in-out duration-300  top-0 absolute"
                    > Payment successfull</h1>
                    <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h2 className="text-xl font-semibold">Welcome to the pro bundel</h2>
                        <p className="text-left text-lg"> Now you can  Enjoy all the course </p>
                    </div>
                    </div>
                    <AiFillCheckCircle
                     className="text-green-500 text-6xl animate-pulse"
                    />

                  <div className="flex flex-col items-center  justify-center absolute bottom-2 w-full bg-green-500 px-2 py-2 text-center text-lg transition-all ease-in-out duration-300 rounded-b-lg rounded-t-lg">
                    <Link
                      to='/'
                    
                    ><button  >Go to dashboard</button></Link>
                    
                </div>
                   
                </div>
               
                
               
                
            </div>
          
        </Home>
    )
}
export default CheckoutSuccess