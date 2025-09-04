import { useState } from "react";
import Restinfo from "./Restinfo";

export default function Menucard({ menuitem,  foodselect }) {
    const [isopen, setisopen] = useState(true);

    if ("categories" in menuitem) {
        return (
            <div className="w-full">
                <p className="mb-6 mt-8 text-3xl font-bold text-gray-800 border-b-2 border-amber-500 pb-2">
                    {menuitem?.title}
                </p>
                <div className="space-y-8">
                    {menuitem.categories.map((items) => (
                        <Menucard key={items.title} menuitem={items} foodselect={foodselect}/>
                    ))}
                </div>
            </div>
        );
    }

    if (!isopen) {
        return (
            <div className="w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center w-full p-4">
                    <p className="text-2xl font-bold text-gray-800">
                        {menuitem?.title}
                    </p>
                    <button
                        className="text-2xl mr-4 text-amber-600 hover:text-amber-800 transition-colors"
                        onClick={() => setisopen(!isopen)}
                    >
                        {isopen ? "▲" : "▼"}
                    </button>
                </div>
            </div>
        );
    }

    if(foodselect === 'veg' ){
        return (
            <div className="w-full mt-12">
            <div className="flex justify-between items-center w-full p-4">
                <p className="text-2xl font-bold text-gray-800">
                    {menuitem?.title}
                </p>
                <button
                    className="text-2xl mr-4 text-green-700 hover:text-amber-800 transition-colors"
                    onClick={() => setisopen(!isopen)}
                >
                    {isopen ? "▲" : "▼"}
                </button>
            </div>
            <div className="divide-y divide-gray-100">
                {menuitem?.itemCards?.filter((food) =>"isVeg" in food?.card?.info).map((items) => (
                    <Restinfo
                        key={items?.card?.info?.id}
                        restdata={items?.card?.info}
                    />
                ))}
            </div>
        </div>
        )
    }

    if(foodselect === 'nonveg' ){
        return (
            <div className="w-full mt-12">
            <div className="flex justify-between items-center w-full p-4">
                <p className="text-2xl font-bold text-gray-800">
                    {menuitem?.title}
                </p>
                <button
                    className="text-2xl mr-4 text-green-700 hover:text-amber-800 transition-colors"
                    onClick={() => setisopen(!isopen)}
                >
                    {isopen ? "▲" : "▼"}
                </button>
            </div>
            <div className="divide-y divide-gray-100">
                {menuitem?.itemCards?.filter((food) =>!("isVeg" in food?.card?.info)).map((items) => (
                    <Restinfo
                        key={items?.card?.info?.id}
                        restdata={items?.card?.info}
                    />
                ))}
            </div>
        </div>
        )
    }

    return (
        <div className="w-full mt-12">
            <div className="flex justify-between items-center w-full p-4">
                <p className="text-2xl font-bold text-gray-800">
                    {menuitem?.title}
                </p>
                <button
                    className="text-2xl mr-4 text-green-700 hover:text-amber-800 transition-colors"
                    onClick={() => setisopen(!isopen)}
                >
                    {isopen ? "▲" : "▼"}
                </button>
            </div>
            <div className="divide-y divide-gray-100">
                {menuitem?.itemCards?.map((items) => (
                    <Restinfo
                        key={items?.card?.info?.id}
                        restdata={items?.card?.info}
                    />
                ))}
            </div>
        </div>
    );
}