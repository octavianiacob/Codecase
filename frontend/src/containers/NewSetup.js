import { useState, useEffect } from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUser } from '../slices/userSlice';
import axios from 'axios';
import Select from 'react-select';

const NewSetup = () => {
  const { user } = useSelector(userSelector);
  const dispatch = useDispatch();

  const [tools, setTools] = useState([]);
  const [toolsList, setToolsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState({ value: null, label: null });

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const req = await axios.get(`/api/tools`);
        setTools(req.data.tools);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTools();
  }, [tools]);

  let options = [];

  if (tools.length > 0) {
    options = tools.map((tool) => ({ value: tool._id, label: tool.title, category: tool.category, description: tool.description }));
  }

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const addTool = () => {
    if (selectedOption !== null && !toolsList.includes(selectedOption)) {
      setToolsList(prevTools => [...prevTools, selectedOption]);
    }
  }

  const removeTool = (index) => {
    console.log(toolsList[index]);
    setToolsList(toolsList.filter(item => item !== toolsList[index]));
  }
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          description: '',
          creator: user._id,
          tools: [],
          notes: [],
        }}

        onSubmit={(values) => {
          values.tools = toolsList.map((tool => tool.value));
          axios.post(`/api/setups`, values);
          dispatch(fetchUser());
          window.location.href = '/dashboard';
        }}
      >
        <Form className="max-w-6xl px-5 m-10 mx-auto space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Basic Information</h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                  Provide a short introduction for your setup
                </p>
              </div>
              <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Setup title
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <Field
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Description
                </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <Field as='textarea'
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 divide-y divide-gray-200 sm:pt-10">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Tools and Technologies</h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">Add all apps, tools, programming languages, frameworks and libraries you use in development</p>
              </div>
              <FieldArray name='notes'>
                {({remove}) => (
                  <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                    <div className="pt-3 sm:border-t sm:border-gray-200 sm:pt-5">
                      {toolsList.length < 1 ? null :
                        toolsList.map((tool, index) => (
                          <div key={tool.value} className="my-5 overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="flex justify-between px-4 py-5 sm:px-6">
                              <h3 className="text-lg font-medium leading-6 text-gray-900">{tool.label}</h3>
                              <button 
                                type='button' 
                                onClick={() => {
                                  remove(index);
                                  removeTool(index);
                                }} 
                                className="text-gray-500 hover:text-red-500"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
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
                                  <label className="text-sm font-medium text-gray-500">Notes</label>
                                  <Field as='textarea'
                                    id={`note-${tool.value}`}
                                    name={`notes[${index}]`}
                                    rows={3}
                                    className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </dl>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )}
              </FieldArray>
              
              <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                <div className="pt-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Add a tool or technology
                  </label>
                  <div className="flex items-center mt-3 sm:col-span-2">
                    <Select
                      onChange={handleChange}
                      options={options}
                      className="block w-2/3 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <span className="ml-3">
                      <button
                        onClick={addTool}
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1 -ml-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span>Add</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <a
                href='/dashboard'
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default NewSetup;