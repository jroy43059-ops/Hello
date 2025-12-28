import React from 'react'
import { useState } from 'react'
import styles from './Products.module.css'

import { AiOutlineHeart } from 'react-icons/ai'
import { AiTwotoneHeart } from 'react-icons/ai'

export default function Card({ image1, image2 }) {
    const [hover, setHover] = useState(false)
    // console.log(hover)

    const [wish, setWish] = useState(true)
    // console.log(wish)

    const hoverIMG = () => {
        setHover(true)
    }
    const normalIMG = () => {
        setHover(false)
    }

    return (
        // <div className={styles.product_card}>
        //     <img src={hover ? image2 : image1} alt="" onMouseEnter={hoverIMG} onMouseLeave={normalIMG} />
        // </div>
        <div className={styles.HomeCardImg_Div}>
            <div onClick={() => setWish(!wish)} className={styles.wishlistHeart}>{wish ? <AiOutlineHeart color='white' size='25px' /> : <AiTwotoneHeart size='25px' color='red' />}</div>
            <img style={{ transition: '0.1s' }} src={hover ? image2 : image1} alt="" onMouseEnter={hoverIMG} onMouseLeave={normalIMG} />
        </div>
    )
}




