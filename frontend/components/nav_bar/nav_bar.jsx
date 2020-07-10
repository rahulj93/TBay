import React from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import { logout } from '../../util/session_api_util';

export const NavBar = ({currentUser, logout}) => {

  // const handleLogout = history => () => {
  //   store.remove('loggedIn');
  //   // history.push('/signin'); 
  //   // this.props.history.push('/signin'); 
  // }

  const visitor = () => (
    <header>
      <Link to='/signin' >Sign in</Link>
      &nbsp;
      or
      <Link to='/register' > Register</Link >
      <Link to='/signin' > | Daily Deals | </Link>
      <Link to='/signin' > Help & Contact | </Link>
    </header>  
  ); 

  const member = () => (
    <header>
      <button onClick={logout}>Log Out</button>
      {/* <button onClick={handleLogout(history)}>Log Out</button> */}
      <Link to='/signin' > | Daily Deals | </Link>
      <Link to='/signin' > Help & Contact | </Link>
    </header>
  ); 

  let display; 
  
  if (currentUser) {
    console.log(currentUser);
    display = member();
  } else {
    console.log('no current user ');
    display = visitor();
  };


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
        </Link>
        <Link to='/signin' >
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </span>
    </div>
  );
}

export const MiddleBar = () => {
  return ( 
  <div className="navBar">
    <Link to='/signin' >Home</Link>
    <Link to='/register' >Saved</Link>
    <Link to='/signin' >Motors</Link>
    <Link to='/signin' >Fashion</Link>
    <Link to='/signin' >Electronics</Link>
    <Link to='/signin' >Collectibles & Art</Link>
    <Link to='/signin' >Home & Garden</Link>
    <Link to='/signin' >Sporting Goods</Link>
    <Link to='/signin' >Toys</Link>
    <Link to='/signin' >More</Link>
  </div>
  )
}

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props); 
//     this.state = this.props.currentUser;
    
//     this.handleLogout = this.handleLogout.bind(this); 
//     // this.username = this.props.currentUser.username || "visitor"; 
//   }

//   componentWillReceiveProps(newState) {
//     this.setState({currentUser: newState.currentUser});
//   }

//   // handleLogout(e) {
//   //   e.preventDefault(); 
//   //   this.props.logout()
//   //   .then(()=>console.log('Successfully logged out!'));
//   // }

//   render () {
//     const visitor = (
//       <header>
//         <Link to='/signin' >Sign in</Link>
//       &nbsp;
//       or
//         <Link to='/register' > Register</Link >
//         <Link to='/signin' > | Daily Deals | </Link>
//         <Link to='/signin' > Help & Contact | </Link>
//       </header>
//     ) 

//     // let username = this.state.username || "visitor"; 

//     const member = (
//       <header>
//         {/* Hello, {this.state.username} */}
//         {/* Hello, {this.props.username} */}
//         {/* <button onClick={this.handleLogout}>Log Out</button> */}
//         <button onClick={handleLogout(history)}>Log Out</button>
//         {/* <button onClick={this.props.logout}>Log Out</button> */}
//         <Link to='/signin' > | Daily Deals | </Link>
//         <Link to='/signin' > Help & Contact | </Link>
//       </header>
//     )

    
//     let display;
//     // this.props.currentUser ? display = member : display = visitor; 
    
//     if (this.props.currentUser) {
//       console.log(this.props.currentUser); 
//       display = member;
//     } else {
//       console.log('no current user ');
//       display = visitor;
//     };

//     return (
//       <div className="toplinks">
//         <span className='leftlinks'>
//           {display}
//         </span>
//         <span className='rightlinks'>
//           <Link to='/signin' > Sell | </Link>
//           <Link to='/signin' > My Tbay</Link>
//             &nbsp;
//             &nbsp;
//             &nbsp;
//             <Link to='/signin' ><i className="fa fa-bell"></i>
//             {/* <i id="gh-Alerts-i" class="gh-sprRetina">Notification</i>  */}
//             {/* &#128276;  */}
//           </Link>
//           <Link to='/signin' >
//             <i className="fa fa-shopping-cart"></i>
//           </Link>
//         </span>
//       </div>
//     );

//   }
// }

// export default NavBar;