export default function Dinecard({ resturant }) {
    return (
        <div className="max-w-sm flex-none mb-20 transform transition duration-200 hover:scale-95 hover:shadow-xl ">
            <a target="_blank" href={resturant.cta.link}>
                <div className="relative">
                    <div className="relative h-60 w-85">
                        <img 
                            className="h-full w-full object-cover rounded-2xl" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + resturant.info.mediaFiles[0].url} 
                            alt={resturant?.info?.name}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/100 to-transparent"></div>
                        <p className="absolute bottom-2 left-2 text-large text-white">{resturant?.info?.name}</p>
                        <p className="absolute bottom-2 right-2 text-large text-white">{resturant?.info?.rating?.value}</p>
                    </div> 
                </div>
                <div className="mt-2 relative">
                    <div className="flex justify-between">
                        <p className="text-gray-400">{resturant.info.cuisines}</p>
                        <p className="text-gray-400">{resturant.info.costForTwo}</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p className="text-gray-400">{resturant.info.locationInfo.landmarkName}</p>
                        <p className="text-gray-400">{resturant.info.locationInfo.distanceString}</p>
                    </div>
                    <button className="mt-2 text-gray-400">Table Booking</button>
                    <div className="flex mt-2 justify-between bg-[#1BA672] h-10 w-85 rounded-[8px] p-2 text-white">
                        <p>Flat 10% OFF on walk in</p>
                        <p>+2 more</p>
                    </div>
                    <div className="flex mt-2 justify-between bg-[#C8F9E5] h-10 w-85 rounded-[8px] p-2 text-[#1BA672]">
                        <p>Up to 10% OFF with bank offers</p>
                    </div>
                </div>
            </a>
        </div>
    )
}