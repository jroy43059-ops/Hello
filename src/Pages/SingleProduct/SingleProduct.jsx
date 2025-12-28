import React, { useContext, useEffect, useState } from 'react'

import styles from './SingleProduct.module.css'

import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Images from './ZoomIn'

import { GrShareOption, GrFormSubtract } from 'react-icons/gr'
import { CiRuler } from 'react-icons/ci'
import { MdOutlineAdd } from 'react-icons/md'
import { AiFillHeart, AiTwotoneAlert } from 'react-icons/ai'
import { TbPhoneCall } from 'react-icons/tb'
import { RxDotFilled } from 'react-icons/rx'

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { LoggerContext } from '../../Context/LoggerContex'

export default function SingleProduct() {

    const [selSize, setSelSize] = useState('')
    const [quentity, setQuentity] = useState(1)
    const [sizealert, setSizealert] = useState(false)
    const [obj, setObj] = useState({})
    const [wishlistLoad, setWishlist] = useState(false)
    const [cartlistLoad, setCartlist] = useState(false)

    const { token } = useContext(LoggerContext)

    const { id } = useParams()

    const toast = useToast()


    useEffect(() => {
        getData()
    }, [id])

    const getData = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/products/${id}`)
            .then(res => res.json())
            .then(res => setObj(res[0]))
            .catch(err => console.log(err))
    }

    const QuentityInc = () => {
        if (selSize != '') {
            setSizealert(false)
        }
        if (selSize == '') {
            setSizealert(true)
        } else if (quentity < 10) {
            setQuentity(quentity + 1)
        }
    }

    const QuentityDec = () => {
        if (quentity > 1) {
            setQuentity(quentity - 1)
        }
    }

    const selectSize = (ele) => {
        if (sizealert) {
            setSizealert(false)
        }
        setSelSize(ele)
    }

    const AddtoCart = async () => {
        if (!token) {
            toast({
                title: 'Please Login',
                description: "For adding into wishlist you have to login first",
                status: 'info',
                duration: 3000,
                isClosable: true,
                position: 'top'
            })

        } else {
            if (selSize == '') {
                setSizealert(true)
            } else {
                setCartlist(true)
                let cartobj = {
                    name: obj.name,
                    img: obj.img1,
                    color: obj.color,
                    quentity,
                    price: obj.price,
                    size: selSize
                }
                await fetch(`https://proud-lamb-suspenders.cyclic.app/cart/add`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': token
                    },
                    body: JSON.stringify(cartobj)
                }).then(res => res.json())
                    .then(res => {
                        setCartlist(false)
                        if (res.msg == 'Product has been added') {
                            toast({
                                title: 'Product has been added to cart.',
                                description: "You can see the product in your cart.",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                                position: 'top'
                            })
                        } else {
                            toast({
                                title: 'Something went wrong',
                                description: "Product has not been moved to cart",
                                status: 'error',
                                duration: 3000,
                                isClosable: true,
                                position: 'top'
                            })
                        }
                    })
                    .catch(err => {
                        setCartlist(false)
                        toast({
                            title: 'Something went wrong',
                            description: "Product has not been moved to cart",
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                            position: 'top'
                        })
                        console.log(err)
                    })

            }
        }
    }

    const AddedToWishlist = async () => {
        setWishlist(true)
        let wishlistObj = {
            name: obj.name,
            img: obj.img1,
            price: obj.price,
            color: obj.color
        }

        if (!token) {
            toast({
                title: 'Please Login',
                description: "For adding into wishlist you have to login first",
                status: 'info',
                duration: 3000,
                isClosable: true,
                position: 'top'
            })

        } else {
            await fetch(`https://proud-lamb-suspenders.cyclic.app/wishlists/add`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(wishlistObj)
            }).then(res => res.json())
                .then(res => {
                    setWishlist(false)
                    if (res.success) {
                        toast({
                            title: 'Product has been added into wishlist.',
                            description: "Product has been reflected on the wishlist section.",
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                            position: 'top'
                        })
                    } else {
                        setWishlist(false)
                        toast({
                            title: 'Something went wrong',
                            description: "Product has not been added to wishlist",
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                            position: 'top'
                        })
                    }

                })
                .catch(err => {
                    setWishlist(false)
                    toast({
                        title: 'Something went wrong',
                        description: "Product has not been added to wishlist",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                    })
                    console.log(err)
                })
        }
    }

    return (
        <div>
            <Navbar />
            <div className={styles.twoFlex} >
                <Images

                    img={obj.img1}

                    img1={obj.img1}
                    img2={obj.img2}
                    img3={obj.img3}
                    img4={obj.img4}
                    img5={obj.img5}
                />
                <div className={styles.ProductDiscription} >
                    <div>
                        <p>MANYAVAR COLLECTION</p>
                        <div><h2>{obj.name}</h2> <GrShareOption /> </div>
                        <p>Product Code : {obj._id}</p>
                        <h3>₹ {obj.price}.00</h3>
                        <p>inclusive of all taxes</p>
                    </div>
                    <div>
                        <div><p>Select Size</p> <p><CiRuler /> Size Guide</p> </div>
                        {
                            obj.size && obj.size.map((ele) => <button key={ele} className={selSize == ele && styles.selectedSize} onClick={() => selectSize(ele)} >{ele}</button>)
                        }
                        <h2>{sizealert && 'Please select the size'}</h2>
                    </div>
                    <div>
                        <p>Select Quantity</p>
                        <div>
                            <button onClick={QuentityDec} ><GrFormSubtract /></button>
                            <button>{quentity}</button>
                            <button onClick={QuentityInc} ><MdOutlineAdd /></button>
                        </div>
                    </div>
                    <div>
                        <button className={cartlistLoad && styles.process} onClick={AddtoCart} >ADD TO CART</button>
                        <AiFillHeart style={wishlistLoad && { cursor: 'progress' }} onClick={AddedToWishlist} />
                    </div>
                    <div>
                        <p>Check Delivery Availability</p>
                        <input type="text" placeholder='Enter Pincode' />
                    </div>
                    <div>
                        <h2>STILL CONFUSED? SPEAK TO OUR STYLIST</h2>
                        <button><AiTwotoneAlert />BOOK AN APPOINTMENT</button>
                        <button><TbPhoneCall />1800 120 500</button>
                    </div>
                    <div>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h3>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' >
                                            FEATURES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                    <div className={styles.featureContainer} >
                                        {
                                            obj.features && obj.features.map((ele) => <p ><RxDotFilled />{ele}</p>)
                                        }
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            DESCRIPTION
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4} >
                                    <p className={styles.accordianText}  >{obj.description}</p>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h3>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            MANUFACTURE DETAILS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                    <div className={styles.featureContainer} >
                                        <div>
                                            <p><RxDotFilled /><b>Address</b></p>
                                            <span>{obj.address}</span>
                                        </div>
                                        <div>
                                            <p><RxDotFilled /><b>Email</b></p>
                                            <span>{obj.email}</span>
                                        </div>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
