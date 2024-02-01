import { FaFacebook , FaInstagram, FaLinkedin,FaTwitter,FaYoutube} from "react-icons/fa";
function Footer(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return(
        <>
        <footer className=' w-full '>
           <section className="  bg-red-500  flex justify-between">

           <div className='text-xl  '>
             CopyRight &copy; {year} || All Right resrved
            </div>
            <div className=' text-xl flex '>
                <a className="hover:text-yellow-600 transition-all ease-in-out duration-300" href=""> <FaYoutube/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaLinkedin/></a>
                <a href=""> <FaFacebook/> </a>
            </div>

           </section>
        </footer>
        </>
    )
}
export default Footer;