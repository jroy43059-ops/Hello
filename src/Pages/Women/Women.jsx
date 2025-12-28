import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import styles from './Women.module.css'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../Context/SearchContext'

export default function Women() {

  const { setGender, setCategory, setOccasion, setCollection, setBreadCrum2, setBreadCrum3, setHeading, setColor, setSize, setSkip, setPage } = useContext(SearchContext)

  const navigate = useNavigate()

  const goToWeddingSectionForWomen = () => {
    setGender('women')
    setCategory('')
    setOccasion('Wedding')
    setCollection('')
    setBreadCrum2('Women')
    setBreadCrum3('Women Wedding Collection')
    setHeading('Women Wedding')
    setColor('')
    setSize('')
    setSkip(0)
    setPage(1)
    navigate('/products')
  }

  const getoProductpageWithOcc = (occ) => {
    setGender('women')
    setCategory('')
    setOccasion(occ)
    setCollection('')
    setBreadCrum2('Women')
    setBreadCrum3(occ)
    setHeading(occ)
    setColor('')
    setSize('')
    setSkip(0)
    setPage(1)
    navigate('/products')
  }

  const gotoProductWithCat = (cat) => {
    setGender('women')
    setCategory(cat)
    setOccasion('')
    setCollection('')
    setBreadCrum2('Women')
    setBreadCrum3(cat)
    setHeading(cat)
    setColor('')
    setSize('')
    setSkip(0)
    setPage(1)
    navigate('/products')
  }

  return (
    <div>
      <Navbar />
      <div onClick={goToWeddingSectionForWomen} className={styles.IntroDiv} >
        <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Kiara%20HP%20Banner%20_Desktop%20_04-01-2023-07-29?%20&wid=1700&hei=900&jpegSize=400&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
        <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Kiara%20HP%20Banner_Mobile%20jpg_04-01-2023-10-07?%20&wid=640&hei=900&jpegSize=150&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
      </div>
      <h1 className={styles.Womenheading} >Lehengas for Your Bridal Occasion</h1>
      <div className={styles.engagementToreception} >
        <img onClick={() => getoProductpageWithOcc('Engagement')} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Engagement%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
        <img onClick={() => getoProductpageWithOcc('Mehendi')} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Mehendi%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
        <img onClick={() => getoProductpageWithOcc('Wedding')} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Wedding%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
        <img onClick={() => getoProductpageWithOcc('Reception')} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Reception%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
      </div>
      <img onClick={() => gotoProductWithCat('Lehenga')} style={{ cursor: 'pointer' }} className={styles.headingImgs} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Last%20BG%20option%203%20jpg?&wid=1366&hei=585&jpegSize=300&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
      <img className={styles.headingImgs} src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Book%20an%20appointment_desktop%20jpg_11-11-2022-05-23?&wid=1580&hei=340&jpegSize=150&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
      <div className={styles.collectiblesTitle} >
        <h2>Collectibles</h2>
        <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/bottom_strip.png" alt="" />
        <p>GLAM UP WITH MOHEY</p>
      </div>
      <div className={styles.collectibles} >
        <div onClick={() => gotoProductWithCat('Saree')} style={{ cursor: 'pointer' }} >
          <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20Saree_Desktop%20revised%20dimension%20jpg_16-12-2022-13-45?&wid=480&hei=517&jpegSize=40&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
          <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20Gown_New%20Mobile%20Dimension%20jpg_16-12-2022-13-55?&wid=320&hei=494&jpegSize=40&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
        </div>
        <div>
          <h2>Collectibles</h2>
          <img src="https://static01.manyavar.com/uploads/homepagetemplates/images/bottom_strip.png" alt="" />
          <p>GLAM UP WITH MOHEY</p>
        </div>
        <div onClick={() => gotoProductWithCat('Gown')} style={{ cursor: 'pointer' }} >
          <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20Gown_Desktop%20revised%20dimension%20jpg_16-12-2022-13-45?&wid=480&hei=517&jpegSize=40&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
          <img src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Shop%20Saree_New%20Mobile%20Dimension%20jpg_16-12-2022-13-55?&wid=320&hei=494&jpegSize=40&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0" alt="" />
        </div>
      </div>
      <br />
      <div className={styles.taiyaarHokarAiyeBackground} >
        <h1>#DulhanWaliFeeling</h1>
      </div>
      <img className={styles.taiyaarHokarAiyeImg} src="https://static01.manyavar.com/uploads/homepagetemplates/images/kiara-yt-thumbnail-desktop-c.jpg" alt="" />
      <Footer />
    </div>
  )
}
