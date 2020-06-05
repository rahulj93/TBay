import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 

// const receiveCurrentUser = currentUser => ({
// 	type: RECEIVE_CURRENT_USER, 
// 	currentUser  
// }); 

// const logoutCurrentUser = () => ({
// 	type: LOGOUT_CURRENT_USER, 
// }); 

export const signup = user => dispatch => (
	APIUtil.signup(user)
		.then(user=> dispatch({type: RECEIVE_CURRENT_USER, user: user}) ) 
);

export const login = user => dispatch => (
	APIUtil.login(user)
		.then(user => dispatch({ type: RECEIVE_CURRENT_USER, user }) ) 
);

export const logout = () => dispatch => (
	APIUtil.logout()
		.then(user => dispatch({type: LOGOUT_CURRENT_USER}) ) 
);


// export const createNewUser = formUser => dispatch => postUser(formUser)
// 	.then(user => dispatch(receiveCurrentUser(user)));

// export const login = formUser => dispatch => postSession(formUser)
// 	.then(user => dispatch(receiveCurrentUser(user)));

// export const logout = () => dispatch => deleteSession()
// 	.then(() => dispatch(logoutCurrentUser()));
