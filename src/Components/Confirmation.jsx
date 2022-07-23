
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation=()=>{

    const navigate = useNavigate();

    useEffect(()=>{
          
        setTimeout(()=>{
            navigate('/')
        },5000)
    },[navigate])
    return(
        <div style={{marginTop:"100px"}}>
            <p>Thank You for shopping with us</p>
            <img style={{width:"50px",margin:"auto"}} src="https://cdn-icons.flaticon.com/png/512/5290/premium/5290081.png?token=exp=1658518320~hmac=8778b5f5851f96d82348e4ba69a9846e" alt="confirm" />
            <p>Your Order is successfully placed!!</p>
        </div>
    )
}

export default Confirmation;