import React from 'react';
import { Link } from 'react-router-dom'; 
import ProductBox from '../product_listing_form/productBox';

class ShowPage extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  render() {
    return (
      <div>
        this is the show page! 
        <ProductBox /> 
      </div>
    )
  }
}

export default ShowPage; 