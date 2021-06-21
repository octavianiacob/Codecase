const Pagination = ({ setupsPerPage, totalSetups, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSetups / setupsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='absolute inset-x-0 bottom-0'>
      <div className="flex items-center justify-between px-4 pb-10 border-t border-gray-200 sm:px-0">
        <div className="flex flex-1 w-0 -mt-px">
          <button
            onClick={() => { currentPage > 1 ? paginate(currentPage - 1) : paginate(currentPage) }}
            className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent focus:outline-none hover:text-gray-700 hover:border-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {pageNumbers.map(number => (
            <button
              key={number}
              className={number !== currentPage ?
                'focus:outline-none inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
                :
                'focus:outline-none inline-flex items-center px-4 pt-4 text-sm font-medium text-blue-500 border-t-2 border-blue-500'}
              onClick={() => { paginate(number) }}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="flex justify-end flex-1 w-0 -mt-px">
          <button
            onClick={() => { currentPage < Math.ceil(totalSetups / setupsPerPage) ? paginate(currentPage + 1) : paginate(currentPage) }}
            className="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent focus:outline-none hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Pagination;