import { RxCrossCircled} from 'react-icons/rx'
import { Link } from 'react-router-dom';

import Home from "../Layouts/HomeLayout";

function CheckoutFail(){
    return(
        <Home>

            <div className="h-[90vh] flex flex-col items-center justify-center  text-white">
                <div className="w-80 h-[26rem] flex items-center justify-center flex-col shadow-[0_0_10px_black] rounded-xl relative">

                <h1 className=' 
                absolute top-0 bg-red-600
                 w-full px-3 py-3 rounded-t-xl transition-all ease-in-out  duration-300 text-center tracking-widest text-xl font-semibold
                '> Payment Fail</h1>
                <div className=" flex flex-col items-center justify-center space-y-3 ">
                    <h2 className="text-lg"> Opps!!Payment faild!! </h2>
                    <p className="text-red-300 text-lg">Your payment faild try again</p>
                </div>
                <RxCrossCircled
                 className='text-5xl top-2 text-red-500'
                />
               <div className='absolute bottom-1
               w-full bg-red-500 text-center text-xl tracking-widest
                px-2 py-2 rounded-b-lg'>
               <Link 
               
                to='/checkout'>Try Again !!!</Link>
               </div>
                
                </div>
              

            </div>
        </Home>
    ) 
}
export default CheckoutFail;