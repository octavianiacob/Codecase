const Card = props => {
  return (
    <div className={`${props.className}`}>
      <div className='flex flex-col h-full overflow-hidden rounded-lg shadow-lg'>
        <div className='flex flex-col justify-between flex-1 px-4 py-6 pt-4 bg-white xl:p-6'>
          <div className='flex-1'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;