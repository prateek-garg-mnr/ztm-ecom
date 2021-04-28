import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import "./App.css";
function App() {
  return (
		<div>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/shop" component={ShopPage} />
		</div>
	);
}

export default App;
