import React from 'react'; 
import { Link } from 'react-router-dom'; 
// import logo from 'assets/images/logo.png'; 
// const logo = require('../app/assets/images/logo.png');
// import NavBar from '../nav_bar/nav_bar';
import {NavBar, MiddleBar} from '../nav_bar/nav_bar';
// import {MiddleBar} from '../nav_bar/nav_bar';

import {Carousel} from '../carousel/carousel'; 

import ProductBox from '../product_listing_form/productBox';
// import { ProductBox } from '../product_listing_form/productBox';

{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link> */}
{/* <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link> */}

class Greeting extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      user: this.props.currentUser, 
      products: this.props.products}; 
    // this.state = {
    //   listings = [] 
    // }
  }

  componentDidMount() {
    // localStorage.setItem('greeting', JSON.stringify(this.state)); 
    this.props.fetchProducts(); 
    // this.props.fetchUsers(); 
  }
  
  render () {

    // const products = this.state.products.map

    // const listings = [1,2,3,4].map(count => {
    //   <ProductBox
    //   key = {count}
    //   />
    // })

    // console.log(listings);

    return (
      <div className="homePage">
        {/* {console.log(Object.keys(this.props.products))};  */}
        {console.log(this.props.products)}; 
        {/* {console.log(Object.values(Object.values(this.props.products)))};  */}
        

        {/* {console.log(this.props.currentUser)}  */}
        <NavBar
          currentUser={this.props.currentUser} 
          logout={this.props.logout}
        />

        <div className="topnav">
          {/* <img src={ require("assets/images/logo.jpg") } />  */}
          {/* <img src={ logo } />  */}
          <span className="logo"> 
            <img width="250" height="100" alt="tBay Logo" src={window.logoPNGURL3} />            
          </span>
          {/* <br/> */}
          {/* &nbsp; */}
          <div className='searchbar'>
            {/* <input type="dropdown" placeholder="Shop by Category"/> */}
            <div className="dropdown"> 
              <select className="dropdown-categories"> 
                <option value="" disabled selected>Shop by Category: </option>
                <option value=""> electronics </option>
                <option> appliances </option>
              </select> 
            </div>
            {/* &nbsp; */}
            <div className="search">
              {/* <i className="fa fa-search" aria-hidden="true"></i> */}              	
              <input type="text" placeholder="&#x1F50D; Search for anything"/>
              
            </div> 
            <div className="second-dropdown">
              {/* <label htmlFor="dropdown-all">All Categories */}
              <select className="dropdown-all">
                  <option value="" disabled selected>All Categories</option>
                  <option value=""> electronics </option>
                  <option> appliances </option>
                </select>
              {/* </label> */}
            </div>
              <button>Search</button>            
          </div>
        </div>

        <MiddleBar /> 

        <Carousel />

        <div className="mainContent"> 

          {/* {listings} */}

          {[1,2,3,4].forEach(count => {
            // console.log(`count: ${count}`);
              // <li>{`${count}`}</li>
              return <ProductBox />
          })}

          <div className="rowbox">
            row 1 
            description: <br />
            price: <br />
            <button>Add to Cart</button> <br/>
            <Link to='/signin' >
              &#128722;
              &#xe116;
              <svg id="gh-icon-cart" viewBox="0 0 40 32"><path d="M35.0390625,6.8515625 C36.4453195,6.8515625 37.4674447,7.20312148 38.1054688,7.90625 C38.7434928,8.60937852 39.0625,9.66405547 39.0625,11.0703125 L39.0625,18.9609375 C39.0625,20.2369855 38.7434928,21.226559 38.1054688,21.9296875 C37.4674447,22.632816 36.4322988,22.984375 35,22.984375 L31.484375,22.984375 C29.3749895,22.984375 27.0898561,22.9778646 24.6289063,22.9648438 C22.1679564,22.9518229 19.9349059,22.9453125 17.9296875,22.9453125 L14.921875,22.9453125 L6.8359375,4.8203125 L0.859375,4.8203125 L0.8203125,0.7578125 L8.90625,0.7578125 L12.9296875,6.8515625 L35.0390625,6.8515625 Z M34.0625,18.9609375 C34.322918,18.9609375 34.5507803,18.8632822 34.7460938,18.6679688 C34.9414072,18.4726553 35.0390625,18.2317723 35.0390625,17.9453125 C35.0390625,17.6588527 34.9414072,17.4179697 34.7460938,17.2226562 C34.5507803,17.0273428 34.322918,16.9296875 34.0625,16.9296875 L17.9296875,16.9296875 C17.6692695,16.9296875 17.4414072,17.0273428 17.2460938,17.2226562 C17.0507803,17.4179697 16.953125,17.6588527 16.953125,17.9453125 C16.953125,18.2317723 17.0507803,18.4726553 17.2460938,18.6679688 C17.4414072,18.8632822 17.6692695,18.9609375 17.9296875,18.9609375 L34.0625,18.9609375 Z M34.0625,12.90625 C34.322918,12.90625 34.5507803,12.8085947 34.7460938,12.6132812 C34.9414072,12.4179678 35.0390625,12.1770848 35.0390625,11.890625 C35.0390625,11.630207 34.9414072,11.3958344 34.7460938,11.1875 C34.5507803,10.9791656 34.322918,10.875 34.0625,10.875 L15.9375,10.875 C15.6510402,10.875 15.4101572,10.9791656 15.2148438,11.1875 C15.0195303,11.3958344 14.921875,11.630207 14.921875,11.890625 C14.921875,12.1770848 15.0195303,12.4179678 15.2148438,12.6132812 C15.4101572,12.8085947 15.6510402,12.90625 15.9375,12.90625 L34.0625,12.90625 Z M34.0234375,24.8984375 C34.8828168,24.8984375 35.6249969,25.1979137 36.25,25.796875 C36.8750031,26.3958363 37.1875,27.1249957 37.1875,27.984375 C37.1875,28.8437543 36.8750031,29.5729137 36.25,30.171875 C35.6249969,30.7708363 34.8828168,31.0703125 34.0234375,31.0703125 C33.1640582,31.0703125 32.4283885,30.7708363 31.8164062,30.171875 C31.204424,29.5729137 30.8984375,28.8437543 30.8984375,27.984375 C30.8984375,27.1249957 31.204424,26.3958363 31.8164062,25.796875 C32.4283885,25.1979137 33.1640582,24.8984375 34.0234375,24.8984375 Z M19.8828125,24.8984375 C20.7421918,24.8984375 21.4778615,25.1979137 22.0898438,25.796875 C22.701826,26.3958363 23.0078125,27.1249957 23.0078125,27.984375 C23.0078125,28.8437543 22.701826,29.5729137 22.0898438,30.171875 C21.4778615,30.7708363 20.7421918,31.0703125 19.8828125,31.0703125 C19.0234332,31.0703125 18.2877635,30.7708363 17.6757812,30.171875 C17.063799,29.5729137 16.7578125,28.8437543 16.7578125,27.984375 C16.7578125,27.1249957 17.063799,26.3958363 17.6757812,25.796875 C18.2877635,25.1979137 19.0234332,24.8984375 19.8828125,24.8984375 Z"></path></svg>
            </Link>
            <ol>
              <li>{Math.random()*99}</li>
            </ol>            
            {/* <div className = 'toplinks'> 
              <span class="glyphicon">whoaaaa</span>
            </div> */}            
          </div>

          {this.props.products.map((product) => {
            // alert(`Product #${product.id}: ${product}`);
            // console.log(product[product.id]);
            // console.log(product.id);
            // console.log(product);
            return (
              <ProductBox
              key={product.id} 
              product={product}
              />
            )
            // return (
            //   <div key={product.id}>
            //   Title: {product.title}
            //   Description: {product.description}
            //   Price: {product.price}
            //   </div>
            // )
          })}  
        </div>

        <div className='homeFooter'> hello </div>


      </div>
    )
  }
};

export default Greeting;