import React from 'react';

class CartItem extends React.Component{
  constructor(){
    super();
    this.state={
      title:"My phone",
      price:999,
      qty:1
    }
    this.testing();
  }
  //testing() is not a eventhandler
  //testing is used to see whether setstate() acts as asynchronous and react renders UI only once not how many times setstate executed
  testing(){
    var promise=new Promise((resolve,reject)=>{
      setTimeout((resolve("done")),5000000)}
    );
    promise.then(()=>{
      this.setState({
        qty:this.state.qty+200
      })
      this.setState({
        qty:this.state.qty+200
      })
      this.setState({
        qty:this.state.qty+200
      })
      console.log(this.state);
    })
   
  }
  //in event handlers batching happening and UI renders only once(whenever the event handler called )
  increaseQuantity=()=>{
   this.setState({
    qty:this.state.qty+1
   });
   this.setState({
    qty:this.state.qty+1
   });
   this.setState({
    qty:this.state.qty+1
   });
   this.setState((prevstate)=>{
    return ({
      qty: prevstate.qty+1
    })
  });this.setState((prevstate)=>{
    return ({
      qty: prevstate.qty+3
    })
  },()=>{
    console.log(this.state.qty);
  });

  }
  decreaseQuantity=()=>{
    const {qty}=this.state;
    if(qty===0){
      return;
    }
    this.setState((prevstate)=>{
      return ({
        qty: prevstate.qty-1
      })
    });
  }
  render(){
    console.log("render called");
    return (<div className="cartitem">
        <div className="leftblock">
            <img/>
        </div>
        <div className="rightblock">
            <div className="title">{this.state.title}</div>
            <div className="price">Rs {this.state.price}</div>
            <div className="Qty">Qty : {this.state.qty}</div>
            <div className="cartitem-actions">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" onClick={this.increaseQuantity} height="25px" width="25px"></img>
            <img src="https://cdn-icons-png.flaticon.com/512/56/56889.png" onClick={this.decreaseQuantity} height="25px" width="25px"></img>
            <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" height="25px" width="25px"></img></div>
        </div>
        
    </div>);
  }
}
export default CartItem;