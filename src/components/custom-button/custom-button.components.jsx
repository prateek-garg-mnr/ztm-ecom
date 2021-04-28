import React from "react";
import "./custom-button.styles.scss";
function CustomButton({ children, ...props }) {
	return (
		<button className="custom-button" {...props}>
			{children}
		</button>
	);
}

export default CustomButton;
