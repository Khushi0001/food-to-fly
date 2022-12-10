import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem'
import { connect } from 'react-redux';
import './style.css';
import {cartAddItem,cartRemoveItem} from '../../../../redux/CartReducer/cart.action';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/CartReducer/cart.selector';
import { createStructuredSelector } from 'reselect';

const MenuItem = ({item,cartCount,cartList,cartAddItem,cartRemoveItem}) => {
    const {id,name,info,price,img} = item;

    const handleItemQuantity=()=>{
      let quantity=0;
      if(cartCount!==0){
        const foundItemInCart=cartList.find(item=>item.id===id);
        if(foundItemInCart)
        {
          quantity = foundItemInCart.quantity;
        }
      }
      return quantity;
    };
  return (
    <div className="item">
    <img src={img} alt="item" />
    <div className="item-head-desc">
        <p className="item-head-desc-name">{name}</p>
        <p className="item-head-desc-info"><small>{info}</small></p>
    </div>
    <div className="item-footer-desc">
        <span className="item-footer-desc-price"> $ {price}</span>
        <ButtonAddRemoveItem quantity={handleItemQuantity()} 
        handleAddItem={()=>cartAddItem(item)}
        handleRemoveItem={()=>cartRemoveItem(item)}
          ></ButtonAddRemoveItem>
    </div>
</div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
 
});

const mapDispatchToProps = dispatch=>({
  cartAddItem:item => dispatch(cartAddItem(item)),
  cartRemoveItem:item => dispatch(cartRemoveItem(item)),
})
export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);