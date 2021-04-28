import React from "react";
import "./menu-item.styles.scss";
function MenuItems({ title, imageURL, size }) {
	return (
		<div
			style={{ backgroundImage: `url(${imageURL})` }}
			className={`${size} menu-item`}
		>
			<div className="background-image"></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
}

export default MenuItems;
