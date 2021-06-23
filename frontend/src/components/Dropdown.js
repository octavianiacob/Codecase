const Dropdown = ({id, name, onChange, options, label, className}) => {
  return ( 
    <div className={`${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select 
        className="block w-full py-2 pl-4 pr-8 mt-1 border-gray-300 rounded-md sm:text-sm"
        id={id}
        name={name}
        onChange={onChange}
      >
        {options.map(option => {
          return (
            <option key={option.value} value={option.value} >{option.text}</option>
          );
        })}
      </select>
    </div>
   );
}
 
export default Dropdown;