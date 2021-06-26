import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

const Searchbar = () => {

  const [setups, setSetups] = useState([]);
  const [tools, setTools] = useState([]);
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

  let setupsOptions = [];
  let toolsOptions = [];

  if(setups.length !== 0) {
    setupsOptions = setups.map((setup) => ({ value: setup._id, label: setup.title }));
  }
  if (tools.length !== 0) {
    toolsOptions = tools.map((tool) => ({ value: tool._id, label: tool.title }));
  }

  let groupedOptions = [
    {
      label: "Setups",
      options: setupsOptions
    },
    {
      label: "Tools and Technologies",
      options: toolsOptions
    }
  ];

  const handleChange = selected => {
    setSelected(selected);
    if (setups.filter(e => e.id === selected?.value).length > 0) {
      history.push(`/s/${selected?.value}`);
    }
    else if (tools.filter(e => e.id === selected?.value).length > 0) {
      history.push(`/t/${selected?.value}`);
    }
  }

  const selectStyles = {
    menuList: styles => {
      console.log('menuList:', styles);
      return {
        ...styles,
        maxHeight: 140
      };
    }
  };

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
              options={groupedOptions}
              styles={selectStyles} s
              placeholder="Search..."
              components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              className='block pl-3 text-base border-gray-300 rounded-md lg:pr-10 sm:w-48 md:w-64 lg:w-80 xl:w-96 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
          </div>
        </div>
      }
    </>

  );
}

export default Searchbar;