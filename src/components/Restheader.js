import { useSelector} from "react-redux";
import { Link } from "react-router";
export default function Restheader(){

    const counter =  useSelector(state => state.cartslice.count);

    return (
        <div className=" py-3 bg-gray-400 text-2xl flex justify-between items-center mt-2">
            <div className="ml-20">
                <p className="text-orange-600 font-bold text-3xl">Swiggy</p>
            </div>
            <div className="flex space-x-5 text-gray-800 text-xl mr-10 font-semibold">
                <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                <a href="https://www.swiggy.com/offers-near-me" target="_blank">Offers</a>
                <a href="https://www.swiggy.com/support" target="_blank">Help</a>
                <Link to = "/Checkout">
                <p>Cart {`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}