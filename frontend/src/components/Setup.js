import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUser } from '../slices/userSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from './Card';

const Setup = ({ id, title, createdAt, updatedAt, likes, usersThatLiked, creator, creatorID, tools }) => {

	const dispatch = useDispatch();
	const { user } = useSelector(userSelector);
	const [liked, setLiked] = useState(user?.likedSetups?.includes(id) ? true : false);

	const likeSetup = async (isLiked) => {
		if (user) {
			const req = await axios.patch(`/api/setups/like/${id}/from/${user._id}`);
			if (req.data.result === 'increment') {
				dispatch(fetchUser());
				setLiked(true);
			}
			if (req.data.result === 'decrement') {
				dispatch(fetchUser());
				setLiked(false);
			}
		}
	}

	let colors = ['bg-red-100', 'bg-yellow-100', 'bg-emerald-100', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-blue-100', 'bg-purple-100', 'bg-orange-100', 'bg-lime-100', 'bg-lightBlue-100', 'bg-pink-100'];
	return (
		<>
			<Card key={id} className='transition duration-500 transform h-80 hover:scale-101'>
				<div className='relative h-full xl:p-2'>
					<div className='block mt-2'>
						<Link to={`/s/${id}`}>
							<p className='text-xl font-semibold text-gray-900'>
								{title}
							</p>
						</Link>
						<div className='flex space-x-1 text-sm text-gray-500'>
							<span>
								Created by
							</span>
							<Link to={`/u/${creatorID}`}>
								<span className='text-blue-600'>
									@{creator}
								</span>
							</Link>
							<span>
								on
							</span>
							<time>
								{createdAt}
							</time>
						</div>
						<div className='flex space-x-1 text-sm text-gray-500'>
							<span>
								Last updated on
							</span>
							<time>
								{updatedAt}
							</time>
						</div>
					</div>
					<div className='mt-3'>
						<p className='font-semibold'>Tools and Technologies used:</p>
						<div className='h-20'>
							{tools.slice(0, 5).map(tool => {
								return (
									<Link to={`/t/${tool._id}`} key={tool._id} type="button" className={`mx-1 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[tool.colorID]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
										{tool.title}
									</Link>
								);
							})}
							{tools.length <= 5 ? null :
								<Link to={`/s/${id}`} type="button" className={`mx-1 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[2]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
									+{tools.length - 5} more
								</Link>
							}
						</div>
					</div>
					<div className='absolute inset-x-0 bottom-0'>
						<div className='flex justify-center mt-10 sm:mt-4'>
							<span className="rounded-md shadow-sm">
								<Link to={`/s/${id}`}>
									<button type="button" className={` ${Object.keys(user).length === 0 ? "rounded-md" : "rounded-l-md"} relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-red-400`}>
										<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
										</svg>
									</button>
								</Link>
								{Object.keys(user).length !== 0 ?
									<button onClick={likeSetup} type="button" className={`focus:outline-none relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium ${liked ? 'text-red-400' : 'text-gray-700'} bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 hover:text-red-400`}>
										<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
										</svg>
									</button>
								: null}

							</span>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
}

export default Setup;