import{ AiFillCloseCircle, } from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import Footer from '../component/Footer.jsx'





function Home({children}){
    function Onchangwidth(){
        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = 'auto'
    }
    function Hidedrawer(){
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false;
      //  Onchangwidth()
    }
    return (
      <>
     <div className=' min-h-[90vh] '>
        
        <div className='text-4xl drawer absolute left-0 w-fit z-50'>
            <input  id='my-drawer' type='checkbox' className='drawer-toggle'/>
            <div className=' drawer-content'>
                <label htmlFor="my-drawer" className='cursor-pointer relative'>
                    <FiMenu onClick={Onchangwidth}  size={32} className='font-bold ' />
                </label>
            </div>
            <div className=' drawer-side w-0'>
                <label htmlFor="my-drawer" className=' drawer-overlay'></label>
                <ul className=' menu p-4 w-fit bg-base-200 text-base-content   relative'>
                    <li className=' w-10  absolute z-50  right-1'>
                        <button onClick={Hidedrawer}  className='  absolute w-fit'>     <AiFillCloseCircle size={24}/></button>
                       
                        
                    </li>
                    <li > 
                        
                    <Link to="/courses">All course</Link>

                    </li>
                    <li> 

                    <Link to="/about">AboutUS</Link>

                    </li>
                    <li> 

                   <Link to="contact"> contactUS</Link>
                   
                   </li>
                </ul>
            </div>

        </div> 


        {children}
        <Footer></Footer>
     </div>
     </>
      

      
    )

}
export default Home;