import React from 'react';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import { logout } from '../../actions/session_actions'
import Greeting from './greeting'; 
import { fetchProducts } from '../../util/session_api_util';

// const mapStateToProps = ({ session, entities: {users} }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };
const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    products: Object.values(state.entities.products) 
    // currentUser: state.action.currentUser 
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchUsers: () => dispatch(fetchUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);