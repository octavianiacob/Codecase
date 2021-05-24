import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SetupsList from '../components/SetupsList';
// import UserInfo from '../components/UserInfo';
import Card from '../components/Card';

import { useParams, Link } from 'react-router-dom';

const ExpandedSetup = () => {
  const setupID = useParams().setupID;
  const [setup, setSetup] = useState(null);

  useEffect(() => {
    const fetchSetup = async () => {
      try {
        const req = await axios.get(`/api/setups/${setupID}`);
        setSetup(req.data.setup);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSetup();
  }, [setupID]);

  return (
    <>
      {setup ?
        <>
          <Summary setup={setup} />
          <ToolsList setup={setup} />
          {setup.tools.map((tool) => {
            return(<Tool key={tool._id} setup={setup} tool={tool}/>)
          })}
        </>
        : null}
    </>
  );
}

const Summary = ({ setup }) => {
  return (
    <Card className='m-3 sm:m-10'>
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h1 className="mb-3 text-3xl font-medium leading-6 text-gray-900">
          {setup.title}
        </h1>
      </div>
      <dl className='mb-10'>
        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Created by
        </dt>
          <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
            <Link to={`/u/${setup.creator._id}`}>
              {setup.creator.username}
            </Link>
          </dd>
        </div>

        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Likes
        </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {setup.likes}
          </dd>
        </div>

        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Created on
        </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {new Date(setup.createdAt).toDateString()}
          </dd>
        </div>

        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Last updated on:
        </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {new Date(setup.updatedAt).toDateString()}
          </dd>
        </div>

        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Description
        </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {setup.description}
          </dd>
        </div>
      </dl>
    </Card>
  );
}

const ToolsList = ({ setup }) => {
  let colors = ['bg-red-100', 'bg-yellow-100', 'bg-emerald-100', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-blue-100', 'bg-purple-100']
  return (
    <>
      <div className='mx-10'>
        <h2 className="text-3xl font-medium leading-6 text-gray-900">Tools and Technologies</h2>
      </div>
      <div className={`mx-10 py-5`}>
        {setup.tools.map(tool => {
          return (
            <button key={tool._id} type="button" className={`mx-1 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[Math.floor(Math.random() * colors.length)]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
              {tool.title}
            </button>
          );
        })}
      </div>
    </>
  );
}

const Tool = ({setup, tool}) => {
  return(
    <div className="m-10 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{tool.title}</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{tool.description}</dd>
          </div>
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Category</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{tool.category}</dd>
          </div>
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Notes</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {setup.notes[setup.tools.indexOf(tool)]}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default ExpandedSetup;