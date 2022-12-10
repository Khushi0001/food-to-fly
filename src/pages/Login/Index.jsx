import React from 'react'

// import Pay from '../Pay/Index';
import { useHistory } from 'react-router';
import Icon from './Icon';
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import './style.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    const GoogleBackground = "#e807346b";
    return (
        <>
            <div className="mainmaincontainer">
                <div className="maincontainer">
                    <div className="content">
                        <div className="text"> <h3> WELCOME </h3></div>
                        <form>
                            <div className="inputcontainer">
                                <div className="input1">
                                    <label htmlFor="Name">
                                    <i class="zmdi zmdi-account zmdi-hc-lg material-icons-name "></i>
                                    </label>
                                    <input type="text" name="name" id="" placeholder='Enter your name' required autoComplete='off' /></div>

                                <div className="input2">
                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="email" name="" id="" placeholder='Enter your email' required autoComplete='off'/>
                                </div>
                                <div className="input3">
                                    <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="password" required placeholder='Enter Password' autoComplete='off'/>
                                </div>
                            </div>
                            <br />
                            <ButtonContainer>
                            <button className='btnsubmit' type="submit" onClick={() => history.push('/pay')}>Login</button>
                            </ButtonContainer>
                            <LoginWith>OR LOGIN WITH</LoginWith>
                            <div className="iconscontainer">
                                <IconsContainer>
                                    <Icon color={FacebookBackground}>
                                        <FaFacebookF />
                                    </Icon>
                                    <Icon color={InstagramBackground}>
                                        <FaInstagram />
                                    </Icon>
                                    <Icon color={TwitterBackground}>
                                        <FaTwitter />
                                    </Icon>
                                    <Icon color={GoogleBackground}>
                                        <FaGoogle />
                                    </Icon>
                                </IconsContainer>
                            </div>
                        </form>
                       <div className='registerlink'>
                       <NavLink to= "/register" className = "registerlink" > I Need To Register </NavLink>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login


const IconsContainer = styled.div`

  display: flex;
  justify-content: space-evenly;

  margin: 1.2rem 0 1.5rem 0;
  width: 100%;
  `;

const LoginWith = styled.h5`
//   cursor: pointer;
padding-top:0.3rem;
text-align:center;
  `;

const ButtonContainer = styled.div`
  margin: 0rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

