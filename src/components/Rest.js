import { useEffect } from "react";
import { useState } from "react";
import Restcard from "./Restcard";
import Shimer from "./Shimer";
export default function Rest(){
    const [restdata , setrestdata] = useState([]);
        useEffect(() => {
            async function fetchdata(){
                const proxy = "https://cors-anywhere.herokuapp.com/";
                const response = await fetch(proxy + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true")
                const data = await response.json();

                setrestdata(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); 
            }
            fetchdata();
        }, [])
        
        if(restdata.length === 0){
            return <Shimer></Shimer>
        }
        return (
            <div className="flex flex-wrap w-[90%] mx-auto  mt-20  gap-5">
                {
                    restdata.map((restinfo) =><Restcard key={restinfo?.info?.id} restinfo={restinfo}></Restcard>)
                }
            </div>
        )
}