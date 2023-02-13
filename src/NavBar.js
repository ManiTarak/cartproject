import React from 'react';


const Navbar = (props) => {
    return (
       <div className="Navbardiv">
        <img src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" alt="cart-image" height="50px" width="50px" />
        <span>{props.count}</span>
       </div> 
    );
}
export default Navbar;