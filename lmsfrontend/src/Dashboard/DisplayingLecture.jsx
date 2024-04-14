import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate } from "react-router-dom"

import  Home from '../Layouts/HomeLayout'
import { getLecture } from '../Redux/Slice/LectureSlice'
function DisplayingLecture(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {state} = useLocation()
    const { lectures } = useSelector((state) => state?.lecture);
           console.log(lectures)
   
    const {role } = useSelector((state)=>state?.auth)
    const[currentVideo,Setvideo] = useState(0)
    
  
    useEffect( ()=>{
        console.log( "state",state)
          dispatch(getLecture(state._id))
    },[])
    return(
 <Home>

   <div className=' flex flex-col items-center justify-center gap-10 py-10 mx-[5%] min-h-[90vh] text-white'>

    <div
    className='text-2xl text-yellow-500 text-center font-semibold tracking-widest' 
    
    > CourseType:{ state?.title}</div>
    <div className='flex justify-between gap-10 w-full cursor-pointer'>
        <div className='space-y-5 w-[33rem] p-2 rounded-lg shadow-[0_0_10px_black] h-[35rem]'>
            <video 
            className='w-full rounded-t-lg  object-fill h-1/2 p-2 m-2'
            controls
            muted
            disablePictureInPicture
            controlsList='nodownload'
            
            src={lectures&&lectures[currentVideo]?.lecture?.secure_url} ></video>
             <div className='flex gap-3 text-2xl'>
            <h1 className='text-yellow-500'>Lecture title:</h1>
            <span>{lectures&&lectures[currentVideo]?.title}</span>
            </div>
            <div className='flex gap-3 '>
                <h1 className='text-yellow-500'>course description:</h1>
                <span>{lectures&&lectures[currentVideo]?.description}</span>
            </div>

        </div>
        <ul className='w-[32rem] rounded-lg p-2 space-y-4 shadow-[0_0_10px_black]  text-center gap-5' >
            <li className='flex justify-between'>
                <p className='text-2xl text-yellow-500 font-semibold'> Lecture List </p>
                {role === 'ADMIN' && (<button className='pt-2 pb-2 top-2 btn-primary border text-white text-xl font-semibold w-1/2 rounded-tl-btn rounded-tr-btn bg-yellow-600 bg-transparent hover:bg-yellow-500 hover:rounded-none transition-all ease-in-out duration-300'
                 onClick={()=>navigate('/course/addlecture',{state:{...state}})}
                > Add new lecture</button>)}
            </li>
            {lectures&& lectures.map((lecture,ind)=>{
                return(
                <li
                 className='space-y-4'
                key={lecture._id}>
                    <p className='cursor-pointer'
                     onClick={()=>Setvideo(ind)}
                     
                    >
                        <span>{""}Lecture:{ind+1}: {}</span>
                        {lecture?.title}
                        
                
                
            
                    </p>

                    {role === 'ADMIN' && (<button className='pt-2 pb-2 top-2 btn-accent border text-white text-xl font-semibold w-1/2 rounded-tl-btn rounded-tr-btn   hover:rounded-none transition-all ease-in-out duration-300'
                onClick={()=>onlectureDelete(state?._id,lecture?._id)}
                > Delete lecture</button>)}

                </li>
                )
            })}
        </ul>
       

    </div>
    
   </div>
 </Home>
       
    )

} export default DisplayingLecture;