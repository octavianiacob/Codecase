import {useState} from 'react';

import Logo from '../assets/logo/FullLogo.svg';
const Navbar = () => {
	const [isOpen, toggleMenu] = useState(false);
	const toggleClass = () => {
		toggleMenu(!isOpen);
	};

	
	return (
		<header className='bg-blueGray-900'>
			<div className='flex items-center justify-between px-4 py-3'>
				<div className=''>
					<a href='./'>
						<img src={Logo} alt='Logo' className='inline h-8' />
					</a>
				</div>
				<div>
					<button
						onClick={toggleClass}
						type='button'
						className='block w-6 h-6 text-gray-200 hover:text-white focus:outline-none'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className='px-2 pt-2 pb-4' className={isOpen ? 'block' : 'hidden'}>
				<a href='#' className='block p-2 font-semibold text-white rounded hover:bg-gray-800'>Login</a>
				<a href='#' className='block p-2 mt-1 font-semibold text-white rounded hover:bg-gray-800'>Sign up</a>
				<a href='#' className='block p-2 mt-1 font-semibold text-white rounded hover:bg-gray-800'>Explore</a>
				<a href='#' className='block p-2 mt-1 font-semibold text-white rounded hover:bg-gray-800'>Stats</a>
			</div>
		</header>
	);
};

export default Navbar;
