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
      seller_id: this.props.currentUserId 
    }
    this.handleSubmit = this.handleSubmit.bind(this); 
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

  handleSubmit(e) {
    e.preventDefault(); 
    const {history} = this.props; 
    // const product = Object.assign({}, this.state); 
    // console.log(product); 
    this.props.processForm(this.state)
    .then(()=> {
      console.log(`${this.state.title} has been entered into the database.`); 
      history.push('/accountDashboard'); 
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
        {/* <input placeholder="Sell something here!"></input> */}
        <br/>

        <form onSubmit={this.handleSubmit}>

          Title: 
          {/* <label>Title: </label>  */}
          <input 
          type="text"
          value={this.state.title}
          onChange={this.update('title')}
          placeholder="Enter the title of your product here"/> 
          <br/>
          Description: 
          {/* <label>Description: </label>  */}
          <input 
            type="text"
            value={this.state.description}
            onChange={this.update('description')}
          placeholder="Enter a brief description of your product here"></input>
          <br/>
          Price: 
          {/* <label>Price: </label>  */}
          <input 
            type="text"
            value={this.state.price}
            onChange={this.update('price')}
          placeholder="Enter the price of your product here"></input>
          <br/>
          <button>List it!</button>
          </form>
        <br/>
        Image URL: <input placeholder="Enter the image url here"></input> <button>Submit</button>
        <br/>

        <Link to='/'> <button>Return home</button> </Link>
      </div>
    )
  }
}

export default SellingForm; 