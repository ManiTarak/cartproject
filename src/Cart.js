import React from 'react';
import CartItem from "./CartItem.js"

const Cart=(props)=>{
    const {product}=props;
    console.log("cart",props);
    return(<div>
        {
        product.map((product)=>{return(<CartItem product={product} key={product.id} increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} deleteItem={props.deleteItem}/>);})
        }
        </div>);
}
export default Cart;