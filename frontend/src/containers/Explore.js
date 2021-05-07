import { useState, useEffect } from 'react';
import axios from 'axios';

import SetupsList from '../components/SetupsList';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const Explore = () => {

  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [setupsPerPage] = useState(9);

  useEffect(() => {
    const fetchSetups = async () => {
      setLoading(true);
      const req = await axios.get('/api/setups/');
      const setups = req.data.setups;
      setSetups(setups);
      setLoading(false);
    }
    fetchSetups();
  }, []);
  const indexOfLastSetup = currentPage * setupsPerPage;
  const indexOfFirstSetup = indexOfLastSetup - setupsPerPage;
  const currentSetups = setups.slice(indexOfFirstSetup, indexOfLastSetup);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {!setups ? <Spinner/> :
        <>
          <Filters items={setups} />
          <SetupsList setups={currentSetups} loading={loading} />
          <Pagination setupsPerPage={setupsPerPage} totalSetups={setups.length} currentPage={currentPage} paginate={paginate} />
        </>
      }
    </>
  );
}

export default Explore;