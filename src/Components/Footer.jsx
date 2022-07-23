import React from "react";
import styles from './Footer.module.css';

const Footer = () => {

    return (
        <div style={{backgroundColor:"#222222"}}>
            <div className={styles.main}>
                <div>
                    <div>FARFETCH APP</div>
                    <div>Farfetch App for iOS and Android</div>
                </div>
                <div>
                    <div>DESTINATION/REGION, CURRENCY AND LANGUAGE</div>
                    <div>India, USD $ </div>
                    <div>FOLLOW US</div>
                    <div className={styles.social}>
                        <div><a href="https://www.instagram.com/farfetch/"><img src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670274.png?token=exp=1658319066~hmac=c029af0cbfeab6f1fdad9d3476d5890c" alt="instagram" /></a></div>
                        <div><a href="https://www.facebook.com/farfetch.asiapac/?brand_redir=88573992939"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384085.png" alt="facebook" /></a></div>
                        <div><a href="https://twitter.com/farfetch"><img src="https://cdn-icons.flaticon.com/png/512/665/premium/665228.png?token=exp=1658318558~hmac=db2d1cd696bf56900173f729e4919a4d" alt="twitter" /></a></div>
                        <div><a href="https://www.snapchat.com/add/farfetch.com"><img src="https://cdn-icons-png.flaticon.com/512/254/254400.png" alt="snapchat" /></a></div>
                        <div><a href="https://www.pinterest.com/farfetch/"><img src="https://cdn-icons.flaticon.com/png/512/2175/premium/2175205.png?token=exp=1658318700~hmac=f5021fd70ed0baec2cc33c7a1e702e93" alt="pinterest" /></a></div>
                        <div><a href="https://www.youtube.com/user/farfetchdotcom"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png" alt="youtube" /></a></div>
                    </div>
                </div>
                <div>
                    <div>CUSTOMER SERVICE</div>
                    <div>Contact us</div>
                    <div>Orders & delivery</div>
                    <div>Payment & pricing</div>
                    <div>Returns & refunds</div>
                    <div>FAQs</div>
                    <div>Terms & conditions</div>
                    <div>Promotion terms & conditions</div>
                    <div>Privacy policy</div>
                    <div>Accessibility</div>
                </div>
                <div>
                    <div>ABOUT FARFETCH</div>
                    <div>About Us</div>
                    <div>Investors</div>
                    <div>Boutique Partners</div>
                    <div>Affiliate Programme</div>
                    <div>Student discount UNiDAYS</div>
                    <div>Youth discount</div>
                    <div>Careers</div>
                    <div>Customer Promise</div>
                    <div>FARFETCH App</div>
                    <div>Sitemap</div>
                    <div>Positively FARFETCH</div>
                </div>
            </div>
            <div className={styles.foot}>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.
                © Copyright 2022 FARFETCH UK Limited. All rights reserved.</div>
        </div>
    )
}
export default Footer;