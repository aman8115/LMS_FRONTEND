import { Link } from 'react-router-dom';

import HomeMan from '../image/homePageMainImage.png'
import Home from '../Layouts/HomeLayout.jsx'

function HomePage(){
    return(
        <>
       <Home>
        <div className="pt-10 flex items-center flex-col md:flex-row md:justify-between mx-16 h-[90vh] text-white  ">
            <div className='w-1/2 space-y-6 flex items-center flex-col'>

          
          <h1 className="text-3xl  font-semibold ">Find Out Best
          <span className="text-yellow-400 text-4xl font-bold">Online course</span>
          </h1>
          <p className="text-xl text-gray-500 min-w-fit">we have a large library of courses taught by highly skilled and qualified <span className='text-lg text-amber-600'>faculties at very affordable rate</span></p>
          <div className=' space-x-6 pt-4 gap-3'>
            <Link to='/courses'>
                <button className='bg-yellow-500 px-5 py-3 rounded-md font-bold text-lg w-fit h-15 text-center whitespace-nowrap'>Explore courses</button>
            </Link>
            <Link to='/contactus'>
                <button className='border px-5 py-3 rounded-md font-bold text-lg hover:bg-yellow-600 text-center w-fit h-15 mt-3 whitespace-nowrap'>Contact Us</button>
            </Link>
            
          </div>
            </div>
            
          <div>
            <img src={HomeMan} alt="" />
          </div>
       
        </div>
        </Home>
       
        </>
    )

}
export default HomePage;