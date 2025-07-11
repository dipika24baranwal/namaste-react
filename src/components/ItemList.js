import {CON_URL} from "../utils/constants"
import {useDispatch} from "react-redux"
import {addItem} from "../utils/cartSlice"

const ItemList = ({ items, dummy }) => {

  const dispatch= useDispatch()

  const handleAddItem =(item)=> {
    dispatch(addItem(item))
  }
  console.log("items::", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.name}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
            
            <div className="w-9/12">
          <div className="py-2">
            <span>{item.card.info.name} - </span>
            <span>
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute"><button className="border-2 bg-black text-white rounded-lg shadow-lg mb-20 p-2" onClick= {() =>handleAddItem(item)}  > Add +</button> </div>
          <img src= {CON_URL+item.card.info.imageId}  />
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
