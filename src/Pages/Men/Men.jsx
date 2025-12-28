import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import styles from './Men.module.css'
import Footer from '../../Components/Footer/Footer'
import { SearchContext } from '../../Context/SearchContext'
import { useNavigate } from 'react-router-dom'

export default function Men() {
    const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

    const navigate = useNavigate()

    const goToWeddingSectionFormen = () => {
        setGender('men')
        setCategory('Sherwani')
        setOccasion('Wedding')
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3('Men Wedding Collection')
        setHeading('Men Wedding')
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }

    const getoProductpageWithDiffCat = (cat) => {
        setGender('men')
        setCategory(cat)
        setOccasion('')
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3(cat)
        setHeading(cat)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }
    const getoProductpageWithOcc = (occ) => {
        setGender('men')
        setCategory('')
        setOccasion(occ)
        setCollection('')
        setBreadCrum2('Men')
        setBreadCrum3(occ)
        setHeading(occ)
        setColor('')
        setSize('')
        setSkip(0)
        setPage(1)
        navigate('/products')
    }


    return (
        <div style={{ backgroundColor: '#FFFBF2' }} >
            <Navbar />
            <div className={styles.IntroDiv} onClick={goToWeddingSectionFormen}  >
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/RS%20Kurta%20Jacket%20Hero%20Banner_Desktop%20jpg?$Desktop%20HP%20Carousel$" alt="" />
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/RS%20Kurta%20Jacket%20Hero%20Banner%20_Mobile%20JPG?$Mobile%20HP%20Carousel$" alt="" />
            </div>
            <div className={styles.menDiffCat} >
                <img onClick={() => getoProductpageWithDiffCat('Kurta Jacket Set')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-jacket-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithDiffCat('Indo-Western')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/indo-western-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithDiffCat('Sherwani')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/sherwani-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithDiffCat('Kurta Sets')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/kurta-pajama-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithDiffCat('Kurta')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/only-kurta-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithDiffCat('Safa')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/accessories-card-option.jpg" alt="" />
            </div>
            <h1>From Engagement to Reception</h1>
            <div className={styles.engagementToreception} >
                <img onClick={() => getoProductpageWithOcc('Engagement')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/engagement-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithOcc('Sangeet')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/sangeet-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithOcc('Wedding')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/wedding-men-2022.jpg" alt="" />
                <img onClick={() => getoProductpageWithOcc('Reception')} src="https://static01.manyavar.com/uploads/homepagetemplates/images/reception-men-2022.jpg" alt="" />
            </div>
            <div onClick={() => getoProductpageWithOcc('Wedding')} className={styles.collectiblesTitle} >
                <h2>Collectibles</h2>
                <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/bottom_strip.png" alt="" />
                <p>ATTENDING A WEDDING? #TAIYAARHOKARAIYE</p>
            </div>
            <div onClick={() => getoProductpageWithOcc('Wedding')} className={styles.collectibles} >
                <div>
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20the%20Groom_Desktop%20revised%20dimension%20jpg?$Desktop%20Collectible$" alt="" />
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20a%20groom_New%20Mobile%20Dimension%20jpg?$Mobile%20Collectible$" alt="" />
                </div>
                <div>
                    <h2>Collectibles</h2>
                    <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/bottom_strip.png" alt="" />
                    <p>ATTENDING A WEDDING? #TAIYAARHOKARAIYE</p>
                </div>
                <div>
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20the%20Guest_Desktop%20revised%20dimension%20jpg?$Desktop%20Collectible$" alt="" />
                    <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20as%20a%20guest_New%20Mobile%20Dimension%20jpg?$Mobile%20Collectible$" alt="" />
                </div>
            </div>
            <div className={styles.wedCollection} onClick={() => getoProductpageWithOcc('Wedding')} >
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/LP%20Bottom%20Banner_Desktop%20jpg?$Men%20Desktop%20Footer%20Banner$" alt="" />
                <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/LP%20Bottom%20Banner%20option_Mobile%20jpg?$Men%20Mobile%20Footer%20Banner$" alt="" />
            </div>
            <div className={styles.taiyaarHokarAiyeBackground} >
                <h1>#TaiyaarHokarAiye</h1>
            </div>
            <img className={styles.taiyaarHokarAiyeImg} src="https://static01.manyavar.com/uploads/homepagetemplates/images/mny-rs-yt.jpg" alt="" />
            <Footer />
        </div>

    )
}
