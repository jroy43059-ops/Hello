import React, { useContext } from 'react'

import styles from "./Navbar.module.css"
import { SearchContext } from '../../Context/SearchContext'
import { useNavigate } from 'react-router-dom'

export const MenContainer = () => {

    const navigate = useNavigate()

    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

    const goToProductwithCat = (gen, cat) => {
        setGender(gen)
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3(cat)
        setHeading('Men' + ' ' + cat)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }
    const gotoProductwithOcc = (occ) => {
        setGender('men')
        setCategory('')
        setOccasion(occ)
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3(occ)
        setHeading('Men' + ' ' + occ)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }
    const gotoProductwithColl = (coll) => {
        setGender('men')
        setCategory('')
        setOccasion('')
        setCollection(coll)
        setBreadCrum2('Men')
        setBreadCrum3(coll)
        setHeading('Men' + ' ' + coll)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }

    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3>New Arrivals</h3>
            <h3>Shop by Product</h3>
            <p onClick={() => goToProductwithCat('men', 'Kurta')} >Kurta</p>
            <p onClick={() => goToProductwithCat('men', 'Kurta Sets')} >Kurta Sets</p>
            <p onClick={() => goToProductwithCat('men', 'Kurta Jacket Set')} >Kurta Jacket Set</p>
            <p onClick={() => goToProductwithCat('men', 'Jackets')} >Jacket</p>
            <p onClick={() => goToProductwithCat('men', 'Indo-Western')} >Indo-Western</p>
            <p onClick={() => goToProductwithCat('men', 'Sherwani')} >Sherwani</p>
            <p onClick={() => goToProductwithCat('men', 'Kurta Dhoti')} >Kurta Dhoti</p>
            <h3>Shop by Occasion</h3>
            <p onClick={() => gotoProductwithOcc('Wedding')} >Wedding</p>
            <p onClick={() => gotoProductwithOcc('Reception')} >Reception</p>
            <p onClick={() => gotoProductwithOcc('Engagement')} >Engagement</p>
            <p onClick={() => gotoProductwithOcc('Sangeet')} >Sangeet</p>
            <p onClick={() => gotoProductwithOcc('Haldi')} >Haldi</p>
            <h3>Accessories</h3>
            <p onClick={() => goToProductwithCat('men', 'Safas')} >Safas</p>
            <p onClick={() => goToProductwithCat('men', 'Malas')} >Malas</p>
            <p onClick={() => goToProductwithCat('men', 'Footwear')} >Footwear</p>
            <h3>Bottomwear</h3>
            <h3>Celebrity Style</h3>
            <p onClick={() => goToProductwithCat('men', 'Ranveer Singh Collection')} >Ranveer Singh Collection</p>
            <h3>Shop By Collection</h3>
            <p onClick={() => gotoProductwithColl('Festive')}  >Festive</p>
            <p onClick={() => gotoProductwithColl('Formal')} >Formal</p>
            <p onClick={() => gotoProductwithColl('Classic')} >Classic</p>

        </div>
    )
}

export const WomenContainer = () => {
    const navigate = useNavigate()

    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

    const goToProductwithCat = (cat) => {
        setGender('women')
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setBreadCrum2('Women')
        setBreadCrum3(cat)
        setHeading('Women' + ' ' + cat)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }

    const goToProductwithColl = (col) => {
        setGender('women')
        setCategory('')
        setOccasion('')
        setCollection(col)
        setBreadCrum2('Women')
        setBreadCrum3(col)
        setHeading('Women' + ' ' + col)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }
    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3> Shop by Product</h3>
            <p onClick={() => goToProductwithCat('Lehenga')} >Lehenga</p>
            <p onClick={() => goToProductwithCat('Gown')} >Gown</p>
            <p onClick={() => goToProductwithCat('Saree')} >Saree</p>
            <p onClick={() => goToProductwithCat('Stitched Suits')} >Stitched Suits</p>
            <p onClick={() => goToProductwithCat('Kurti / Suit')} >Kurti / Suit</p>
            <h3>Shop by Collection</h3>
            <p onClick={() => goToProductwithColl('Bridal')} >Bridal</p>
            <p onClick={() => goToProductwithColl('Casual')} >Casual</p>
            <p onClick={() => goToProductwithColl('Festive')} >Festive</p>
        </div>
    )
}


export const KidsContainer = () => {
    const navigate = useNavigate()

    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

    const goToProductwithCat = (cat) => {
        setGender('kids')
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setBreadCrum2('Kids')
        setBreadCrum3(cat)
        setHeading('Kids' + ' ' + cat)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }

    const goToProductwithAll = () => {
        setGender('kids')
        setCategory('')
        setOccasion('')
        setCollection('')
        setBreadCrum2('Kids')
        setBreadCrum3('')
        setHeading('Kid')
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }


    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3 onClick={goToProductwithAll} >View All</h3>
            <p onClick={() => goToProductwithCat('Kurta')} >Kurta</p>
            <p onClick={() => goToProductwithCat('Kurta Jacket')} >Kurta Jacket</p>
            <p onClick={() => goToProductwithCat('Indo-Western')} >Indo-Western</p>
            <p onClick={() => goToProductwithCat('Juti')} >Juti</p>
        </div>
    )
}

export const AccessoriesContainer = () => {

    const navigate = useNavigate()

    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

    const goToProductwithCat = (cat) => {
        setGender('')
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setBreadCrum2('Accessories')
        setBreadCrum3(cat)
        setHeading(cat)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }

    return (
        <div className={styles.mainContainerOfsubMenueHB} >
            <h3>Shop by Product</h3>
            <p onClick={() => goToProductwithCat('Juti')} >Juti</p>
            <p onClick={() => goToProductwithCat('Brooch')} >Brooch</p>
            <p onClick={() => goToProductwithCat('Pocket Square')} >Pocket Square</p>
            <p onClick={() => goToProductwithCat('Safa')} >Safa</p>
            <p onClick={() => goToProductwithCat('Mala')} >Mala</p>
            <p onClick={() => goToProductwithCat('Bandanna')} >Bandanna</p>
            <p onClick={() => goToProductwithCat('Sherwani Inner Kurta')} >Sherwani Inner Kurta</p>
            <p onClick={() => goToProductwithCat('Socks')} >Socks</p>
        </div>
    )
}
