import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/HomePage/Content/PageNotFound';
import Landing from './components/Preloader/Landing';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const App = () => {
	const [ preLoaderVisibility, setPreLoaderVisibility ] = useState(true);

	// For Pre-Loader Function
	const keyUpTimer = useRef(null); 
    const keyUpTimerDelay = 2000;
	clearTimeout(keyUpTimer.current); 
	
	keyUpTimer.current = setTimeout(() => {
		setPreLoaderVisibility(false);
	}, keyUpTimerDelay);

	
	return (
		<>
			{/* Pre Loader */}
			{preLoaderVisibility ? (
					<Landing />
			) : (
				<>
					<Router>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/simulation-phy">
								<Dashboard />
							</Route>
							<Route path="*">
									<PageNotFound />
								</Route>
						</Switch>
					</Router>
				</>
			)}
		</>
	);
};

export default App;
