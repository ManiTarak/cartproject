import React from 'react';


const CartItem = (props) => {
    const {product}=props;
    return (<div className="cartitem">
        <div className="leftblock">
        <img src="{props.img}"  height="250px" width="250px"></img>
        </div>
        <div className="rightblock">
            <div className="title">{product.title}</div>
            <div className="price">Rs {product.price}</div>
            <div className="Qty">Qty : {product.qty}</div>
            <div className="cartitem-actions">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" onClick={()=>{props.increaseQuantity(product)}} height="25px" width="25px"></img>
            <img src="https://cdn-icons-png.flaticon.com/512/56/56889.png" onClick={()=>{props.decreaseQuantity(product)}} height="25px" width="25px"></img>
            <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" onClick={()=>{props.deleteItem(product)}} height="25px" width="25px"></img></div>
        </div>
        
    </div>);
}
export default CartItem;