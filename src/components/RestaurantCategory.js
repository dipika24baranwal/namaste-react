import ItemList from "./ItemList";
import {useState} from "react"

const RestaurantCategory = ({ data , showItem, setShowIndex}) => {
//const [showItem, setShowItem] = useState(false);
  //console.log("data::", data)
const handleClick =() => {
    //setShowItem(!showItem)
    setShowIndex()
}
  return (
    <div className="">
      <div className="w-6/12 shadow-xl mx-auto my-4 bg-gray-100  p-4">

        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
