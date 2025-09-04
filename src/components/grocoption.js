import { GrocGridCards } from "../utils/groc"
import Groccard from "./Groccard";
export default function Grocoption(){
    return (
        <div className="mt-20 w-[90%] container mx-auto">
            <h1 className="font-bold text-2xl">Shop groceries on Instamart</h1>
            <div className="w-[90%] container mx-auto flex flex-nowrap mt-8 overflow-x-auto gap-8">
              {GrocGridCards.map((fooddata) => 
                <Groccard key={fooddata.id} fooddata={fooddata} />
              )}
            </div>
        </div>
    )
}