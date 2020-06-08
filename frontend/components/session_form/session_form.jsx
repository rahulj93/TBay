import React from 'react'; 
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {firstname: '', lastname: '', username: '', password: '', disabled:true}
		this.handleSubmit = this.handleSubmit.bind(this); 
	}  

	componentDidUpdate () {
		Object.values(this.state).forEach (prop=>{
			// if (prop === "" && this.state.disabled ) {
			// 	this.setState({disabled: false})
			// } 
			if (prop.length && this.state.disabled ) {
				this.setState({disabled: false})
			} 
		})
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value 
		}); 
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state); 
		this.props.processForm(user); 
	}

	// info() {
	// 	if (this.props.formType === 'signup') {
			
	// 	}
	// }


	render () {
		return (
			<div className="login-form-container">
				<span className="logo">
					<Link to="/"> <img width="250" height="100" alt="tBay Logo" src='assets/logo3.png' /></Link>
				</span>
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{/* Create your Tbay account here  */}
					<div className="formHeader"> 
						{this.props.formType.toUpperCase()} here: 
						<br/> 
						<h5> {this.props.redirectMessage} {this.props.navLink} </h5>
            &nbsp;
					</div>
					<br/>
					<br/>
					<div className="login-form">
						<br />
						<div className="name-textbox">
							<input type="text"
								value={this.state.firstname}
								onChange={this.update('firstname')}
								className="login-input"
								// placeholder="First name: "
							/>
							<label> First name: </label>
            &nbsp;
							<input type="text"
								value={this.state.lastname}
								onChange={this.update('lastname')}
								className="login-input"
								// placeholder='Last name:'
							/>
							<label className='lastname-label lastname'> Last name: </label>
						</div>
						<br/>

						<div className="textbox">
								<input type="text"
									value={this.state.username}
									onChange={this.update('username')}
									className="login-input"
									/>
								<label> Email or username: </label>  
						</div>
						<br />
						<div className="textbox">
								<input type="password"
									value={this.state.password}
									onChange={this.update('password')}
									className="login-input"
									/>
								<label> Password: </label> 
						</div>
						<br/> 
						<br/> 
						<button disabled={this.state.disabled}> {this.props.formType.toUpperCase()} </button>
					</div>
				</form>
			</div>
		);
	}
};

export default SessionForm; 