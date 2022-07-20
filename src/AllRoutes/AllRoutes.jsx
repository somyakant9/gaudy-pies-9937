import React from "react";
import {Routes , Route} from 'react-router-dom';
import Mens from "../Components/Mens";
import Cart from "../Components/Cart";

const AllRoutes =()=>{

    return(
        <Routes>
            <Route path="/" element={<Mens/>}/>
            <Route path="/" element={<Mens/>}/>
            <Route path="/" element={<Mens/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}

export default AllRoutes;