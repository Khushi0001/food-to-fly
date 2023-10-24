import React from 'react'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail, SendPasswordResetEmail } from 'firebase/auth'
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const onChange = (e) => {
        setEmail(e.target.value)
    }
    const onSubmitform = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Email Sent' , {autoClose: 2095} )
        } catch (error) {
            toast.error("Could not send reset email" , {autoClose: 2095} )
        }
        
    }
    return (
        <>
            <div className="mainmaincontainer">
                <div className="maincontainer1">
                    <div className="mailtext"> <h3> Forgot Password </h3></div>
                    <form onSubmit={onSubmitform}>
                        <div className="parent-input">
                            <input type="email" id='email' name="email" placeholder='Email' value={email} onChange={onChange} />
                        </div>
                        <div className="codebutton" >
                            <button type="submit" className='sendcode' >Send Reset Link</button>
                        </div>
                        <Link className='forgotPasswordLink' to='/login'> Login In</Link>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default ForgotPassword