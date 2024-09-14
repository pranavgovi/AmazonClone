import React from "react";
import '../styles/subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

   

function Subtotal(){
    const navigate = useNavigate();
    const [{basket},dispatch]=useStateValue();
let total=0;

basket.map( (i)=>{

    total+=parseInt(i.price.replace('$', ''),10);
}
);
    return (
        
        
        <div className="subtotal">
             
            <CurrencyFormat
                renderText={(value) => (
                <div>
                    <p>
                       
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </div>

                )}
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <br></br>
            <button onClick={e=>{
                navigate("/payment")
            }}>Proceed to checkout</button>
            
        </div>
    

)};

export default Subtotal;