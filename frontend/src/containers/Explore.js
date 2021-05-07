import { useState, useEffect } from 'react';
import SetupsList from '../components/SetupsList';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

const Explore = () => {

  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [setupsPerPage] = useState(9);

  useEffect(() => {
    const fetchSetups = async () => {
      setLoading(true);
      const res = await fetch('/api/setups/');
      const data = await res.json();
      setSetups(data.setups);
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
      <Filters items={setups} />
      <SetupsList setups={currentSetups} loading={loading} />
      <Pagination setupsPerPage={setupsPerPage} totalSetups={setups.length} currentPage={currentPage} paginate={paginate} />
    </>
  );
}

export default Explore;