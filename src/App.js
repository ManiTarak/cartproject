import './App.css';
import React from "react";
import Cart from './Cart.js';
import Navbar from './NavBar.js';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[{
            title:"Watch",
            price:"99/-",
            qty:11,
            id:1
        },
        {
            title:"Phone",
            price:"9999/-",
            qty:1,
            id:2
        },
        {
            title:"Mac",
            price:"99999/-",
            qty:1,
            id:3
        }],
    

handleIncreaseQuantity : (product)=>{
   const {products}=this.state;
   const index=products.indexOf(product);
   products[index].qty+=1;
   this.setState({
    products:products
   })
},
handleDecreaseQuantity : (product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty==0){
        return;
    }
    products[index].qty-=1;
    this.setState({
     products:products
    })
 },
 handleDeleteCartItem : (product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products.splice(index,1);
    this.setState({
     products:products
    })
 }
}
}
  render(){
    const {products,handleIncreaseQuantity,handleDecreaseQuantity,handleDeleteCartItem}=this.state;
    console.log("App",products);
    console.log("handleIncreaseQuantity",handleIncreaseQuantity);
  return (
    <div className="App">
      <Navbar />
      <Cart className="cartClass" product={products} increaseQuantity={handleIncreaseQuantity} decreaseQuantity={handleDecreaseQuantity} deleteItem={handleDeleteCartItem}/>
    </div>
  );
  }
}

export default App;
