import './App.css';
import React from "react";
import Cart from './Cart.js';
import Navbar from './NavBar.js';
import Footer from "./Footer.js";
//importing firebase
import firebase from 'firebase/compat/app';

class App extends React.Component{
   
  constructor(){
    super();
    
    this.state={
      loading : true,
         products:[//{
        //     title:"Watch",
        //     price:99,
        //     qty:11,
        //     img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTixQF0-4NW-7i8nJidCWpEEmSbVKB2lCoDP_28I03h3HKYHZh-JWBJydy96-MW_NFQQhCzt_WCxWEo082fCGgQ4Gz9ggdfjTzB3atiNGFO61hi0L6gBL69",
        //     id:1
        // },
        // {
        //     title:"Phone",
        //     price:9999,
        //     qty:1,
        //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DMB5fDz2ESb4aVOzw4TujQYX1k_XE98AgQ&usqp=CAU",
        //     id:2
        // },
        // {
        //     title:"Mac",
        //     price:99999,
        //     qty:1,
        //     img:"https://upload.wikimedia.org/wikipedia/commons/7/76/MacBook-Pro-13inch.jpg",
        //     id:3
        // }
      ],
    
    

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
componentDidMount(){
  // getting data from firebase 
  firebase
  .firestore()
  .collection('Products')
  .get()
  .then((snapshot)=>{
    const products=(snapshot.docs.map((doc)=>{
      const d = doc.data();
      d.id=doc.id;
      return d;
    }));
    
    this.setState((prevState)=>{
   return {
      products:products,
      loading:false
    }});

  })


  
 
}
getCartCount = () => {
    const {products}=this.state;
    var count=0;
    products.forEach((item)=>{
      count=count+item.qty;
    });
    return count;

    }
getTotalPrice =() =>{
  const {products}=this.state;
  var TPrice=0;
  products.forEach((item)=>{
    TPrice=TPrice+(item.qty*item.price);
  })
  return TPrice;
}

  render(){
    const t=true;
    const {products,handleIncreaseQuantity,handleDecreaseQuantity,handleDeleteCartItem}=this.state;
    //initial to show Loading 
    if(this.state.loading){
      return (<h1>Loading Data..........</h1>);
    }
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart className="cartClass" product={products} increaseQuantity={handleIncreaseQuantity} decreaseQuantity={handleDecreaseQuantity} deleteItem={handleDeleteCartItem}/>
      <Footer tPrice={this.getTotalPrice()}></Footer>
    </div>
  );
  }
}

export default App;
