import React from 'react';
import Navbar from '../components/Navbar';
import SetupsList from '../components/SetupsList';

import {useParams} from 'react-router-dom';

const UserProfile = () => {
  //Hardcoded sample data
  const SETUPS = [
    { id: 's1', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'SameUser', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's2', title: 'C++ Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Soyey', languagesList: ['C++', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's3', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'SameUser', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] }
  ];
  const EMPTYSETUPS = [];
  const userID = useParams().userID;
  const filteredSetups = SETUPS.filter(setup => setup.username === userID);
  return ( 
    <>
      <SetupsList items={filteredSetups} />
    </>
   );
}
 
export default UserProfile;