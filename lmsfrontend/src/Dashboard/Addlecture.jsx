import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import Home from "../Layouts/HomeLayout";
import { addLecture } from "../Redux/Slice/LectureSlice";

function Addlecture(){
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const courseDetails = useLocation().state;
 console.log(courseDetails)
 console.log(courseDetails._id)
 const[userInput,SetuserInput] = useState({
    id:courseDetails._id,
    lecture:undefined,
    title:"",
    description:"",
    videoSrc:''
 })
 function handelInputChange(e){
    const{name,value} = e.target;
    SetuserInput({
        ...userInput,
        [name]:value
    })
 }
 function handelVideo(e){
    const video = e.target.files[0]
    const source = window.URL.createObjectURL(video)
    console.log(source)
    SetuserInput({
        ...userInput,
        lecture:video,
        videoSrc:source
    })
 }
 async function onFormsubmit(e){
    e.preventDefault()
    if(!userInput.lecture||!userInput.title||!userInput.description){
        toast.error(" All field is required")
        return
    }
    const response =  await dispatch( addLecture(userInput))
    console.log(response)
    if(response?.payload?.success){
        SetuserInput({
            id:courseDetails._id,
            lecture:undefined,
            title:"",
            description:"",
            videoSrc:''

        })
    }
    navigate('/courses')
    
 }
 useEffect(()=>{
    if(!courseDetails) navigate('/course')
},[])

 return (
    <Home>
        <div className="flex items-center justify-center gap-10  text-white mx-10 h-[90vh]" >
            <div className="flex flex-col items-center justify-center gap-5 p-2 shadow-[0_0_10px_black] rounded-lg w-96">
                <header className="flex items-center justify-center relative gap-3">

                   <button
                    className=  "text-green-500 font-bold left-2 text-2xl "
                    title="go to lecture"
                    onClick={()=>navigate(-1)}
                   ><AiOutlineArrowLeft/></button>
                    <h1 className="text-xl text-yellow-500 tracking-widest font-semibold">Add new lecture</h1>
                    
                </header>
                <form noValidate
                onSubmit={onFormsubmit}
                className="flex flex-col gap-5">
                          
                    <input type="text" 
                    name="title" 
                    id="title"
                    onChange={handelInputChange}
                    className=" border bg-transparent px-2 py-1 rounded-lg hover:rounded-none "
                    placeholder="Enter the title of the lecture"
                    value={userInput.title}
                    />
                    <textarea type="text" 
                    name="description" 
                    id="description" 
                    onChange={handelInputChange}
                    value={userInput.description}
                    className="border bg-transparent px-2 py-1 rounded-lg hover:rounded-none resize-none overflow-y-scroll "
                    placeholder="Enter description of the title"
                    
                    />
                    {userInput.videoSrc ? (
                        <video
                        muted
                        src={userInput.videoSrc}
                        controls
                        controlsList="nodownload"
                        disablePictureInPicture
                        
                        ></video>
                    ):(
                    <div className="h-48 flex items-center justify-center border w-full cursor-pointer">
                        <label 
                        className="font-semibold text-xl "
                        htmlFor="lecture">choose your video</label>
                        <input 
                        type="file" 
                        name="lecture" 
                        id="lecture" 
                        accept="video/mp4,video/x-m4v,video/*"
                        onChange={handelVideo}
                        className="hidden"
                        />
                    </div>
                    )}
                    <button
                    type="submit"
                    className="btn-btn-primary
                    pt-1 pb-2 border w-64 text-center
                    p-2 bg-yellow-600 hover:bg-yellow-500 rounded-xl hover:rounded-none text-xl font-semibold transition-all ease-in-out duration-300
                    "
                    >Add new lecture</button>
                </form>
            </div>

        </div>
    </Home>
 )
}
export default Addlecture;