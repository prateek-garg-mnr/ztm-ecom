import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.components"
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser }) {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						Sign Out
					</div>
				) : (
					<Link className="option" to="/signin">
						Sign In
					</Link>
					)}
				<CartIcon/>
			</div>
			<CartDropdown/>
		</div>
	);
}
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Header);
