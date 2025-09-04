 import {additems, incitems, decitems} from "../store/Cartslice";
import { useDispatch, useSelector } from "react-redux";
export default function Restinfo({ restdata }) {

    
    const dispatch = useDispatch();
   const items =  useSelector((state) => state.cartslice.items); 
   const ele =  items.find(items => items.id === restdata.id);

    const count = ele ? ele.quantity  : 0;
    function handleadditem(){
        dispatch(additems(restdata));
    }
    function handleincitem(){
        dispatch(incitems(restdata));
    }

    function handledecitem(){
        dispatch(decitems(restdata));
    }
    return (
        <>
        <div className="flex w-full justify-between mb-10">
            <div className="w-[70%]">
                <p className="text-[18px] text-gray-700 font-semibold mb-1">{restdata?.name}</p>
                <p className=" text-gray-700 font-bold">{"₹"+("defaultPrice" in restdata? restdata?.defaultPrice/100 : restdata?.price/100)}</p>
                <p className="text-green-800 font-bold mb-1">{restdata?.ratings?.aggregatedRating?.rating}</p>
                <p className=" text-gray-600">{restdata?.description}</p>
            </div>

            <div className="w-[20%] relative">
                <img 
                    className="w-42 h-40 object-cover mt-7 rounded-[10px] shadow-xl" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restdata?.imageId} 
                    alt="Restaurant"
                />

                {
                (count===0)?(<button className="absolute bottom-1 left-10 rounded-[7px] text-green-700 px-7 py-1 bg-white border border-green-700 hover:bg-green-900 hover:text-white transition-colors dura tion-300 ease-in-out font-semibold" onClick={()=> handleadditem()}>
                    ADD
                </button>):(
                    <div className=" absolute flex text-xl bottom-1 left-10  text-green-700 gap-4 px-5  py-1  bg-white border border-green-700 hover:bg-green-900 hover:text-white transition-colors duration-300 ease-in-out font-semibold" > 
                        <button onClick={()=> handledecitem()}>-</button>
                        <span>{count}</span>
                        <button onClick={()=> handleincitem()}>+</button>
                    </div>
                )
                }
            </div>

        </div>
        <hr className="border-gray-300 my-5"></hr>
        </>
    )
}
