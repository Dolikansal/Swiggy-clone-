import {dineoutRestaurants} from "../utils/Dinedata";
import Dinecard from "./Dinecard";
export default function Dineoption(){
    return (
        <div className="mt-20 w-[90%] container mx-auto">
            <h1 className="font-bold text-2xl">Discover best restaurants on Dineout</h1>

            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    dineoutRestaurants.map((resturant) =>
                        <Dinecard key = {resturant?.info?.id} resturant = {resturant}></Dinecard>
                    )
                }
            </div>
        </div>
    )
}