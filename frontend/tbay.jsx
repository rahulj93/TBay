import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import * as APIUtil from './util/session_api_util';


import Root from './components/root';
// import configureStore from './store/store'; 

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore(); 
  let store; 
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch; 

  window.fetchProducts = APIUtil.fetchProducts;
  // window.fetchUsers = APIUtil.fetchUsers; 



  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

  // ReactDOM.render(<h1> Welcome to Tbay! </h1>, root);
})