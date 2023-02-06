import React from 'react';
import CartItem from "./CartItem.js"

class Cart extends React.Component{
    
  render(){
    return(<div style={{"margin":"10px"}}>
        <CartItem/>
        <CartItem/>

    </div>);
  }
}
export default Cart;