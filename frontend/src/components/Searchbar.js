import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

const Searchbar = () => {

  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const fetchSetups = async () => {
      try {
        setLoading(true);
        const req = await axios.get(`/api/setups`);
        setSetups(req.data.setups);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSetups();
  }, []);

  let setupsOptions = []

  if(setups.length !== 0) {
    setupsOptions = setups.map((setup) => ({ value: setup._id, label: setup.title }));
  }

  const handleChange = selected => {
    setSelected(selected);
    history.push(`/s/${selected?.value}`)
  }

  return (
    <>
      {!loading &&
        <div className='mb-5 sm:mb-0 sm:py-0 md:px-8'>
          <div className="relative">
            <Select
              value={selected}
              onChange={handleChange}
              isSearchable
              isClearable
              options={setupsOptions}
              components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              className='block pl-3 text-base border-gray-300 rounded-md lg:pr-10 sm:w-48 md:w-64 lg:w-80 xl:w-96 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
          </div>
        </div>
      }
    </>

  );
}

export default Searchbar;