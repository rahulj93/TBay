import React from 'react'; 
import { Link } from 'react-router-dom';
import { NavBar, MiddleBar } from '../nav_bar/nav_bar';


class SellingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      price: '',
      seller_id: this.props.currentUserId,
      photoFile: null  
    }
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleFile = this.handleFile.bind(this); 
  }

  componentDidMount() {
    console.log('hello, welcome to the sell page');
  }

  componentDidUpdate() {
    console.log(this.state); 
  }

  update(field) {
    console.log(this.state);
    return e => this.setState({
      [field]: e.currentTarget.value
    }); 
  }

  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault(); 
    const {history} = this.props; 
    const product = Object.assign({}, this.state); 
    // console.log(product); 
    let formData = new FormData();
    // console.log(formData);
    formData.append('product[title]', this.state.title);
    // // console.log(formData);
    formData.append('product[description]', this.state.description);
    // // console.log(formData);
    formData.append('product[price]', this.state.price);
    formData.append('product[seller_id]', this.state.seller_id);
    // // console.log(formData);
    // // if (this.state.photoFile) {
      formData.append('product[photo]', this.state.photoFile);
      // debugger; 
    // // }
    // // $.ajax({
    // //   url: '/api/products',
    // //   method: 'POST',
    // //   data: formData,
    // //   contentType: false,
    // //   processData: false
    // // });

    // this.props.processForm(formData)

    // const formData = new FormData();  
    // this.props.processForm(product)
    // this.props.processForm(this.state)
    this.props.processForm(formData)
    .then(()=> {
      console.log(`${this.state.title} has been entered into the database.`); 
      // history.push('/accountDashboard'); 
      history.push('/'); 
    });

  }

  render () {
    return (
      <div>

        {/* <NavBar
          currentUser={this.props.currentUser}
          logout={this.props.logout}
          />  */}

        <h1>Create a new listing </h1>
        <br/>

        <form 
        className="productListingForm"
        onSubmit={this.handleSubmit}>
          
            Category:
          {/* {/* <div>  */}
          {/* <label for="cars">Choose a car:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> */}
          {/* <label>Choose a category: */}
          <select>
            {/* <option> --- </option> */}
            <option>Choose a category</option>
            <option value="motors">Motors</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="art">Collectibles & Art</option>
            <option value="home_garden">Home & Garden</option>
            <option value="sporting">Sporting Goods</option>
            <option value="toys">Toys</option>
            <option value="other">Other</option>
          </select>
          {/* </label> */}
          {/* </div> */}
          <br/> 
          <br/> 

          {/* <div> */}
          Title: 
          {/* <label for="title">Title:  */}
          <input 
          name="title" id="title"
          type="text"
          value={this.state.title}
          onChange={this.update('title')}
          placeholder="Enter the title of your product here"/> 
          {/* </label>  */}
          {/* </div> */}

          <br/>
          {/* <div> */}
            Description: 
          {/* <label>Description:  */}
          <input 
            type="text"
            value={this.state.description}
            onChange={this.update('description')}
          placeholder="Enter a brief description of your product here"></input>
          {/* </label> */}
          {/* </div> */}

          <br/>
            {/* <div> */}
          Price: $
          {/* <label>$ */}
            <input 
            type="text"
            value={this.state.price}
            onChange={this.update('price')}
            placeholder="Enter the price of your product here"></input>
          {/* </label>  */}
          {/* </div> */}
          <br/>
          <br/>
          <div>
          Upload an Image: 
          <input
            type="file"
            // value={}
            onChange={this.handleFile}
            placeholder="Upload an image"></input>
          </div>

          <br/> 
          <br/> 
          <button
          className="listItButton">List it!</button>
          </form>
        <br/>
        {/* Image URL: <input placeholder="Enter the image url here"></input> <button>Submit</button> */}
        <br/>

        <Link to='/'> <button>Return home</button> </Link>
      </div>
    )
  }
}

export default SellingForm; 