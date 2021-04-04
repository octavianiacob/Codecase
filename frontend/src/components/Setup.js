import {Link} from 'react-router-dom';
import Card from './Card';

const Setup = props => {
    let key = 5000;
    let colors = ['bg-red-100', 'bg-yellow-100', 'bg-emerald-100', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-blue-100', 'bg-purple-100']
    return (
        <Card>
            <div className='block mt-2'>
                <Link to={`/setups/${props.id}`}>
                    <p className='text-xl font-semibold text-gray-900'>
                        {props.title}
                    </p>
                </Link>
                <div className='flex space-x-1 text-sm text-gray-500'>
                    <span>
                        Created by
                        </span>
                    <Link to={`/users/${props.username}`}>
                        <span className='text-blue-600'>
                            @{props.username}
                        </span>
                    </Link>
                </div>
                <div className='flex space-x-1 text-sm text-gray-500'>
                    <span>
                        Last updated on
                        </span>
                    <time dateTime='2020-03-16'>
                        {props.lastUpdate}
                    </time>
                </div>
            </div>
            <div className='mt-3'>
                <p className='font-semibold'>Technologies used:</p>
                <div>
                    {props.languagesList.map(lang => {
                        return (
                            <button key={key = key + 1} type="button" className={`mx-1 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[Math.floor(Math.random() * colors.length)]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                                {lang}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className='mt-3'>
                <p className='font-semibold'>Tools used:</p>
                <div>
                    {props.toolsList.map(tool => {
                        return (
                            <button key={key = key + 1} type="button" className={`mx-1 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[Math.floor(Math.random() * colors.length)]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                                {tool}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <span className="rounded-md shadow-sm">
                    <button type="button" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 hover:text-red-400">
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                    </button>
                    <button type="button" className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-red-400">
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                    <button type="button" className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 hover:text-red-400">
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </button>
                </span>
            </div>
        </Card>
    );
}

export default Setup;