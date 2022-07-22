import { useContext } from "react";
import { Authentication } from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom';

function PrivateRoute({children}) {

  const {sign} = useContext(Authentication);
  const navigate = useNavigate();

  if(!sign.isAuth){
    navigate('/');
  }
  return <>{children}</>;
}

export default PrivateRoute;