import {Link} from "react-router";
export default function Restcard({ restinfo }) {
    return (
        <Link to={"/city/delhi/" + restinfo.info.id}>
        <div className="max-w-[240px] container mx-auto mb-5 transform transition duration-200 hover:scale-95 hover:shadow-xl ">
        <img className="w-70 h-46 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo.info.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-semibold text-lg">{restinfo.info.name}</div>
        <div className="flex gap-23">
        <div className="text-lg">{restinfo.info.avgRating}</div>
        <div className="text-lg font-semibold">{restinfo.info.sla.slaString}</div>
        </div>
        <div className="text-gray-500 text-lg mt-1 h-7 overflow-hidden">{restinfo.info.cuisines.join("  ")}</div>
        </div>
        </div>
        </Link>
    )
} 