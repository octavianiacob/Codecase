import { useState, useEffect } from 'react';
import axios from 'axios';

import SetupsList from '../components/SetupsList';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';

const Explore = () => {
  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [setupsPerPage] = useState(9);
  const [sortedSetups, setSortedSetups] = useState([]);
  const [sortType, setSortType] = useState('updatedAt');

  useEffect(() => {
    const fetchSetups = async () => {
      setLoading(true);
      const req = await axios.get('/api/setups/');
      const setups = req.data.setups;
      setSetups(setups);
      setLoading(false);
    };
    fetchSetups();
  }, []);

  useEffect(() => {
    const sortArray = type => {
      let sorted = [];
      if (type === 'updatedAt') {
        sorted = [...setups].sort((a, b) => {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
      }
      else if (type === 'likes') {
        sorted = [...setups].sort((a, b) => {
          return b.likes - a.likes;
        });
      }
      setSortedSetups(sorted);
    };

    sortArray(sortType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, setups]);

  const indexOfLastSetup = currentPage * setupsPerPage;
  const indexOfFirstSetup = indexOfLastSetup - setupsPerPage;
  const currentSetups = sortedSetups.slice(indexOfFirstSetup, indexOfLastSetup);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {!setups ? (
        <Spinner />
      ) : (
        <div className='relative h-full'>
          <Card className='m-3 sm:m-0'>
            <div className='px-4 py-5 bg-white border-b border-gray-200 sm:px-6'>
              <div className='flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap'>
                <h1 className='text-xl font-semibold sm:text-3xl'>All Setups</h1>
                <div className='flex flex-col mt-5 sm:justify-center sm:flex-row sm:mt-0'>
                  <Dropdown
                    className='mx-6 mt-5 sm:mt-0'
                    label='Sort by'
                    id='sort'
                    name='sort'
                    options={[{ text: 'Last Updated', value: 'updatedAt' }, { text: 'Most likes', value: 'likes' }]}
                    onChange={(e) => setSortType(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </Card>
          <SetupsList setups={currentSetups} loading={loading} />
          <Pagination
            setupsPerPage={setupsPerPage}
            totalSetups={setups.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
};

export default Explore;
