import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import {useSelector} from "react-redux"

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const {loggedinUserName} = useContext(UserContext);

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items)

  console.log("Header",cartItems);
  const onlineSatus=useOnlineStatus();
  return (
    <div className="flex justify-between shadow-xl bg-pink-200">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center-items">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">
            Online Status: {onlineSatus?  "✅" : "🔴"}
          </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/cart">Cart - ({cartItems.length} Items)</Link></li>
          
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="px-4">{loggedinUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
