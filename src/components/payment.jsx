import React from 'react';
import '../styles/payment.css'
import { useStateValue } from "./StateProvider";
import Checkout from "./checkout" 
import Items from './items';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    

  return (
    <div>
        <div className='payment_header'>
            <h2>Checkout <span className='numberof_items'>({basket.length} items) </span></h2>
        </div>
        <div className='payment_body'>
            <div className='payment_container'>
                <div className='payment_left'>Delivery address</div>
                <div className='payment_right'>
                    <p>{user.email}</p>
                    <p>1001 Ocala road 314 C block</p>
                    <p>Tallahasee,FL</p>
                    
                </div>
            </div>
            <div className='payment_line'></div>
           
            <div className='payment_container'>
                <div className='payment_left'>Review items and delivery</div>
                <div className='payment_right'>
                    <Items/>
                    
                </div>

            </div>
            <div className='payment_line'></div>
            <div className='payment_container'>
                <div className='payment_left'>Payment method</div>
                <div className='payment_right'>Card details</div>
            </div>
            <div className='payment_line'></div>
        </div>

    </div>
  )
}

export default Payment;