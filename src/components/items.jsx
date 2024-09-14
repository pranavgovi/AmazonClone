import React from 'react';
import { useStateValue } from "./StateProvider";
import '../styles/items.css';
function Items() {
    
    const [{basket,user},dispatch]=useStateValue();
    const del = (pid) => {
        // here we are deleting the product from the basket
        dispatch({
            type: 'delete',
            pid:pid
        });
    };
  return (
    <div>
            
            {basket.map((item) => (
                <div className="item">
                    <div className="check">
                        <div className="checked_image">
                            <img src={item.image} width={200} height={200} alt={item.name} /><br></br>
                        </div>

                        <div className="checked_detail">
                            <h3>Item name: {item.name}</h3>
                            <p>Price: {item.price}</p>
                            {item.rating && (
            <p>Rating: {Array(parseInt(item.rating, 10)).fill().map((_, index) => (
            <span key={index} className="star">&#9733;</span>
            ))}</p>
            )}
                            <input onClick={
                                ()=>del(item.pid)
                            } type="submit" className="basket" value="Remove from basket" />
                        </div>
                    </div>
                </div>
            ))}
    </div>
    
  )
}

export default Items;
