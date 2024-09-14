import React from "react";
import '../styles/checkout.css';
import Subtotal from "./subtotal";
import { useStateValue } from "./StateProvider";
import Items from './items'

function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();
   
    
   

    return (
        <div className="checkout">
            <div className="box">
                <h1 className="basket_header">Hey <span className="name">{user?user.email  :'Guest   '}</span> , your shopping basket</h1>
                <Items/>
               
            </div>
            <div className="box2">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
