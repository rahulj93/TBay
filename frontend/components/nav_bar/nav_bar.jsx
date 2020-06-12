import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
  const display = currentUser ? (
    <header>
      Hello, {currentUser.username}
      <button onClick={logout}>Log Out</button>
      <Link to='/signin' > | Daily Deals | </Link>
      <Link to='/signin' > Help & Contact | </Link>
    </header>
  ) : (
    <header>
      <Link to='/signin' >Sign in</Link>
      &nbsp;
      or
      <Link to = '/register' > Register</Link >
      <Link to='/signin' > | Daily Deals | </Link>
      <Link to='/signin' > Help & Contact | </Link>    
    </header>
  )

  return (
    <div className="toplinks"> 
      <span className='leftlinks'>
        {display} 
      </span>
      <span className='rightlinks'>
        <Link to='/signin' > Sell | </Link>
        <Link to='/signin' > My Tbay</Link>
            &nbsp;
            &nbsp;
            &nbsp;
            <Link to='/signin' ><i className="fa fa-bell"></i>
          {/* <i id="gh-Alerts-i" class="gh-sprRetina">Notification</i>  */}
          {/* &#128276;  */}
        </Link>
            <Link to='/signin' >
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </span>
    </div>
  );
};