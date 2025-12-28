import React, { useState } from 'react'
import styles from './Register.module.css'

import { Link } from 'react-router-dom'

import { Spinner, useToast } from '@chakra-ui/react'


import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { RiFacebookBoxFill } from 'react-icons/ri'
import { SiApple } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

import { useNavigate } from 'react-router-dom';

import mahalShadow from '../../Assets/mehelLogo.webp'
import fulllogo from '../../Assets/manyavarFullLogo.webp'

export default function Register() {


    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [agree, setAgree] = useState(false)

    const [loading, setLoading] = useState(false)

    const toast = useToast()

    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function hasSpecialChar(password) {
        var regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
        return regex.test(password);
    }

    var hasPassword = hasSpecialChar(password);

    const SignUpFuction = async () => {
        let obj = {
            role: 'user',
            registerdate: new Date().toISOString().split('T')[0],
            avatar: "https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg",
            firstname, lastname, email, password, gender
        }

        if (firstname == "" && lastname == "" && email == "" && password == "" && gender == "") {
            toast({
                position: 'top',
                title: 'Please check all the details.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else if (firstname == "" || lastname == "" || email == "" || password == "" || gender == "") {
            toast({
                position: 'top',
                title: 'Something went wrong!.',
                description: "Please check again!",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else if (!hasPassword) {
            toast({
                position: 'top',
                title: 'password contains at least one special character',
                description: "! @ # $ % ^ & * ( ) _ + - = [ ] { } ; : ' \ | , < > . / ?",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        } else {
            setLoading(true)
            await fetch(`https://proud-lamb-suspenders.cyclic.app/users/register`, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => {
                    if (res.msg == "new user has been register") {
                        setLoading(false)
                        toast({
                            position: 'top',
                            title: 'Account created.',
                            description: "We've created your account for you.",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })
                        navigate('/login')

                    } else {
                        setLoading(false)
                        toast({
                            position: 'top',
                            title: "Already have an account Please login",
                            status: 'info',
                            duration: 5000,
                            isClosable: true,
                        })
                        navigate('/login')
                    }

                })
                .catch((err) => {
                    setLoading(false)
                    toast({
                        position: 'top',
                        title: 'Something went wrong!.',
                        description: "Please try again!",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                })
        }


    }

    return (
        <div className={styles.RegisterMainContainer}>
            <div className={styles.waveBG_img_div}>

                <img className={styles.register_waveImg} src={mahalShadow} alt="" />
                <img style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className={styles.register_Logo_img} src={fulllogo} alt="" />

            </div>
            <div className={styles.register_main_container}>
                <p>SIGN UP USING</p>
                <div className={styles.register_social_img_con}>
                    <div>
                        <RiFacebookBoxFill style={{ color: '#4267B2' }} />
                    </div>
                    <div>
                        <FcGoogle />
                    </div>
                    <div>
                        <SiApple />
                    </div>
                </div>
                <p>- OR USE -</p>
                <p>SIGN UP WITH EMAIL</p>

                <div className={styles.Register_input_box_div}>
                    <input type="text" onChange={(e) => setFname(e.target.value)} placeholder='FIRST NAME*' />
                    <input type="text" onChange={(e) => setLname(e.target.value)} placeholder='LAST NAME*' />
                    <select name="" id="" onChange={(e) => setGender(e.target.value)}>
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL*' />
                    <div className={styles.register_password}>
                        <input type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)} placeholder='PASSWORD* (minimum in 8 charecters)' />

                        <button onClick={handleShowPassword}>
                            {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                        </button>
                        <div>

                            {hasPassword ? <TiTick color='#02DD30' size="20px" /> : ""}
                        </div>
                    </div>
                </div>

                <div className={styles.register_agree_btn}>
                    <input type="checkbox" onChange={() => setAgree(!agree)} />
                    <p>I agree to the <Link>Terms of Use</Link>  and <Link>Privacy Policy</Link> of www.manyavar.com
                    </p>
                </div>

                <div className={agree ? styles.signup_btn : styles.signup_disable}>
                    <button disabled={!agree} onClick={SignUpFuction} loading
                        loadingText='Submitting'
                        colorScheme='teal'
                        variant='outline'>{loading ? <Spinner /> : "SIGNUP"}</button>

                </div>
                <div className={styles.Register_login_btn}>
                    <p>Already a member?</p><Link to='/login'>LOGIN</Link>
                </div>
            </div>

        </div>
    )
}