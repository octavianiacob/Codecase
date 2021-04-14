import Card from './Card'
import Dropdown from './Dropdown'

const Filters = props => {
  return ( 
    <Card className='m-3 sm:m-0'>
      <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
        <div className="flex flex-col items-center justify-between -mt-4 -ml-4 sm:flex-row sm:items-center sm:flex-nowrap">
          <h1 className='text-xl font-semibold sm:text-3xl'>All Setups</h1>
          <div className='flex flex-col mt-5 sm:justify-center sm:flex-row sm:mt-0'>
            <Dropdown className='mx-6' label='Using technology' id='technology' name='technology' options={['React', 'Vue']} />
            <Dropdown className='mx-6 mt-5 sm:mt-0' label='Using tools' id='tool' name='tool' options={['VSCode', 'GitHub']} />
            <Dropdown className='mx-6 mt-5 sm:mt-0' label='Sort by' id='date' name='date' options={['Last updated', 'Most likes']} />
          </div>
        </div>
      </div>
    </Card>
   );
}
 
export default Filters;