
import { useNavigate } from "react-router";

function Coursecard({data}){
    const navigate = useNavigate()
    return(
        <>
        <div
        onClick={()=> navigate('/course/description')}
        
        className="text-white w-[22rem] h-[430px] rounded-lg shadow-xl group overflow-hidden cursor-pointer text-center font-semibold tracking-wider">
            <img 
            className="h-48 w-full rounded-tr-lg rounded-tl-lg transition-all ease-in-out group-hover:scale[1,2]"
            src={data?.thumbnail?.secure_url}alt="" />
            <div className="gap-3">
                <h1 className="text-yellow-500 tracking-widest text-xl">{data.title}</h1>
                <p className="font-semibold text-lg text-lime-500">{data.description}</p>
                <p>{data.category}</p>
                <p className="text-xl font-thin text-amber-800 ">{data.createdBy}</p>
            </div>

        </div>
        </>
    )
}
export default Coursecard;