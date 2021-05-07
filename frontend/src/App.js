import React, {useEffect} from 'react';
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

const App = () => {
	const dispatch = useDispatch();

	//Save user in store from /api/current_user
	//dispatch thunk when component first mounts
	useEffect(() => {
		dispatch(fetchUser())
	}, [dispatch]);

	const { user } = useSelector(userSelector);
	return (
		<Router>
			<Navbar />
			<main className='bg-offwhite'>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/explore' component={Explore} />
					{user ? 
					<Route exact path='/dashboard' component={Dashboard} />
						: 
					<Redirect to='/' />}
					<Route exact path='/profile' component={MyProfile} />
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

export default App;