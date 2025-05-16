import { useState } from 'react';
import OrderQuantity from './OrderQuantity.jsx';

function OrderRow({ product, onQuantityChange }) {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    const subtotal = quantity * product.price;

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
            <td><OrderQuantity onQuantityChange={handleQuantityChange} /></td>
            <td>{subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
        </tr>
    );
}

export default OrderRow;