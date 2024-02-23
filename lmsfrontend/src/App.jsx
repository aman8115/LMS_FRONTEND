import './App.css'

import{Route , Routes} from 'react-router-dom'

import Aboutus from './Pages/Aboutus.jsx'
import Contact from './Pages/contactus.jsx'
import Coursedescription from './Pages/courses/courseDesciription.jsx'
import CourseList from './Pages/courses/courseList.jsx'
import Denied from './Pages/Denied.jsx'
import HomePage from './Pages/HomePage.jsx'
import Login from './Pages/login.jsx'
import Notfound from './Pages/Notfound.jsx'
import Signup from './Pages/signup.jsx'



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
     <Route path='/denied' element={ <Denied/>}></Route>
     <Route path='/course/description' element={<Coursedescription/>}></Route>
     <Route path='*' element={<Notfound/>}></Route>

    
     </Routes>
      
      
    </>
  )
}

export default App
