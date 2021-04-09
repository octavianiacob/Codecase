import React from 'react';
import Navbar from '../components/Navbar';
import SetupsList from '../components/SetupsList';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';

import {useParams} from 'react-router-dom';

const UserProfile = () => {
  const USER = { id: 'u1', firstName: 'Octavian', lastName: 'Iacob', setupsCount:'4', followersCount:'15', totalLikes:'24', username: 'Octavzz', photoURL:'https://scontent.fias1-1.fna.fbcdn.net/v/t1.6435-9/117289039_1666071473557930_2596848064091456275_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Yt09tgt6O-0AX_Ru0dU&_nc_ht=scontent.fias1-1.fna&oh=c240dde7a6581d4fe3ded9811b3a261c&oe=60947BC3'}

  //Hardcoded sample data
  const SETUPS = [
    { id: 's1', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's2', title: 'C++ Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'JohnDoe', languagesList: ['C++', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's3', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's4', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'JohnDoe', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's5', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's6', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's7', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] }
  ];
  const EMPTYSETUPS = [];

  const userID = useParams().userID;
  const filteredSetups = SETUPS.filter(setup => setup.username === USER.username);
  return ( 
    <>
      <UserInfo userData={USER}/>
      <SetupsList items={filteredSetups} />
    </>
   );
}
 
export default UserProfile;