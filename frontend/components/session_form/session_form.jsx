import React from 'react'; 
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {firstname: '', lastname: '', username: '', password: '', disabled:true, className= ''}
		this.state = {firstname: '', lastname: '', username: '', password: '', disabled:true}
		this.handleSubmit = this.handleSubmit.bind(this); 
	}  

	componentDidUpdate () {
		Object.values(this.state).forEach (prop=>{
	// if (prop === "" && this.state.disabled ) {this.setState({disabled: false})} 
			if (prop.length && this.state.disabled ) {
				this.setState({disabled: false})
				// this.setState({className: "enabled"})
			} 
			// else {
			// 	this.setState({className: "disabled"})
			// }
		})
	}

	// componentWillUnmount () {
	// 	Object.values(this.state).forEach(prop => {
	// 		if (!prop.length && this.state.disabled) {
	// 			this.setState({ disabled: true })
	// 		}
	// 	})
	// }

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
				<div className="header">
					<span className="logo">
						{/* <Link to="/"> <img width="250" height="100" alt="tBay Logo" src='assets/logo3.png' /></Link> */}
						<Link to="/"> <img width="250" height="100" alt="tBay Logo" src={window.logoPNGURL3} /></Link>
					</span>
					<div className="formHeader"> 
						{/* {this.props.formType.toUpperCase()} here:  */}
						{/* <br/>  */}
						<h5> {this.props.redirectMessage} {this.props.navLink} </h5>
					</div>
				</div>

				<div className="sessionIntroMessage"> 
					Hello
					<div className='welcomeMessage'> {this.props.formType[0].toUpperCase() + this.props.formType.slice(1)} here: </div> 
				</div>

				<form onSubmit={this.handleSubmit} className="login-form-box">
					<div className="login-form">
						<br />
						<div className="name-textbox">
								<input type="text" 
									required=" "
									value={this.state.firstname}
									onChange={this.update('firstname')}
									className="login-input"
									// placeholder="First name: "
								/>
								<label> First name: </label>
							&nbsp;
								<input type="text"
									required=" "
									value={this.state.lastname}
									onChange={this.update('lastname')}
									className="login-input"
								/>
								<label className='lastname-label lastname'> Last name: </label>
						</div>
						<br/>
						<div className="textbox">
								<input type="text"
									required=" "
									value={this.state.username}
									onChange={this.update('username')}
									className="login-input"
									/>
								<label> Email or username: </label>  
						</div>
						<br />
						<div className="textbox">
								<input type="password"
									required=" "
									value={this.state.password}
									onChange={this.update('password')}
									className="login-input"
									/>
								<label> Password: </label> 
						</div>
						<button disabled={this.state.disabled}> {this.props.formType.toUpperCase()} </button>
					</div>
				</form>

				{/* <div className="clearer"></div> */}
				{/* <div style="clear: both"></div> */}
				<div className="sessionFormFooter"> 
					<div className="myLinks">
						Click the icon-buttons to: 
						<br/>
						&nbsp;
						Connect with me on LinkedIn,  
							&nbsp;
						{/* <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"/> href="https://www.linkedin.com/in/rahul-jain-ny"/> */}
						{/* <a href="https://www.linkedin.com/in/rahul-jain-ny">  LinkedIn  </a> */}
						{/* <a href="https://www.linkedin.com/in/rahul-jain-ny"> <img className="linkedIn-logo" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" /></a> */}
						{/* <a href="https://www.linkedin.com/in/rahul-jain-ny"><img className="linkedIn-logo" src="assets/social-linkedin-circle-512.webp" /></a> */}
						<a href="https://www.linkedin.com/in/rahul-jain-ny"><img className="linkedIn-logo" src={window.linkedInURL} /></a>
							&nbsp;
						 or see my work on GitHub:
							&nbsp;
						{/* <a href="https://github.com/rahulj93"><img className="gitHub-logo" src='assets/github-logo.svg'/></a> */}
						<a href="https://github.com/rahulj93"><img className="gitHub-logo" src={window.gitHubURL}/></a>
					</div>
				</div>
			</div>
		);
	}
};

export default SessionForm; 