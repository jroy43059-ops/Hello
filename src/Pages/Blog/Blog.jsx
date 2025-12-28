import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import styles from './Blog.module.css'

export default function Blog() {
    return (
        <div style={{ backgroundColor: '#FFFBF2' }}  >
            <Navbar />
            <div  className={styles.introImgs} >
                <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Hero_Ritual_D%20jpg_13-03-2023-05-59?$WT_Blogs_Banner_D$" alt="" />
                <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Hero_Rituals_M%20jpg_13-03-2023-08-52?$WT_Blogs_Banner_M$" alt="" />
            </div>

            <h1 className={styles.blogHeading} >STORIES BY MANYAVAR & MOHEY</h1>
            <div className={styles.gridContainer} >
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_Rituals_M_27-02-2023-06-25?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>Five Unique Wedding Rituals in India.</p>
                    <h2>02 Mar 2023</h2>
                </div>
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_Flower_M_06-03-2023-11-44?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>The Expression of Connection: Flowers in Indian Wedding</p>
                    <h2>16 Dec 2022</h2>
                </div>
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_KurtaColors_D_06-03-2023-11-44?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>How to Choose the Right Colours When Buying a Kurta Pajama</p>
                    <h2>02 Dec 2022</h2>
                </div>
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_Trendy_Modern_D?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>2022 Trendy & Modern Ethnic Outfit Ideas for Men</p>
                    <h2>13 Aug 2022</h2>
                </div>
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_RakhiMen_D_06-03-2023-07-22?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>Raksha Bandhan Outfit Ideas for Men</p>
                    <h2>03 Aug 2022</h2>
                </div>
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_IndependenceDay_D?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>Traditional Outfits For Men To Look Stylish This Independence Day</p>
                    <h2>03 Aug 2022</h2>
                </div>
                <div>
                    <img src="https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_10outfits_D_06-03-2023-07-22?$WT_Blogs_Tiles_D%26M$" alt="" />
                    <p>10 Traditional Outfit Ideas to Dress for Ganesh Chaturthi 2022</p>
                    <h2>03 Aug 2022</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}
