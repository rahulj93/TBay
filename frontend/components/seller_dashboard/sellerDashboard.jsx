import React from 'react';
import { Link } from 'react-router-dom'; 

class SellerDashboard extends React.Component {
  render () {
    return (
      <div> 
        {console.log(`state and history!: ${this.state} ${this.history}`)}
        Welcome to your account dashboard. Manage your items.  
      </div>
    )
  }
}

export default SellerDashboard; 