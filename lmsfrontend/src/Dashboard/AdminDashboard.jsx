
import {ArcElement,BarElement ,CategoryScale, Chart as ChartJs, Legend,LinearScale,Title,Tooltip,} from 'chart.js'
import { useEffect } from 'react';
import { Bar,Pie } from 'react-chartjs-2';
import {BsCollectionPlay, BsTrash} from 'react-icons/bs'
import { FaUsers} from 'react-icons/fa'
import{ FcSalesPerformance} from 'react-icons/fc'
import {GiMoneyStack} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Home from "../Layouts/HomeLayout";
import { deleteCourse, getCourses } from '../Redux/Slice/courseSlice';
import { getPaymentRecord } from '../Redux/Slice/RazorpaySlice';
import { getStatsData } from '../Redux/Slice/StateSlice';
ChartJs.register(ArcElement,BarElement,CategoryScale,Legend,LinearScale,Tooltip,Title)


function AdminDashboard(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

   const {allUserCount,subscribedUser} = useSelector((state)=>
    state?.StateSlice
   )
  const{allPayments,finalMonths,monthlySalesRecord} = useSelector((state)=>state?.razorpay)
  const userData = {
    labels: ["Registered User", "Enrolled User"],
    datasets: [
      {
        label: "User Details",
        data:[allUserCount,subscribedUser],
        backgroundColor: ["yellow", "green"],
        borderColor: ["yellow", "green"],
        borderWidth: 1,
      },
    ],
  };
 const salesData ={
  labels:["jan","feb","Mar","Apr","May","jun","Jul","Agu","sep","Oct","Nov","Dec"],
  fontColor:"white",
  datasets: [
    {
      label:'Sales/month',
      data:monthlySalesRecord,
      backgroundColor:["rgb(255,99,132)"],
      borderColor:'white',
      borderWidth:3
    },
  ],
 }
 const myCourse = useSelector((state)=>state?.course?.courseData)
 async function onDelete(id){
  if(window.confirm(" Are you sure to delete the course ")){
    const res = await dispatch(deleteCourse(id))
    if(res?.payload?.success){
      await dispatch(getCourses())
    }
  }
 }
  useEffect(()=>{
         ( 
          async()=>{
            await dispatch(getCourses())
            await dispatch(getStatsData())
            await dispatch(getPaymentRecord())
          }
         )()
  },[])
    return(
      <Home >
        <div className='min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white'>

          <h1 className='text-center text-4xl text-yellow-600 font-semibold'>Admin Dashboard</h1>
          <div className='grid grid-cols-2 gap-5 mx-10 m-auto'>
            < div className='flex flex-col items-center gap-10 p-5 shadow-lg rounded-md'>
              <div className='w-80 h-80'>
             <Pie
             data={userData}
             />
                
              </div>
              <div className='grid grid-cols-2 gap-5 '>
                <div className='flex  items-center justify-between rounded-md shadow-lg '>
                  <div className='flex flex-col items-center '>

                    <p className='font-semibold'>RgisterdUser</p>
                    <h4 className='text-4xl font-bold'>{allUserCount}</h4>
                  </div>
                  <FaUsers className='text-3xl text-yellow-500 font-bold'/>
                  

                </div>
                <div className='flex items-center justify-between rounded-md shadow-md'>
                  <div className='flex flex-col items-center'>
                    <p>EnrolledUser</p>
                    <h4 className='text-4xl font-bold'>{subscribedUser}</h4>
                  </div>
                  <FaUsers className='text-4xl font-bold text-green-500'/>
                </div>
               

              </div>
              
               

              
            </div>
            <div className='flex flex-col gap-10 items-center p-5 shadow-lg rounded-md '>
              <div className='w-80 h-full relative'>
                 <Bar data={salesData}/>

              </div>
                 <div className='grid grid-cols-2 gap-5'>
                  <div className='flex items-center justify-center rounded-md shadow-lg gap-5 '>
                    <div className='flex flex-col items-center'>
                      <p className='text-xl font-bold'>subcriptionCount</p>
                      <h4>{allPayments?.count}</h4>
    

                    </div>
                    <FcSalesPerformance
                     className='text-5xl text-yello-500'
                    />
                  </div>
                  <div className='flex items-center justify-center gap-5 rounded-md shadow-lg '>
                  <div className=' flex flex-col items-center '>
                    <p className='text-xl font-semibold'>Total Revenue</p>
                    <h3>{allPayments?.count*499}</h3>
                  </div>
                  <GiMoneyStack
                   className='text-5xl text-green-500'
                  />


                </div>
                </div>
               
            </div>
          </div>
           <div className='mx-[10%] w-[80%] flex  items-center justify-between m-7'>
            <div className='flex flex-col items-center justify-between'>
              <h1 className='text-center text-3xl font-semibold '>Course Overview</h1>
              

            </div>
            <button 
              className='  border-transparent w-1/4 rounded-lg transition-all ease-in-out duration-300 hover:rounded-none hover:bg-yellow-600  bg-yellow-500 text-center pb-2 pt-2 '
              onClick={()=>{navigate('/course/create')}}>
                Create new course
              </button>

           </div>
           <table className='table overflow-x-scroll'>
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Course Title</th>
                <th>course Category</th>
                <th>Instructor</th>
                <th>TotalLectures</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myCourse?.map((course,ind)=>{
                return(
                 <tr key={course._id}>
                  <td >
                       {ind+1}
                  </td>
                  <td>
                    <textarea
                    readOnly
                    value={course.title}
                    className='text center resize-none w-40 h-auto bg-transparent '
                    
                    ></textarea>
                  </td>
                  <td>{course.category}</td>
                  <td>{course.createdBy}</td>
                  <td>{course.numberofLecture}</td>
                  <td className='max-w-28 overflow-hiden text-ellipsis whitespace-normal'> 
                  <textarea 
                  value={course.description}
                  readOnly
                  className
                  ='w-40 h-auto resize-none bg-transparent' >

                  </textarea>
                    
                  </td>
                  <td className='flex items-center gap-4 '>
                   <button 
                   className='bg-green-500 border-transparent rounded-lg transition-all ease-in-out duration-300 hover:rounded-none hover:bg-green-600 text-xl px-4 py-2'
                   onClick={()=>navigate('/displayingLecture',{state:{...course}})}
                   > <BsCollectionPlay className=''/></button>
                   <button
                    onClick={()=>onDelete(course?._id)}
                   className='px-4 py-2 text-xl rounded-lg bg-red-500 transition-all ease-in-out duration-300 hover:bg-red-600 hover:rounded-none '> <BsTrash/></button>

                  </td>
                 </tr>
                )
              })}
            </tbody>

           </table>

        </div>

      </Home>
    )

}
export default AdminDashboard;