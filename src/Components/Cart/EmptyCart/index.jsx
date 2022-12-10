import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import emptycartImg  from './emptycart.jpg'
const EmptyCart = () => {
    const history = useHistory();
  return (
    <div className='emptyCart'>
        <img src={emptycartImg} alt='empty' />
        <button onClick={() => history.push('/') }> 
        <i className='fas fa-long-arrow-alt-left'>  Back to Home </i>
        </button>
    </div>
  )
}

export default EmptyCart