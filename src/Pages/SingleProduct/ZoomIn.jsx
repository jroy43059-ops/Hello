import React, { useState } from 'react'

import styles from './SingleProduct.module.css'


export default function Images({ img, img1, img2, img3, img4, img5 }) {
    const [zoomin, setZoomIn] = useState(img)



    return (
        <div className={styles.Conteiner} >
            <div>
                <img onClick={() => setZoomIn(img1)} src={img1} alt="" />
                <img onClick={() => setZoomIn(img2)} src={img2} alt="" />
                <img onClick={() => setZoomIn(img3)} src={img3} alt="" />
                <img onClick={() => setZoomIn(img4)} src={img4} alt="" />
                <img onClick={() => setZoomIn(img5)} src={img5} alt="" />
            </div>
            <div>
                <img src={zoomin || img} alt="" />
                <p>Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings.</p>
            </div>
        </div>
    )
}
