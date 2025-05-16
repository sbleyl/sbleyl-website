import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

function OrderQuantity({ onQuantityChange }) {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        if (quantity === 10){
            setQuantity(10);
        } else {
            setQuantity(quantity + 1);
            onQuantityChange(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity === 0) {
            setQuantity(0);
        } else {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    }

    return (
       <div class="clicker">
            <h2>Order Quantity</h2>
            <i><FaMinus onClick={decrement} /></i>
            {quantity}
            <i><FaPlus onClick={increment} /></i>
       </div>
    );
}
export default OrderQuantity;