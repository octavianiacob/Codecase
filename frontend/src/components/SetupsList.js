import { useReducer } from 'react';
import Setup from './Setup';

const SetupsList = props => {
    if (props.items.length === 0) {
        return (
            
            <div className='mt-20 text-center'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                    No setups found
                        </h2>
                <p className='max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4'>
                    Be the first to upload your development setup for other users to see!
                        </p>
            </div>
        );
    }
    return (
        <section>
            <div className='relative px-4 pt-16 pb-20 bg-offwhite sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
                <div className='relative mx-auto max-w-7xl'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                            From the blog
                        </h2>
                        <p className='max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                        </p>
                    </div>
                    <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
                        {props.items.map(setup => {
                            return <Setup key={setup.id} id={setup.id} title={setup.title} lastUpdate={setup.lastUpdate} likes={setup.likes} username={setup.username} languagesList={setup.languagesList} toolsList={setup.toolsList} />
                        })}

                    </div>
                </div>
            </div>
        </section>

    );
}

export default SetupsList;