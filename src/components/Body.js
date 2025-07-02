import RestaurantCard, {topRatedRestaurantCard} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"

let restaurantList2 = [
  {
    info: {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      avgRating: 3.8,
      sla: {
        deliveryTime: 44,
      },
      costForTwo: "₹250 for two",
    },
  },

  {
    info: {
      id: "150591",
      name: "Meghana Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      avgRating: 4.4,
      sla: {
        deliveryTime: 44,
      },
      costForTwo: "₹250 for two",
    },
  },
];

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListRestaurant, setFiltereListdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json();
    console.log(
      "jsondData::",
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFiltereListdRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineSatus = useOnlineStatus();
console.log(onlineSatus)
  if(onlineSatus === false) {
    return (<h1>Seems like you're offline! Please check your internet connection!!!</h1>)
  }

const {loggedinUserName, setUserName} = useContext(UserContext)

console.log(
      "ListofRestaurant::",listOfRestaurant );
  //console.log("body render::", searchText)
 const TopRatedRestaurant = topRatedRestaurantCard(RestaurantCard)
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="searchText m-4 p-4" >
          <input className="border border-solid border-black" value={searchText} onChange = {
            (e)=> {
              setSearchText(e.target.value)
            }
          } />
          <button className="px-4 mx-4 bg-green-300 rounded-lg items-center" onClick = {
            ()=>{
              let filterRestaurant= listOfRestaurant.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setFiltereListdRestaurant(filterRestaurant);
            }
          }>Search</button>
        </div>
        <div className=" m-4 p-4">
          <button
          className="px-4 mx-4 bg-blue-300 rounded-lg items-center"
          onClick={() => {
            const filtertheRestaurant = listOfRestaurant.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRestaurant(filtertheRestaurant);
          }}
        >
          Top rated Restaurants
        </button>
        </div>
<div className=" m-4 p-4">
         <input className="p-1 border-black border" value={loggedinUserName} onChange={(e) => setUserName(e.target.value)} />
        </div>

      </div>

      <div className="flex flex-wrap">
        {/* {resList.map(res=> <RestaurantCard key = {res.info.id} resData={res}/> )}  */}
        {/* {listOfRestaurant.map(res=> <RestaurantCard key = {res.data.id} resData={res}/> )}  */}
        {filteredListRestaurant.map((res) => (
          <Link key={res.info.id} to = {"/restaurants/"+res.info.id}>
            {res.info.avgRating === 4.2 ? <TopRatedRestaurant resData={res} /> : <RestaurantCard  resData={res} />}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
