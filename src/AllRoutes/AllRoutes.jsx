import React from "react";
import {Routes , Route} from 'react-router-dom';
import Mens from "../Components/Mens";
import Cart from "../Components/Cart";
import PrivateRoute from "../Components/PrivateRoute";
import MensDetail from "../Components/MensDetail";
import Checkout from "../Components/Checkout";
import Payment from "../Components/Payment";
import Confirmation from "../Components/Confirmation";
const AllRoutes =()=>{

    return(
       
        <Routes>
            <Route path="/" element={<Mens/>}/>
            <Route path="/mens_detail" element={<MensDetail/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute> }/>      
            <Route path="/cart/checkout" element={<Checkout/>}/>  
            <Route path="/cart/checkout/payment" element={<Payment/>}/>   
            <Route path="/confirmation" element={<Confirmation/>}/>
        </Routes>
      
    )
}

export default AllRoutes;