import React from "react";
import {Routes , Route} from 'react-router-dom';
import Mens from "../Components/Mens";
import Cart from "../Components/Cart";
import PrivateRoute from "../Components/PrivateRoute";
import MensDetail from "../Components/MensDetail";
// import AuthenticationProvider from "../Context/AuthContext";
const AllRoutes =()=>{

    return(
       
        <Routes>
            <Route path="/" element={<Mens/>}/>
            <Route path="/" element={<Mens/>}/>
            <Route path="/" element={<Mens/>}/>
            <Route path="/mens_detail" element={<MensDetail/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute> }/>
           
        </Routes>
      
    )
}

export default AllRoutes;