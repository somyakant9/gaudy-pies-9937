import React from "react";
import AllRoutes from "../AllRoutes/AllRoutes";
import Footer from "./Footer";
import Navbar from "./Navbar";

const FarFetch=()=>{

    return(
        <div>
            <Navbar/>
            <AllRoutes/>
            <Footer/>
        </div>
    )
}

export default FarFetch;