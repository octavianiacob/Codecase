import React from 'react';
// import SetupsList from '../components/SetupsList';
// import UserInfo from '../components/UserInfo';
import Card from '../components/Card';

import { useParams, Link } from 'react-router-dom';

const ExpandedSetup = () => {

  const SETUP = {
    id: 's1', title: 'MERN Stack Development Setup', createdOn: 'Mar 20 2021', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz',
    languagesList: [
      {
        title: 'HTML',
        version: '5',
        link: 'https://en.wikipedia.org/wiki/HTML5',
        notes: 'Actually using JSX, which is "syntactic sugar" over JS to make it look like HTML'
      },
      {
        title: 'CSS',
        version: '3',
        link: 'https://en.wikipedia.org/wiki/CSS',
        notes: ''
      },
      {
        title: 'JavaScript',
        version: 'ES2020',
        link: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
        notes: ''
      },
      {
        title: 'ReactJS',
        version: '17.0.2',
        link: 'https://reactjs.org/',
        notes: ''
      },
      {
        title: 'NodeJS',
        version: '15.14.0',
        link: 'https://nodejs.org/',
        notes: ''
      },
      {
        title: 'ExpressJS',
        version: '4.17.1',
        link: 'https://expressjs.com/',
        notes: ''
      },
      {
        title: 'MongoDB',
        version: '4.4.4',
        link: 'https://www.mongodb.com/',
        notes: 'Also using Mongoose'
      },
      {
        title: 'TailwindCSS',
        version: '2.1.0',
        link: 'https://tailwindcss.com/',
        notes: ''
      }
    ],
    toolsList: [
      {
        title: 'VSCode',
        version: '1.55',
        link: 'https://code.visualstudio.com/',
        extensions: 'Live server, Prettier, Headwind, Intellisense',
        settings: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.',
        notes: 'My favorite Code editor'
      },
      {
        title: 'Chrome',
        version: '3',
        link: 'https://en.wikipedia.org/wiki/CSS',
        notes: ''
      },
      {
        title: 'Sizzy',
        version: 'ES2020',
        link: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
        notes: ''
      },
      {
        title: 'GitHub Desktop',
        version: '17.0.2',
        link: 'https://reactjs.org/',
        notes: ''
      },
      {
        title: 'iTerm2',
        version: '15.14.0',
        link: 'https://nodejs.org/',
        notes: ''
      }
    ],
  }
  const setupID = useParams().setupID;
  console.log(setupID);

  return (
    <Card className='m-3 sm:m-10'>
      <SectionHeader>{SETUP.title}</SectionHeader>
      <Summary setup={SETUP} />
      <SectionHeader>Technologies</SectionHeader>
      <LanguagesList setup={SETUP} />
      <LanguageInfo setup={SETUP} />
      <SectionHeader>Tools</SectionHeader>
      <ToolsList setup={SETUP} />
      <ToolsInfo setup={SETUP} />

    </Card>
  );
}

const SectionHeader = props => {
  return (
    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h1 className="mb-3 text-3xl font-medium leading-6 text-gray-900">
        {props.children}
      </h1>
    </div>
  );
}

const Summary = props => {
  return (
    <dl className='mb-10'>
      <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Created by
        </dt>
        <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
          <Link to={`/u/${props.setup.username}`}>
            {props.setup.username}
          </Link>
        </dd>
      </div>

      <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Likes
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {props.setup.likes}
        </dd>
      </div>

      <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Created on
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {props.setup.createdOn}
        </dd>
      </div>

      <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Last updated on:
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {props.setup.lastUpdate}
        </dd>
      </div>

      <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Description
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </dd>
      </div>
    </dl>
  );
}

const LanguagesList = props => {
  let colors = ['bg-red-100', 'bg-yellow-100', 'bg-emerald-100', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-blue-100', 'bg-purple-100']
  return (
    <div className={`py-5 ${props.className}`}>
      {props.setup.languagesList.map(lang => {
        return (
          <button key={lang.title + '-langListItem'} type="button" className={`mx-1 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[Math.floor(Math.random() * colors.length)]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
            {lang.title}
          </button>
        );
      })}
    </div>
  );
}

const LanguageInfo = props => {

  return (
    <div>
      {props.setup.languagesList.map(lang => {
        return (
          <div key={lang.title} className='my-5 overflow-hidden rounded-lg bg-gray-50'>
            <div className='px-4 py-5 sm:p-6'>
              <h2 className='text-xl font-medium leading-6 text-gray-900'>
                {lang.title}
              </h2>
              <dl className='mt-10'>
                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Version
                  </dt>
                  <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {lang.version}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Link
                  </dt>
                  <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                    {lang.link}
                  </dd>
                </div>
                {lang.notes ?
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Notes
                  </dt>
                    <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                      {lang.notes}
                    </dd>
                  </div>
                  : null}
              </dl>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ToolsList = props => {
  let colors = ['bg-red-100', 'bg-yellow-100', 'bg-emerald-100', 'bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-blue-100', 'bg-purple-100']
  return (
    <div className={`py-5 ${props.className}`}>
      {props.setup.languagesList.map(tool => {
        return (
          <button key={tool.title + '-toolListItem'} type="button" className={`mx-1 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-3xl text-blueGray-900 ${colors[Math.floor(Math.random() * colors.length)]} hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
            {tool.title}
          </button>
        );
      })}
    </div>
  );
}

const ToolsInfo = props => {

  return (
    <div>
      {props.setup.toolsList.map(tool => {
        return (
          <div key={tool.title} className='my-5 overflow-hidden rounded-lg bg-gray-50'>
            <div className='px-4 py-5 sm:p-6'>
              <h2 className='text-xl font-medium leading-6 text-gray-900'>
                {tool.title}
              </h2>
              <dl className='mt-10'>
                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Version
                  </dt>
                  <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {tool.version}
                  </dd>
                </div>

                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Link
                  </dt>
                  <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                    {tool.link}
                  </dd>
                </div>

                {tool.extensions ?
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Extensions
                  </dt>
                    <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                      {tool.extensions}
                    </dd>
                  </div>
                  : null}

                {tool.settings ?
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Settings
                  </dt>
                    <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                      {tool.settings}
                    </dd>
                  </div>
                  : null}

                {tool.notes ?
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Notes
                  </dt>
                    <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                      {tool.notes}
                    </dd>
                  </div>
                  : null}
              </dl>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExpandedSetup;