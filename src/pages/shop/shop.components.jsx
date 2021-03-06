import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
export default class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		return (
			<div className="shop-page">
				{this.state.collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
