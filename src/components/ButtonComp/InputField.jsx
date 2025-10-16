const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="flex gap-3 m-2 text-xs">
        <input onChange={handleChange} type="radio" value={value} name={name} className="bg-black" />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;
  