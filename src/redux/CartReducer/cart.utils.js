// export const addItemTocart = (cartItems,cartAddItems) => {
//     const existingCartItem = cartItems.find(
//         (cartItem) => cartItem.id === cartAddItems.id
//     );


// if(existingCartItem){
//     return cartItems.map(cartItem=>cartItem.id==cartItem.id?{...cartItem,quantity:cartItem+1} : 
//         cartItem
//         );
// }
//  return[...cartItems,{...cartAddItem , quantity :1}];
// };


// export const removeItemFromCart = (cartItems,cartAddItem) =>{
//     const existingCartItem = cartItems.find(
//         (cartItem) => cartItem.id === cartAddItem.id
//     );

//     if(existingCartItem.quantity ===1 ){
//         return cartItems.filter(cartItems=>cartItems.id!==cartAddItem.id)
//     }

//         return cartItems.map((cartItem) => 
//         cartItem.id === cartAddItem.id
//         ? {...cartItem,quantity:cartItem-1}
//         :cartItem
//         );
// };

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };
  
  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };