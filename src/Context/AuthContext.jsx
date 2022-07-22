import React, { useReducer } from "react";

export const Authentication = React.createContext({}) ;



export const appReducer = (state ,{type,payload}) => {
  

  switch(type){

    case "HANDLE_LOGIN":{
      return {...state , isAuth:true , token:payload}
         
    }
    case "HANDLE_LOGOUT":{
      return {...state , isAuth:false , token:payload}
      
    }
    default:{
      return state;
    }
  }

};

function AuthenticationProvider({children}) {

  const [sign , dispatch] = useReducer( appReducer, {isAuth:false});
  
  const handleLogin =(token)=>{

    dispatch({type:"HANDLE_LOGIN" , payload:token})
  }
  const handleLogout =()=>{

    dispatch({type:"HANDLE_LOGOUT" , payload:null})
  }



  return <Authentication.Provider value={{sign,handleLogin,handleLogout}}>{children}</Authentication.Provider>
}

export default AuthenticationProvider;
