import Card from './Card';

const UserInfo = ({ user, noAbout }) => {

  return (
    <Card className='m-3 sm:m-0'>
      <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
        <div className="flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap">
          <div className="flex items-center self-start mt-4 ml-4 sm:m-0 sm:self-center">
            <div className="flex-shrink-0">
              <img className="w-16 h-16 rounded-full" src={`${user.photoURL}`} alt="" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900 sm:text-xl">
                {user.firstName + ' ' + user.lastName}
              </h3>
              <p className="text-blue-500 text-md sm:text-lg">
                @{user.username}
              </p>
            </div>
          </div>
          <div className='flex mt-10 sm:mt-0 sm:flex-row'>
            <a href={`https://${user.website}`} className="inline-flex items-center px-4 py-2 mx-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 -ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
        				Personal Website
    				</a>
            <a href={`https://github.com/${user.github}`} className="inline-flex items-center px-4 py-2 mx-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm hover:bg-gray-50">
              <svg className="w-5 h-5 mr-3 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub Profile
            </a>
          </div>
        </div>
        {noAbout ? null :
          <About user={user} />
        }
      </div>
    </Card>
  );
}

const About = ({ user }) => {
  return (
    <div className='mt-10'>
      <h2 className='pb-5 text-lg font-medium'>About me</h2>
      <p className='block w-full p-5 mt-1 bg-gray-100 border-gray-300 rounded shadow-sm sm:text-sm'>{user.about}</p>
    </div>
  );
}

export default UserInfo;