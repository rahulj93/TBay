import * as APIUtil from '../util/session_api_util';

// export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER, 
	currentUser  
}); 

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER, 
}); 

// export const signup = user => dispatch => (
// 	APIUtil.signup(user)
// 		.then(user=> dispatch({type: RECEIVE_CURRENT_USER, user: user}) ) 
// );

export const signup = user => dispatch => (
	APIUtil.signup(user)
	.then(user => dispatch(receiveCurrentUser(user)
	)
	)
);

// export const login = user => dispatch => (
// 	APIUtil.login(user)
// 		.then(user => dispatch({ type: RECEIVE_CURRENT_USER, user }) ) 
// );


export const login = user => dispatch => (
	APIUtil.login(user)
	.then(user => dispatch(receiveCurrentUser(user)))
);    

// export const logout = () => dispatch => (
// 	APIUtil.logout()
// 		.then(user => dispatch({type: LOGOUT_CURRENT_USER}) ) 
// );

export const logout = () => dispatch => (
	APIUtil.logout().then(user => (
		dispatch(logoutCurrentUser())
	))
);

// export const fetchAllUsers = () => dispatch => {
// 	APIUtil.fetchUsers() 
// 	.then(users => dispatch({ type: RECEIVE_ALL_USERS, users}))
// }

// export const login = formUser => dispatch => postSession(formUser)
// 	.then(user => dispatch(receiveCurrentUser(user)));

// export const logout = () => dispatch => deleteSession()
// 	.then(() => dispatch(logoutCurrentUser()));
