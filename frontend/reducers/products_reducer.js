import { RECEIVE_CURRENT_PRODUCT, RECEIVE_ALL_PRODUCTS } from '../actions/session_actions';


const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_PRODUCT:
      return Object.assign({}, state, action.currentProduct );
      // return Object.assign({}, state, { [action.currentProduct.id]: action.currentProduct });
      // return action.currentProduct; 
      // return newState.new = action.product.data
    case RECEIVE_ALL_PRODUCTS:
      action.products.data.forEach(product => {
        newState.all[product._id] = product
      })
      return newState.all
      // return action.products 
    default:
      return state;
  }
};

export default productsReducer;