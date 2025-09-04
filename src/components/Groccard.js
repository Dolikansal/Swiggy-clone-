import { GrocGridCards} from "../utils/groc";
export default function Groccard({fooddata}){
    return(
        // <>
        // <div className="flex-none">
        // <img className="h-45 w-36 object-cover" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+fooddata?.imageId}></img>
        // <h2>{fooddata.action.text}</h2>
        // </div>
        // </>

        <>
        <div className="flex-none">
        <a href={fooddata.action.link}>
        <img className="h-45 w-36 object-cover" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+fooddata?.imageId}></img>
        <h2 className="font-bold text-gray-500 font-5-gilory">{fooddata.action.text}</h2>
        </a>
        </div>
        </>
       
    )
} 