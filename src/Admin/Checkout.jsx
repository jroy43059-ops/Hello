import React, { useContext, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from "./Styles/AdminDashboard.module.css"
import { getCheckout } from '../Redux/admin/action'

import mehelLogo from "../Assets/mehelLogo.webp"
import ProductsSkeliton from './ProductsSkeliton'

import { GrView } from 'react-icons/gr'


import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Input, Select, useToast, Spinner } from '@chakra-ui/react'
import { LoggerContext } from '../Context/LoggerContex'

export default function Checkout() {

    const [product, setproduct] = useState({})

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { token } = useContext(LoggerContext)

    const dispatch = useDispatch()
  
    const checkout = useSelector((store) => store.adminManager)


    useEffect(() => {
        getCheckout(dispatch, token)
    }, [])


    return (
        <div className={styles.InventoryContainer} >
            <img className={styles.mehelLogo} src={mehelLogo} alt="" />
            <div className={styles.InventoryCardContainer} >
                {
                    checkout.checkoutLoading ? <ProductsSkeliton /> :
                        <div className={styles.ProductsSkelitonContainer} >
                            {
                                checkout.checkoutList && checkout.checkoutList.map((ele) =>
                                    <div key={ele._id} className={styles.ProductsSkelitonCard} >
                                        <div>
                                            <div>
                                                <img src={ele.img} alt="" />
                                            </div>
                                            <div>
                                                <h2><b>{ele.name.substring(0, 10)}...</b></h2>
                                                <h2><b>Price : </b> ₹ {ele.price}.00</h2>
                                                <h2><b>Quentity : </b> {ele.quantity}</h2>
                                                <h2><b>Id :</b>{ele._id.substring(0, 10)}..</h2>
                                            </div>
                                        </div>
                                        <div className={styles.ProductsBtns}  >
                                            <button onClick={() => {
                                                setproduct(ele)
                                                onOpen()
                                            }}  > <GrView /></button>

                                           
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>

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
                            <p><b>Quentity : </b>{product.quantity}</p>
                            <p><b>Size : </b>{product.size}</p>
                            <p><b>Payment : </b>{product.payment}</p>
                            <p><b>Address : </b>{product.address}</p>
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

            </Modal>
        </div>
    )
}
