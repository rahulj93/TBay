import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer'; 
import usersReducer from './users_reducer';
import productsReducer from './products_reducer'; 

/* export default combineReducers({
  users: usersReducer, 
  products: productsReducer
}); */ 


export default combineReducers({
  users, 
  products 
}) 
