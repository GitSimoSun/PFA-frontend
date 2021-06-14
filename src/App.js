import React from 'react';
import Home from './Home/Home';
import Tools from './Tool/Tools';
import Companies from './Company/Companies';
import MatchingCompanies from './MatchingCompanies/MatchingCompanies';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MainProvider } from './Main/Context/MainContext';
import '../src/Main/Styles/Main.css'


function App() {
  	return (
		<MainProvider>
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/tools" component={Tools} />
				<Route path="/companies" component={Companies} />
				<Route path="/matching-companies" component={MatchingCompanies} />
			</Router>
		</MainProvider>
  	);
}

export default App;
