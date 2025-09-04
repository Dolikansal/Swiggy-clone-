import { useSelector } from "react-redux";
export default function Checkout() {
    const items = useSelector(state => state.cartslice.items);
    return(
        <div>
            <h1 className="bg-black text-white p-4 font-bold text-5xl text-center">Items added to cart is: </h1>
        <div className=" py-8 bg-gray-500">
            {
                items.map((value, index) => <div key={index} className="text-3xl p-2 mx-8">{value.name}</div>)
            }
        </div>
        </div>
    )
}