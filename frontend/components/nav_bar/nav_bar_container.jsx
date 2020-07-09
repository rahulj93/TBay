//  import React from 'react';
// import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions'; 
// import NavBar from './nav_bar';

// // const mapStateToProps = ({ session, entities: {users} }) => {
// //   return {
// //     currentUser: users[session.id]
// //   };
// // };
// const mapStateToProps = state => {
//   return {
//     currentUser: state.entities.users[state.session.id]
//   };
// };

// // const mapStateToProps = state => ({
// //   currentUser: users[session.id]
// //   // state.session.currentUser,
// // }); 

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout()), 
// }); 


// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);