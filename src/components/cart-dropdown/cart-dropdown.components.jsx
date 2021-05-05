import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import "./cart-dropdown.style.scss";
function CartDropdown() {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
}

export default CartDropdown;
