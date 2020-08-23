import React from 'react'; 
import {Link} from 'react-router-dom'; 

import { NavBar, MiddleBar } from '../nav_bar/nav_bar';


class CustomerService extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div> 

        <NavBar /> 
        <div 
        className="topnav"
        >
          {/* <img src={ require("assets/images/logo.jpg") } />  */}
          {/* <img src={ logo } />  */}
          <Link to="/">
            <span className="logo">
              <img width="250" height="100" alt="tBay Logo" src={window.logoPNGURL3} />
            </span>
          </Link>

          <h1> Customer Service </h1> 

        </div>

        <div> 
          How can we help you today? 
        </div>
        <Link to="/"> Home </Link>
      </div>
    )
  }
}


export default CustomerService; 