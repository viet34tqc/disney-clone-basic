import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
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
