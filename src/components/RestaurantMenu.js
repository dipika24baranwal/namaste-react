import {useEffect, useState} from "react"
import Shimmer from "./Shimmer"
import {MENU_URL} from "../utils/constants";
import {useParams} from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    //const [resInfo,setResInfo] = useState(null);

    const {resID} =useParams();

    const resInfo = useRestaurantMenu(resID);

    /*useEffect(() => {
        fetchRestaurantInfo()
    },[])

    

    const fetchRestaurantInfo = async () => {
        const resData= await fetch(MENU_URL+resID)
    
        const resJson= await resData.json();
        console.log(resJson)
        setResInfo(resJson.data)
    }*/

   if (resInfo === null) return <Shimmer /> 
    const {name, cuisines, costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    console.log({itemCards})

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ") +" - "+ costForTwoMessage}</p>
            <ul>
                {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name}  - Rs. {item.card.info.price/100}</li>)}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;