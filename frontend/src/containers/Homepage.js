import Navbar from '../components/Navbar'
import hero from '../assets/hero-placeholder.png';

import {Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <main className='bg-offwhite'>
            <Navbar />
            <section className='lg:relative bg-blueGray-900'>
                <div className='w-full pt-16 pb-20 mx-auto max-w-7xl lg:py-48'>
                    <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
                        <h1 className='text-4xl font-bold text-offwhite sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
                            <span className='block xl:inline'>An easy way to discover </span>
                            <span className='block text-gradient bg-gradient-to-r from-teal-100 to-cyan-300 xl:inline'>development setups</span>
                            <span className='block xl:inline'> from users around the world.</span>
                        </h1>
                        <p className='max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
                            <span className='text-gradient bg-gradient-to-r from-teal-200 to-cyan-300'>Codecase</span>
                            <span> is where developers showcase, gain inspiration and feedback on their setup, and is your best resource to discover and connect with developers worldwide.</span>
                        </p>
                        <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
                            <div className='rounded-md shadow'>
                                <Link to='/explore' className='flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md text-blueGray-800 hover:bg-white bg-cyan-300 md:py-4 md:text-lg md:px-10'>
                                    Explore setups
                                </Link>
                            </div>
                            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                                <Link to='#' className='flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-blueGray-800 hover:bg-gray-200 md:py-4 md:text-lg md:px-10'>
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
                    <img className='absolute inset-0 object-cover w-full h-full' src={hero} alt=''/>
                </div>
            </section>
        </main>
    );
}

export default Homepage;