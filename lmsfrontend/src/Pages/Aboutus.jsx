import aboutImage  from '../image/aboutMainImage.png'
import apj from '../image/apj.png'
import billGates from '../image/billGates.png'
import einstein from '../image/einstein.png'
import nelsonmandela from '../image/nelsonMandela.png'
import steveJobs from '../image/steveJobs.png'
import Home from "../Layouts/HomeLayout";

function Aboutus(){
return(
    <>
    <Home>
          <div className="ml-16 mt-16 text-white flex flex-col items-center justify-center" >

            <div  className="flex items-center gap-8 mx-10">

                <section className="">
                    <h1>Affordable and quality education</h1>
                    <p>Our goal is provide affordable and quality education.
                        we are providing the plateform for aspiring teacher and student to share thier skills , creativity and knowladge to each other
                    </p>
                </section>
                <div className='w-1/2'>
                    <img
                    id='test1 '
                    style={{filter:'drop-shadow(0px 10px 10px reb(0,0,0))'}}
                    src={aboutImage} alt="" />
                </div>
            </div>
       <div className=' carousel  w-1/2 my-15 m-auto'
           >
             <div id ="slide1" className='carousel-item relative w-full '>
                 <div className='flex flex-col items-center justify-between gap-4 px[15%]'>
                 <img src={apj} alt=""  className='w-1/2 rounded-xl'/>
                 <div className='absolute flex items-center
              justify-between transform -translate-y-1/2   left-5 right-5 top-1/2'>
                <a href="#slide5" className='btn btn-circle'>❮</a>
                <a href="#slide2" className='btn btn-circle'>❯</a>

             </div>
                 </div>
             </div>
            
             <div id='slide2' className=' w-full carousel-item relative'>
               <div className="flex flex-col items-center justify-between gap-4 px[15%]">
               <img src={billGates} alt="billGates"  className='w-1/2 rounded-xl'  />
                <div className=' absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href="#slide1" className='btn btn-circle'>❮</a>
                <a href="#slide3" className='btn btn-circle'>❯</a>
                </div>
               </div>

             </div>
             <div id='slide3' className='w-full carousel-item relative'>
                <div className='flex flex-col items-center
                 justify-center gap-5 px[15%]'>
                    <img src={einstein} alt="" className='w-1/2  rounded-xl' />
                 </div>
                 <div className='absolute flex items-center justify-between transform -tanslate-y-1/2 left-5 right-5 top-1/2
                  '>
                    <a href="#slide2" className='btn btn-circle'>❮</a>
                  <a href="#slide4" className='btn btn-circle'>❯</a>
                  </div>
            </div>
            <div id="slide4" className='w-full carousel-item relative'>
                <div className='felx flex-col items-center justify-center gap-4 px[15%] '>
                    <img src={nelsonmandela} alt="" className='w-1/2 rounded-xl' />
                </div>
                <div className='absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href="#slide3" className='btn btn-circle'>❮</a>
                  <a href="#slide5" className='btn btn-circle'>❯</a>
                </div>

            </div>
            <div id='slide5'  className='w-full carousel-item relative'>
                <div className='flex felx-col items-center justify-center gap-4 px[15%]
                 '>
                    <img src={steveJobs}alt="" className='w-1/2 rounded-xl' />
                    <div className='absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <a href="#slide4" className='btn btn-circle'>❮</a>
                  <a href="#slide1" className='btn btn-circle'>❯</a>
                    </div>

                 </div>
            </div>

     </div>

      
              
     </div>

    </Home>
    </>
)

}
export default Aboutus;