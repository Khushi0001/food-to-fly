import React from 'react'
import './style.css'
import { useHistory } from 'react-router';

const LoginButton = () => {
    const history = useHistory();
  return (
    <div className="btnlogin" onClick={() => history.push('/login')}>
        <button className='login'>
            <span> Login  </span>
         <i class="fa fa-sign-in" aria-hidden="true"> </i>
        </button>
    </div>
  )
}

export default LoginButton