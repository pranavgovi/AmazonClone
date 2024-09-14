import React from "react";
import amazonhome from '../images/amazon_home.jpg';
import Product from "./product";
import '../styles/home.css';
import speaker from '../images/speaker.png'
import iphone from '../images/iphone.jpg'
import joystick from '../images/joystick.png'
import basketball from '../images/basketball.png'
import tv from '../images/tv.png'
import oneplus from '../images/oneplus.png'


function Home (){
    return (
        <div className="home">
            <div className="amazon_home_image">
                <img src={amazonhome} className="amazonimage"/> 
            </div>
            <div className="items">

           
                <div className="homecontainer">
                   <Product pid="1" name="Echo dot speakers 5th generation" amount="$50" rating="4" src={speaker} width="250px" height="200px"  />
                  
                   <Product  pid="2" name="Basketball kit" amount="$150" rating="5" src={basketball} width="250px" height="200px" />
                   <Product   pid="3" src={joystick} name="Joystick" amount="$150" rating="3" width="250px" height="200px" />

                </div>
                <div className="homecontainer">
                    <Product   pid="4" name="One plus 7 pro" amount="$430" rating="4"  src={oneplus} width="250px" height="200px"  />
                    <Product   pid="5" name="Iphone" amount="$1000" rating="3"   src={iphone} width="250px" height="200px" />
                </div>
                <div className="homecontainer">
                <Product   pid="6" src={tv} name="Amazon Fire TV 32 2-Series HD smart TV with Fire TV Alexa Voice Remote, stream live TV without cable" amount="$350" rating="4.5" width="550px" height="250px"  />
                
                </div>
            </div>
        </div>
    )
}
export default Home