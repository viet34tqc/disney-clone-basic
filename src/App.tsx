import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/home"></Route>
					<Route exact path="/detail/:id"></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
