import Searchbar from './Searchbar'
import Logo from './Logo'

import {useState} from 'react';


const Navbar = () => {
	const [isOpen, toggleMenu] = useState(false);
	const toggleMenuState = () => {
		toggleMenu(!isOpen);
	};

	const menuIconClosed = (<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>);
	const menuIconOpen = (<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>);

	return (
		<header className='bg-blueGray-900 md:flex md:justify-between md:px-8 md:py-3 md:items-center font-Roboto'>
			<div className='flex items-center justify-between px-4 py-3 md:p-0'>
				<Logo/>
				<div className='md:hidden'>
					<button onClick={toggleMenuState} type='button' className='block w-6 h-6 text-gray-200 hover:text-white focus:outline-none'>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'> {!isOpen ? menuIconOpen : menuIconClosed}</svg>
					</button>
				</div>
			</div>
			<div className={`px-6 pt-2 pb-4 md:flex md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
				<Searchbar/>
				<a href='./explore' className='block p-2 font-normal text-white rounded hover:bg-gray-800'>Explore</a>
				<a href='./' className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'>Stats</a>
				<a href='./' className='block p-2 mt-1 font-normal text-white rounded hover:bg-gray-800 md:mt-0 md:ml-2'>Login</a>
				<a href='./' className='block p-2 mt-1 font-normal text-white rounded md:px-3 md:py-2 md:font-semibold md:bg-cyan-300 md:text-blueGray-800 hover:bg-gray-800 md:hover:bg-offwhite md:mt-0 md:ml-2'>Sign Up</a>
			</div>
		</header>
	);
};

export default Navbar;
