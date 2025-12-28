import React, { useContext, useState } from 'react'
import styles from "./Navbar.module.css"

import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaFacebookF, FaPinterestP } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { TfiLinkedin, TfiYoutube } from 'react-icons/tfi'

import manyavarFullLogo from '../../Assets/manyavarFullLogo.webp'


import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Input } from '@chakra-ui/react'
import { AccessoriesContainer, KidsContainer, MenContainer, WomenContainer } from './DifferentContainerInHB';
import { useNavigate } from 'react-router-dom';
import { ProfileContex } from '../../Context/ProfileContex';

export default function HamburgerNavbar() {

    const [hamburger, setHamburger] = useState(true)

    const [men, showMen] = useState(false)
    const [women, showWomen] = useState(false)
    const [kids, showKids] = useState(false)
    const [Accessories, showAccessories] = useState(false)


    const { profile, setProfile, address, setAddress, order, setOrder, wishlist, setWishlist, password, setPassword, } = useContext(ProfileContex)



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    const navigate = useNavigate()

    const closeDrawer = () => {
        onClose()
        setHamburger(!hamburger)
    }

    const goToWishlistPage = () => {
        setProfile(false)
        setAddress(false)
        setOrder(false)
        setWishlist(true)
        setPassword(false)
        navigate('/userprofile')
    }

    return (
        <div className={styles.hamburderNavbarContainer} >
            <div>
                <button ref={btnRef} onClick={onOpen}>
                    {hamburger && <RxHamburgerMenu onClick={() => setHamburger(!hamburger)} />}
                </button>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    size='full'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    {/* <DrawerOverlay /> */}
                    <DrawerContent className={styles.DrawerContent} bg='none' >
                        <DrawerCloseButton className={styles.closeBtn} onClick={() => {
                            setHamburger(!hamburger)
                            showMen(false)
                            showWomen(false)
                            showKids(false)
                            showAccessories(false)
                        }} />
                        <DrawerHeader bg='none' style={{ color: '#FFFBF2' }} className={styles.DrowerHeader} >a</DrawerHeader>

                        <DrawerBody p='0' className={styles.Drowerbody} >
                            <div>
                                <p onClick={() => {
                                    showMen(true)
                                    showWomen(false)
                                    showKids(false)
                                    showAccessories(false)
                                }} >MEN</p>
                                <p onClick={() => {
                                    showMen(false)
                                    showWomen(true)
                                    showKids(false)
                                    showAccessories(false)
                                }} >WOMEN</p>
                                <p onClick={() => {
                                    showMen(false)
                                    showWomen(false)
                                    showKids(true)
                                    showAccessories(false)
                                }} >KIDS</p>
                                <p onClick={() => {
                                    showMen(false)
                                    showWomen(false)
                                    showKids(false)
                                    showAccessories(true)
                                }} >ACCESSORIES</p>
                                <p onClick={() => navigate('/blog')} >BLOG</p>
                                <p onClick={() => navigate('/login')} >SIGN IN</p>
                                <p onClick={goToWishlistPage} >WISHLIST</p>
                                <p onClick={()=> navigate('/userprofile')} >MY PROFILE</p>
                                <div className={styles.socialMediainHB} >
                                    <a href="https://www.facebook.com/Manyavar/" target='_blank' ><FaFacebookF /></a>
                                    <a href="https://twitter.com/Manyavar_" target="_blank" ><BsTwitter /></a>
                                    <a href="https://www.instagram.com/manyavarmohey/" target="_blank" ><AiOutlineInstagram /></a>
                                    <a href="https://www.linkedin.com/company/vedant-fashions-private-limited/" target="_blank" ><TfiLinkedin /></a>
                                    <a href="https://www.youtube.com/channel/UCLFcNhsW8b2lfggndqNN3jA" target="_blank" ><TfiYoutube /></a>
                                    <a href="https://in.pinterest.com/manyavar1/" target="_blank" ><FaPinterestP /></a>
                                </div>
                            </div>
                            <div onClick={closeDrawer} >
                                {men ? <MenContainer />
                                    : women ? <WomenContainer />
                                        : kids ? <KidsContainer />
                                            : Accessories ? <AccessoriesContainer />
                                                : <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.376)', height: '90vh' }} ></div>}
                            </div>
                        </DrawerBody>
                    </DrawerContent >
                </Drawer >
            </div >
            <div><img onClick={() => navigate('/')} src={manyavarFullLogo} alt="" /></div>
            <div> <FiSearch onClick={() => navigate('/search')} /><FiShoppingCart onClick={() => navigate('/cart')} /></div>

        </div >
    )
}

