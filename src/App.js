import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Preloader/Landing';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


const App = () => {
	const [ preLoaderVisibility, setPreLoaderVisibility ] = useState(true);

	setTimeout(() => {
		setPreLoaderVisibility(false);
	}, 3000);

	return (
		<>
			{preLoaderVisibility ? (
					<Landing />
			) : (
				<>
					<Router>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/dashboard">
								<Dashboard />
							</Route>
						</Switch>
					</Router>
				</>
			)}
		</>
	);
};

export default App;
