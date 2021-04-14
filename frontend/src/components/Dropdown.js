const Dropdown = props => {
  let key = 300;
  return ( 
    <div className={`${props.className}`}>
      <label className="block text-sm font-medium text-gray-700">{props.label}</label>
      <select 
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none sm:text-sm"
        id={`${props.id}`}
        name={`${props.name}`}
      >
        {props.options.map(option => {
          return (
            <option key={key = key + 1}>{option}</option>
          );
        })}
      </select>
    </div>
   );
}
 
export default Dropdown;