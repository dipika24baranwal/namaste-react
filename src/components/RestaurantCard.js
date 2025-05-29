import {CON_URL} from "../utils/constants";

 const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    props.resData.info;
  return (
    <div className="restuarant-card">
      <img
        className="restuarant-logo"
        src={
          CON_URL+
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating + "stars"} </h4>
      <h4>{sla.deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard;