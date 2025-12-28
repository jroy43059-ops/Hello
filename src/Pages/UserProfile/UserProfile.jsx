import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../UserProfile/UserProfile.module.css'
import Footer from '../../Components/Footer/Footer'

import { Spinner } from '@chakra-ui/react'

import { GrFormClose } from 'react-icons/gr';
import Wishlist from './Wishlist'
import { ProfileContex } from '../../Context/ProfileContex'

import Cookies from 'js-cookie';
import { LoggerContext } from '../../Context/LoggerContex'
import Orders from './Orders'

export default function UserProfile() {


    const [user, setUser] = useState({})

    const { profile, setProfile, address, setAddress, order, setOrder, wishlist, setWishlist, password, setPassword, } = useContext(ProfileContex)
    const { token, setToken, role, setRole, isAuth, setIsAuth } = useContext(LoggerContext)

    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [avatar, setAvatar] = useState("")

    const [loading, setLoading] = useState(false)


    const [edit, setEdit] = useState(false)

    const userID = JSON.parse(localStorage.getItem('Manyavaruser'))

    // console.log(user)
    useEffect(() => {
        GetData()
    }, [])

    const GetData = async () => {
        await fetch(`https://proud-lamb-suspenders.cyclic.app/users/${userID._id}`)
            .then((res) => res.json())
            .then((res) => {
                setUser(res[0])
                console.log(res[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const editBTNFunc = () => {
        setEdit(true)

    }
    const editSaveFunc = async () => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', avatar);
        formData.append('upload_preset', 'manyavar');

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/drijzhqfp/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();
        console.log(data);
        console.log(data.secure_url)

        let obj = {
            firstname: firstname || user.firstname,
            lastname: lastname || user.lastname,
            email: email || user.email,
            mobile: mobile || user.mobile,
            avatar: data.secure_url
        }
        await fetch(`https://proud-lamb-suspenders.cyclic.app/users/edit/${user._id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => {
                setLoading(false)
                setEdit(false)
                alert('Updated')
                GetData()
                console.log(res)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSave = () => {
        setIsOpen(false);
        // do something with the saved data
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal') {
            setIsOpen(false);
        }
    };

    const navigate = useNavigate()
    const logoutFunc = () => {

        Cookies.remove("isAuth");
        Cookies.remove("token");
        Cookies.remove("role");
        navigate('/login')

    }

    return (
        <div className={styles.profile_main_container}>
            <Navbar />
            <p className={styles.profile_root_name}>HOME / MY ACCOUNT</p>
            <div className={styles.profile_container_1}>
                <h1>My Account</h1>
                <p>HELLO, {user.firstname}</p>
                <button onClick={logoutFunc} className={styles.LogoutBTN}>Logout</button>
                <p>From your My Account you have the ability to view your recent account activity and update your account information.</p>
            </div>
            <div className={styles.profile_container_2}>
                <div className={styles.profile_con2_child_1}>
                    <button className={profile ? styles.active_profile : ""} onClick={() => {
                        setProfile(true)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(false)
                        setEdit(false)
                    }}>PROFILE</button>

                    <button className={address ? styles.active_adress : ""} onClick={() => {
                        setProfile(false)
                        setAddress(true)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(false)
                    }}>MY ADDRESS</button>

                    <button className={order ? styles.active_order : ""} onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(true)
                        setWishlist(false)
                        setPassword(false)
                    }}>MY ORDERS</button>

                    <button className={wishlist ? styles.active_wishlist : ""} onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(true)
                        setPassword(false)
                    }}>MY WISHLIST</button>

                    <button className={password ? styles.active_password : ""} onClick={() => {
                        setProfile(false)
                        setAddress(false)
                        setOrder(false)
                        setWishlist(false)
                        setPassword(true)
                    }}>CHANGE PASSWORD</button>

                </div>
                <div className={styles.profile_con2_child_2}>
                    {/* ========Profile======== */}
                    {profile ? <div className={styles.profile_container} >
                        {!edit ? <h1>MY PROFILE</h1> : <h1>EDIT MY PROFILE</h1>}

                        {
                            !edit ?
                                <div className={styles.profile_container_grid}>
                                    <div className={styles.profile_image_con}>
                                        <img src={user.avatar} alt="" />
                                    </div>
                                    <div >
                                        <div className={styles.profile_detail_heading}>
                                            <p>FIRST NAME</p>
                                            <p>LAST NAME</p>
                                        </div>
                                        <div className={styles.profile_detail}>
                                            <p>{user.firstname}</p>
                                            <p>{user.lastname}</p>
                                        </div>
                                        <div className={styles.profile_detail_heading}>
                                            <p>Email</p>
                                            <p>Mobile No.</p>
                                        </div>
                                        <div className={styles.profile_detail}>
                                            <p>{user.email}</p>
                                            <p>{user.mobile}</p>
                                        </div>
                                    </div>
                                </div> :
                                <div className={styles.profile_edit_container}>
                                    <input type="text" placeholder={user.firstname} onChange={(e) => setFname(e.target.value)} />
                                    <input type="text" placeholder={user.lastname} onChange={(e) => setLname(e.target.value)} />
                                    <input type="text" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="text" placeholder={user.mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
                                </div>
                        }



                        {edit ? <button className={styles.editBtn_profile} onClick={editSaveFunc}>{loading ? <Spinner size='sm' /> : 'SAVE'}</button> : <button className={styles.editBtn_profile} onClick={editBTNFunc}>EDIT</button>}
                    </div> : ""}
                    {/* ========Profile-End======== */}

                    {address ? <div className={styles.myAddress_container}>
                        <h1>MY ADDRESSES</h1>
                        <button className={styles.add_new_address_btn} onClick={handleClick}>ADD NEW</button>
                        {isOpen && (
                            <div className={styles.address_modal_container} onClick={handleOutsideClick}>
                                <div className={styles.address_modal_heading_con}>
                                    <h1 >ADD NEW ADDRESS</h1>
                                    <button onClick={() => setIsOpen(false)} className={styles.address_modal_close}><GrFormClose size='25px' /></button>
                                </div>
                                <div className={styles.address_input_container}>
                                    <input type="text" placeholder='Name *' />
                                    <div className={styles.address_input_flex}>
                                        <input type="text" placeholder='Email *' />
                                        <input type="text" placeholder='Mobile No *' />
                                    </div>
                                    <textarea type="text" placeholder='Address *' />
                                    <div className={styles.address_input_flex}>
                                        <input type="text" placeholder='Zip Code / Pincode *' />
                                        <input type="text" placeholder='Country *' />
                                    </div>
                                    <div className={styles.address_input_flex}>
                                        <input type="text" placeholder='State *' />
                                        <input type="text" placeholder='City *' />
                                    </div>
                                </div>

                                <input type="checkbox" /><label style={{ marginLeft: '10px' }}>Make this a default Address</label>
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button className={styles.address_save_btn} onClick={handleSave}>SAVE</button>
                                </div>
                            </div>
                        )}
                    </div> : ""}
                    {order ? <div><Orders/></div> : ""}
                    {wishlist ? <div><Wishlist /></div> : ""}
                    {password ? <div>PASSWORD</div> : ""}
                </div>
            </div>
            <Footer />
        </div>
    )
}
