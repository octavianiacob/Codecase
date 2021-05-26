import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import SetupsList from '../components/SetupsList';
import UserInfo from '../components/UserInfo';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';


const UserProfile = () => {

  const userID = useParams().userID;
  const [user, setUser] = useState([]);
  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [setupsPerPage] = useState(9);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const req = await axios.get(`/api/users/${userID}`);
        setUser(req.data.user);
        setLoading(false);
      } catch (err) {
        setError(err.response.data.message);
      }
    }
    fetchUser();
  }, [userID]);

  useEffect(() => {
    const fetchSetups = async () => {
      try {
        setLoading(true);
        const req = await axios.get(`/api/setups/user/${userID}`);
        setSetups(req.data.setups);
        setLoading(false);
      } catch (err) {
        setError(err.response.data.message);
      }
    }
    fetchSetups();
  }, [userID]);

  const indexOfLastSetup = currentPage * setupsPerPage;
  const indexOfFirstSetup = indexOfLastSetup - setupsPerPage;
  const currentSetups = setups.slice(indexOfFirstSetup, indexOfLastSetup);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(user);
  // console.log(setups);
  console.log(currentSetups);

  return (
    <>
      {!setups ? <Spinner /> :
        <>
          <UserInfo user={user} />
          <SetupsList setups={currentSetups} loading={loading} />
          <Pagination setupsPerPage={setupsPerPage} totalSetups={setups.length} currentPage={currentPage} paginate={paginate} />
        </>
      }
    </>
  );
}

export default UserProfile;