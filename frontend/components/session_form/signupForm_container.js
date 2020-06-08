import { connect } from 'react-redux'; 
import React from 'react';
import { Link } from 'react-router-dom'; 
import { signup } from '../../actions/session_actions'; 
import SessionForm from './session_form'; 


const mapStateToProps = ({ errors }) => {
	return {
		// errors: errors.session,
		formType: 'signup',
		navLink: <Link to="/signin">sign in</Link>,
		redirectMessage: 'Already have an account? '
	};
};

const mapDispatchToProps = dispatch => ({
	processForm: formUser => dispatch(signup(formUser))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

