import { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'

import Coursecard from '../../component/coursecard'
import Home from '../../Layouts/HomeLayout'
import { getCourses } from '../../Redux/Slice/courseSlice'
function CourseList(){
const dispatch = useDispatch()
const {courseData}  = useSelector((state) => state.course)
 async function loadCourse(){
   await dispatch(getCourses());
}
useEffect(()=>{
loadCourse()
},[])
return(
   <> 
   <Home>

    <div className='min-h-[90vh] flex flex-col gap-10 pt-12 pl-12 text-white text-center text-2xl'>
      <h1>Explore the courses made by
         <span className='font-bold text-yellow-500'> industry Experts</span>
      </h1>
      <div className='mb-10 flex flex-wrap gap-14'>

         {courseData?.map((element)=>{
            return <Coursecard key={element._id} data={element} />
         })}
      </div>
    </div>
   </Home>
   </>
)
}
export default CourseList