import { imageGridCards} from "../utils/FoodData";
export default function Foodcard({fooddata}){
    return(
        // <>
        // <img className="h-50 w-65 object-cover" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+fooddata?.imageId}></img>
        // </>
        <>
        <div className="flex-none">
        <a href={fooddata.action.link}>
        <img className="h-45 w-36 object-cover" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+fooddata?.imageId}></img>
        </a>
        </div>
        </>
    )
} 