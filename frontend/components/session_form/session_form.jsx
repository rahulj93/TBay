import React from 'react'; 
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {username: '', password: ''}
		this.handleSubmit = this.handleSubmit.bind(this); 
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

	render () {
		return (
			<div className="login-form-container">
				<span className="logo">
					<img width="250" height="100" alt="tBay Logo" src='assets/logo3.png' />
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
						<label> Username:  
							<input type="text"
								value={this.state.username}
								onChange={this.update('username')}
								className="login-input"
							/>
						</label>
						<br />
						<br />
						<label> Password:  
							<input type="password"
								value={this.state.password}
								onChange={this.update('password')}
								className="login-input"
							/>
						</label>
						<br/> 
						<br/> 
						<button> {this.props.formType.toUpperCase()} </button>
					</div>
				</form>
			</div>
		);
	}
};

export default SessionForm; 