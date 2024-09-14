import React from "react";
import '../styles/product.css'
import { useStateValue } from "./StateProvider";


function Product(props) {
    const stars = Array.from({ length: props.rating }, (_, index) => (
        <span className="star">&#9733;</span>
      ));
      const [{basket},dispatch]= useStateValue();
      //the above line simply gets us the basket state and the action to be dispatched
      console.log(basket);
      const add= () => {
        //here we are adding the product to data layer
        dispatch(
            {
                type:'add',
                item:{
                    pid:props.pid,
                    name:props.name,
                    image:props.src,
                    price:props.amount,
                    rating:props.rating,
                    width:props.width,
                    height:props.height
                },

            }
        );
      };
    return (
        <div className="product">
           
            <div className="product_details">
                <div>
                    <strong>{props.name}</strong>
                </div>
                <div>
                    <strong>{props.amount}</strong>
                </div>
                <div>
                  {stars} 
                </div>
            </div><br></br>
        
            <div className="product_details1">
                <img src={props.src} className="image" width={props.width} height={props.height} /><br></br>
                <input onClick={add} type="submit" className="basket" value="Add to basket" />
            </div>
        
        </div>
    );
}

export default Product;
