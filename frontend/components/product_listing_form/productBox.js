
import React from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom'; 


class ProductBox extends React.Component {
  constructor(props) {
    super(props); 
    // this.state = {
    //   title: this.props.title,
    //   description: this.props.description,
    //   price: this.props.price
    // }
    // this.details = this.details.bind(this); 
  }  

  // details (product) {
  //   let title = product.title; 
  //   let description = product.description; 
  //   let price = product.price;  
  //   return (
  //     <span>
  //       {this.state}
  //     </span> 
  //   )
  // }

  render () {
    let { product } = this.props
    let prod = Object.values(product)[0]; 
    return (
      <div className="rowbox">
        <h3>{prod.title}</h3>
        {/* {console.log(this.props)} */}

        {/* {console.log('Product:', Object.values(this.props.product))} */}
        {/* {console.log('Product:', Object.values(product)[0].title)} */}
        {/* {console.log('Product:', prod.title)} */}

        {/* {console.log(this.props.product)}
        {console.log(this.props.product.price)} */}
        {/* {console.log(product.title)} */}
        {/* {this.details(product)} */}
        {/* row 1: box 1 */}
        {/* <br /> */}
        description: {prod.description}
        <br />
        price: {prod.price}
        <br />
        <button>Add to Cart</button>
      </div>
    )
  }
}

export default ProductBox;  
// export default withRouter(ProductBox);  

// export const ProductBox = ({product}) => {
//   return (
//     <div className="rowbox">
//       {product.title}
//     </div>
//   )
// }