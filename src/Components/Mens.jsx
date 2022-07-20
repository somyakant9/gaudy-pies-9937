import React from "react";
import styles from './Mens.module.css';
import { Button } from "@chakra-ui/react";

const data = [{
    id: 1,
    image: "https://cdn-images.farfetch-contents.com/18/36/92/26/18369226_40495674_600.jpg",
    type: 'Conscious',
    brand: 'Balenciaga',
    name: 'logo-print-cotton T-shirt',
    price: '$775'
}, {
    id: 2,
    image: 'https://cdn-images.farfetch-contents.com/18/77/49/26/18774926_40596194_600.jpg',
    type: 'New Season',
    brand: 'Supreme',
    name: 'Military camp cap',
    price: '$157'
}, {
    id: 3,
    image: 'https://cdn-images.farfetch-contents.com/18/72/87/16/18728716_40530698_600.jpg',
    type: 'New Season',
    brand: 'Jordan',
    name: 'Air Jordan 1Low sneaker',
    price: '$245'
}, {
    id: 4,
    image: 'https://cdn-images.farfetch-contents.com/18/56/11/01/18561101_40537934_600.jpg',
    type: 'New Season',
    brand: 'Moncler',
    name: 'Tib padded Down gilet',
    price: '$1233'
}]

const Mens = () => {

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3630026/data/5c6fa4bb27224fbb54b540ee10a84b80/1x1_messaging-side/637/data.png" alt="img" />
                </div>
                <div>
                    <div className={styles.topText}>
                        <p>10,000 ITEMS, NOW AT 60% OFF</p>
                    </div>
                    <div className={styles.midText}>
                        <p>The world greatest selection of designers,boutiques and brands-now on sale</p>
                    </div>
                    <div >
                        <Button sx={{ fontSize: "9px", border: "0.5px solid black" }} colorScheme='black' size='xs' mt="20px" variant='outline'>
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670014/data/d0c909df566999fcd20a105d4ba30d7b/1x1_two-columns/637/data.jpeg" alt="clothing" />
                    <p className={styles.key}>5 KEY LOOK FOR SUMMER IN THE CITY. </p>
                    <p className={styles.key}>Life doesn’t stop when the temperature rises, so what are the tricks to staying stylish in the heat? We present the ultimate hot-weather style hacks, including the classic pieces every wardrobe needs and the accessories that will add flair</p>
                </div>
                <div>
                    <div className={styles.side}>
                        <p>BALENCIAGA</p>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <div>
                    <div className={styles.topText}>
                        <p>The sneaker on everyone's wishlist</p>
                    </div>
                    <div className={styles.midText}>
                        <p> From fresh iterations of the Off-White Out Of Office to the latest Balenciaga Runner, find the next cult style to add to your collection here</p>
                    </div>
                    <div >
                        <Button sx={{ fontSize: "9px", border: "0.5px solid black" }} colorScheme='black' size='xs' mt="20px" variant='outline'>
                            Shop Now
                        </Button>
                    </div>
                </div>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670006/data/197c7b29cf8766cdc998f54afe58b791/1x1_messaging-side/637/data.jpeg" alt="img" />
                </div>
            </div>
            <div style={{marginBottom:"40px"}}>
                <div className={styles.data}>
                    {data.map((el) => (
                        <div key={el.id}>
                            <div><img src={el.image} alt="pic" /></div>
                            <div><p className={styles.type}>{el.type}</p></div>
                            <div><p className={styles.brand}>{el.brand}</p></div>
                            <div><p >{el.name}</p></div>
                            <div><p >{el.price}</p></div>
                        </div>
                    ))}
                </div>
                <div> <Button sx={{ fontSize: "9px", border: "0.5px solid black" }} colorScheme='black' size='xs' mt="20px" variant='outline'>
                    Shop Now
                </Button>
                </div>
            </div>
             <div className={styles.topStyles}>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3669980/data/493c11100a2aba62fd9278d6d2caf2aa/3x4_three-columns/480/data.jpeg" alt="men's clothing" />
                    <p>VERSACE</p>
                    <p>Bold, bright and right here</p>                
                </div>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3669964/data/229b1c2a4b4ea211efa1592f2ff82f3d/3x4_three-columns/480/data.jpeg" alt="men's clothing" />
                    <p>WEAR-EVERYWHERE BAGS</p>
                    <p>The Prada Triangle leads the way</p>                
                </div>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670008/data/47355043f142e0642a2c4a6e85583d2a/3x4_three-columns/480/data.jpeg" alt="men's clothing" />
                    <p>MASON MARGIELA</p>
                    <p>Cult styles and the New min Lock bag</p>                
                </div>
             </div>
             <div className={styles.topStyles}>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3669976/data/dc0dd7456839a40781777cf7a16a8183/3x4_three-columns/480/data.jpeg" alt="men's clothing" />
                    <p>THE STREETWEAR EDIT</p>
                    <p>Hype-Sneakers and top-tier brands</p>                
                </div>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670046/data/2347292e5772c4b0a16a0adbd100d745/3x4_three-columns/480/data.jpeg" alt="men's clothing" />
                    <p>THE MINIMALIST EDITS</p>
                    <p>Clean Lines and Paired-styles </p>                
                </div>
                <div>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3669990/data/ca738cd21a6d579a223cbad4b6209a18/3x4_three-columns/480/data.jpeg" alt="men's clothing" />
                    <p>THE CULT EDIT</p>
                    <p>Cutting-edge pieces and experimental designs</p>                
                </div>
             </div>
             <div className={styles.bottomSection}>
                <div>
                    <div><img src="https://cdn-icons.flaticon.com/png/512/4399/premium/4399105.png?token=exp=1658338355~hmac=9d1c09b612cf8c639eb28a97ea4821ff" alt="ph1"/></div>
                    <div>HOW TO SHOP</div>
                    <div>Your guide to shopping and placing orders</div>
                </div>
                <div>
                    <div><img src="https://cdn-icons-png.flaticon.com/512/471/471664.png" alt="ph2"/></div>
                    <div>FAQS</div>
                    <div>Your questions answered</div>
                </div>
                <div>
                    <div><img src="https://cdn-icons.flaticon.com/png/512/3193/premium/3193015.png?token=exp=1658338454~hmac=74cfe45d582b3734ce79680e108de476" alt="ph3"/></div>
                    <div>NEED HELP?</div>
                    <div>Contact our global Customer Service Team</div>
                </div>
             </div>
             <div className={styles.bottom}>
                <div style={{fontWeight:"bolder", fontSize:"18px"}}>DOWNLOAD THE FARFETCH APP</div>
                <div style={{paddingBottom:"20px"}}>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. More about the app</div>
                <div className={styles.enq}>
                    <div className={styles.btmEnq}>
                        <div>EMAIL ME</div>
                        <div>Enter your email and we'll send you a link to download the free app</div>
                        <div >
                            <input className={styles.inp} type="email" placeholder="Email address"  />
                            <button className={styles.btn1}>Send</button>
                        </div>
                    </div>
                    <div>
                        <div>SCAN QR CODE</div>
                        <div><img src="https://media.blackandwhite-ff.com/10000/2a0d5342-2544-4898-b2d4-8272235868d6_qr.png" alt="QR code" /></div>
                    </div>
                </div>
             </div>
        </div>
    )
}

// https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3673692/data/f5a003edefec9fe1e65d09f139cd1edd/3x4_messaging-side/936/data.jpeg
export default Mens;