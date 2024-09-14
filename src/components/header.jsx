import React from "react";
import '../styles/header.css';
import amazon_logo from '../images/amazon_logo.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { colors } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Amazonheading() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div>
            <div className="header-container">
            <a href="/"><img src={amazon_logo} className="searchlogo"/></a>
                <div className="search">
                    <input type="text" placeholder="Search for products"  className="searchbar"/>
                    <SearchIcon className="searchicon"/>
                </div>
                
                <div className="header_nav">
                    <Link to="/login">
                    <div className="headernav_options">
                        
                        {
                         (user)?
                         (<span className="lineone">Hello {user.email}</span>):
                        <span className="lineone">Hello Guest</span>
                        } 
                        <span className="linetwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                    </Link>
                    <div className="headernav_options">
                        <span className="lineone">Returns</span>
                        <span className="linetwo">& Orders</span>
                    </div>

                    <div className="headernav_options"> 
                        <span className="lineone">Your</span>
                        <span className="linetwo">Prime</span>
                    </div>
                    <div className="headernav_basket"> 
                        <Link to="/checkout"><ShoppingBasketIcon className="basket_icon"/></Link>
                       <span className="linetwo basketcount">{basket?.length}</span>
                    </div>

                </div>
            </div><br></br><br></br><br></br>

           
        </div>
    )
}
export default Amazonheading;
