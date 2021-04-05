import React from 'react';
import Navbar from '../components/Navbar';
import SetupsList from '../components/SetupsList';

const UserProfile = () => {
  //Hardcoded sample data
  const SETUPS = [
    { id: 's1', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's2', title: 'C++ Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'JohnDoe', languagesList: ['C++', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
    { id: 's3', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] }
  ];
  const EMPTYSETUPS = [];
  return ( 
    <React.Fragment>
      <Navbar/>
      <SetupList items = {SETUPS} />
    </React.Fragment>
   );
}
 
export default UserProfile;