import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, fetchUser } from './slices/userSlice';

import Navbar from './components/Navbar';
import Homepage from './containers/Homepage';
import Explore from './containers/Explore';
import Dashboard from './containers/Dashboard';
import UserProfile from './containers/UserProfile';
import ExpandedSetup from './containers/ExpandedSetup';
import MyProfile from './containers/MyProfile';
import NewSetup from './containers/NewSetup';
import EditSetup from './containers/EditSetup';
import ToolProfile from './containers/ToolProfile';


const App = () => {
	const dispatch = useDispatch();

	//Save user in store from /api/current_user
	//dispatch thunk when component first mounts
	useEffect(() => {
		dispatch(fetchUser())
	}, [dispatch]);

	let auth;
	const { user } = useSelector(userSelector);
	if (user) {
		Object.keys(user).length !== 0 ? auth = true : auth = false;
	}
	return (
		<Router>
			<Navbar />
			<main className='h-full bg-offwhite'>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/explore' component={Explore} />
					<Route path='/s/:setupID' component={ExpandedSetup} />
					<Route path='/u/:userID' component={UserProfile} />
					<Route path='/t/:toolID' component={ToolProfile} />
					{auth ?
						<>
							<Route exact path='/dashboard' component={Dashboard} />
							<Route exact path='/profile' component={MyProfile} />
							<Route exact path='/new' component={NewSetup} />
							<Route path='/edit/:setupID' component={EditSetup} />
						</>
						:
						<Redirect to='/' />}
					<Redirect to='/' />
				</Switch>
			</main>
		</Router>
	);
};

export default App;