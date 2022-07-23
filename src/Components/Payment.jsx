import React from 'react';
import styles from './Payment.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Payment =()=>{

    const { total } = React.useContext(CartContext);

    return (
        <div className={styles.main}>
            <div className={styles.delivery}>
                  <div className={styles.heading}>CARD DETAILS</div>
                  <div className={styles.name}>
                    <input type="text" placeholder="Card Holder Name"/>
                  </div>
                  <div className={styles.name}>
                    <input type="number" placeholder="Card Number"/>
                    <input type="date" placeholder="Expiry date"/>
                  </div>
                  <div className={styles.country} >
                  <input style={{backgroundColor:"#e6e6e6"}} type="number" placeholder="Security code *" />
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
                    <Link to='/confirmation'><button>Save and Confirm</button></Link>
                </div>
            </div>
        </div>

    )
}

export default Payment;