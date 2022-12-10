import React from 'react'
import { useHistory } from 'react-router';
import './style.css'

const PayButton = () => {
  const history = useHistory();
  return (
    <button className='Paybtn' onClick={() => history.push('/login')}>Pay</button>
  )
}

export default PayButton