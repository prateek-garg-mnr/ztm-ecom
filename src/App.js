import { Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from "./components/homepage/homepage.component";

function App() {
  return (
		<div>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/topics" />
			<Route exact path="/topics/:topicId" />
		</div>
	);
}

export default App;
