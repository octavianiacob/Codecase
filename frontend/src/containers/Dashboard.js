import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../slices/userSlice';
import axios from 'axios';

import Card from '../components/Card'
import { Link } from 'react-router-dom';


const Dashboard = () => {

	const { user } = useSelector(userSelector);
	const [userSetups, setUserSetups] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchSetups = async () => {
			if(user) {	
			try {
					const req = await axios.get(`/api/setups/user/${user?._id}`);
					const setups = req.data.setups;
					setUserSetups(setups);

				} catch (err) {
					setError(err.response.data.message);
				}
			} else {
		} 
	}
		fetchSetups();
	}, [user]);

	return (
		<>
			<Header />
			{!user ? <p>Loading</p> :
				<SetupsTable isEditable title='My Setups' setups={userSetups} />
			}
			{error && <div>{error}</div> }
		</>

	);
}

const Header = () => {
	return (
		<Card className='m-3 sm:m-0'>
			<div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
				<div className="flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap">
					<h1 className='text-xl font-semibold sm:text-3xl'>Dashboard</h1>
					<div className='flex flex-row mt-5 sm:justify-center sm:mt-0'>
						<button type="button" className="inline-flex items-center px-4 py-2 mr-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm hover:bg-gray-50">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
        			New Setup
    				</button>
						<Link to='/profile'>
							<button type="button" className="inline-flex items-center px-4 py-2 mx-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm hover:bg-gray-50">
								<svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
								</svg>
        				My Profile
    					</button>
						</Link>
					</div>
				</div>
			</div>
		</Card>
	);
}

const SetupsTable = ({ isEditable, title, setups }) => {

	return (
		<div className='m-3 lg:mx-20 sm:my-10'>
			<div className='py-5 sm:px-6'>
				<h2 className="text-2xl font-medium leading-6 text-gray-900">
					{title}
				</h2>
			</div>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-scroll lg:overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th className="px-10 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Title
                  		</th>
										<th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Created by
                  		</th>
										<th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Last updated on
                  		</th>
										<th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Likes
                  		</th>
										<th className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{setups.map((setup) => (
										<SetupRow key={setup?._id} setup={setup} isEditable={isEditable} />
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const SetupRow = ({ setup, isEditable }) => {
	const [creator, setCreator] = useState();

	useEffect(() => {
		const fetchCreator = async () => {
			try {
				const res = await fetch(`/api/users/${setup?.creator}`);
				const data = await res.json();
				setCreator(data.user);
			} catch (err) {
				console.log(err);
			}
		}
		fetchCreator();
	}, [setup?.creator]);

	return (
		<tr>
			<td className="px-6 py-4 whitespace-nowrap">
				<div className="flex items-center">
					<div className="ml-4">
						<Link to={`/s/${setup._id}`} className="text-sm font-medium text-gray-900">{setup.title}</Link>
					</div>
				</div>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<Link to={`/u/${setup?.creator}`} className="text-sm text-blue-500">{creator && creator.username}</Link>
			</td>
			<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(setup.updatedAt).toDateString()}</td>
			<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{setup.likes}</td>
			<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
				{isEditable ?
					<>
						<Link to='/' className="pr-3 text-blue-500 hover:text-gray-900">
							Edit
          	</Link>
						<Link to='/' className="pl-3 text-red-500 hover:text-gray-900">
							Delete
          	</Link>
					</>
					:
					<button type="button" className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-red-400 hover:text-gray-700">
						<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
						</svg>
					</button>
				}
			</td>
		</tr>
	);
}

export default Dashboard;