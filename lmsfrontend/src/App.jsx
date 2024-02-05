import './App.css'

import{Route , Routes} from 'react-router-dom'

import Aboutus from './Pages/Aboutus.jsx'
import HomePage from './Pages/HomePage.jsx'



function App() {

  return (
    <>
     <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/aboutus' element={<Aboutus/>}></Route>
    
     </Routes>
      
      
    </>
  )
}

export default App
