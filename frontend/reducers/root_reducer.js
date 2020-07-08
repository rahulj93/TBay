import { combineReducers } from 'redux';
import entities from './entities_reducer'; 
import session from './session_reducer'; 
// import entitiesReducer from './entities'; 
// import sessionReducer from './session_reducer'; 
// import usersReducer from './users_reducer'; 

// export default combineReducers({
// 	entities: entitiesReducer,
// 	session: sessionReducer,  
// 	// users: usersReducer
// });

// const rootReducer = combineReducers({
// 	entities: entitiesReducer,
// 	session: sessionReducer,  
// 	// users: usersReducer
// });

// export default rootReducer; 

const rootReducer = combineReducers({
	entities,
	session,
});

export default rootReducer;
