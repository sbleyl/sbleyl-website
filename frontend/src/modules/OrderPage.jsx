import { useState } from 'react';
import OrderRow from './OrderRow.jsx';

function OrderPage({ products }) {
    const [rows, setRows] = useState(products.map(product => {
        return {
            company: product.company,
            product: product.product,
            price: product.price,
            quantity: 0
        };
    }));

    const updateRowQuantity = (index, newQuantity) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                return {
                    company: row.company,
                    product: row.product,
                    price: row.price,
                    quantity: newQuantity
                };
            }
            return row;
        });
        setRows(updatedRows);
    };

    const grandTotal = rows.reduce((total, row) => total + (row.price * row.quantity), 0);

    return (
        <>
            <h2>Order</h2>
            <article>
                <p>
                    Please order from our great selection of pet supplies!
                </p>
                <table id='order'>
                    <caption>Our available inventory</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((product, i) => 
                            <OrderRow 
                                product={product} 
                                key={i} 
                                onQuantityChange={(newQuantity) => updateRowQuantity(i, newQuantity)}
                            />
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4">Running Total</th>
                            <td>{grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
                        </tr>
                    </tfoot>
                </table>
                <br></br>
            </article>
       </>
    );
}
export default OrderPage;