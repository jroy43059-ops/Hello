import React, { useContext, useEffect, useState } from 'react'
import { LoggerContext } from '../../Context/LoggerContex'

import styles from './Orders.module.css'

export default function Orders() {

    const { token } = useContext(LoggerContext)
    const [ordersArr, setOrdersArr] = useState([])

    useEffect(() => {
        getUserOder()
    }, [])

    const getUserOder = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/checkouts/usercheckout`, {
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then((res) => setOrdersArr(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className={styles.title} >MY ORDER</p>
            <div className={styles.orderHeading} >
                <p>ITEM</p>
                <p>DESCRIPTION</p>
                <p>PRICE</p>
                <p>Quantity</p>
                <p>TOTAL</p>
                <p>PAYMENT</p>
            </div>
            {
                ordersArr && ordersArr.map((ele) =>
                    <div className={styles.orderCard} >
                        <div>
                            <img src={ele.img} alt="" />
                        </div>
                        <div>
                            <p>{ele.name}</p>
                            <p>Color : {ele.color}</p>
                            <p>Size : {ele.size}</p>
                            <p>Address : {ele.address}</p>
                        </div>
                        <div>
                            <p>₹ {ele.price}</p>
                        </div>
                        <div>
                            <p>{ele.quantity}</p>
                        </div>
                        <div>
                            <p>₹ {ele.quantity * ele.price}</p>
                        </div>
                        <div>
                            <p>{ele.payment}</p>
                        </div>
                    </div>)
            }
        </div>
    )
}
