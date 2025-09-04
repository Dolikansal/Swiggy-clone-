import { useParams} from "react-router";
import { useState , useEffect } from "react";
export default function Searchfood(){
    const id = useParams();
    const [food, setfood] = useState("");
    const [restdata, setrestdata] = useState([]);
    useEffect(() => {
        async function fetchdata(){
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const response = await fetch(proxy + `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=${id}`)
            const data = await response.json();
            const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterdata = tempdata.filter((item) => 
                'title' in item?.card?.card && item?.card?.card?.title !== "Top Picks"
            );
            setrestdata(filterdata); 
        }
        if(food.length > 1){
        fetchdata();
        }
    }, [food])

    return (
        <div className="w-[70%] mx-auto mt-15 mb-20">
        <input className="w-full pl-10 py-7 text-2xl bg-gray-200" placeholder="Search here" onChange={(e)=>setfood(e.target.value)}></input>
        </div>
    )
}