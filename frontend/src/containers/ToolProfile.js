import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import SetupsList from '../components/SetupsList';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
import Card from '../components/Card';


const ToolProfile = () => {

  const toolID = useParams().toolID;
  const [tool, setTool] = useState({});
  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [setupsPerPage] = useState(9);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        setLoading(true);
        const req = await axios.get(`/api/tools/${toolID}`);
        setTool(req.data.tool);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTool();
  }, [toolID]);

  useEffect(() => {
    const fetchSetups = async () => {
      try {
        setLoading(true);
        const req = await axios.get(`/api/setups/tool/${toolID}`);
        setSetups(req.data.setups);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSetups();
  }, [toolID]);

  const indexOfLastSetup = currentPage * setupsPerPage;
  const indexOfFirstSetup = indexOfLastSetup - setupsPerPage;
  const currentSetups = setups?.slice(indexOfFirstSetup, indexOfLastSetup);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <>
      {!setups ? <Spinner /> :
        <>
          <ToolInfo tool={tool} />
          <SetupsList setups={currentSetups} loading={loading} />
          <Pagination setupsPerPage={setupsPerPage} totalSetups={setups.length} currentPage={currentPage} paginate={paginate} />
        </>
      }
    </>
  );
}

const ToolInfo = ({ tool }) => {
  return (
    <Card className='m-3 sm:m-0'>
      <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
        <div className="flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap">
          <div className="flex items-center self-start mt-4 ml-4 sm:m-0 sm:self-center">
            <div className="flex-shrink-0">
              <img className="w-16 h-16 rounded-full" src={`${tool.logo}`} alt="" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900 sm:text-xl">
                {tool.title}
              </h3>
              <p className="text-sm text-blue-500 sm:text-md">
                {tool.category}
              </p>
              <p className="text-sm text-gray-500 sm:text-md">
                {tool.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ToolProfile;