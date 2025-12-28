import React, { useContext, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from "./Styles/AdminDashboard.module.css"
import { getCart, updateCart, deleteCart, getWishlist, deleteWishlist } from '../Redux/admin/action'

import mehelLogo from "../Assets/mehelLogo.webp"
import ProductsSkeliton from './ProductsSkeliton'


import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrView } from 'react-icons/gr'


import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Input, Select, useToast, Spinner, Skeleton } from '@chakra-ui/react'
import { LoggerContext } from '../Context/LoggerContex'

export default function Wishlist() {
    const [product, setproduct] = useState({})
    const [form, setForm] = useState(false)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quentity, setQuentity] = useState('')
    const [size, setSize] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const dispatch = useDispatch()
    const toast = useToast()

    const { token } = useContext(LoggerContext)

    const products = useSelector((store) => store.adminManager)
    const wishlist = useSelector((store) => store.adminManager.wishList)
    const deleteWishlistLoading = useSelector((store) => store.adminManager.deleteWishlistLoading)
    const wishListLoading = useSelector((store) => store.adminManager.wishListLoading)

    console.log(wishlist)

    const Update = () => {

    }

    const deleteFunction = (ele) => {
        deleteWishlist(dispatch, ele._id, token)

        setTimeout(() => {
            getWishlist(dispatch, token)
            toast({
                title: 'Product has been delete.',
                description: "Delete product will not reflected on the product page",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
        }, 1000);
    }

    useEffect(() => {
        getWishlist(dispatch, token)
    }, [])


    const cutString = (str, cut) => {
        let ans = ''
        for (let i = 0; i < cut; i++) {
            ans += str[i]
        }
        return ans
    }


    return (
        <div className={styles.InventoryContainer} >
            <img className={styles.mehelLogo} src={mehelLogo} alt="" />
            <div className={styles.InventoryCardContainer} >
                {wishListLoading ? <ProductsSkeliton /> :

                    <div className={styles.ProductsSkelitonContainer} >
                        {
                            wishlist.map((ele) =>
                                <div key={ele._id} className={styles.ProductsSkelitonCard} >
                                    <div>
                                        <div>
                                            <img src={ele.img} alt="" />
                                        </div>
                                        <div>
                                            <h2><b>{ele.name && cutString(ele.name, 15)}...</b></h2>
                                            <h2><b>Price : </b> ₹ {ele.price}.00</h2>
                                            <h2><b>Color : </b>{ele.color}</h2>
                                            <h2><b>User ID : </b>{ele.user && cutString(ele.user, 7)}...</h2>
                                        </div>
                                    </div>
                                    <div className={styles.ProductsBtns}  >
                                        <button onClick={() => {
                                            setForm(false)
                                            setproduct(ele)
                                            onOpen()
                                        }}  > <GrView /></button>

                                        <button onClick={() => {
                                            setproduct(ele)
                                            deleteFunction(ele)
                                        }} >{ele._id === product._id && deleteWishlistLoading ? <Spinner size='xs' /> : <RiDeleteBin5Line />}</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                }
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                {
                    form ?

                        <ModalContent>
                            <ModalHeader>Update product</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Input placeholder='Name :' mb='2' onChange={(e) => setName(e.target.value)} />
                                <Input placeholder='Price :' mb='2' onChange={(e) => setPrice(e.target.value)} />
                                <Input placeholder='Quentity :' mb='2' onChange={(e) => setQuentity(e.target.value)} />
                                <Input placeholder='Size :' mb='2' onChange={(e) => setSize(e.target.value)} />

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={
                                        Update
                                    }>
                                        {products.updateCartLoading ? <Spinner size='sm' /> : 'Update'}
                                    </Button>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>

                                </ModalFooter>
                            </ModalBody>
                        </ModalContent>
                        :
                        <ModalContent >
                            <ModalHeader>More about the product</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody className={styles.viewMoreCartModal} >
                                <div>
                                    <img src={product.img} alt="" />
                                </div>
                                <div>
                                    <p><b>Name : </b>{product.name}</p>
                                    <p><b>Price : </b>₹ {product.price}.00</p>
                                    <p><b>User Id : </b>{product.user}</p>
                                    <p><b>Product Id : </b>{product._id}</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                }
            </Modal>
        </div >
    )
}
