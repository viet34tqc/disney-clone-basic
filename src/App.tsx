import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
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
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/detail/:id"></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
