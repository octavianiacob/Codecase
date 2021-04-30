import Setup from './Setup';
import Card from './Card';

const SetupsList = props => {
    if (props.items.length === 0) {
        return (
            <Card className='max-w-sm mx-auto mt-3 sm:mt-10 sm:max-w-lg'>
                <div className='my-10 text-center'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                        No setups found
                    </h2>
                </div>
            </Card>
        );
    }
    return (
        <section>
            <div className='relative px-4 pb-20 bg-offwhite sm:px-6 lg:pb-28 lg:px-8'>
                <div className='relative mx-auto max-w-7xl'>
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