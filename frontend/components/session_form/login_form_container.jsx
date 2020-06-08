import { connect } from 'react-redux'; 
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { login } from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mapStateToProps = ({ errors }) => ({
  // errors: errors.session, 
  formType: 'login', 
  navLink: <Link to="/register">Create an account</Link>,  
  redirectMessage: 'Don\'t have an account? '
  // redirectMessage: 'Sign in to tBay or '
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 