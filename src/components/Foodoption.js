import {imageGridCards} from "../utils/FoodData";
import Foodcard from "./Foodcard";

export default function Foodoption() {
  return (
    <div className="w-[80%] container mx-auto flex mt-24 overflow-x-auto gap-8">
      {imageGridCards.map((fooddata) => 
        <Foodcard key={fooddata.id} fooddata={fooddata} />
      )}
    </div>
  );
}