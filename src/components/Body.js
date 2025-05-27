import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";



//const [restaurantList,setRestaurantList] = useState(resList);

//let resList= resList;

//console.log("resList::",resList.length)

let restaurantList2=[
    {
        info: {
        id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      avgRating: 3.8,
      sla: {
        deliveryTime: 44
    },
    costForTwo: "₹250 for two"
    }
    },

    {
        info: {
        id: "150591",
      name: "Meghana Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      avgRating: 4.4,
      sla: {
        deliveryTime: 44
    },
    costForTwo: "₹250 for two"
    }
} 
]

const Body = () => {
  const [listOfRestaurant , setListOfRestaurant] = useState([restaurantList]);
  return (
    <div className="body">
      <div className="filter">
        <button className="filer-btn" 
onClick={() => {
  console.log("reslist::", restaurantList.length)
  console.log("listOfRestaurant::", listOfRestaurant.length)
 const filtertheRestaurant = restaurantList.filter((res) => { 
  console.log("resLog::",listOfRestaurant)
  return (  res.data.avgRating > 4)});
 console.log("filteredData::", filtertheRestaurant)
       setListOfRestaurant(filtertheRestaurant)
       }}
            >
                Top rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {/* {resList.map(res=> <RestaurantCard key = {res.info.id} resData={res}/> )}  */}
        {restaurantList.map(res=> <RestaurantCard key = {res.data.id} resData={res}/> )} 
      </div>
    </div>
  );
};

export default Body;