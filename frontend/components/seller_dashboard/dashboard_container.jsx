import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/session_actions'

import SellerDashboard from './sellerDashboard'; 

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    products: Object.values(state.entities.products)
    // products: asArray(state.entities.products) 
    // products: state.entities.products 
    // currentUser: state.action.currentUser 
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchUsers: () => dispatch(fetchUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(SellerDashboard);