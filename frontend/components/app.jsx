import React from "react"; 
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Greeting from './home_page/greeting'; 
import GreetingContainer from './home_page/greeting_container'; 

import CustomerService from './help&contact/customer_service'; 
import SellPage from './sell_page/sell_page'; 

import SignUpFormContainer from './session_form/signupForm_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div> 
    {/* <h1> TBAY </h1> */}
    {/* <Route exact path="/" component= {Greeting} />  */}
    <Route exact path="/" component= {GreetingContainer} /> 
    <Switch> 
      <AuthRoute exact path="/signin" component={LogInFormContainer} />
      <AuthRoute exact path="/register" component={SignUpFormContainer} />
      <Route exact path="/help" component={CustomerService} /> 
      <Route exact path='/sell' component={SellPage} /> 
      {/* <ProtectedRoute exact path="/" component= {GreetingContainer} />  */}
      {/* <ProtectedRoute */}
      {/* <ProtectedRoute exact path="/demoUser" component={DemoUserContainer} /> */}
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}

      {/* <AuthRoute exact path="/" component= {Greeting}/>  */}
      {/* <ProtectedRoute exact path="/" component= {Greeting}/>  */}
    </Switch> 
  </div> 
);

export default App; 