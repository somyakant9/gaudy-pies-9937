import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {

    return (

        <div className={styles.navbar}>
            <div className={styles.discount}>Sale | 10,000 items at 60% off | Shop now</div>
            <div className={styles.top}>
                <div className={styles.topin}>
                    <div>Women</div>
                    <div>Men  </div>
                    <div>Kids </div>
                </div>
                <div >
                    <h1 className={styles.topcenter}>FARFETCH</h1>
                </div>
                <div className={styles.topout}>
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197419.png" alt="country" />
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126486.png" alt="user" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="wishlist" />
                    <img src="https://cdn-icons.flaticon.com/png/512/2651/premium/2651753.png?token=exp=1658310841~hmac=82a1bd84a9f6e4524b7fb81bb44a8d79" alt="bag" />
                </div>
            </div>
            <div className={styles.bottom}>
               <div className={styles.category}>
                <div>Sale</div>
                <div>New In</div>
                <div>Shop By</div>
                <div>Clothings</div>
                <div>Brands</div>
                <div>Shoes</div>
                <div>Sneakers</div>
                <div>Bags</div>
                <div>Accessories</div>
                <div>Watches</div>
               </div>
               <div>
                <input className={styles.input} type="text" placeholder="Search" />
               </div>
            </div>
        </div>
      
    )
}

export default Navbar;