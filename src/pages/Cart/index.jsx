import React from 'react'
import './style.css'
import Logo from '../../Components/common/Logo'
import { connect } from 'react-redux'
import Menu from '../../Components/common/Menu'
import Footer from '../../Components/common/Footer'
import EmptyCart from '../../Components/Cart/EmptyCart'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/CartReducer/cart.selector'
import PayButton from '../../Components/common/PayButton'

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <div className='cart-header'>
        <Logo />
        {/* <LoginButton/> */}
        {/* <marquee>You need to login or sign up  before continuing</marquee> */}
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <div className="paysection">
            
          <h3 className='orders-total'>  <PayButton/> Your Total ${cartTotal}</h3>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);