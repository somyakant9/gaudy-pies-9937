import React, { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styles from './Cart.module.css';
import { Link } from "react-router-dom";
const Cart = () => {

    const { cartDetail,setCartDetail,total,setTotal } = useContext(CartContext);
   
    
    const handleDelete=(id)=>{

        let newArr = cartDetail.filter((el)=> el.id !== id);
        setCartDetail(newArr);
    }
    useEffect(() => {
        let initialValue = 0;
        let sum = cartDetail.reduce((initialValue, curr) => initialValue + Number(curr.price), initialValue);
        setTotal(sum)
    }, [cartDetail, setTotal])
    return (

        <div className={styles.main}>
            {console.log(cartDetail)}
            <p className={styles.heading}>SHOPPING BAG</p>
            <div className={styles.obj}>
                <div className={styles.bag}>
                    <div className={styles.import}>
                        <p>Import duties are included</p>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/61/61093.png" alt="i" />
                    </div>
                    {cartDetail.map((el) => (
                        <div className={styles.each} key={el.id}>
                            <div className={styles.first}>
                                <img className={styles.images} src={el.url} alt="pic" />
                            </div>
                            <div className={styles.second}>
                                <p className={styles.brand}>{el.brand}</p>
                                <p className={styles.name}>{el.name}</p>
                                <p className={styles.id}>FARFETCH ID:{el.Brand_style_ID}</p>
                            </div>
                            <div className={styles.third}>
                                <p>${el.price}</p>
                                <p>(import duties included)</p>
                            </div>
                            <div className={styles.fourth}>
                                <p>Quantity: 1</p>
                            </div>
                            <div className={styles.fifth}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="cancel" onClick={()=>handleDelete(el.id)}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.sum}>
                        <p>SUMMARY</p>
                    </div>
                    <div className={styles.one}>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </div>
                    <div className={styles.two}>
                        <p>Delivery</p>
                        <p>$ 24</p>
                    </div>
                    <div className={styles.three}>
                        <p>Total</p>
                        <p>USD ${total + 24}.00</p>
                    </div>
                    <div className={styles.four}>
                    <Link to='./checkout'><button>Checkout Page</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;