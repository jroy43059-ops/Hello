import React, { useRef, useState } from 'react';
import './HomeBannerSlider.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'



// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { SearchContext } from '../../Context/SearchContext';

export default function HomeBannerSlider() {

    const navigate = useNavigate()

    const { setGender, setCategory, setOccasion, setCollection, breadCrum2, setBreadCrum2, breadCrum3, setBreadCrum3,
        heading, setHeading, setSkip, setPage } = useContext(SearchContext)

    return (
        <div id='HomeSliderBanner'>
            <div className='HomeBanner-Normal'>
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide onClick={() => {
                        setGender("women")
                        setCategory("")
                        setCollection("Bridal")
                        setOccasion("")
                        setHeading("Bridal Lehengas")
                        setBreadCrum2("Women")
                        setBreadCrum3("Bridal")
                        setSkip(0)
                        setPage(1)
                        navigate('/products')
                    }}>
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kiara%20HP%20Banner%20_Desktop%20_04-01-2023-07-29?$R%2DD%2DHP%2DB$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => {
                        setGender("men")
                        setCategory('')
                        setCollection("")
                        setOccasion('Wedding')
                        setHeading("Wedding")
                        setBreadCrum2("Men")
                        setBreadCrum3("Wedding")
                        setSkip(0)
                        setPage(1)
                        navigate('/products')
                    }} >
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/RS%20Kurta%20Jacket%20Hero%20Banner_Desktop%20jpg_09-11-2022-09-29?$R%2DD%2DHP%2DB$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => {
                        setGender("men")
                        setCategory('')
                        setCollection("Festive")
                        setOccasion("")
                        setHeading("Festive")
                        setBreadCrum2("Men")
                        setBreadCrum3("Festive")
                        setSkip(0)
                        setPage(1)
                        navigate('/products')
                    }} >
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Taiyari_Desktop%20jpg_09-11-2022-09-29?$R%2DD%2DHP%2DB$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => {
                        setGender("women")
                        setCategory('Lehenga')
                        setCollection("")
                        setOccasion("")
                        setHeading("Lehenga")
                        setBreadCrum2("Women")
                        setBreadCrum3("Lehenga")
                        setSkip(0)
                        setPage(1)
                        navigate('/products')
                    }}  >
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Lehenga%20Hero%20Banner%20chnages%202_Desktop%20jpg_09-11-2022-09-29?$R%2DD%2DHP%2DB$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => {
                        setGender("men")
                        setCategory('Kurta Jacket Set')
                        setCollection("")
                        setOccasion("")
                        setHeading("Kurta Jackets Set")
                        setBreadCrum2("Men")
                        setBreadCrum3("Kurta Jackets Set")
                        setSkip(0)
                        setPage(1)
                        navigate('/products')
                    }}   >
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kurta%20Jacket%20SM%20image_Desktop%20jpg_09-11-2022-09-29?$R%2DD%2DHP%2DB$" alt="" />
                    </SwiperSlide>

                    {/* <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div> */}
                </Swiper>
            </div>
            <div className='HomeBanner-mobile'>
                <Swiper

                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kiara%20HP%20Banner_Mobile%20jpg_04-01-2023-10-07?$Revalsys%20Mob%20HP$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/RS%20Kurta%20Jacket%20Hero%20Banner%20_Mobile%20JPG_09-11-2022-09-18?$Revalsys%20Mob%20HP$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Lehenga%20Hero%20Banner%20changes%202_Mobile%20jpg_09-11-2022-09-18?$Revalsys%20Mob%20HP$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Taiyari_Mobile%20jpg_09-11-2022-09-18-1?$Revalsys%20Mob%20HP$" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kurta%20%20Jacket%20Set_Mobile%20jpg_09-11-2022-09-18?$Revalsys%20Mob%20HP$" alt="" />
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    )
}
