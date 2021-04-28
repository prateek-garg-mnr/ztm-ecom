import React, { Component } from "react";
import FormInput from "../form-input/form-input.components";
import "./sign-in.styles.scss";
export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						value={email}
						name="email"
						type="email"
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						value={password}
						name="password"
						type="password"
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<input type="submit" value="submit form" />
				</form>
			</div>
		);
	}
}
