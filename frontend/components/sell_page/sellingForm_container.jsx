import { connect } from 'react-redux'; 
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { createProduct } from '../../actions/session_actions';
import SellingForm from './selling_form'; 
// import { createProduct } from '../../util/session_api_util';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.id 
    // newProduct: state.products.new 
    // currentProduct: state.product 
  }
};

const mapDispatchToProps = dispatch => ({
  processForm: product => dispatch(createProduct(product))
  // processForm: formData => dispatch(createProduct(formData))
})



export default connect(mapStateToProps, mapDispatchToProps)(SellingForm); 