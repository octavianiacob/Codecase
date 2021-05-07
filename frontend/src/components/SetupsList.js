import Setup from './Setup';
import Card from './Card';
import Spinner from './Spinner';

const SetupsList = ({ setups, loading }) => {
  if (loading) {
    return <Spinner/>
  }
  if (setups.length === 0) {
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
    <section className='mb-auto'>
      <div className='relative px-4 pb-20 bg-offwhite sm:px-6 lg:pb-28 lg:px-8'>
        <div className='relative mx-auto max-w-7xl'>
          <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
            {setups.map(setup => {
              return (
                <Setup
                  key={setup._id}
                  id={setup._id}
                  title={setup.title}
                  createdAt={new Date(setup.createdAt).toDateString()}
                  updatedAt={new Date(setup.updatedAt).toDateString()}
                  likes={setup.likes}
                  creator={setup.creator.username}
                  tools={setup.tools} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SetupsList;