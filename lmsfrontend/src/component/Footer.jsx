import { FaFacebook , FaInstagram, FaLinkedin,FaTwitter,FaYoutube} from "react-icons/fa";
function Footer(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return(
        <>
        <footer className="h-[10vh] relative left-0 right-0 flex justify-between flex-col sm:flex-row items-center py-6 sm:psx-20 bg-gray-600">
            <section className="text-lg">
                copyRight &copy;{year} AllRight reserved

            </section>
            <section className="flex items-center justify-center gap-4 text-xl  text-white">
              <a href=""><FaFacebook/></a>
                <a href=""><FaInstagram/></a>
                <a href="https://www.linkedin.com/feed/ " target="blank"><FaLinkedin/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaYoutube/></a>
            </section>

        </footer>
        </>
    )
}
export default Footer;