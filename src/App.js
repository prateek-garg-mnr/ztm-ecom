import react, { Component } from "react";
import { Route, Switch } from "react-router-dom";


import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import Header from "./components/header/header.components";

import "./App.css";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
	constructor() {
		super();;
		this.state = {
			currentUser:  null,
		};
	}
	unsubscribeFromAuth = null
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user })
			console.log(user)
		})
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}
	render() {
		return (
			<div>
				<Header currentUser={ this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
