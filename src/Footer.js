import React from 'react';


const Footer = (props) => {
    return (
       <div className="Footerdiv">
        <label>Total Price  {props.tPrice}</label>
       </div> 
    );
}
export default Footer;