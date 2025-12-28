import React, { useEffect, useState } from 'react'

import styles from './Search.module.css'
import { useNavigate } from 'react-router-dom'

export default function Search() {
    const [query, setQuery] = useState(-1)
    const [arr, setArr] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [query])

    const getData = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/products/?q=${query}`)
            .then(res => res.json())
            .then(res => setArr(res))
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.searchPage} >
            <div className={styles.SearchBar} >
                <p>WHAT ARE YOU LOOKING FOR?</p>
                <input className={query !== -1 && styles.inputbackground} type="text" placeholder='Search Kurta, Sherwani, Lehenga...' onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className={styles.searchResultContainer}  >
                {
                    arr && arr.map((ele) =>
                        <div key={ele._id} onClick={() => navigate(`/singleproduct/${ele._id}`)}  >
                            <img src={ele.img1} alt="" />
                            <p>{ele.name.substring(0, 15)}...</p>
                            <p>{ele.category}</p>
                            <p>₹ {ele.price}.00</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
