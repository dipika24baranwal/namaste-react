import {CON_URL} from "../utils/constants";

 const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    props.resData.info;
  return (
    <div className="p-4 m-4 w-[250] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="restuarant-logo rounded-lg"
        src={
          CON_URL+
          cloudinaryImageId
        }
      />
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating + "stars"} </h4>
      <h4>{sla.deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard;