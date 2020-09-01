
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

    // let picURL = Object.values(product)[1];  
    return (
      // <Link to='/show'>

      <div className="rowbox">
        {/* <img src={product.picture_url} />  */}
        <div className="productDetails">
          <Link to='/show'><h4>{prod.title}</h4></Link>
          {/* description: {prod.description} <br /> */}
          price: ${prod.price}
        </div>
        <div className="productPhoto">
          <img
            // className="productPhoto"
            src={product.picture_url} /> 
            <br/> 
            <br/> 
          <button>Add to Cart</button>
        </div>

        {/* <img src="https://i.ebayimg.com/thumbs/images/g/6xYAAOSwanVfK9wq/s-l225.webp"/> */}
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

        {/* pictureURL: {product.picture_url} */}

        {/* <img src={prod.picture_url}/> */}
        {/* <img src={picUrl}/> */}
      </div>
      // </Link>
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