import { useContext, useEffect } from "react";
import { Authentication } from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom';

function PrivateRoute({children}) {

  const {sign} = useContext(Authentication);
  const navigate = useNavigate();

  useEffect(()=>{

    if(!sign.isAuth){
      alert("You have to Login First!!");
      navigate('/');
    }
  },[navigate,sign])

  return <>{children}</>;
}

export default PrivateRoute;