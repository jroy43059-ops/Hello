import React, { useContext, useEffect, useState } from 'react'
import { LoggerContext } from '../../Context/LoggerContex'

import styles from './Wishlist.module.css'
import { useToast } from '@chakra-ui/react'

import { RxCross2 } from 'react-icons/rx'

export default function Wishlist() {
    const { token } = useContext(LoggerContext)
    const [wishlist, setWishlist] = useState([])
    const [deleteWishlistLoading, setDeleteWishlistLoading] = useState(false)
    const [moveToCartLoading, setmoveToCartLoading] = useState(false)

    const [size, setSize] = useState('')
    const [product, setProduct] = useState({})

    const toast = useToast()

    useEffect(() => {
        getUserWishlist()
    }, [])

    const getUserWishlist = async () => {
        await fetch('https://proud-lamb-suspenders.cyclic.app/wishlists/userwishlist', {
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then(res => setWishlist(res))
            .catch(err => console.log(err))
    }

    const deleteWishlist = async (id) => {
        setDeleteWishlistLoading(true)
        await fetch(`https://proud-lamb-suspenders.cyclic.app/wishlists/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then(res => {
                setDeleteWishlistLoading(false)
                getUserWishlist()
                if (res.success) {
                    toast({
                        title: 'Product has been removed from wishlist.',
                        description: "Product has not been reflected on the wishlist section.",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                    })
                } else {
                    toast({
                        title: 'Something went wrong',
                        description: "Product has not been removed from wishlist",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                    })
                }
            })
            .catch(err => {
                setDeleteWishlistLoading(false)
                toast({
                    title: 'Something went wrong',
                    description: "Product has not been removed from wishlist",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
                console.log(err)
            })
    }

    const moveToCart = async () => {
        if (size !== '') {
            let obj = {
                name: product.name,
                img: product.img,
                color: product.color,
                quentity: 1,
                price: product.price,
                size
            }
            setmoveToCartLoading(true)
            await fetch(`https://proud-lamb-suspenders.cyclic.app/wishlists/movetocart/${product._id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(obj)
            }).then(res => res.json())
                .then(res => {
                    setmoveToCartLoading(true)
                    if (res.success) {
                        getUserWishlist()
                        toast({
                            title: 'Product has been moved to wishlist.',
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
                    setmoveToCartLoading(true)
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



    return (
        <div>
            <p className={styles.title} >MY WISHLIST</p>
            <div className={styles.tableHeading} >
                <p>ITEMS</p>
                <p>DESCRIPTION</p>
                <p>PRICE</p>
            </div  >
            <div  className={styles.totalItems} >
                <p>{wishlist.length} Items in your Wishlist</p>
            </div>
            {
                wishlist && wishlist.map((ele) =>
                    <div className={styles.wishlistCard} key={ele._id} >
                        <RxCross2 style={deleteWishlistLoading && { cursor: 'progress' }} onClick={() => deleteWishlist(ele._id)} />
                        <div>
                            <img src={ele.img} alt="" />
                        </div>
                        <div>
                            <div>
                                <b>{ele.name}</b>
                                <p>SKU : {ele._id}</p>
                                <p>Colour : {ele.color}</p>
                            </div>
                            <div>
                                <p>₹ {ele.price}.00</p>
                                <select onChange={(e) => setSize(e.target.value)} >
                                    <option value="">Select Size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXX">XXL</option>
                                    <option value="FS">FS</option>
                                </select>
                                <p style={{ color: 'red', fontSize: '12px' }} >{product._id == ele._id && 'Select Size'}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        moveToCart()
                                        setProduct(ele)
                                    }}
                                    className={moveToCartLoading && styles.processing}
                                >MOVE TO CART</button>
                            </div>
                        </div>

                    </div>)
            }
        </div>
    )
}
