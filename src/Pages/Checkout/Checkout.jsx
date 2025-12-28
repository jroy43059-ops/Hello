import React, { useContext, useEffect, useState } from 'react'
import styles from './Checkout.module.css'

import logo from '../../Assets/manyavarFullLogo.webp'
import { useNavigate } from 'react-router-dom'
import { LoggerContext } from '../../Context/LoggerContex'
import { useToast } from '@chakra-ui/react'


export default function Checkout() {
    const user = JSON.parse(localStorage.getItem('Manyavaruser'))

    const navigate = useNavigate()
    const toast = useToast()

    const { token } = useContext(LoggerContext)
    const [cartArr, setCartArr] = useState([])
    const [sum, setSum] = useState(0)
    const [showPyment, setShowPyment] = useState(false)


    const [firstName, setFirstName] = useState(user.firstname)
    const [lastName, setLastName] = useState(user.lastname)
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [pin, setPin] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [adType, setAdType] = useState('')
    const [pyment, setPyment] = useState('')

    const [cardNumber, setCardNumber] = useState('')
    const [cvvNumber, setCvvNumber] = useState('')
    const [date, setDate] = useState('')
    const [cardHolderName, setCardHolderName] = useState('')

    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/cart/usercart`, {
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then(res => {
                setCartArr(res)
                allTotal(res)
            })
            .catch(err => console.log(err))

    }

    const allTotal = (arr) => {
        const totalAmount = arr.reduce((accumulator, item) => {
            return accumulator + item.price * item.quentity
        }, 0)
        setSum(totalAmount)
    }

    const ConfAddress = () => {
        if (phone === '' || address === '' || pin === '' || city === '' || state === '' || adType === '') {
            toast({
                title: 'Missing Information',
                description: "Please enter all the input fields.",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'top'
            })
        } else {
            setShowPyment(true)
        }
    }

    const checkoutSucess = async (id, obj) => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/checkouts/addcheckout/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const CheckOutFunction = () => {
        let finalAddress = address + ',' + city + ',' + state + ',' + pin + ',' + phone

        let ids = cartArr.map((ele) => { return ele._id })

        if (pyment === 'Card') {
            if (cardHolderName === '' || cvvNumber === '' || date === '' || cardNumber === '') {
                toast({
                    title: 'Missing Information',
                    description: "Please enter all the input fields.",
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            } else {
                let obj = {
                    address: finalAddress,
                    payment: pyment
                }

                ids.map((ele) =>
                    checkoutSucess(ele, obj)
                )

                toast({
                    title: 'Checkout Sucessful',
                    description: "You can see those product in your order section",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
                navigate('/')
            }
        } else {
            let obj = {
                address: finalAddress,
                payment: pyment
            }

            ids.map((ele) =>
                checkoutSucess(ele, obj)
            )

            toast({
                title: 'Checkout Sucessful',
                description: "You can see those product in your order section",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top'
            })
            navigate('/')
        }
    }

    return (
        <div style={{ backgroundColor: '#FFFBF2' }} >
            <img onClick={() => navigate('/')} className={styles.checkoutPageLogo} src={logo} alt="" />
            <h1 className={styles.heading} >Checkout</h1>
            <div className={styles.CheckoutContainer} >
                <div className={styles.CheckoutForm} >
                    <h2>Customer Information</h2>
                    <p style={{ margin: 0 }} >{user.email}</p>
                    <br />
                    <hr />
                    <br />
                    {
                        showPyment ?
                            <div className={styles.pymentOption} >
                                <h2>Mode of Payment</h2>
                                <p><input checked={pyment === 'COD'} value='COD' onChange={(e) => setPyment(e.target.value)} type="radio" />COD</p>
                                <p><input checked={pyment === 'Card'} value='Card' onChange={(e) => setPyment(e.target.value)} type="radio" />Card</p>
                                {
                                    pyment === 'Card' &&
                                    <div>
                                        <input type="number" placeholder='Card Number' onChange={(e) => setCardNumber(e.target.value)} />
                                        <input type="number" placeholder='CVV Number' onChange={(e) => setCvvNumber(e.target.value)} />
                                        <input type="date" placeholder='Expire Date' onChange={(e) => setDate(e.target.value)} />
                                        <input type="text" placeholder='Card Holder Name' onChange={(e) => setCardHolderName(e.target.value)} />
                                    </div>
                                }
                                <button className={styles.confAddressBtn} onClick={CheckOutFunction} >CONFIRM ORDER</button>
                            </div> :
                            <div>
                                <h2>Shipping address</h2>
                                <p>First name*</p>
                                <input type="text" placeholder={user.firstname} onChange={(e) => setFirstName(e.target.value)} />
                                <p>Last name*</p>
                                <input type="text" placeholder={user.lastname} onChange={(e) => setLastName(e.target.value)} />
                                <p>Mobile number*</p>
                                <input type="text" placeholder='Number' onChange={(e) => setPhone(e.target.value)} />
                                <p>Address*</p>
                                <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                                <p>Pincode*</p>
                                <input type="text" placeholder='Pin code' onChange={(e) => setPin(e.target.value)} />
                                <div>
                                    <div>
                                        <p>City*</p>
                                        <input type="text" placeholder='City' onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div>
                                        <p>State*</p>
                                        <input type="text" placeholder='State' onChange={(e) => setState(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <p>Type of address*</p>
                                    <div>
                                        <p><input checked={adType === 'Home'} value='Home' onChange={(e) => setAdType(e.target.value)} type="radio" name="" id="" /> Home</p>
                                        <p><input checked={adType === 'Work'} value='Work' onChange={(e) => setAdType(e.target.value)} type="radio" name="" id="" /> Work</p>
                                        <p><input checked={adType === 'Others'} value='Others' onChange={(e) => setAdType(e.target.value)} type="radio" name="" id="" /> Others</p>
                                    </div>
                                </div>
                                <button className={styles.confAddressBtn} onClick={ConfAddress} >CONFIRM ADDRESS</button>
                            </div>
                    }

                </div>
                <div className={styles.CheckoutSummary} >
                    <h2>Order Summary</h2>
                    <div>
                        <p>Subtotal</p>
                        <p>₹ {sum}</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p style={{ color: 'green' }} >Free</p>
                    </div>
                    <div>
                        <h2>Order Total:</h2>
                        <h2>₹ {sum}</h2>
                    </div>

                    <button>Cart Items</button>
                    {
                        cartArr && cartArr.map((ele) =>
                            <div className={styles.orderSummartCard} >
                                <img src={ele.img} alt="" />
                                <div>
                                    <p>{ele.name}</p>
                                    <p>Color: {ele.color}</p>
                                    <p>Size: {ele.size}</p>
                                    <div>
                                        <p>Qty: {ele.quentity}</p>
                                        <p>₹ {ele.quentity * ele.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
