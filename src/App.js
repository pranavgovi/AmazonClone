import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home';
import Amazonheading from "./components/header"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './components/checkout';
import Login from "./components/login"
import { auth } from './components/firebase';
import { useStateValue } from "./components/StateProvider";
import { useEffect } from 'react';
import Payment from './components/payment'

   
function App (){
    const [{basket,user},dispatch]=useStateValue();
    useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {
          
    
          if (authUser) {
            // the user just logged in / the user was logged in
    
            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            // the user is logged out
            dispatch({
              type: "SET_USER",
              user: "",
            });
          }
        });
      }, []);
    return (
        <Router>
            <Routes>
            <Route path="/checkout" element={[<Amazonheading/>,<Checkout/>]}/>
          <Route path="/" element={[<Amazonheading />, <Home />]}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/payment" element={[<Amazonheading />, <Payment />]}/>
            </Routes>
        </Router>
    );
}
export default App;
