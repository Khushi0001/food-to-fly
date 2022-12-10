import React from 'react'
import styled from 'styled-components'
import './style.css'
const Register = () => {
    return (
        <>
            <div className="mainmaincontainer">
                <div className="maincontainer">
                <div className="text"> <h3> JOIN US </h3></div>

                    <form>
                        <div className="inputcontainer">
                            <div className="input1">
                                <label htmlFor="Name">
                                    <i class="zmdi zmdi-account zmdi-hc-lg material-icons-name "></i>
                                </label>
                                <input type="text" name="name" id="" placeholder='Enter your name' required autoComplete='off' /></div>

                            <div className="input2">
                                <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="" id="" placeholder='Enter your email' required autoComplete='off' />
                            </div>
                            <div className="input4">
                                <label htmlFor="phoneno"><i class="zmdi zmdi-phone-in-talk"></i></label>
                                <input type="phoneno" name="phoneno" id="phoneno" placeholder='Enter your phone number' required autoComplete='off' />
                            </div>
                            <div className="input3">
                                <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" required placeholder='Enter Password' autoComplete='off' />
                            </div>
                            <div className="input3">
                                <label htmlFor="confirmpassword"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="confirmpassword" id="Confirmpassword" required placeholder='confirm Password' autoComplete='off' />
                            </div>
                        </div>
                        <ButtonContainer>
                            <button className='btnsubmit' type="submit" >Register</button>
                        </ButtonContainer>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register

const ButtonContainer = styled.div`
  margin: 0rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  `;
