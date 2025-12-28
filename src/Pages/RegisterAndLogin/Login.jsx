import React, { useContext, useState } from 'react'
import styles from '../RegisterAndLogin/Login.module.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { style } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom'

import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { RiFacebookBoxFill } from 'react-icons/ri'
import { SiApple } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

import { Button, Spinner, useToast } from '@chakra-ui/react'

import mahalShadow from '../../Assets/mehelLogo.webp'
import fulllogo from '../../Assets/manyavarFullLogo.webp'

import Cookies from 'js-cookie';
import { LoggerContext } from '../../Context/LoggerContex';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { setToken, setRole, setIsAuth } = useContext(LoggerContext)

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const [loading, setLoading] = useState(false)

    const toast = useToast()
    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const SignUpFunc = async () => {
        let obj = {
            email, password
        }
        if (email == "" && password == "") {
            toast({
                position: 'top',
                title: 'Please check all the Inputs.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else if (email == "" && password !== "") {
            toast({
                position: 'top',
                title: 'Please check your email.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else if (password == "" && email !== "") {
            toast({
                position: 'top',
                title: 'Please check your password..',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else {
            setLoading(true)
            await fetch(`https://proud-lamb-suspenders.cyclic.app/users/login`, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setLoading(false)
                    if (res.msg == "Login sucessful") {
                        toast({
                            position: 'top',
                            title: `Hello ${res.user[0].firstname}`,
                            description: "Your Login Successful",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })
                        let role = res.user[0].role
                        if (role == 'admin') {
                            navigate('/admindashboard')
                        }
                        if (role == 'user') {
                            navigate('/')
                        }
                        const token = res.token;
                        const expirationTime = new Date(new Date().getTime() + 3600 * 6000); // expires in 1 hour
                        Cookies.set('token', token, { expires: expirationTime });
                        Cookies.set('isAuth', true, { expires: expirationTime });
                        Cookies.set('role', role, { expires: expirationTime });
                        setToken(token)
                        setRole(role)
                        setIsAuth(true)
                        localStorage.setItem('Manyavaruser', JSON.stringify(res.user[0]))
                    }
                    else if (res.msg == "Wrong crediential") {
                        toast({
                            position: 'top',
                            title: 'Wrong Crediential',
                            description: "Please check your email or password.",
                            status: 'warning',
                            duration: 5000,
                            isClosable: true,
                        })
                    }
                    console.log(res)
                })
                .catch(err => {
                    setLoading(false)
                    toast({
                        position: 'top',
                        title: 'Wrong Crediential',
                        description: "Please check your email or password.",
                        status: 'warning',
                        duration: 5000,
                        isClosable: true,
                    })
                    console.log(err)
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
                <p>SIGN IN USING</p>
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
                <p>SIGN IN WITH EMAIL</p>

                <div className={styles.Register_input_box_div}>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL*' />
                    <div className={styles.register_password}>
                        <input type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)} placeholder='PASSWORD*' />

                        <button onClick={handleShowPassword}>
                            {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                        </button>
                    </div>
                </div>
                <div className={styles.forget_OTP}>
                    <Link>Forgot Password?</Link><Link>Login with OTP</Link>
                </div>
                <div className={styles.signup_btn}>
                    <button onClick={SignUpFunc}>{loading ? <Spinner /> : 'LOGIN'}</button>
                </div>
                <div className={styles.Register_login_btn}>
                    <p>Not a member?</p><Link to='/register'>REGISTER NOW</Link>
                </div>
            </div>

        </div>
    )
}