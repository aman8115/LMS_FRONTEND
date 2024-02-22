import { useNavigate } from "react-router";


function Denied(){
    const navigate = useNavigate()

return (
    <main className="w-full h-screen  flex flex-col items-center justify-center bg-sky-500
    ">
        <h1 className="text-9xl font-extrabold tracking-widest text-white">403</h1>
        <div className="absolute pt-6 rotate-12 ">
            <span className="text-amber-600 text-2xl bg-black tracking-widest pb-2 w-full  ">Denied</span>
        </div>
        <div className="w-1/4 text-center tracking-wider border border-blue-400 bg-blue-600 pt-1 pb-1 rounded-xl" onClick={()=>navigate('/')}>Go Back</div>
    </main>
)

}
export default Denied;