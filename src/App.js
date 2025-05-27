import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const resObj = {
  info: {
    id: "625927",
    name: "Kathi Junction",
    cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
    locality: "Bunglow Madhuvan Colony",
    areaName: "Prasia Road",
    costForTwo: "₹200 for two",
    cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
    avgRating: 4.2,
    parentId: "1935",
    avgRatingString: "4.2",
    totalRatingsString: "368",
    sla: {
      deliveryTime: 68,
      lastMileTravel: 12.2,
      serviceability: "SERVICEABLE",
      slaString: "65-70 mins",
      lastMileTravelString: "12.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-05-23 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹999",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-3e68d39e-72c1-448f-827b-ca1711b98798",
  },
  cta: {
    link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
    type: "WEBLINK",
  },
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
