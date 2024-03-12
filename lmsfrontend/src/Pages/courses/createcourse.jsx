import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import{useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

import Home from '../../Layouts/HomeLayout'
import { createCourse } from '../../Redux/Slice/courseSlice'
function Createcourse(){
    const dispatch = useDispatch()
   const navigate = useNavigate()
   const[userInput ,SetuserInput] = useState({
   title:"",
   description:"",
   createdBy:"",
   category:"",
   thumbnail:null,
   previewImage:""



   })
   function handleuploadImage(event){
    event.preventDefault()
    const uploadedImage = event.target.files[0];
    if(uploadedImage){
        const fileReader = new FileReader()
        fileReader.readAsDataURL(uploadedImage)
        fileReader.addEventListener("load",function(){
            SetuserInput({
                ...userInput,
                previewImage:this.result,
                thumbnail:uploadedImage
            })
        })
    }
  
   }
   function handleUserInput(e){
     const {name, value} = e.target
      SetuserInput({
        ...userInput,
        [name]:value
      })
   }
    async function OnformSubmit(e){
    e.preventDefault()
    if(!userInput.title ||!userInput.description ||!userInput.category||userInput.createdBy ||!userInput.thumbnail){
        toast.error("All field are required")
        
    }
    const response = await dispatch(createCourse(userInput))
    if(response?.payload?.success){

        SetuserInput({
            title:"",
            description:"",
            createdBy:"",
            category:"",
            thumbnail:null,
            previewImage:""
         
        })
        navigate("/courses")
    }
   }

    return (

        <Home>
            <div className=' h-[100vh] flex items-center justify-center'>
            <form 
        noValidate
        onSubmit={OnformSubmit}
        className='w-[700px] flex flex-col justify-center  gap-5 shadow-[0_0_10px_black] p-4 px-10 rounded-xl text-white  text-center'
        >
            <Link className='text-2xl absolute t-8 link-accent cursor-pointer '> 
            <AiOutlineArrowLeft/>
            </Link>
        <h1 className='text-2xl text-amber-500 tracking-widest'>Create new Course</h1>
        <main className='grid grid-cols-2 gap-x-10'>
         <div className='gap-y-6'>
            <label htmlFor="uploads_image" className='cursor-pointer'>
                {
                    userInput.previewImage?(<img
                    src={userInput.previewImage}
                    className='w-full h-44 m-auto  border'
                    />):(<div className='w-full h-44 m-auto flex flex-col items-center justify-center border'>
                        <h1>Upload your course
                            Thumbnail
                        </h1>
                    </div>)
                }
            </label>
            <input
            className='hidden' 
       type='file'
             name="uploads_image"
             accept='.jpg,.jpeg,.png' 
             id="uploads_image"
             onChange={handleuploadImage}
             />

         </div>
         <div className='flex flex-col gap-2'
         >
            <label 
            htmlFor="title"
            className='text-lg font-semibold'

            >Course title
            </label>
            <input
             type="text"
              name="title" 
              id="title" 
              placeholder='Enter your course title'
              required
              className='px-2 py-2 bg-transparent border text-center tracking-widest
               text-lg font-semibold '
               value={userInput.title}
               onChange={handleUserInput}
               
              />
          
         </div>
         <div className=' flex flex-col gap-1 '>
            <label 
             className='text-lg font-semibold'
            htmlFor="description">
                Course description
            </label>
            <input 
            type="text" 
            name="description"
             id="description" 
             placeholder='Enter course description'
             className='px-2 py-2 bg-transparent border text-center tracking-widest'
             value={userInput.description}
             onChange={handleUserInput}
            />

         </div>
         <div className='flex flex-col gap-1'>
            <label
            className='text-lg font-semibold' 
            htmlFor="catgory"
            >Course catgory</label>
            <input
            className='px-2 py-2 text-center bg-transparent border tracking-widest'
            required
            placeholder='Enter category'
             type="text" 
             name="category" 
             id="category" 
             onChange={handleUserInput}
             value={userInput.category}
             />
         </div>
         <div className='flex flex-col gap-1'>
            <label
            className='text-lg font-semibold'
             htmlFor="createdBy">CreatedBy</label>
             <input 
             className='px-2 py-2 bg-transparent border text-center tracking-widest'
             type="text" 
             name="createdBy" 
             id="createdBy"
             required
             placeholder='Enter Instructorname'
             onChange={handleUserInput}
             value={userInput.createdBy}
              />

         </div>

        </main>
        <button type ="submit" className='w-full bg-yellow-600 px-2 py-2 text-xl tracking-widest rounded-lg  transition-all ease-in-out duration-200 hover:bg-yellow-500 hover:rounded-none '>Create course</button>
        </form>
            </div>
        
    
        </Home>
      
    )
}
export default Createcourse