import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Explore from './containers/Explore';
import Dashboard from './containers/Dashboard';

const App = () => {
  return (
		<Router>
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
				<Redirect to='/' />
			</Switch>
		</Router>
  );
}

export default App;