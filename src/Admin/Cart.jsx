import React, { useContext, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from "./Styles/AdminDashboard.module.css"
import { getCart, updateCart, deleteCart } from '../Redux/admin/action'

import mehelLogo from "../Assets/mehelLogo.webp"
import ProductsSkeliton from './ProductsSkeliton'


import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrView } from 'react-icons/gr'


import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Input, Select, useToast, Spinner } from '@chakra-ui/react'
import { LoggerContext } from '../Context/LoggerContex'

export default function Cart() {

    const [product, setproduct] = useState({})
    const [form, setForm] = useState(false)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quentity, setQuentity] = useState('')
    const [size, setSize] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { token } = useContext(LoggerContext)

    const dispatch = useDispatch()
    const toast = useToast()

    const cart = useSelector((store) => store.adminManager)


    const Update = () => {
        let obj = {
            name: name || product.name,
            price: Number(price) || Number(product.price),
            quentity: Number(quentity) || Number(product.quentity),
            size: size || product.size,
        }
        updateCart(dispatch, product._id, obj, token)

        setTimeout(() => {
            getCart(dispatch, token)
            toast({
                title: 'Product has been updated.',
                description: "Update has been reflected on the product page",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
            onClose()
        }, 1000);
    }

    const deleteFunction = (ele) => {
        deleteCart(dispatch, ele._id, token)

        setTimeout(() => {
            getCart(dispatch, token)
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
        getCart(dispatch, token)
    }, [])


    return (
        <div className={styles.InventoryContainer} >
            <img className={styles.mehelLogo} src={mehelLogo} alt="" />
            <div className={styles.InventoryCardContainer} >
                {
                    cart.cartListLoading ? <ProductsSkeliton /> :
                        <div className={styles.ProductsSkelitonContainer} >
                            {
                                cart.cartList && cart.cartList.map((ele) =>
                                    <div key={ele._id} className={styles.ProductsSkelitonCard} >
                                        <div>
                                            <div>
                                                <img src={ele.img} alt="" />
                                            </div>
                                            <div>
                                                <h2><b>{ele.name.substring(0, 10)}...</b></h2>
                                                <h2><b>Price : </b> ₹ {ele.price}.00</h2>
                                                <h2><b>Quentity : </b> {ele.quentity}</h2>
                                                <h2><b>Id :</b>{ele._id.substring(0, 10)}..</h2>
                                            </div>
                                        </div>
                                        <div className={styles.ProductsBtns}  >
                                            <button onClick={() => {
                                                setForm(false)
                                                setproduct(ele)
                                                onOpen()
                                            }}  > <GrView /></button>

                                            <button onClick={() => {
                                                setForm(true)
                                                setproduct(ele)
                                                onOpen()
                                            }}  ><AiOutlineEdit /></button>

                                            <button onClick={() => {
                                                setproduct(ele)
                                                deleteFunction(ele)
                                            }} >{ele._id === product._id && cart.deleteCartLoading ? <Spinner size='xs' /> : <RiDeleteBin5Line />}</button>
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
                                        {cart.updateCartLoading ? <Spinner size='sm' /> : 'Update'}
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
                                    <p><b>Quentity : </b>{product.quentity}</p>
                                    <p><b>Size : </b>{product.size}</p>
                                    <p><b>User : </b>{product.user}</p>
                                    <p><b>Id : </b>{product._id}</p>
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
        </div>
    )
}
