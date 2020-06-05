import React from 'react'; 
import { Link } from 'react-router-dom'; 

class Greeting extends React.Component {
  render () {
    return (
      <div>
        <h3> Shop by category </h3>
        <div className="topnav">
           <input type="text" placeholder="Search for anything"/>
           <button>Search</button>
        </div>
        <Link to='/signin' >Sign in</Link>
        &nbsp;
        or 
        <Link to='/register' > Register</Link>
      </div>
    )
  }
};

export default Greeting;