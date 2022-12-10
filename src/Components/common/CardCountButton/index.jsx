import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect';
import {  selectCartItemsCount } from '../../../redux/CartReducer/cart.selector';
import './style.css'

const CardCountButton  = ({cartCount}) => {
  const history = useHistory();
  return (
   <div className="btnCartCount" onClick={() => history.push('/cart')}>
    <div className="count">{cartCount >= 99 ? '99+' : cartCount}</div>
    <i className="fas fa-shopping-cart"></i>
   </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CardCountButton) 