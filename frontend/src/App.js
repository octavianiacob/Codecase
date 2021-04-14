import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './containers/Homepage';
import Explore from './containers/Explore';
import Dashboard from './containers/Dashboard';
import UserProfile from './containers/UserProfile';
import ExpandedSetup from './containers/ExpandedSetup';

const App = () => {
  return (
		<Router>
			<Navbar/>
			<main className='bg-offwhite'>
				<Switch>

					<Route path='/' exact>
						<Homepage />
					</Route>

					<Route path='/explore' exact>
						<Explore />
					</Route>

					<Route path='/dashboard' exact>
						<Dashboard />
					</Route>

					<Route path='/profile' exact>
						{/* <Profile /> */}
					</Route>

					<Route path='/settings' exact>
						{/* <Settings /> */}
					</Route>

					<Route path='/new' exact>
						{/* <NewSetup /> */}
					</Route>

					<Route path='/s/:setupID'>
						<ExpandedSetup /> 
					</Route>

					<Route path='/u/:userID'>
						<UserProfile /> 
					</Route>



					<Redirect to='/' />
				</Switch>
			</main>
		</Router>
  );
}

export default App;