import React from "react";
import styles from './Navbar.module.css';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
    useDisclosure
} from '@chakra-ui/react'
import { useContext } from "react";
import { Authentication } from "../Context/AuthContext";
import { useNavigate,Link } from "react-router-dom";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const auth = useContext(Authentication);
    const [details,setDetails] = React.useState({});
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        })
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(d => {
                console.log(d.token);
                auth.handleLogin(d.token);
                navigate('/')
            });

    }

    return (

        <div className={styles.navbar}>
            <div className={styles.discount}>Sale | 10,000 items at 60% off | Shop now</div>
            <div className={styles.top}>
                <div className={styles.topin}>
                    <div>Women</div>
                    <div><Link to='/'>Men</Link> </div>
                    <div>Kids </div>
                </div>
                <div >
                    <h1 className={styles.topcenter}>FARFETCH</h1>
                </div>
                <div className={styles.topout}>
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197419.png" alt="country" />

                    <img onClick={onOpen} src="https://cdn-icons-png.flaticon.com/512/126/126486.png" alt="user" />

                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent boxSize='xs'>
                            <form onSubmit={handleSubmit}>
                            <ModalHeader>Log In</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input ref={initialRef} placeholder='Email' type='email' name='email' onChange={handleChange} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' placeholder='Password' name="password" onChange={handleChange} />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} type='submit' onClick={onClose}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                            </form>
                        </ModalContent>
                    </Modal>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="wishlist" />
                   <Link to='./cart' ><img className={styles.cart}  src="https://cdn-icons.flaticon.com/png/512/2651/premium/2651753.png?token=exp=1658310841~hmac=82a1bd84a9f6e4524b7fb81bb44a8d79" alt="bag" /></Link>
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