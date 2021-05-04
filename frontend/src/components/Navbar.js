import Searchbar from './Searchbar';
import Logo from './Logo';
import Modal from './Modal';
import Authentication from './Authentication';

import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, userSelector } from '../slices/userSlice';


const Navbar = () => {
	//Initialize the redux hook
	const dispatch = useDispatch();
	const { user } = useSelector(userSelector);

	//dispatch thunk when component first mounts
	useEffect(() => {
		dispatch(fetchUser())
	}, [dispatch]);

	const [isOpen, toggleMenu] = useState(false);
	const toggleMenuState = () => {
		toggleMenu(!isOpen);
	};

	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(!showModal)
	}

	const menuIconClosed = (<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>);
	const menuIconOpen = (<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>);

	// Render contents based on if user is authenticated or not
	const renderContent = (user) => {
		switch (user) {
			// AUTH STATUS IS NOT DETERMINED
			case null:
				return '';

			// USER NOT AUTHENTICATED
			case false:
				return (
					<>
						<Searchbar/>
						<NavLink to='/explore' className='block p-2 font-normal text-white rounded hover:bg-gray-800'>Explore</NavLink>
						{/* <NavLink to='/' className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'>Stats</NavLink> */ }
						<button className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'
							onClick={openModal}
							type='button'>
								Sign In
						</button>
						<button className='block p-2 mt-1 font-normal text-white rounded md:px-3 md:py-2 md:font-semibold md:bg-cyan-300 md:text-blueGray-800 hover:bg-gray-800 md:hover:bg-offwhite md:mt-0 md:ml-2'
							onClick={openModal}
							type='button'>
								Register
						</button>
						<Modal showModal={showModal} setShowModal={setShowModal}>
							<Authentication/>
						</Modal>
					</>
				);

			// USER AUTHENTICATED
			default:
				return (
					<>
						<Searchbar />
						<NavLink to='/explore' className='block p-2 font-normal text-white rounded hover:bg-gray-800'>Explore</NavLink>
						{/* <NavLink to='/' className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'>Stats</NavLink> */}
						<NavLink to='/dashboard' className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'>Dashboard</NavLink>
						<a href='/api/logout' className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'>Logout</a>
						<NavLink to='/profile' className='hidden px-2 mx-4 rounded md:inline-block hover:bg-gray-800 md:mt-0 md:ml-2'>
							<div className="flex items-center">
								<div>
									<img
										className="inline-block rounded-full h-9 w-9"
										src={user?.photoURL}
										alt=""
									/>
								</div>
								<div className="ml-3">
									<p className="font-medium text-offwhite group-hover:text-gray-900">{user?.firstName}</p>
								</div>
							</div>
						</NavLink>
						
						<NavLink to='/profile' className='block md:hidden'>
							<p className='block p-2 mt-1 font-normal text-white rounded md:hidden hover:bg-gray-800 md:mt-0 md:ml-2'>Profile</p>
						</NavLink>
					</>
				);
		};
	};

	return (
		<header className='bg-blueGray-900 md:flex md:justify-between md:px-8 md:py-3 md:items-center font-Roboto'>
			<div className='flex items-center justify-between px-4 py-3 md:p-0'>
				<Logo isLoggedin={`${user}`}/>
				<div className='md:hidden'>
					<button onClick={toggleMenuState} type='button' className='block w-6 h-6 text-gray-200 hover:text-white focus:outline-none'>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'> {!isOpen ? menuIconOpen : menuIconClosed}</svg>
					</button>
				</div>
			</div>
			<div className={`px-6 pt-2 pb-4 md:flex md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
				{renderContent(user)};
			</div>
		</header>
	);
};

export default Navbar;
