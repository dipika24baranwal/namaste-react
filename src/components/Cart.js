import {useSelector , useDispatch} from "react-redux"
import {clearCart} from "../utils/cartSlice"
import ItemList from "./ItemList"

const Cart =() => {
    const cartItems= useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart =() =>{
        dispatch(clearCart())
    }
    console.log("cartItems::", cartItems)

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-xl font-bold ">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                 {cartItems.length === 0? <h1>Cart is empty!!!</h1> : <ItemList items={cartItems} />}
            </div>
        </div>
    )
}

export default Cart