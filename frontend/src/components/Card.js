const Card = props => {
  return ( 
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
      <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
        <div className='flex-1'>
          {props.children}
        </div>
      </div>
    </div>
   );
}
 
export default Card;