import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resInfo,setResInfo] = useState(null);

  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  const [showIndex, setShowIndex] = useState(null);

  /*useEffect(() => {
        fetchRestaurantInfo()
    },[])

    

    const fetchRestaurantInfo = async () => {
        const resData= await fetch(MENU_URL+resID)
    
        const resJson= await resData.json();
        console.log(resJson)
        setResInfo(resJson.data)
    }*/

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log({ itemCards });

  console.log(
    "cards details::",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("Item category::", categories);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-6"> {name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ") + " - " + costForTwoMessage}
      </p>
      {/* <ul>
                {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name}  - Rs. {item.card.info.price/100}</li>)}
                
            </ul> */}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory key={index} data={category.card?.card} 
        showItem={index === showIndex ? true : false}
        setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
