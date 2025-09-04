import { useParams} from "react-router"
import { useEffect, useState } from "react";
import Menucard from "./Menucard";
import {Link} from "react-router";
export default function Restmenu({ restmenu}) {
    let {id} = useParams();
    const [restdata, setrestdata] = useState([]);
     const [select , setselect] = useState(null);
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
                fetchdata();
            }, [])
    return (
        <div>
            <div className="w-[70%] mx-auto mt-15 mb-10">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center bg-gray-400 p-4 text-2xl rounded-lg shadow-2xl">Search for dishes</p>
                </Link>
            </div>
            <div className="w-[80%] mt-10 mx-auto border-b-2 border-gray-300 pb-6">
            <button className={`text-2xl py-2 px-4 mr-2 border rounded-xl font-bold ${select === "veg"? "bg-green-400": "bg-gray-400" }`} onClick={()=>setselect(select==='veg' ? null : 'veg')}>Veg</button>
            <button className={`text-2xl py-2 px-4 mr-2 border rounded-xl font-bold ${select === "nonveg"? "bg-red-400": "bg-gray-400" }`} onClick={()=>setselect(select==='nonveg' ? null : 'nonveg')}>Non Veg</button>
            </div>
     <div className="w-[80%] mx-auto">
            {
                restdata.map((menuitem) => <Menucard key={menuitem?.card?.card?.title} menuitem={menuitem?.card?.card} foodselect={select}></Menucard>)
            }
     </div>
     </div>
    )
}


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=17301&catalog_qa=undefined&query=tan&submitAction=ENTER
//  https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.960059122809971&lng=77.57337538383284&str=tan&trackingId=undefined&includeIMItem=true