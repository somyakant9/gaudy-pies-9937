import React from "react";
import { CartContext } from "../Context/CartContext";
import styles from './Checkout.module.css';
import { Link } from "react-router-dom";

const Checkout = () => {

    const { total } = React.useContext(CartContext);

    return (
        <div className={styles.main}>
            <div className={styles.delivery}>
                  <div className={styles.heading}>Add your delivery address</div>
                  <div className={styles.name}>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                  </div>
                  <div className={styles.country}>
                    <input type="text" placeholder="Country/Region" />
                  </div>
                  <div className={styles.country}>
                  <input type="text" placeholder="Address" />
                  </div>
                  <div className={styles.name}>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="State"/>
                  </div>
                  <div className={styles.country}>
                  <input type="number" placeholder="Postal or zip code *" />
                  </div>
                  <div className={styles.country}>
                  <input type="number" placeholder="Phone Number" />
                  </div>
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
                    <Link to='/cart/checkout/payment'><button>Save and Continue</button></Link>
                </div>
            </div>
        </div>

    )
}

export default Checkout;