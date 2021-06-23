const Authentication = () => {
  return (
    <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <p className='mb-6 text-xl font-bold'>Get started </p>
      <div className='flex flex-col items-center justify-center'>
        <a href='/auth/google'>
          <button type="button" className="inline-flex items-center px-4 py-2 mb-2 text-base font-medium text-gray-500 border border-gray-300 rounded-md shadow-sm bg-offwhite hover:border-gray-400 focus:outline-none">
            <svg className="w-5 h-5 mr-3 -ml-1" viewBox="0 0 1152 1152">
              <path d="M1055.994 594.42a559.973 559.973 0 0 0-8.86-99.684h-458.99V683.25h262.28c-11.298 60.918-45.633 112.532-97.248 147.089v122.279h157.501c92.152-84.842 145.317-209.78 145.317-358.198z" fill="#4285f4"></path>
              <path d="M588.144 1070.688c131.583 0 241.9-43.64 322.533-118.07l-157.5-122.28c-43.64 29.241-99.463 46.52-165.033 46.52-126.931 0-234.368-85.728-272.691-200.919H152.636v126.267c80.19 159.273 245 268.482 435.508 268.482z" fill="#34a853"></path>
              <path d="M315.453 675.94a288.113 288.113 0 0 1 0-185.191V364.482H152.636a487.96 487.96 0 0 0 0 437.724z" fill="#fbbc05"></path><path d="M588.144 289.83c71.551 0 135.792 24.589 186.298 72.88l139.78-139.779C829.821 144.291 719.504 96 588.143 96c-190.507 0-355.318 109.21-435.508 268.482L315.453 490.75c38.323-115.19 145.76-200.919 272.691-200.919z" fill="#ea4335"></path>
            </svg>
            Continue with Google
          </button>
        </a>
      </div>
    </div>
  );
}

export default Authentication;