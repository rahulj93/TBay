import React from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import { logout } from '../../util/session_api_util';


class NavBar extends React.Component {
  constructor(props) {
    super(props); 

    // this.state = this.props.currentUser;

    this.handleLogout = this.handleLogout.bind(this); 
  }

  componentWillReceiveProps(newState) {
    this.setState({currentUser: newState.currentUser});
  }

  handleLogout(e) {
    e.preventDefault(); 
    this.props.logout()
    .then(()=>console.log('logged out!'));
  }

  render () {
    const visitor = (
      <header>
        <Link to='/signin' >Sign in</Link>
      &nbsp;
      or
        <Link to='/register' > Register</Link >
        <Link to='/signin' > | Daily Deals | </Link>
        <Link to='/signin' > Help & Contact | </Link>
      </header>
    ) 

    const member = (
      <header>
        {/* Hello, {this.state.username} */}
        {/* <button onClick={this.handleLogout}>Log Out</button> */}
        <button onClick={this.props.logout}>Log Out</button>
        <Link to='/signin' > | Daily Deals | </Link>
        <Link to='/signin' > Help & Contact | </Link>
      </header>
    )

    let display;
    console.log(this.props.currentUser); 

    if (this.props.currentUser) {
      display = member;
    } else {
      console.log('no current user ');
      display = visitor;
      // display = member;
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
            {/* <i id="gh-Alerts-i" class="gh-sprRetina">Notification</i>  */}
            {/* &#128276;  */}
          </Link>
          <Link to='/signin' >
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </span>
      </div>
    );


  }
}


// const NavBar = ({currentUser, logout}) => {
// const NavBar = (this.props.currentUser, this.props.logout) => {

// class NavBar extends React.Component {
  // constructor(props) {
  //   super(props); 
  //   this.handleLogout = this.handleLogout.bind(this); 
  // }

  // const handleLogout = history => () => {
  //   store.remove('loggedIn');
  //   // history.push('/signin'); 
  //   // this.props.history.push('/signin'); 
  // }

  // handleLogout(e) {
  //   e.preventDefault();
  //   this.props.logout()
  //   .then(()=>console.log("Successfully logged out")); 
  // }

  // render() {

  // const visitor = (
  //   <header>
  //     <Link to='/signin' >Sign in</Link>
  //     &nbsp;
  //     or
  //     <Link to='/register' > Register</Link >
  //     <Link to='/signin' > | Daily Deals | </Link>
  //     <Link to='/signin' > Help & Contact | </Link>
  //   </header>
  // ) 

  // const userNavBar = ({ history }) => {
  // const userNavBar = (
  //   <header>
  //     {/* Hello, {currentUser.username} */}
  //     {/* <button onClick={logout}>Log Out</button> */}
  //     <button onClick={handleLogout(history)}>Log Out</button>
  //     {/* <button onClick={this.handleLogout}>Log Out</button> */}
  //     <Link to='/signin' > | Daily Deals | </Link>
  //     <Link to='/signin' > Help & Contact | </Link>
  //   </header>
  // )

  // let display; 

  // // const display = visitor; 
  // if (currentUser) {
  //   display = userNavBar; 
  // } else {
  //   console.log('no current user ');
  //   display = visitor; 
  //   // display = userNavBar; 
  // };
  // const display = userNavBar; 
  
  //   return {if (currentUser) {
  //     return userNavBar; 
  //   } else {
  //     return visitor; 
  //   }
  // } 
  // ) 
  // const display = currentUser ? (
  //   <header>
  //     Hello, {currentUser.username}
  //     <button onClick={logout}>Log Out</button>
  //     <Link to='/signin' > | Daily Deals | </Link>
  //     <Link to='/signin' > Help & Contact | </Link>
  //   </header>
  // ) : (
  //   <header>
  //     <Link to='/signin' >Sign in</Link>
  //     &nbsp;
  //     or
  //     <Link to = '/register' > Register</Link >
  //     <Link to='/signin' > | Daily Deals | </Link>
  //     <Link to='/signin' > Help & Contact | </Link>    
  //   </header>
  // )

  // render () {
//   return (
//     <div className="toplinks"> 
//       <span className='leftlinks'>
//         {display} 
//       </span>
//       <span className='rightlinks'>
//         <Link to='/signin' > Sell | </Link>
//         <Link to='/signin' > My Tbay</Link>
//             &nbsp;
//             &nbsp;
//             &nbsp;
//             <Link to='/signin' ><i className="fa fa-bell"></i>
//           {/* <i id="gh-Alerts-i" class="gh-sprRetina">Notification</i>  */}
//           {/* &#128276;  */}
//         </Link>
//             <Link to='/signin' >
//           <i className="fa fa-shopping-cart"></i>
//         </Link>
//       </span>
//     </div>
//   );
//   // } 
// };

// export default Nav_bar;
export default NavBar;