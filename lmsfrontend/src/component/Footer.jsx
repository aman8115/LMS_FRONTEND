import { FaFacebook , FaInstagram, FaLinkedin,FaTwitter,FaYoutube} from "react-icons/fa";
function Footer(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return(
        <>
        <footer className='relative bottom-0 left-0 h-[10v] flex flex-col sm:flex-row items-center justify-between bg-gray-800  text-white'>
            <section className='text-xl'>
             CopyRight &copy; {year} || All Right resrved
            </section>
            <section className=' text-xl flex '>
                <a className="hover:text-yellow-600 transition-all ease-in-out duration-300" href=""> <FaYoutube/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaLinkedin/></a>
                <a href=""> <FaFacebook/> </a>
            </section>

        </footer>
        </>
    )
}
export default Footer;