import Card from './Card';

const UserInfo = ({user}) => {

  return (
    <Card className='m-3 sm:m-0'>
      <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
        <div className="flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap">
          <ProfileInfo
            name={user.firstName + ' ' + user.lastName}
            username={user.username}
            photoURL={user.photoURL}
          />
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
          @{props.username}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;