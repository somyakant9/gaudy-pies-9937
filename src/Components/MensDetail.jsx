import React, { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styles from './MensDetail.module.css';


const data = [
    {
        id: 1,
        rating:4,
        brand: 'Polo_Ralph_Lauren',
        name: 'button-up bomber jacket',
        url: "https://cdn-images.farfetch-contents.com/17/84/54/70/17845470_40526190_480.jpg",
        striked: '899',
        discount: '-30%',
        color: 'brown',
        price: '629',
        Highlights: ["caramel brown", "suede", "round neck", "front button fastening", "two front flap pockets", "long sleeves", "elasticated hem"],
        Composition: "Suede 100% ",
        Washing_instructions: "Dry Clean Only",
        Brand_style_ID: "710860381001",
        Wearing: ["The model is 1.87 m wearing size M", " The model is also styled with: Polo Ralph Lauren houndstooth V-neck vest, Polo Ralph Lauren Polo Pony button-up shirt , Paul Smith buckled belt, Paul Smith mid-rise tapered trousers, Marni Marcel knot-detailing tote bag, Dita Eyewear Flight 009 pilot sunglasses."]
    },
    {
        id: 2,
        rating:3,
        brand: 'Salvatore_Ferragamo',
        name: 'graphic-print short-sleeve T-shirt',
        url: "https://cdn-images.farfetch-contents.com/17/92/21/94/17922194_40465343_480.jpg",
        striked: '832',
        discount: '-50%',
        color: 'mixed',
        price: '416',
        Highlights: ["white", "cotton", "logo print to the front", "graphic print to the front", "round neck", "short sleeves", "straight hem"],
        Composition: "Organic Cotton 100% ",
        Washing_instructions: "Hand Wash",
        Brand_style_ID: " 121658",
        Wearing: ["The model is 1.85 m wearing size M", " The model is also styled with: Nanushka Elongated knot-detail bucket bag, Salvatore Ferragamo straight-leg trousers, Grenson David open-toe sandals."]
    },
    {
        id: 3,
        rating:4,
        brand: 'BOSS',
        name: 'Driver Moc loafers',
        url: "https://cdn-images.farfetch-contents.com/17/86/40/41/17864041_40123332_480.jpg",
        striked: '524',
        discount: '-50%',
        color: 'mixed',
        price: '262',
        Highlights: ["grey", "leather/suede", "logo lettering", "penny slot", "round toe", "slip-on style", "segmented rubber sole"],
        Composition: "Lining: Leather 100%",
        Washing_instructions: "Hand Wash",
        Brand_style_ID: " 50466657",
        Wearing: ["Crafted from soft leather and suede, these Boss loafers offer a refined finish thanks to a timeless grey hue and subtle logo lettering to the side."]
    },
    {
        id: 4,
        rating:5,
        brand: 'Valentino',
        name: 'logo-print short-sleeve shirt',
        url: "https://cdn-images.farfetch-contents.com/18/20/83/29/18208329_ceeec57a-1f9d-45c3-bce0-836a5615cfc8_480.jpg",
        striked: '1,415',
        discount: '-40%',
        color: 'brown',
        price: '849',
        Highlights: ["black/white", "silk", "all-over logo print", "all-over graphic print", "classic collar", "short sleeves", "front button fastening"],
        Composition: "Silk 100% ",
        Washing_instructions: "Dry Clean Only",
        Brand_style_ID: "VAAA908GH",
        Wearing: ["The model is 1.76 m wearing size 48 (IT)", " The model is also styled with: Arnar Mar Jonsson Feingur flat pockets overcoat, Grenson David open-toe sandals, Burberry Horseferry-print crossbody bag."]
    },
    {
        id: 5,
        rating:3,
        brand: 'Nahmias',
        name: 'embroidered-miracle corduroy bucket hat',
        url: "https://cdn-images.farfetch-contents.com/17/21/92/17/17219217_39256591_480.jpg",
        striked: '404',
        discount: '-50%',
        color: 'black',
        price: '202',
        Highlights: ["black", " cotton", " embroidered logo to the front", " corduroy", " curved wide brim"],
        Composition: "Cotton 100% ",
        Washing_instructions: "Hand Wash",
        Brand_style_ID: " MCBHBLACK",
        Wearing: ["The model is 1.89 m wearing size OS", "The model is also styled with: Nahmias ribbed-knit shirt jacket, AMIRI logo-print T-shirt, Stepney Workers Club Dellow S-Strike low-top sneakers, GALLERY DEPARTMENT LA flared-leg jeans."]
    },
    {
        id: 6,
        rating:2,
        brand: 'Valentino_Garavani',
        name: 'Rockrunner leather sneakers',
        url: "https://cdn-images.farfetch-contents.com/14/81/11/39/14811139_26786050_480.jpg",
        striked: '743',
        discount: '-30%',
        color: 'black',
        price: '520',
        Highlights: ["Who said that sneakers were meant for the scruffy? These black suede Valentino Garavani Rockrunner leather sneakers are sleek and elegant with contrasting panels boasting an array of textures that fit in with a visit to the gallery or client meeting at dinner. These shoes can take you to a variety of places. Featuring a round toe, a camouflage pattern, a lace-up front fastening, a pull tab at the rear, stitching details, a ridged rubber sole and a branded insole."],
        Composition: "Sole: Rubber 100%",
        Washing_instructions: "Hand Wash",
        Brand_style_ID: " YS0C88MHB",
        Wearing: ["This piece fits true to size. We recommend you get your regular size"]
    },
    {
        id: 7,
        rating:5,
        brand: 'Jacquemus',
        name: 'Le Gelati bermuda shorts',
        url: "https://cdn-images.farfetch-contents.com/18/14/52/13/18145213_38726353_480.jpg",
        striked: '370',
        discount: '-40%',
        color: 'brown',
        price: '222',
        Highlights: ["beige", "front button and zip fastening", "elasticated waistband", "two side slit pockets", "knee-length", "rear flap pocket"],
        Composition: "Outer: Viscose 78%, Linen/Flax 22%",
        Washing_instructions: "Dry Clean Only",
        Brand_style_ID: "22E225PA0091011",
        Wearing: ["The model is 1.88 m wearing size 48 (IT/FR)"]
    },
    {
        id: 8,
        rating:3,
        brand: 'Ksubi',
        name: 'Van Winkle The Heavens skinny jeans',
        url: "https://cdn-images.farfetch-contents.com/17/75/82/63/17758263_39930880_480.jpg",
        striked: '460',
        discount: '-40%',
        color: 'blue',
        price: '276',
        Highlights: ["This piece fits true to size. We recommend you get your regular size", "Cut for a slim fit", "Made with a mid-weight fabric"],
        Composition: "Cotton 99%, Elastane 1%",
        Washing_instructions: "Machine Wash",
        Brand_style_ID: " 5000007193",
        Wearing: ["The model is 1.91 m wearing size 34 (Waist)", " The model is also styled with: Maison Margiela contrast panel low-top sneakers, Rick Owens DRKSHDW crew-neck sweatshirt."]
    },
    {
        id: 9,
        rating:4,
        brand: 'Off_White',
        name: 'Hands Off logo track pants',
        url: "https://cdn-images.farfetch-contents.com/17/59/38/98/17593898_6c2b0843-7cc1-4297-885d-5eaa0f8d2d5c_480.jpg",
        striked: '678',
        discount: '-45%',
        color: 'gray',
        price: '373',
        Highlights: ["military green", "signature Hands Off logo", "elasticated waistband", "two side slit pockets", "rear welt pocket", "straight leg", "elasticated ankles"],
        Composition: "Lining: Cotton 100%,Outer: Polyester 70%, Polyamide 30%",
        Washing_instructions: "Dry Clean Only",
        Brand_style_ID: " OMCA226S22FAB0015610",
        Wearing: ["The model is 1.76 m wearing size M", "The model is also styled with: Off-White double-breasted short coat."]
    },
    {
        id: 10,
        rating:5,
        brand: 'Unseen_Footwear',
        name: 'Trinity low top sneakers',
        url: "https://cdn-images.farfetch-contents.com/17/92/32/77/17923277_40249188_480.jpg",
        striked: '434',
        discount: '-45%',
        color: 'black',
        price: '217',
        Highlights: ["black", "leather", "logo-print tongue", "front lace-up fastening", "round toe", "flat rubber sole", "branded insole"],
        Composition: "Outer: Fabric 100%, Sole: Rubber 100%",
        Washing_instructions: "Dry Clean Only",
        Brand_style_ID: "TSMN003",
        Wearing: ["The model is 1.85 m wearing size 10 (UK)", " The model is also styled with: Salvatore Ferragamo crochet knit crew neck jumper."]
    },
    {
        id: 11,
        rating:3,
        brand: 'Les_Tien',
        name: 'drop-shoulder hoodie',
        url: "https://cdn-images.farfetch-contents.com/17/83/12/42/17831242_40318694_480.jpg",
        striked: '518',
        discount: '-60%',
        color: 'green',
        price: '207',
        Highlights: ["dark green", "cotton", "classic hood", "drop shoulder", "long sleeves", "front pouch pocket"],
        Composition: "Cotton 100% ",
        Washing_instructions: "Machine Wash",
        Brand_style_ID: " CF1001PD",
        Wearing: ["The model is 1.85 m wearing size M", "The model is also styled with: JW Anderson logo-debossed loafer mules, CAMP HIGH knitted tie-dye trousers, Our Legacy waxed tote bag."]
    },
    {
        id: 12,
        rating:2,
        brand: 'Aries',
        name: 'No Problemo paint-print sweatshirt',
        url: "https://cdn-images.farfetch-contents.com/17/91/94/03/17919403_39780928_480.jpg",
        striked: '560',
        discount: '-60%',
        color: 'mixed',
        price: '224',
        Highlights: ["slogan print", "painterly print", "crew neck", "long sleeves", "fitted-cuff sleeves"],
        Composition: "Cotton 100%",
        Washing_instructions: "Hand Wash",
        Brand_style_ID: " SSAR20222",
        Wearing: ["The model is 1.86 m wearing size M", "The model is also styled with: Aries No Problemo tie-dye track pants, Merrell Hydro Moc hiking shoe."]
    },
    {
        id: 13,
        rating:2,
        brand: 'KJUS',
        name: 'cotton-blend polo shirt',
        url: "https://cdn-images.farfetch-contents.com/17/75/68/03/17756803_39656696_480.jpg",
        striked: '118',
        discount: '-50%',
        color: 'black',
        price: '59',
        Highlights: ["cotton-blend polo shirt from KJUS featuring black", "cotton blend", "polo collar", "front button placket", "logo print at the chest", "short sleeves and straight hem"],
        Composition: "Cotton 50%, Polyester 50%",
        Washing_instructions: "Machine Wash",
        Brand_style_ID: "MG60D15",
        Wearing: ["The model is 1.86 m wearing size 48 (IT/FR)", "The model is also styled with: J.Lindeberg Somle golf shorts, ECCO low-top slip-on trainers."]
    },
    {
        id: 14,
        rating:4,
        brand: 'adidas',
        name: 'x Arsenal FC 93-94 T-shirt',
        url: "https://cdn-images.farfetch-contents.com/17/53/21/84/17532184_40487509_480.jpg",
        striked: '150',
        discount: '-60%',
        color: 'yellow',
        price: '60',
        Highlights: ["x Arsenal FC 93-94 T-shirt from adidas featuring yellow", "cotton, V-neck", "logo stamp to the front", "crest motif", "short sleeves and straight hem"],
        Composition: "Cotton 100%",
        Washing_instructions: "Machine Wash",
        Brand_style_ID: " HK5626",
        Wearing: ["The model is 1.91 m wearing size M"]
    },
    {
        id: 15,
        rating:5,
        brand: 'Kenzo',
        name: ' two-tone logo-print sweatshirt',
        url: "https://cdn-images.farfetch-contents.com/17/62/92/13/17629213_39343911_480.jpg",
        striked: '660',
        discount: '-60%',
        color: 'blue',
        price: '264',
        Highlights: ["blue", "cotton-wool blend", "two-tone design", "logo print at the chest", "crew neck", "long raglan sleeves", "ribbed cuffs", "ribbed hem"],
        Composition: "Wool 54%, Cotton 46%",
        Washing_instructions: "Hand Wash",
        Brand_style_ID: " FC55PU6843LB",
        Wearing: ["The model is 1.87 m wearing size M", "The model is also styled with: ERL denim military shoulder bag, Represent Carpenter slim-cut jeans, Marsèll x Suicoke double-strap sandals."]
    },
    {
        id: 16,
        rating:2,
        brand: 'Ksubi',
        name: 'sky-print denim jacket',
        url: "https://cdn-images.farfetch-contents.com/17/75/78/79/17757879_39942387_480.jpg",
        striked: '500',
        discount: '-60%',
        color: 'blue',
        price: '200',
        Highlights: ["blue/white", "cotton", "all-over graphic print", "classic collar", "front button fastening", "two chest flap pockets", "long sleeves", "two side slit pockets"],
        Composition: "Cotton 100%",
        Washing_instructions: "Machine Wash",
        Brand_style_ID: "5000007192",
        Wearing: ["The model is 1.91 m wearing size M", " The model is also styled with: Our Legacy Camion zip-up leather boots, Ksubi Van Winkle The Heavens skinny jeans."]
    },
    {
        id: 17,
        rating:3,
        brand: 'Martine_Rose',
        name: 'gathered neck polo shirt',
        url: "https://cdn-images.farfetch-contents.com/17/88/04/03/17880403_39237246_480.jpg",
        striked: '435',
        discount: '-45%',
        color: 'beige',
        price: '261',
        Highlights: ["stone beige/navy blue", "cotton", "contrasting trim", "gathered neckline", "front button placket", "short sleeves", "side slits", "straight hem"],
        Composition: "Cotton 100% ",
        Washing_instructions: "Machine Wash",
        Brand_style_ID: " CF10MRSS22623P",
        Wearing: ["The model is 1.83 m wearing size M", "The model is also styled with: Marsèll Cassello square-toe boots, Tibi Sam wide-leg jeans."]
    },
    {
        id: 18,
        rating:4,
        brand: 'Greg_Lauren',
        name: 'Fragment deconstructed hoodie',
        url: "https://cdn-images.farfetch-contents.com/17/77/64/24/17776424_40141494_480.jpg",
        striked: '2048',
        discount: '-50%',
        color: 'green',
        price: '1024',
        Highlights: ["sage green", "cotton", "drawstring hood", "front pouch pocket", "long sleeves", "distressed effect", "panelled design", "POSITIVELY CONSCIOUS: We've partnered with Good On You — an ethical agency that rates how sustainably brands perform across various people, planet and animal welfare criteria. This product comes from a Conscious brand that performs well in relation to their impact on the planet, for example ensures the use of materials that limit the amount of chemicals, water and wastewater involved in production processes."],
        Composition: "Cotton 100%",
        Washing_instructions: "Dry Clean",
        Brand_style_ID: " DM308",
        Wearing: ["The model is 1.89 m wearing size 3 (NUM)", "The model is also styled with: Rick Owens Bolan bootcut jeans, Diemme Byborre Maggiore slip-on sneakers."]
    }
]
const MensDetail = () => {

    const [mens, setMens] = React.useState(data);
    const [sorting,setSorting] = React.useState('');
    const [filterBrand,setFilterBrand] = React.useState('');
    const [filterPrice,setFilterPrice] = React.useState('');
    const [filterColor,setFilterColor] = React.useState('');
    const [filterRating,setFilterRating] = React.useState('');
     
    const {cartDetail ,setCartDetail} = useContext(CartContext);


    const handleSort=(e)=>{
        e.preventDefault();
        setSorting(e.target.value);
    }
    const sortby = () => {
        
        if(sorting === 'lth'){
            let sortAsc = mens.sort((a, b) => b.price - a.price);
            setMens(sortAsc);
        }
        else if(sorting === 'htl'){
            let sortDes = mens.sort((a, b) => a.price - b.price);
            setMens(sortDes);
        }
       
       
    }

    const handleFilterBrand =(e)=>{
        e.preventDefault();
        setFilterBrand(e.target.value);

    }
   
    const filterByBrand=()=>{

        let newArr = data.filter((el)=> !filterBrand || el.brand === filterBrand);
        setMens(newArr);
        console.log([...newArr]);
    }
    const handleFilterColor=(e)=>{
        e.preventDefault();
        setFilterColor(e.target.value);
    }
    const filterByColor=()=>{
        let newColor = data.filter((el)=> !filterColor || el.color === filterColor);
        setMens(newColor);
    }

    const handleFilterPrice=(e)=>{
        e.preventDefault();
        setFilterPrice(e.target.value);
    }

    const filterByPrice =() =>{
         
        let newPrice = data.filter((el)=> el.price > Number(filterPrice));
        setMens(newPrice);

    }
    const handleFilterRating=(e)=>{
        e.preventDefault();
        setFilterRating(e.target.value);
    }

    const filterByRating = ()=>{

        let newRating = data.filter((el)=> el.rating >= Number(filterRating));
        setMens(newRating);
    }
    const handleCart=(el)=>{
      
        setCartDetail([...cartDetail , el]);

    }

    useEffect(()=>{

    console.log(filterBrand,filterColor,filterPrice,filterRating);

    },[filterBrand,filterColor,filterPrice,filterRating])
    

    return (
        <>
        {console.log(cartDetail)};
        <div style={{ marginTop: "100px", display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "15px", marginBottom: '20px' }}>
            <div style={{ width: "20%", textAlign: "start" }}>
                <p style={{textDecoration:"underline",fontFamily:"revert-layer"}}>Filters</p>
                <select placeholder="Brand" style={{ width: "100%",borderBottom:"0.5px solid gray" }} onChange={handleFilterBrand} onClick={filterByBrand}>
                    <option value="Polo_Ralph_Lauren">Polo Ralph Lauren</option>
                    <option value="Salvatore_Ferragamo">Salvatore Ferragamo</option>
                    <option value="BOSS">BOSS</option>
                    <option value="Valentino">Valentino</option>
                    <option value="Valentino_Garavani">Valentino Garavani</option>
                    <option value="Jacquemus">Jacquemus</option>
                    <option value="Ksubi">Ksubi</option>
                    <option value="Off_White">Off-White</option>
                    <option value="Unseen_Footwear">Unseen Footwear</option>
                    <option value="Les_Tien">Les Tien</option>
                    <option value="KJUS">KJUS</option>
                    <option value="Aries">Aries</option>
                    <option value="adidas">adidas</option>
                    <option value="Kenzo">Kenzo</option>
                    <option value="Martine_Rose">Martine Rose</option>
                    <option value="Greg_Lauren">Greg Lauren</option>
                </select>
                <select placeholder="Price" style={{ width: "100%" ,borderBottom:"0.5px solid gray"}} onChange={handleFilterPrice} onClick={filterByPrice}>
                    <option value={0}>greater than $0</option>
                    <option value={200}>greater than $200</option>
                    <option value={300}>greater than $300</option>
                    <option value={500}>greater than $500</option>
                    <option value={1000}>greater than $1000</option>
                </select>
                <select placeholder="Color" style={{ width: "100%",borderBottom:"0.5px solid gray" }} onChange={handleFilterColor} onClick={filterByColor}>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                    <option value="mixed">Mixed</option>
                    <option value="gray">Gray</option>
                    <option value="yellow">Yellow</option>
                </select>

                <select placeholder="Ratings" style={{ width: "100%",borderBottom:"0.5px solid gray" }} onChange={handleFilterRating} onClick={filterByRating}>
                    <option value={5}>greater than 5 star</option>
                    <option value={4}>greater than 4 star</option>
                    <option value={3}>greater than 3 star</option>
                    <option value={2}>greater than 2 star</option>
                </select>
            </div>
            <div style={{ width: "70%" ,borderLeft:"0.5px solid gray" }}>
                <div style={{borderBottom:"0.5px solid gray",display:"flex",justifyContent:"flex-end",fontFamily:"monospace"}}>
                    <select name="sorting" placeholder="Sort By" onChange={handleSort} onClick={sortby} >
                        <option value="lth"> Sort by Price :Low to high</option>
                        <option value="htl">Sort by Price :High to low</option>
                    </select>
                </div>
                <div className={styles.detail} >
                    {mens.map((el) => (             
                     <div key={el.id} className={styles.product}>
                            <div><img src={el.url} alt="pi" /></div>
                            <div className={styles.brand}>{el.brand}</div>
                            <div>{el.name}</div>
                            <div className={styles.price}>
                                <div className={styles.original}>${el.striked}</div>
                                <div >{el.discount}</div>
                                <div className={styles.after}>${el.price}</div>
                                <div style={{display:"flex",gap:"3px",alignItems:"baseline"}}>{el.rating}<img className={styles.star} src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png" alt="star"/></div>
                            </div>
                            <div><button className={styles.cartbtn} onClick={()=>handleCart(el)}>Add to Cart</button></div>
                        </div>  
                    ))}
                </div>
            </div>

        </div>
        <div className={styles.bottom}>
                <div style={{ fontWeight: "bolder", fontSize: "18px" }}>DOWNLOAD THE FARFETCH APP</div>
                <div style={{ paddingBottom: "20px" }}>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. More about the app</div>
                <div className={styles.enq}>
                    <div className={styles.btmEnq}>
                        <div>EMAIL ME</div>
                        <div>Enter your email and we'll send you a link to download the free app</div>
                        <div >
                            <input className={styles.inp} type="email" placeholder="Email address" />
                            <button className={styles.btn1}>Send</button>
                        </div>
                    </div>
                    <div>
                        <div>SCAN QR CODE</div>
                        <div><img src="https://media.blackandwhite-ff.com/10000/2a0d5342-2544-4898-b2d4-8272235868d6_qr.png" alt="QR code" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MensDetail;