import React from "react";

export const CartContext = React.createContext();

export const CartContextProvider =({children})=>{

    const [cartDetail , setCartDetail] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    return(
        <CartContext.Provider value={{cartDetail,setCartDetail,total,setTotal}}>{children}</CartContext.Provider>
    )
}