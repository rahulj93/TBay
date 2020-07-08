
import React from 'react';
import { Link } from 'react-router-dom';

class ProductBox extends React.Component {
  constructor(props) {
    super(props); 
  }  

  render () {
    return (
      <div className="rowbox">
        {/* row 1: box 1 */}
        <br />
        description:
        <br />
        price:
        <br />
        <button>Add to Cart</button>
      </div>
    )
  }
}

export default ProductBox; 