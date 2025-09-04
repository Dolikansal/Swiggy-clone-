import { banners } from "../utils/Delivery";

export default function Footer() {
  return (
    <div>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="App download" />
      <div>
        <h1 className="font-bold text-2xl mt-10 mb-10 ml-12">Cities with food delivery</h1>

        <div className="flex overflow-x-auto gap-4 max-w-[90%] container mx-auto mb-10">
          {banners.filter(banner => banner.id === "cityFoodPages").map((banner, bannerIndex) => (
            banner.categories?.map((category, categoryIndex) => (
              <div 
                key={`${bannerIndex}-${categoryIndex}`} 
                className="w-[185px] h-[71px] flex items-center justify-center border border-gray-200 rounded-lg shrink-0"
              >
                <a target = "_blank" href={category.link} className="text-black text-center p-2">
                  {category.text}
                </a>
              </div>
            ))
          ))}
        </div>


        <h1 className="font-bold text-2xl mt-10 mb-10 ml-12">Cities with grocery delivery</h1>

        <div className="flex overflow-x-auto gap-4 max-w-[90%] container mx-auto mb-10">
          {banners.filter(banner => banner.id === "cityImPages").map((banner, bannerIndex) => (
            banner.categories?.map((category, categoryIndex) => (
              <div 
                key={`${bannerIndex}-${categoryIndex}`} 
                className="w-[185px] h-[71px] flex items-center justify-center border border-gray-200 rounded-lg shrink-0"
              >
                <a target = "_blank" href={category.link} className="text-black text-center p-2">
                  {category.text}
                </a>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}