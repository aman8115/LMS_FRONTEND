
import Carouselslide from '../Carousel/carousel'
import { AboutusStore } from '../constant/Aboutusdata';
import aboutImage  from '../image/aboutMainImage.png'
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
          {AboutusStore && AboutusStore.map(slide=> (<Carouselslide {...slide} key={slide.slidenumber} totalslidenumber={AboutusStore.length}/>))}
         
          
          </div>

   </div>

    </Home>
    </>
)

}
export default Aboutus;