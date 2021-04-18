import Card from './Card';

const UserInfo = props => {

  return (
    <Card className='m-3 sm:m-0'>
      <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
        <div className="flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap">
          <ProfileInfo
            name={props.userData.firstName + ' ' + props.userData.lastName}
            username={props.userData.username}
            photoURL={props.userData.photoURL}
          />
          <Stats
            setupsCount={props.userData.setupsCount}
            totalLikes={props.userData.totalLikes}
            followersCount={props.userData.followersCount}
          />
          <FollowButton />
        </div>
      </div>

    </Card>
  );
}

const ProfileInfo = props => {
  return (
    <div className="flex items-center self-start mt-4 ml-4 sm:m-0 sm:self-center">
      <div className="flex-shrink-0">
        <img className="w-16 h-16 rounded-full" src={`${props.photoURL}`} alt="" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900 sm:text-xl">
          {props.name}
        </h3>
        <p className="text-blue-500 text-md sm:text-lg">
          <a href="#">
            @{props.username}
          </a>
        </p>
      </div>
    </div>
  );
}

const Stats = props => {
  return (
    <div className='flex justify-center py-5 sm:p-0 sm:m-0'>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col justify-center p-3 text-center border-0 border-t border-b border-r border-gray-100">
            <p className="text-base font-medium text-gray-500 sm:text-lg">
              Setups
            </p>
            <p className="text-base font-extrabold text-blue-500 sm:text-xl">
              {props.setupsCount}
            </p>
          </div>
          <div className="flex flex-col justify-center p-3 text-center border-0 border-t border-b border-l border-r border-gray-100">
            <p className="text-base font-medium text-gray-500">
              Total Likes
            </p>
            <p className="text-base font-extrabold text-blue-500 sm:text-xl">
              {props.totalLikes}
            </p>
          </div>
          <div className="flex flex-col justify-center p-3 text-center border-0 border-t border-b border-l border-gray-100">
            <p className="text-base font-medium text-gray-500">
              Followers
            </p>
            <p className="text-base font-extrabold text-blue-500 sm:text-xl">
              {props.followersCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const FollowButton = () => {
  return (
    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
      <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
      </svg>
        Follow
    </button>
  );
}

export default UserInfo;