import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {  BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Home from "../Layouts/HomeLayout";
import { UpdateUser } from "../Redux/Slice/Authslice";


// function EditProfile(){
//     const dispatch = useDispatch()
//     const[data,Setdata] = useState({
//         previewImage:'',
//         fullName:"",
//         avatar:undefined,
//         userID: useSelector((state) => state?.auth?.data?._id),
//     })
//     function handelUploadedImage(e){
//         e.preventDefault();
//         const uploadedImage = e.target.files[0]
//         if(uploadedImage){
           
//            const fileReader = new FileReader()
//            fileReader.readAsDataURL(uploadedImage)
//            fileReader.addEventListener('load',function(){
//             Setdata({
//                 ...data,
//                 previewImage:this.result,
//                 avatar:uploadedImage
//             })
//            })

//         }
//     }
//      function handelUserInput(e){
//           const{name, value} = e.target
//           Setdata({
//             ...data,
//             [name]:value
//           })
//     }
//   async  function OnformSubmit(e){
//         e.preventDefault();
//         if(!data.fullName||!data.avatar){
//             toast.error(" All fields are required")
//         }
//         const formData = new FormData()
//         formData.append("fullName",data.fullName)
//         formData.append("avatar",data.avatar)
        
    
//         await dispatch(UpdateUser([data.userID, formData]));
//         console.log("id",data.userID,data)
//     }
//     return(
//         <Home>
//  <div className="h-[100vh] flex items-center justify-center ">
//     <form noValidate
//     onSubmit={OnformSubmit}
//     className="flex flex-col items-center justify-center gap-5 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]"
//     >
        
//             <h1 className="text-xl font-semibold">EditProfile</h1>
//             <label htmlFor="image_uploads" className="cursor-pointer ">
//             {data.previewImage?(<img className="h-24 w-24 rounded-full m-auto" src={data.previewImage}/>):(<BsPersonCircle className="h-24 w-24 rounded-full m-auto text-white"/>)}
//         </label>
//         <input type="file" name="image_uploads" id="image_uploads" 
//         onChange={handelUploadedImage}
//         accept=".jpg,.jpeg,.png"
//         className="hidden"
//         />
//         <label htmlFor="fullName" className="cursor-pointer"></label>
//         <input type="text" name="fullName" id="fullName"
//         placeholder="Enter Your Name"
//         required
//         className="text-center bg-transparent border px-1 py-1 rounded-lg hover:rounded-none "
//         value={data.fullName}
//         onChange={handelUserInput}
//         />
//         <button type="submit"
//         className="w-full px-1 py-1  bg-yellow-600 rounded-xl text-center transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:rounded-none text-lg tracking-wider"
//         >EditProfile</button>
        
//     </form>

//  </div>

//         </Home>
//     )

// }
function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(data);
        if(!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory");
            return;
        }
       
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        console.log("fullName",data.fullName)
        console.log("avatar",data.avatar)
        formData.append("avatar", data.avatar);
        console.log(formData.entries().next())
        console.log(formData.entries().next())
        await dispatch(UpdateUser({ id: data.userId, data: data }))

 

        navigate("/userprofile");
    }

    return (
        <Home>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold">Edit profile</h1>
                    <label className="cursor-pointer" htmlFor="image_uploads">
                        {data.previewImage ? (
                            <img 
                                className="w-28 h-28 rounded-full m-auto"
                                src={data.previewImage}

                            />
                        ): (
                            <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
                        )}
                    </label>
                    <input 
                        onChange={handleImageUpload}
                        className="hidden"
                        type="file"
                        id="image_uploads"
                        name="image_uploads"
                        accept=".jpg, .png, .svg, .jpeg"

                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-lg font-semibold">Full Name</label>
                        <input 
                            required
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name"
                            className="bg-transparent px-2 py-1 border"
                            value={data.fullName}
                            onChange={handleInputChange}

                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg cursor-pointer">
                        Update profile
                    </button>
                    <Link to="/userprofile">
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                            <AiOutlineArrowLeft /> Go back to profile
                        </p>
                    </Link>
                </form>
            </div>
        </Home>
    );
}




export  default EditProfile