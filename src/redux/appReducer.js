
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './CartReducer/cart.reducer';

const persistConfig = {
  key: 'grocery-store',
  storage,
  whitelist: ['cart'],
};

const appReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(persistConfig, appReducer);