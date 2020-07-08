// import { RECEIVE_ALL_USERS } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 


// export default (state = {}, action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case RECEIVE_ALL_USERS:
//       // return action.users; 
//       return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
//     default:
//       return state;
//   }
// }; 

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
