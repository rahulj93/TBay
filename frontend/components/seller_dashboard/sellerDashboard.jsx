import React from 'react';
import { Link } from 'react-router-dom'; 

class SellerDashboard extends React.Component {

  constructor(props) {
    super(props);

    // const prods = this.props.products.map((product) => {
    //   return Object.values(product)[0];
    // }) 

    this.state = {
      user: this.props.currentUser, 
      // products: prods
    }
  }

  componentDidMount() {
    this.props.fetchProducts(); 
    // this.setState(prods: prods)
  }

  render () {
    const prods = this.props.products.map((product) => {
      return Object.values(product)[0];
    }) 
    const filtered = prods.map((prod) => {
      if (prod.seller_id === this.props.currentUser.id) {
        return prod;
      }
    })
    return (
      <div> 
        {/* {console.log(`state and history!: ${this.state} ${this.history}`)} */}
        {/* {console.log('prods', Object.values(Object.values(this.props.products)))}; */}
        {/* {console.log('prods', prods)}; */}
        {/* {console.log('prods', this.state.products)}; */}
        {console.log('filtered', filtered)};
        {/* {console.log("THIS ONE!!", prods[1])} */}
        {console.log("THIS GUY!", this.props.currentUser.id)}

        Welcome to your account dashboard, {this.props.currentUser.username}. Manage your items.  

        {filtered.map((prod) => {
          if (prod) {
            return (
              <li key={prod.id}>
                title: {prod.title} <br/>
                {/* seller_id: {prod.seller_id} */}
                Seller: {this.props.currentUser.username}
                </li>
            )
          }
          // console.log(prod.title); 
        })}

        <Link to='/'><button>Return to home page</button></Link>
      </div>
    )
  }
}

export default SellerDashboard; 