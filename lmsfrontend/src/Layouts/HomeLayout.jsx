import{ AiFillCloseCircle, } from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'




function Home(){
    function Onchangwidth(){
        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = 0;
    }
    function Hidedrawer(){
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false;
        Onchangwidth()
    }
    return (
        <>
       <div className="h-[90vh]">
        <div className="drawer absolute left-0 z-50">
            <input className="drawer-toggle" type="checkbox " id="my-drawer"  />
            <label htmlFor="my-drawer" className="cursor-pointer relative">
                   <FiMenu
                  onClick={Onchangwidth}
                   size={'20px'}
                   className='text-xl font-bold m-4'
                   
                   />
            </label>
        </div>
        <div className='drawer-side '>
            <label htmlFor="my-drawer" className='drawer-overlay'></label>
            <ul className='menu w-50 min-h-full text-base-content bg-base-200 relative '>
                <li className='w-fit relative right-2 z-50'>
                    <button>
                        <AiFillCloseCircle
                        size={'24px'}
                         className='text-xl'
                         onClick={Hidedrawer}
                        />
                    </button>
                </li>
              <li> 
            <Link to="/courses"></Link>
            course
              </li>
              <li>
            <Link to="/contact"></Link>
            Contact
              </li>
              <li>
             <Link to="/about"></Link>
             About
              </li>
              <li>

              </li>
            </ul>
        </div>
       
       </div>
        </>
    )

}
export default Home;