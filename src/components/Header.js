import {Link} from "react-router";
function Header(){
    return (
        <header className="bg-[#ff5200]">
            <div className="flex justify-between items-center container mx-auto p-8">
                <img className="h-12 w-40" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"/>
                <div className="flex items-center gap-8 text-white font-8-gliory">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a target="_blank" className="border p-3 rounded-2xl px-3 py-3">Get the app</a>
                    <a target="_blank" className="bg-black px-7 py-3 rounded-2xl">Sign in</a>
                </div>
            </div>
            <div className= "text-white mt-20 relative">
            <img className="h-115 w-63 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="h-115 w-63 absolute right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <h1 className="font-bold text-5xl text-center max-w-[60%] container mx-auto">Orderd food & grocries. Discover best resturant. Swiggy it !</h1>
                <div className="max-w-[60%] container mx-auto p-8 mt-8 flex gap-5">
                    <input className="bg-white text-base h-15 w-75 rounded-2xl placeholder-gray-500 font-5-gilory p-6"  type = "text" placeholder="Delhi , india"></input>
                    <input className="bg-white text-base h-15 w-121 rounded-2xl placeholder-gray-500 font-5-gilory p-7" type = "text" placeholder="search for resturant , items or more"></input>
                </div>
            </div> 
            <div className="flex justify-center items-center container mx-auto mt-8">
                <Link to="/resturant">
                <img className="h-78 w-82" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                <a target="_blank" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img className="h-78 w-82" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img></a>
                <a target="_blank" href="https://www.swiggy.com/dineout">
                <img className="h-78 w-82" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img></a>
            </div>
        </header>
    ) 
}
export default Header;