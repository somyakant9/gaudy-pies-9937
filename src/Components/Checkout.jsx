import React from "react";
import { CartContext } from "../Context/CartContext";
import styles from './Checkout.module.css';
import { Link } from "react-router-dom";

const Checkout = () => {

    const { total } = React.useContext(CartContext);

    return (
        <div className={styles.main}>
            <div className={styles.delivery}>
                  <form>
                    
                  </form>
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

    )
}

export default Checkout;