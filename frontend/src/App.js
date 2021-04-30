import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';



import Navbar from './components/Navbar';
import Homepage from './containers/Homepage';
import Explore from './containers/Explore';
import Dashboard from './containers/Dashboard';
import UserProfile from './containers/UserProfile';
import ExpandedSetup from './containers/ExpandedSetup';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<Router>
				<Navbar />
				<main className='bg-offwhite'>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route exact path='/explore' component={Explore} />
						<Route exact path='/dashboard' component={Dashboard} />
						{/* <Route exact path='/profile' component={Profile} /> */}
						{/* <Route exact path='/settings' component={Settings} /> */}
						{/* <Route exact path='/new' component={NewSetup} /> */}
						<Route path='/s/:setupID' component={ExpandedSetup} />
						<Route path='/u/:userID' component={UserProfile} />
						<Redirect to='/' />
					</Switch>
				</main>
			</Router>
		);
	};
}

export default connect(null, actions)(App);