import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

const Searchbar = () => {

  const [tools, setTools] = useState([]);
  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const req = await axios.get(`/api/tools`);
        setTools(req.data.tools);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTools();
  }, []);

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

// {/* <div className='px-2 md:px-8'>
//       <div className='relative'>
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//           </svg>
//         </div>
//         <input className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search"></input>
//       </div>
//     </div>
//     } */}