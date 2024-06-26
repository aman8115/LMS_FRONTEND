import './App.css'

import{Route , Routes} from 'react-router-dom'

import Addlecture from './Dashboard/Addlecture.jsx'
import AdminDashboard from './Dashboard/AdminDashboard.jsx'
import DisplayingLecture from './Dashboard/DisplayingLecture.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Contact from './Pages/contactus.jsx'
import Coursedescription from './Pages/courses/courseDesciription.jsx'
import CourseList from './Pages/courses/courseList.jsx'
import Createcourse from './Pages/courses/createcourse.jsx'
import Denied from './Pages/Denied.jsx'
import EditProfile from './Pages/editprofile.jsx'
import HomePage from './Pages/HomePage.jsx'
import Login from './Pages/login.jsx'
import Notfound from './Pages/Notfound.jsx'
import Profile from './Pages/Profile.jsx'
import Signup from './Pages/signup.jsx'
import CheckoutPage from './Payments/chechout.jsx'
import CheckoutFail from './Payments/checkout.fail.jsx'
import CheckoutSuccess from './Payments/checkout.success.jsx'
import RequireAuth from './Requireauth/Requireauth.jsx'



function App() {

  return (
    <>
     <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/aboutus' element={<Aboutus/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
     <Route path='/login'  element={<Login/>}></Route>
     <Route path='/courses' element={<CourseList/>}></Route>
     <Route path='/contactus' element={<Contact/>}></Route>
     <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]}/>}>

     <Route path='/userprofile' element ={<Profile/>}></Route>
     <Route path='/user/editprofile' element={<EditProfile/>}></Route>
    <Route path='/checkout' element ={<CheckoutPage/>}></Route>
    <Route path='/checkout/success' element = {<CheckoutSuccess/>}></Route>
    <Route path='/checkout/fail' element = {<CheckoutFail/>}></Route>
    <Route path='/displayingLecture' element = {<DisplayingLecture/>}></Route>
     </Route>
     
     <Route path='/denied' element={ <Denied/>}></Route>
     <Route element={<RequireAuth allowedRoles={["ADMIN",]}/>} >
      <Route path='/course/create' element={<Createcourse/>}>
       
     
      </Route>
      <Route path='/course/addlecture' element ={<Addlecture/>}></Route>
      <Route path='/admin/dashboard' element ={<AdminDashboard/>}></Route>
     </Route>
     <Route path='/course/description' element={<Coursedescription/>}></Route>
     
     <Route path='*' element={<Notfound/>}></Route>

    
     </Routes>
      
      
    </>
  )
}

export default App
