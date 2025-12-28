import React, { useContext } from "react"
import { Men, Women, Kids, Accessories } from "./NavItem"

import styles from "./Navbar.module.css"

import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../Context/SearchContext"


export const MenDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()


    const GoToProductPage = (ele) => {
        setGender('men')
        setBreadCrum2('Men')
        setSkip(0)
        setPage(1)
        if (ele.id == 7 || ele.id == 9 || ele.id == 11 || ele.id == 13 || ele.id == 15 || ele.id == 17 || ele.id == 19 || ele.id == 5 || ele.id == 23 || ele.id == 25 || ele.id == 27 || ele.id == 29 || ele.id == 16) {
            setBreadCrum3('Only ' + ele.cat)
            setCategory(ele.cat)
            setOccasion('')
            setCollection('')
            setHeading(ele.cat)
            if (ele.id == 5) {
                setHeading('Men')
            }
        } else if (ele.id == 4 || ele.id == 6 || ele.id == 8 || ele.id == 10 || ele.id == 12) {
            setBreadCrum3(ele.occasion)
            setOccasion(ele.occasion)
            setCategory('')
            setCollection('')
            setHeading(ele.occasion)
        } else if (ele.id == 20 || ele.id == 22 || ele.id == 24) {
            setBreadCrum3(ele.collections)
            setCollection(ele.collections)
            setHeading(ele.collections)
            setCategory('')
            setOccasion('')
        }
        setSize('')
        setColor('')
        navigate('/products')
    }

    const gotoProductWthCat = (cat) => {
        setGender('men')
        setBreadCrum2('Men')
        setSkip(0)
        setPage(1)
        setBreadCrum3('Only ' + cat)
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setHeading(cat)
        setSize('')
        setColor('')
        navigate('/products')
    }

    return (
        <div className={styles.subMenue} onClick={() => setDropdown(!dropDown)} >
            {
                Men.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.type === 'heading' ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img onClick={() => gotoProductWthCat('Kurta Jacket Set')} style={{ cursor: 'pointer' }}  src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20the%20Groom_Desktop%20revised%20dimension%20jpg?$Desktop%20Collectible$" alt="" />
                <img onClick={() => gotoProductWthCat('Kurta Sets')} style={{ cursor: 'pointer' }} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20the%20Guest_Desktop%20revised%20dimension%20jpg?$Desktop%20Collectible$" alt="" />
            </div>
        </div>
    )
}
export const WomenDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const GoToProductPage = (ele) => {
        setGender('women')
        setBreadCrum2('Women')
        setSkip(0)
        setPage(1)
        if (ele.id == 5 || ele.id == 3 || ele.id == 7 || ele.id == 9 || ele.id == 11 || ele.id == 13) {
            setBreadCrum3(ele.category)
            setCategory(ele.category)
            setOccasion('')
            setCollection('')
            setHeading(ele.category)
            if (ele.id == 3) {
                setHeading('Women')
            }
        } else if (ele.id == 4 || ele.id == 6 || ele.id == 8) {
            setBreadCrum3(ele.collections)
            setCollection(ele.collections)
            setHeading(ele.collections)
            setCategory('')
            setOccasion('')
        }
        setSize('')
        setColor('')
        navigate('/products')
    }

    const gotoProductWthCat = (cat) => {
        setGender('women')
        setBreadCrum2('Women')
        setSkip(0)
        setPage(1)
        setBreadCrum3('Only ' + cat)
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setHeading(cat)
        setSize('')
        setColor('')
        navigate('/products')
    }


    return (
        <div className={styles.subMenue} id={styles.PaddingForWomenSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Women.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.type === 'heading' ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img onClick={() => gotoProductWthCat('Lehenga')} style={{ cursor: 'pointer' }} src="https://static01.manyavar.com/uploads/homepagetemplates/images/lehenga-mega-menu.jpg" alt="" />
                <img onClick={() => gotoProductWthCat('Saree')} style={{ cursor: 'pointer' }} src="https://static01.manyavar.com/uploads/homepagetemplates/images/saree-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const KidsDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setSize, setColor, setSkip, setPage } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const GoToProductPage = (ele) => {
        setGender('kids')
        setBreadCrum2('Kids')
        setSkip(0)
        setPage(1)
        if (ele.id == 1 || ele.id == 2) {
            setBreadCrum3('')
            setCategory('')
            setOccasion('')
            setCollection('')
            if (ele.id == 2) {
                setHeading('Kids')
            }
        } else {
            setBreadCrum3(ele.title)
            setCategory(ele.title)
            setOccasion('')
            setCollection('')
            setHeading(ele.title)
        }
        setSize('')
        setColor('')
        navigate('/products')
    }

    const gotoProductWthCat = (cat) => {
        setGender('kids')
        setBreadCrum2('Kids')
        setSkip(0)
        setPage(1)
        setBreadCrum3('Only ' + cat)
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setHeading(cat)
        setSize('')
        setColor('')
        navigate('/products')
    }

    return (
        <div className={styles.subMenue} id={styles.PaddingForKidsSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Kids.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.id === 1 ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img onClick={() => gotoProductWthCat('Kurta Jacket')} style={{ cursor: 'pointer' }} src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-jacket-megamenu-creative.jpg" alt="" />
                <img onClick={() => gotoProductWthCat('Kurta')} style={{ cursor: 'pointer' }} src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-set-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}
export const AccessoriesDropDown = () => {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setSize, setColor, setSkip, setPage } = useContext(SearchContext)
    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const GoToProductPage = (ele) => {
        setSkip(0)
        setPage(1)
        setBreadCrum2('Manyavar Accessories')
        if (ele.id !== 1) {
            setBreadCrum3(ele.title)
            setCategory(ele.title)
            setGender('')
            setOccasion('')
            setCollection('')
            setSize('')
            setColor('')
            navigate('/products')
            setHeading(ele.title)
        }

    }
    const gotoProductWthCat = (cat) => {
        setBreadCrum2('Manyavar Accessories')
        setSkip(0)
        setPage(1)
        setBreadCrum3('Only ' + cat)
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setHeading(cat)
        setSize('')
        setColor('')
        navigate('/products')
    }

    return (
        <div className={styles.subMenue} id={styles.PaddingForAccessoriesSubmenue} onClick={() => setDropdown(!dropDown)} >
            {
                Accessories.map((ele) => <p key={ele.id} onClick={() => GoToProductPage(ele)} className={ele.id === 1 ? styles.headingFromSubmenue : styles.normalSubmenue} >{ele.title}</p>)
            }
            <div className={styles.submenueImagesContainer} >
                <img onClick={() => gotoProductWthCat('Mala')} style={{ cursor: 'pointer' }} src="https://static01.manyavar.com/uploads/homepagetemplates/images/mala-megamenu-creative.jpg" alt="" />
                <img onClick={() => gotoProductWthCat('Safa')} style={{ cursor: 'pointer' }} src="https://static01.manyavar.com/uploads/homepagetemplates/images/safa-megamenu-creative.jpg" alt="" />
            </div>
        </div>
    )
}