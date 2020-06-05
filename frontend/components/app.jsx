import React from "react"; 
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Greeting from './greeting';

import SignUpFormContainer from './session_form/signupForm_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div> 
    <h1> TBAY </h1>
    <Route exact path="/" component= {Greeting} /> 
    <Switch> 
      <Route exact path="/signin" component={LogInFormContainer} />
      <Route exact path="/register" component={SignUpFormContainer} />
    </Switch> 
  </div> 
);

export default App; 