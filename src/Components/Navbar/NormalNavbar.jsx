import React, { useContext, useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'

import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import FullLogo from '../../Assets/manyavarFullLogo.webp'
import SmallLogo from '../../Assets/manyavarSmallLogo.webp'

import { motion } from 'framer-motion'

import { MenDropDown, WomenDropDown, KidsDropDown, AccessoriesDropDown } from "./DropDown"
import { mainItem } from './NavItem';

import Cookies from 'js-cookie';
import { ProfileContex } from '../../Context/ProfileContex';


export default function NormalNavbar() {
    const [menDropdown, setMenDropdown] = useState(false)
    const [womenDropdown, setWomenDropdown] = useState(false)
    const [kidsDropdown, setKidsDropdown] = useState(false)
    const [accessoriesDropDown, setAccessoriesDropDown] = useState(false)

    const [isFixed, setIsFixed] = useState(false);

    const { profile, setProfile, address, setAddress, order, setOrder, wishlist, setWishlist, password, setPassword, } = useContext(ProfileContex)

    let isAuth = Cookies.get('isAuth');

    const navigate = useNavigate()


    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const gotoStaticPage = (title) => {
        let pagename = title.toLowerCase()
        navigate(`/${pagename}`)
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
        < >
            <div style={{ cursor: 'pointer' }} className={styles.headingLogoContainer} >
                <div></div>
                <img onClick={() => navigate('/')} style={{cursor:'pointer'}} src={FullLogo} alt="" />
                <div>
                    <Link to='/search' > <FiSearch /></Link>
                    {/* <Link to='/register'><FiUser /></Link> */}
                    <Link className={styles.Nav_userIcon_div} to={isAuth ? '/userprofile' : '/register'}><FiUser />{isAuth ? <BsFillCheckCircleFill color='green' size='12' className={styles.nav_user_tick} /> : ""}</Link>
                    <AiOutlineHeart onClick={goToWishlistPage} />
                    <Link to='/cart' > <FiShoppingCart /></Link>
                </div>
            </div>
            <div style={{ top: isFixed ? 0 : 200, position: isFixed ? "fixed" : "static" }} className={styles.normalNavbarContainer} >
                <div><motion.img
                    whileInView={{ y: [-10, 0] }}
                    src={isFixed && SmallLogo} alt="" style={{cursor:'pointer'}} onClick={()=> navigate('/')} /></div>
                <div style={!isFixed ? { paddingBottom: '5px' } : {}} className={styles.dropDownMainMenue} >
                    {
                        mainItem.map((ele) => {
                            if (ele.title === 'MEN') {
                                return (
                                    <div
                                        onMouseEnter={() => setMenDropdown(true)}
                                        onMouseLeave={() => setMenDropdown(false)}
                                        key={ele.title}
                                    >   <h2 onClick={() => gotoStaticPage(ele.title)} >{ele.title}</h2>
                                        {menDropdown && <MenDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'WOMEN') {
                                return (
                                    <div
                                        onMouseEnter={() => setWomenDropdown(true)}
                                        onMouseLeave={() => setWomenDropdown(false)}
                                        key={ele.title}
                                    >   <h2 onClick={() => gotoStaticPage(ele.title)} >{ele.title}</h2>
                                        {womenDropdown && <WomenDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'KIDS') {
                                return (
                                    <div
                                        onMouseEnter={() => setKidsDropdown(true)}
                                        onMouseLeave={() => setKidsDropdown(false)}
                                        key={ele.title}
                                    >   <h2 >{ele.title}</h2>
                                        {kidsDropdown && <KidsDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'ACCESSORIES') {
                                return (
                                    <div
                                        onMouseEnter={() => setAccessoriesDropDown(true)}
                                        onMouseLeave={() => setAccessoriesDropDown(false)}
                                        key={ele.title}
                                    >   <h2  >{ele.title}</h2>
                                        {accessoriesDropDown && <AccessoriesDropDown />}
                                    </div>
                                )
                            }
                            return (
                                <div key={ele.id} style={{ cursor: 'pointer' }} onClick={() => gotoStaticPage(ele.title)}  >{ele.title}</div>
                            )
                        })
                    }
                </div>
                {isFixed ? <motion.div whileInView={{ y: [-10, 0] }}  >
                    <Link to='/search' ><FiSearch /></Link>
                    <Link className={styles.Nav_userIcon_div} to={isAuth ? '/userprofile' : '/register'}><FiUser />
                        {isAuth ? <BsFillCheckCircleFill color='green' size='12' className={styles.nav_user_tick} /> : ""}</Link>
                    <AiOutlineHeart style={{ cursor: 'pointer' }} onClick={goToWishlistPage} />
                    <Link to='/cart' > <FiShoppingCart /></Link></motion.div> : <div></div>}
            </div>
        </>
    )
}
